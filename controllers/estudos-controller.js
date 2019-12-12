const estudosModel = require('../models/estudos-model');

exports.getData = () => {
    return estudosModel;
}

exports.getinfoBoxExercicios = () => {
    return estudosModel.infoBoxExercicios;
}

exports.getinfoBoxAnotacoes = () => {
    return estudosModel.infoBoxAnotacoes;
}

exports.getinfoBoxTutoriais = () => {
    return estudosModel.infoBoxTutoriais;
}

exports.getinfoBoxAulas = () => {
    return estudosModel.infoBoxAulas;
}