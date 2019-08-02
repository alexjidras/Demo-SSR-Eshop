import React from 'react';

export default ({ product, recommended }) => (
    <main id="product-body">
    <div class="main-product-block">
      <div class="choose-photo">
      {product.images.map((image) => (
        <div class="mini-photo-choose-purpose">
          <img src={image}/>
        </div>
      ))}
      </div>
      <div class="big-photo-choosen">
         <img src={product.images[0]}/>
      </div>
      <div class="description-buy-block">
        <form action="/mail/buy" name="newform" method="post">
          <input type="text" class="product-title" value={product.nume} name="ProductName" readonly="readonly"></input> 
          <div class="pret-produs-one">
            <span class="expiredPrice">{product.pretVechi} lei</span>
            <input type="text" value={product.pret+" lei"} name="Pret" readonly="readonly"></input> 
          </div>
          <div class="check-colors-block">
          {product.hex.map((color) => <label class="color-square">
              <input type="radio" name="Color" required></input>
              <span class="checkmark" style={{backgroundColor: color}} ></span>
            </label>)}
          </div>
          <div class="characteristics-of-product">
            <div class="select-options">
              <select name="Size" required>
                <option value="" disabled selected>SIZE</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
              <select name="Count" required>
                <option value="" disabled selected>COUNT</option>
                <option value="S">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div class="contacts-elements-block">
                <input type="text" name="Name" placeholder="Name" required/> <br />
                <input type="email" name="Email" placeholder="Email Adress" required/> <br />
                <input type="text" name="Phone" placeholder="Phone" required/> <br />
                <input type="text" name="Adress" placeholder="Adress" required></input>
          </div>
          <button type="submit" class="buy-button-form">comanda</button>
        </form>
      <script type="text/javascript" src="../js/forms.js"></script>
      </div>
    </div>
    <div id="some-purpose-products" class="some-purpose-products">
      <span class="purpose-text">Produse asemănătoare</span>
      <div class="body-purpose">
      {recommended.map((product) =>(
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
          <div class="buy-button">
              <a href={`/${product.categorie}/${product._id}`}>cumpara</a>
          </div>
      </div>
      
      ))}
        
      </div>
    </div>
  </main>
  );