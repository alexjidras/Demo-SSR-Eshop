import mongoose from 'mongoose';
import { pick } from 'lodash';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../client/Layout';

String.prototype.capitalize = function() {return this.replace(/\b\w/g,x=>x.toUpperCase())}

const validId = (req,res,next) => {
    if(mongoose.Types.ObjectId.isValid(req.params.id)) return next();
    next("route");
}

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const renderer =(req, res, next) => {
    res.render = (Page, props) => {   
        let body = renderToStaticMarkup(<Layout Page= {Page} props={props} location={pick(req, ["url", "path", "params", "query"])}/>); 
        let headObj = Helmet.renderStatic();
        const head = Object.keys(headObj).map((key)=> headObj[key].toString()).join('');
          return res.send(`
            <!DOCTYPE html>
            <html>
            <head>${head}</head>
            <body><div id="root">${body}</div></body>
            </html>
          `);
        }
      next();
};



export {validId, random, renderer};