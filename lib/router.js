import React from 'react';
import Index from '../client/pages/index';
import Products from '../client/pages/products';
import OneProduct from '../client/pages/one';
import About from '../client/pages/about';
import Contacts from '../client/pages/contacts';
import Error from '../client/pages/error';
import Product from './model';
import express from 'express';
import {validId} from './middleware';
import {shuffle} from 'lodash';
import mail from './mail';
const router = express.Router({ mergeParams: true });


router.get('/', (req,res, next) => {
    Product.distinct('categorie').then((categorii) =>
        Promise.all(shuffle(categorii).slice(0,3).map((categorie) => 
            Product.find({categorie}).sort({ $natural: -1 }).limit(4).exec())).then((products) => 
                res.render(<Index gallery={products}/>))).catch((e) => next(e));
});

router.get('/:category', (req,res,next) => {
    Product.distinct('categorie').then((categorii) =>
        !categorii.concat('products').includes(req.params.category)
            ? next('route')
            : Promise.resolve(req.params.category === 'products' 
                ? Promise.all(categorii.map((categorie) => 
                    Product.find({categorie}).sort({ $natural: -1 }).limit(4).exec())).then((products) => [].concat(...products))
                : Product.find({categorie: req.params.category}, null, {limit: 40})
                ).then((products) => 
                    res.render(<Products products={products} categories={categorii}/>))).catch((e) => next(e));
});

router.get('/:category/:id', validId, (req,res,next) => {
    Promise.all([
        Product.findById(req.params.id),
        Product.aggregate([{$match:{_id: { $ne: req.params.id }, 'categorie': req.params.category}}, { $sample:{size: 4}}]).exec()]).then(([product, recommended]) => {
            res.render(<OneProduct product={product} recommended={recommended}/>)}).catch((e) => next(e));
});

router.get('/about', (req,res) => {
    res.render(<About/>);
});

router.get('/contacts', (req,res) => {
    res.render(<Contacts/>);
});

router.use('/mail', mail);

router.use((req, res, next)=> {
    res.render(<Error message={"Pagina nu a fost gasita!"} status={404}/>);
});

router.use((err, req, res, next) => {
    res.render(<Error message={err.message || "Something went wrong!"} status={500}/>);
});

module.exports = router;