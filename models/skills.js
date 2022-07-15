const skills = [
    {id:235367, desc: 'Arrow Functions', rating: '8/10'},
    {id:352608, desc: 'Ternary Operators', rating: '9/10' },
    {id:520938, desc: 'DOM Manipulation', rating: '7.5/10'},
    {id:227753, desc: 'Flexbox & Grid', rating: '6/10'}
]

module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteOne
};

function deleteOne(skill) {
    skill = parseInt(skill);
    let idx = skills.findIndex((x) => x.id === skill);
    skills.splice(idx,1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id)
}