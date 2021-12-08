require("dotenv").config({ path: "backend/config/config.env"});
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const {createProxyMiddleware} = require("http-proxy-middleware"); 

const productRoutes = require('./routes/product.routes');

const connectDB = require('./config/db');
connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

app.use("/", (req, res) => {
  res.json({ message: "API is running ..."});
});

app.use('/',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
  })
);

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

process.on("unhandledRejection", err => {
  console.log(`Error: ${error.message}`);

  server.close(() => {
    process.exit(1);
  })
})