const skills = [
    {id:235367, desc: 'Arrow Functions', rating: '8/10'},
    {id:352608, desc: 'Ternary Operators', rating: '9/10' },
    {id:520938, desc: 'DOM Manipulation', rating: '7.5/10'},
    {id:227753, desc: 'Flexbox & Grid', rating: '6/10'}
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