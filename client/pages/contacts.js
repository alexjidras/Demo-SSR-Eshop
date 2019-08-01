import React from 'react';
import Form from './form';

export default () => (
<main>
    <article class="contacts-links">
      <h1>Contacts</h1>
      <div class="contacts-file-row">
        <a href="https://www.facebook.com/" target="_blank"><img src="../img/design/facebook-rectangle.jpg"/></a>
        <a href="https://www.instagram.com/" target="_blank"><img src="../img/design/instagram-rectangle.jpg"/></a>
        <a href="https://www.google.com/" target="_blank"><img src="../img/design/google-rectangle.jpg"/></a>
      </div>
    </article>
    <Form/>
</main>
);
