const Skill = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function deleteSkill(req, res) {
    console.log(req.params.id);
    const skill = req.params.id;
    Skill.delete(skill);
    res.redirect('/skills');
}

function create(req, res) {
    const skill = req.body
    Skill.create(skill);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new.ejs')
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index.ejs', { skills });
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show.ejs', { skill });
}