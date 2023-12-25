const { examens, ajouterExamen } = require('../models/memoire');

const afficherExamens = (req, res) => {
    for (let examen of examens) {
        // console.log(`${examen.nbPoints}: ${typeof(examen.nbPoints)}`);
    }
    res.render('examens', { examens });
};

const afficherExamenDetaille = (req, res) => {
    let id = Number(req.params.examenId);
    const examen = examens.find((element) => element.id === id);
    if (!examen) {
        return res.status(404).send('Examen non trouvé');
    }
    res.render('examen', { examen });
}

const afficherExamenJson = (req, res) => {
    res.json({ examens });
}

const afficherFormulaireExamen = (req, res) => {
    res.render('nouvelexamen');
};

const creerNouveauFormulaire = (req, res) => {
    console.log(req.body);
    ajouterExamen({
        nom: req.body.nom,
        matiere: req.body.matiere,
        nbPoints: req.body.nbPoints
    });
    res.redirect('/examens');
};

const afficherFormulaireAjoutQuestion = (req, res) => {
    const examenId = Number(req.params.examenId);
    const examen = examens.find((element) => element.id === examenId);
    res.render('nouvellequestion', { examen });
};
