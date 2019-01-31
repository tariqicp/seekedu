'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const mail = require('./modules/mail');


const app = express();



app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/contact', async(req, res, next) => {

    try {

        const html = `
            <b>Email: </b> ${req.body.email} <br />
            <b>Name: </b> ${req.body.name} <br />
            <b>Phone: </b> ${req.body.phone} <br />
            <b>Comments: </b> ${req.body.comments || ''}
        `;

        await mail(html, `Contact from: ${req.body.email}`);

        res.end();

    } catch (e) {
        res.status(500)
            .end('Fail to send email');
    }

});


app.post('/api/newsletter', async(req, res, next) => {

    try {

        const html = `
            <b>Email: </b> ${req.body.email}  
        `;

        await mail(html, `Newsletter from: ${req.body.email}`);

        res.end();

    } catch (e) {
        res.status(500)
            .end('Fail to send email');
    }

});


app.listen(3000);