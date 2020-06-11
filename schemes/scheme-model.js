const db = require("../data/db-config.js")

module.exports = {
    find,
    findById,
    findSteps,
    add, 
    update,
    remove
}




function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
    .where({ id })
    .first() 
}

function findSteps(id) {
    return db("steps")
    .join('schemes',
        'schemes.id',
        'steps.scheme_id'
    )
    .select('steps.id', 
        'schemes.scheme_name',
        'steps.step_number',
        'steps.instructions',
    )
    .orderBy('steps.step_number')
    .where('steps.scheme_id', id)
}

function add(schemeData) {
    return db("schemes")
        .insert(schemeData)
}

function update(change, id) {
    return db("schemes")
    .where({ id })
    .update(change)
}

function remove(id){
    return db("schemes")
    .where({ id })
    .del()
}