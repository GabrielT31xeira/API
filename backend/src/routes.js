const express = require ('express');

const routes = express.Router();

routes.post('/users',(request, response)=>{
    const params = request.body;

    console.log(params);

    return response.json({
        evento : 'semana omini',
        nome : 'Gabriel Teixeira'
    });
});

modules.exports = routes;