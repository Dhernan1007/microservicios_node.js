const db = {
    'user': [
        { 
            id: '1',
            name: 'Darwin',
            phone: 2418718502
        }
    ]
};

async function list(tabla) {
    return db[tabla] || [];
}
async function get(tabla, id) {
    let colectionData = await list(tabla);
    return colectionData.filter( item => item.id === id)[0] || null
}
async function upsert(tabla, data) {

    if (!db[tabla]){
        db[tabla] = [];
    }
    // si no existe la tabla la va a crear
    db[tabla].push(data);

    console.log(db);
}
function remove(tabla, id) {
    return true;
}

async function query(tabla, q){
    let col = await list(tabla);
    let keys = Object.keys(q);
    let key = keys[0]
    return col.filter(item => item[key] === q[key])[0] || null;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query,
};