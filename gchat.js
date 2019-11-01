const axios = require('axios');

const THREAD_KEY = 'gchatnotixxx';
const WEBHOOK = 'https://chat.googleapis.com/v1/spaces/AAAAy3Iea1k/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=ltV77nubTqiwfssZWRwlOH6j2zisgXofkcm0vvrxwsA%3D';

const API = `${WEBHOOK}&threadKey=${THREAD_KEY}`;

const send = text=>{
	axios.post(API, { text }).then(({ data })=>{
  	    console.log(data);
	});
};

module.exports = { send };
