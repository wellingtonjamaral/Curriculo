const data = {
    title: 'Meu currículo',
    name: 'Leonardo Costa e Paula',
    objective: 'Objetivo',
    description: 'Meu objetivo no momento é conseguir estabilidade financeira, para poder ajudar minha família e juntar dinheiro para fazer uma faculdade, e acredito que alcançarei os meus objetivos conforme o meu bom desempenho. Tendo isto em mente pretendo me esforçar todos os dias, porque acredito que este seja o meu primeiro passo para a conquista do sucesso profissional.',
    subTitleCourse: 'Cursos',
    subTitleContact: 'Contato',
    subTitleSkills: 'Conhecimentos',
    subTitleLinguages: 'Idiomas',
    contact: [{
        email: 'E-Mail: leocosta.black@gmail.com',
        cellPhone: 'Celular: (11) 9872-56815'
    }],
    skills: ['Lógica', 'JavaScript', 'NodeJs', 'ExpressJs', 'Git', 'GitHub', 'HTML', 'CSS'],
    linguages: [{
        linguage: 'Inglês',
        level: 'Leitura (intermediario)'
    }],
    course: [{
        skill: 'Desenvolvimento Full Stack JavaScript',
        institution: 'Instituição: Tecnogueto',
        finishedIn: 'Concluído em: Em progresso'
    },
    {
        skill: 'Administração',
        institution: 'Instituição: Torricelli',
        finishedIn: 'Concluído em: 2012'
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
        skill: 'Web Design',
        institution: 'Instituição: All Net – Núcleo de Formação Profissional',
        finishedIn: 'Concluído em: 2009'
    }],
    subTitleEducation: 'Escolaridade',
    education: [{
        description: '2º Grau Completo',
        institution: 'Escola: Escola Estadual Maestro João Carlos Martins',
        finishedIn: 'Concluído em: Dezembro de 2012'
    }],
    subTitleAdress: 'Endereço',
    adress: [{
        locate: 'Aruja - SP',
        street: 'Rua: Estr. dos Fernandes, 1574',
        bairro: 'Bairro: Mirante do Arujá',
        CEP: 'CEP: 07404-020'
    }]
}

module.exports = data;