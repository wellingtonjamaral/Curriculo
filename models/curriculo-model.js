const data = {
    title: 'Meu currículo',
    name: 'Leonardo Costa e Paula',
    profession: 'Software Engineer',
    description: 'Experiência em desenvolvimento de single page applications com JavaScript e frameworks JavaScript (já trabalhei com Angular e React), module bundlers, package managers, transpilers (como Babel), pre processadores CSS (Sass e Stylus), task managers, arquitetura CSS (como BEM e SMACSS), Git, SEO, acessibilidade e usabilidade.',
    subTitleCourse: 'Cursos',
    /* add */
    subTitleContact: 'Contato',
    contact: [{
        email: 'E-Mail: leocosta.black@gmail.com',
        cellPhone: 'Celular: (11) 9872-56815'
    }],
    /* ###### */
    course: [{
        skill: 'Web Design',
        institution: 'Instituição: All Net – Núcleo de Formação Profissional',
        finishedIn: 'Concluído em: 2009'
    },
    {
        skill: 'Game Design, Modelagem de Personagens, Design de Ambientes e Criação de Games',
        institution: 'Instituição: All Net – Núcleo de Formação Profissional',
        finishedIn: 'Concluído em: 2011'
    },
    {
        skill: 'Hardware, Analista de Suporte Técnico',
        institution: 'Instituição: All Net – Núcleo de Formação Profissional',
        finishedIn: 'Concluído em: 2011'
    },
    {
        skill: 'Administração',
        institution: 'Instituição: Torricelli',
        finishedIn: 'Concluído em: 2012'
    }],
    subTitleEducation: 'Escolaridade',
    education: [{
        institution: 'Escola: E. E. Residencial Jardim Bambi',
        description: '3º Grau Completo',
        finishedIn: 'Concluído em: Dezembro de 2012'
    }],
    skills: ['backend', 'frontend', 'infra', 'mobile']
}

module.exports = data;