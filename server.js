const express = require('express')
const validateForm = require('./validateForm')
const keys = require('./config/keys')
const sgMail = require('@sendgrid/mail');


const app = express()

app.use(express.json({ extended: false }))


app.get('/download', (req, res) => {
    const file = `${__dirname}/client/src/resume.pdf`
    res.download(file)
})

app.post('/contact', (req, res) => {
    const { errors, isValid } = validateForm(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    sgMail.setApiKey(keys.sendGridAPI)

    const msg = {
        to: 'ertemishakk@gmail.com',
        from: req.body.email,
        subject: req.body.name + ' has sent you a message with subject: ' + req.body.subject,
        html: `<strong>` + req.body.message + `</strong>`,
    }

    sgMail.send(msg)

    res.json({ success: 'Your message has been sent.' })
})


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})