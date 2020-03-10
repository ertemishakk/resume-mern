const express = require('express')

const app = express()

app.use(express.json({ extended: false }))


app.get('/download', (req, res) => {
    const file = `${__dirname}/client/src/resume.pdf`
    res.download(file)
    console.log(file)
})


if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})