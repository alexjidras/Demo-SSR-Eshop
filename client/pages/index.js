import React from 'react';
import Form from './form';
import {Helmet} from "react-helmet";

export default ({gallery}) => (
  <main>
  <Helmet>
  <script type="text/javascript" src="../js/anime.min.js"></script>
  </Helmet>
      <div class="welcome">
        <div class="main-welcome">
          <div class="main-welc">
            <h1>WE WILL BE THE BEST <span class="comp">BRAND</span> SELLER IN MOLODVA</h1>
      </div>
        <img class="bigmodel" src="../img/design/777.png" alt="There is a big boooy"/>
      </div>
      </div>
      <div class="wrapper">
        <div class="main-about">
          <div class="about-left">
            <img class="mw-100" src="../img/design/1nike.png" alt="nikecrasovka"/>
          </div>
          <div class="about-right">
            <h1>SOME WORDS ABOUT OUR PRODUCTS</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
            <ul>
              <li>Mision - <i>We deliver uniqueness and quality</i></li>
              <li>Skills - <i>Delivering fast and excelent</i></li>
              <li>Clients - <i>Satisfied clients thanks to our experience</i></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main-mag">
        <h1>OUR SHOP INCLUDE</h1>
        <div class="line"></div>
        <div class="wrapper">
          <div class="cards">
            <div class="prod-cards">
              <div class="photo"><img src="../img/design/sports-shoose-wear.png"/></div>
              <h4 class="name">Sports shoes</h4>
              <p class="info">barbati|femei</p>
              <p class="info-about">Mai mult de 30 modele</p>
            </div>
            <div class="prod-cards">
              <div class="photo"><img src="../img/design/sports-shorts-wear.png"/></div>
              <h4 class="name">Sportswear style</h4>
              <p class="info">barbati|femei</p>
              <p class="info-about">Mai mult de 45 modele</p>
            </div>
            <div class="prod-cards">
              <div class="photo"><img src="../img/design/classical-wear-t-shirt.png"/></div>
              <h4 class="name">Classic style clothing</h4>
              <p class="info">barbati|femei</p>
              <p class="info-about">Mai mult de 61 modele</p>
            </div>
            <div class="prod-cards">
              <div class="photo"><img src="../img/design/classical-wear-boots.png"/></div>
              <h4 class="name">Classic style shoes</h4>
              <p class="info">barbati|femei</p>
              <p class="info-about">Mai mult de 27 modele</p>
            </div>
          </div>
        </div>
      </div>
      <div class="main-services">
        <div class="wrapper">
          <h1>OUR SERVICES</h1>
          <div class="line"></div>
          <p><i>Cel mai charysmatic magzin online de branduri din Molodva in ultimii 3 ani.Avand o gama larga de produse la cel mai avantajos pret.Cel mai charysmatic magzin online de branduri din Molodva in ultimii 3 ani.Avand o gama larga de produse la cel mai avantajos pret.Cel mai charysmatic magzin online de branduri din Molodva in ultimii 3 ani.Avand o gama larga de produse la cel mai avantajos pret.
          </i></p>

          <div class="services-cards">
            <div class="services-card">
              <img src="../img/design/delivery-service.png" alt=""/>
              <h4>Livrare rapida</h4>
              <p>Livrarea se efectueaza rapid in orice zi a saptamanii.</p>
            </div>
            <div class="services-card">
              <img src="../img/design/chatting-service.png" alt=""/>
              <h4>Suport 24/7</h4>
              <p>Aveti posibilitatea de a fi deserviti la orice ora.</p>
            </div>
            <div class="services-card">
              <img src="../img/design/quality-service.png" alt=""/>
              <h4>Super calitate</h4>
              <p>Calitate maxima a produselor oferite de magazinul nostru.</p>
            </div>
            <div class="services-card">
              <img src="../img/design/price-service.png" alt=""/>
              <h4>Pret avantajos</h4>
              <p>Cel mai avantajos pret la produse din Moldova.</p>
            </div>
          </div>
          </div>
        </div>
      <div class="main-clients">
        <div class="wrapper">
          <h1>SOME OF OUR CLIENTS</h1>
          <div class="line"></div>
          <div class="clients">
            <img src="../img/design/1logo.png" alt=""/>
            <img src="../img/design/2logo.png" alt=""/>
            <img src="../img/design/3logo.png" alt=""/>
            <img src="../img/design/4logo.png" alt=""/>
            <img src="../img/design/5logo.png" alt=""/>
        </div>
        </div>
      </div>
      <div class="main-galery">
        <div class="wrapper">
          <h1>TAKE A LOOK AT OUR GALERY</h1>
          <div class="line"></div>
          <p><i>
              Muuult muuult text Muuult muuult text Muuult muuult text
                Muuult muuult text Muuult muuult text Muuult muuult text
                Muuult muuult text Muuult muuult text Muuult muuult text
                Muuult muuult text Muuult muuult text Muuult muuult text
          </i></p>
          <div class="galery">
          {
            gallery.map((products, i) => (
              <div class={`line${i}`}>
                {products.map((product) => <img style={{height:'250px'}} src={product.images[0]} alt=""/>)}
              </div>
            ))
          }
          </div>
        </div>
      </div>
      <div id="main-testimonials">
        <div class="wrapper">
          <div class="elementsOfDelivery" >
              <div class="blockOfNmbLoop">
                  <div class="numberLoopSection">
                      <input id="weekDelivery" value="0"/>
                  </div>
                  <span>Livrari saptamanale</span>
              </div>
              <div class="blockOfNmbLoop">
                  <div class="numberLoopSection"> 
                      <input id="newModelsLoop" value="0"/>
                  </div>
                  <span>Modele noi lunar</span>
                  
              </div>
              <div class="blockOfNmbLoop">
                    <div class="numberLoopSection">
                        <input id="newClientLoop" value="0"/>
                    </div>
                    <span>Clienti noi anual</span>
              </div>
          </div>
        </div>
      </div>
      <Form/>
    </main>
);
