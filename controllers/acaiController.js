const { request, response } = require("express");

const acaiController  = {

index: (request, response) => {

     return response.send('<h1>acaiController ta funcionando</h1>');


},

show: (request, response) => {
  //  console.log(request.params);
    const {nome} = request.params;

    return response.send(`exibindo detalhes do acai ${nome}`);
}

}

module.exports=acaiController;