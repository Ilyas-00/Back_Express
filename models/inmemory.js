const Evaluations = require('./qcm');

const evaluations = [
    new Evaluations({ id: 0, auteur: 'Ilyas', nbpoints: 0, nom: 'Test de compétences en mathématiques', sujet: 'Maths', listequestions: [] }),
    new Evaluations({ id: 1, auteur: 'Ilyas', nbpoints: 0, nom: 'Frontend', sujet: 'Angular', listequestions: [] }),
    new Evaluations({ id: 2, auteur: 'Ilyas', nbpoints: 0, nom: 'Backend', sujet: 'Express', listequestions: [] }),
];

const interrogations = [
    new Interrogations({
        id: 0,
        question: "Résolvez l'équation : 3x + 7 = 22",
        reponses: ["5", "4", "6", "3"],
        sujet: "Maths",
        nbpoints: 2
    }),
    new Interrogations({
        id: 1,
        question: 'Trouvez la dérivée de f(x) = x^2 + 3x + 5',
        reponses: ["2x + 3", "3x + 5", "2x + 1", "3x"],
        sujet: "Maths",
        nbpoints: 2
    }),
    new Interrogations({
        id: 2,
        question: "Quels sont les avantages principaux de l'utilisation d'Angular dans le développement frontend ?",
        reponses: ["Architecture MVVM", "Facilité de testabilité", "Injection de dépendances", "Toutes les réponses précédentes"],
        sujet: "Angular",
        nbpoints: 2
    }),
    new Interrogations({
        id: 3,
        question: "Qu'est-ce que middleware dans le contexte d'Express.js ?",
        reponses: ["Une fonction qui manipule la requête et la réponse", "Un logiciel antivirus", "Un framework frontend", "Une base de données"],
        sujet: "Express",
        nbpoints: 2
    }),
    // ... (autres questions)
];

// Ajuster dynamiquement les nbpoints des évaluations et ajouter dynamiquement les questions aux évaluations selon les sujets
for (let i = 0; i < evaluations.length; i++) {
    for (let j = 0; j < interrogations.length; j++) {
        if (evaluations[i].sujet === interrogations[j].sujet) {
            evaluations[i].listequestions.push(interrogations[j]);
            evaluations[i].ajouterPoints(interrogations[j].nbpoints);
        }
    }
}

const remplirEvaluation = (rawObject) => {
    const evaluationEnCours = evaluations[evaluations.length - 1];

    interrogations.forEach((interrogation) => {
        if (interrogation.sujet === rawObject.sujet) {
            evaluationEnCours.listequestions.push(interrogation);
            evaluationEnCours.nbpoints += interrogation.nbpoints;
        }
    });
}

const ajouterEvaluation = (rawObject) => {
    let maxId = 0;
    evaluations.forEach((evaluation) => {
        if (maxId < evaluation.id) {
            maxId = evaluation.id;
        }
    });

    const evaluation = new Evaluations(
        {
            id: maxId + 1,
            auteur: rawObject.auteur,
            nom: rawObject.nom,
            sujet: rawObject.sujet,
            nbpoints: Number(rawObject.nbpoints),
            listequestions: []
        });

    evaluations.push(evaluation);
}

module.exports = { evaluations, ajouterEvaluation, interrogations };
