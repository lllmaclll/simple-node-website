let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// route
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

// config port 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})