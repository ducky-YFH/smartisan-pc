const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }))

// 引入客户端路由
const home = require('./routers/api/client/home')


// 使用routers
app.use('/api', home);


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})

