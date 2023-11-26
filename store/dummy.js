const db = {
    'user': [
        { 
            id: 1,
            name: 'Darwin',
            phone: 2418718502
        }
    ]
};

async function list(tabla) {
    return db[tabla];
}
async function get(tabla, id) {
    let colectionData = await list(tabla);
    return colectionData.filter( item => item.id === id)[0] || null
}
async function upsert(tabla, data) {
    db[colection].push(data)
}
function remove(tabla, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};