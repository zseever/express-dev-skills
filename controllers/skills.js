const Skill = require('../models/skills');

module.exports = {
    index,
    show
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index.ejs', { skills});
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show.ejs', { skill });
}