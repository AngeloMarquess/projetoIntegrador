const { request, response } = require("express")

const servicosController={

    index: (request, response) => {

        return  response.send ('mostrar servico');

    },

    show: (request, response) => {

        const {nome}= request.params;

        return response.send (`Mostrando os servicos${nome}`);
    }



}
module.exports = servicosController;