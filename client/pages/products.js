import React from 'react';

export default ({ products, categories, params }) => (
    <main id="catalog-products">
        <div id="checkingBar">
            <ul>
                {categories.map((c) => (
                    <li style={params.category === c ? {backgroundColor: "#efefef"} : {}}>
                        <a href={`/${c}`}>{c.capitalize()}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div class="products">
            <div class="products-row">
                {products.map((product) => (
                    <div class="productBlock" >
                        <div class="titleSection">
                        <span>{product.nume}</span> 
                        </div>
                        <div>
                            <img src={product.images[0]} class="image-section" />
                        </div>
                        <div class="price-of-product">
                            <span class="expiredPrice">{product.pretVechi} lei</span>
                            <span class="priceSection">{product.pret} lei</span>
                        </div>
                        <div class="buy-button" >
                            <a href={`/${product.categorie}/${product.id}`}>comanda</a>
                        </div>
                    </div>
                ))}   
            </div>
        </div>
    </main>
);