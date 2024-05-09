const express = require('express');
const fetchApi = require('./fetchApi.js');
const getData = require('./getData.js');
const app = express();
const port = 3000;

require('dotenv').config();
const regExp = /[a-zA-Z]/g;

app.get('/get-data', (req, res) => {
	res.set('Content-Type', 'text/plain');
	res.set('Content-Type', 'application/json');
	res.set('Accept', 'application/json');

	res.set('Access-Control-Allow-Origin', 'https://tmf-location-v2-c6467981f-5541c0c156e41.webflow.io/');
	res.set('Access-Control-Allow-Credentials', 'true');

	res.set('GET', 'POST', 'OPTIONS');
	const onGetData = async (query) => {
		const data = await getData(query);
		const results = await fetchApi(data);
		res.status(200).json(results);
	};
	onGetData(req.query.query);
});

app.get('/get-google-map', (req, res) => {
	res.send('dash');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
