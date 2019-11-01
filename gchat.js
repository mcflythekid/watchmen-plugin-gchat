const axios = require('axios');
const uniqid = require('uniqid');

var WEBHOOK = process.env.WATCHMEN_GCHAT_WEBHOOK;
var THREAD_KEY = 'watchmen';
var API = `${WEBHOOK}&threadKey=${THREAD_KEY}`;

const send = text=>{
	const uuid = uniqid();
	console.log(`request:${uuid}`, text);
	axios.post(API, { text }).then(({ data })=>{
  	    console.log(`response-success:${uuid}`, data);
	}).catch(error=>{
	    console.error(`response-error:${uuid}`, error);
	});
};

module.exports = { send };
