const curriculoModel = require('../models/curriculo-model');

exports.getData = () => {
    return curriculoModel;
}

exports.getSubTitleCourse = () => {
    return curriculoModel.subTitleCourse;
}

exports.getSubTitleEducation = () => {
    return curriculoModel.subTitleEducation;
}

exports.getSubTitleContact = () => {
    return curriculoModel.subTitleContact;
}

exports.getContact = () => {
    return curriculoModel.course;
}

exports.getName = () => {
    return curriculoModel.name;
}

exports.getTitle = () => {
    return curriculoModel.title;
}

exports.getProfession = () => {
    return curriculoModel.profession;
}

exports.getDescription = () => {
    return curriculoModel.description;
}

exports.getCourse = () => {
    return curriculoModel.course;
}

exports.getEducation = () => {
    return curriculoModel.education;
}

exports.getSkills = () => {
    return curriculoModel.skills;
}