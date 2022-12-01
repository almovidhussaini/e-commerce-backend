const express = require('express');
const productRoutes = require('./Pages/Routes/Productrouter')
const userroute = require('./Pages/Routes/Userroute')
const cartrouter= require('./Pages/Routes/cartrouter')
const dotenv = require('dotenv').config()
const connectdb= require('./db')

const path = require('path')




connectdb()
const app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname+"/build")))
app.get("*",function(_,res){
    res.sendFile(
        path.join(__dirname,"./build/index.html"),
        function(err){
            res.send(500).send(err);
        }
    );
} )
app.get('/', (req, res) => {
    res.send('A simple Node App is '
        + 'running on this server')
    res.end()
})

app.use('/product',productRoutes);
app.use('/user',userroute);
app.use('/cart',cartrouter)

const PORT = process.env.PORT ||5000;
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
