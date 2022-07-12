const skills = [
    {id:235367, desc: 'Arrow Functions'},
    {id:352608, desc: 'Ternary Operators'},
    {id:520938, desc: 'DOM Manipulation'},
    {id:227753, desc: 'Flexbox & Grid'}
]

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id)
}