const { request, response } = require("express");

const institucionalController = {
index: (request, response) => {

return response.render('index' , {titulo:'Home' });

},

sobre: (request, response)=> {
    return response.render('sobre', {titulo:'sobre'});
},

contato: (request, response)=> {
    return response.render('contato', {titulo:'contato'});

},

servicos:(request, response)=> {
    return response.render('contato', {titulo:'contato'});

},

login:(request, response)=> {
    return response.render('login', {titulo:'login'});
}

}



module.exports =institucionalController;