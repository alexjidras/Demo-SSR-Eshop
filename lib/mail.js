const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAIL_TO } = process.env;
import multer from 'multer';
const router = require("express").Router({mergeParams: true}),
    mailgun = require('mailgun-js')({apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN});

router.post('/:route(buy|contact)', multer().any(), (req, res, next) => {
	mailgun.messages().send({
			from: 'no-reply@OnlineShop.com',
			to: MAIL_TO,
			subject: `New ${req.params.route === 'buy' ? 'Order' : 'Message'}`,
			text: Object.keys(req.body).reduce((acc, key) => acc.concat(`${key}: ${req.body[key]}\n`), '')
		}, (error, body) => {
		if(error) {
			console.error(error);
			return res.status(400).end();
		}
		res.status(200).send();
	});

});

export default router;