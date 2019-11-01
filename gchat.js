const axios = require('axios');
const uniqid = require('uniqid');

const WEBHOOK = process.env.WATCHMEN_GCHAT_WEBHOOK;
const THREAD_KEY = 'watchmen';
const API = `${WEBHOOK}&threadKey=${THREAD_KEY}`;

const send = text=>{
	const uuid = uniqid();
	console.log(`request:${uuid}`, text);
	axios.post(API, { text }).then(({ data })=>{
  	    console.log(`response-success:${uuid}`, data);
	}).catch(error=>{
	    console.error(`response-error:${uuid}`, data);
	});
};

module.exports = { send };
