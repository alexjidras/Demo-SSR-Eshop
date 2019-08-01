import React from 'react';

export default () => (
    <section class="contact-form">
        <div class="contact-wrapper">
            <h1>CONTACT US JUST NOW</h1>
            <div class="line"></div>
            <p>Triminte-ne un mesaj!</p>
            <form action="/mail/contact" name="newform" method="post">
            <div class="form-imputs">
                <p>Name<span class="red">*</span><br/><input name="Name" type="text" required/></p>
                <p>Email Adress<span class="red">*</span><input name="Email" type="email" required/></p>
            </div>
            <p>Message<span class="red">*</span></p>
            <textarea name="Message" required></textarea>
            <div class="button-block">
                <input type="submit" value="Send"/>
            </div>
            </form>
        </div>
        <script type="text/javascript" src="../js/forms.js"></script>
        </section>
);