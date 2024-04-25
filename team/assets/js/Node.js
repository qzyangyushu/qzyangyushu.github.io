const express = require('express');
const app = express();

// 允许所有域名进行访问
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

// 其他路由处理代码...

app.listen(3000, function() {
    console.log('Server running on port 3000');
});