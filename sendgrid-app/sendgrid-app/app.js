/*
    Contact Form 'Send' API
    
    usage: API endpoint for processing 'post' data submitted via an HTML contact form and
    sending an email, using SendGrid, nodeJS & Express

    REF: https://github.com/sendgrid/sendgrid-nodejs

*/

// DEPENDENCIES
const express = require('express');  // Server
const bodyParser = require('body-parser');  // module for parsing POST request (REF: https://expressjs.com/en/resources/middleware/body-parser.html)
const sgMail = require('@sendgrid/mail');  // Import SendGrid mail module from node

// Pull in SendGrid API key from local ENV variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();

// Display index.html from the root URL
app.get('/', (request, response) =>  response.sendFile(`${__dirname}/index.html`));

// SEND EMAIL WITH CONTACT FORM DATA
var SAMPLE_TO_EMAIL = '';
var SAMPLE_FROM_EMAIL = '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/send', (req, res) => {
    const postBody = req.body;
    console.log("postBody: ", postBody);

    // Define placeholder variables for email message in plain text and html formats
    var msgTxt = "";
    var msgHtml = "";

    // Get email data
    if(postBody.name) {
        msgTxt += 'Name: ' +postBody.name +'\n';
        msgHtml += '<strong>Name</strong>: ' +postBody.name+ '<br/><br/>';
    }

    if(postBody.email) {
        msgTxt += 'Email: ' +postBody.email +'\n';
        msgHtml += '<strong>Email</strong>: ' +postBody.email+ '<br/><br/>';
    }

    if(postBody.phone) {
        msgTxt += 'Phone: ' +postBody.phone +'\n';
        msgHtml += '<strong>Phone</strong>: ' +postBody.phone+ '<br/><br/>';
    }

    if(postBody.message) {
        msgTxt += 'Message: \n' +postBody.message +'\n';
        msgHtml += '<strong>Message</strong>:<br/><p>' +postBody.message+ '</p>';
    }

    // Store email data to an object for sending via SendGrid
    const emailData = {
        to: SAMPLE_TO_EMAIL,
        from: SAMPLE_FROM_EMAIL,
        // This could be used to send form from contact's email, but not recommeded due to potentially triggering spam flag
        //from: (postBody.email) ? postBody.email : SAMPLE_FROM_EMAIL,
        subject: (postBody.subject) ? postBody.subject : 'New Website Contact Form Message',
        text: msgTxt,
        html: msgHtml,
    };

    console.log("emailData:", emailData);

    // Send email with user's submitted data
    sgMail
        .send(emailData)
        .then(() => { res.status(200).send('Success!').end();})
        .catch(e => {
            console.error(e.toString());
            res.status(500).end();
        });
});

// Start the server (look for a specific port in local ENV variables; if none, set to 8080)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});



/*
 *   ADDITIONAL EXAMPLES
 *
*/

// EXAMPLE: Extract data from form with node & Express and log to console
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/data', (req, res) => {
  const postBody = req.body;
  console.log(postBody);
  res.send('Form successfully submitted!');
});

// EXAMPLE: SEND EMAIL with SendGrid (not hooked into form)
// var SAMPLE_TO_EMAIL = 'luciano.gina@gmail.com';
// var SAMPLE_FROM_EMAIL = 'gina@mobiusinno.com';

// API 'send' request
app.get('/send', (req, res) => {
    const {query: {to = SAMPLE_TO_EMAIL, from = SAMPLE_FROM_EMAIL}} = req;
    // other options could be customized further

    const msg = {
        to,
        from,
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>Hello Email app</strong>',
    };

    sgMail
        .send(msg)
        .then(() => { res.status(200).send('Success!').end();})
        .catch(e => {
            console.error(e.toString());
            res.status(500).end();
        });
});