const TABLA = 'auth '

module.exports = function (injectedStore){

    let store = injectedStore;
    if(!store){
        store = require('../../../store/dummy');
    }

   async function login(username, password){
        const data = await store.query(TABLA, {username})
        if(data.password === password){
            //Generar token;
            return 'TOKEN';
        }else{
            throw new Error('Información invalida');
        }
    }

    // de esta forma el identificador de usuario será igual al identificador de autenticación
    function upsert(data){

    //Creaun id
        const authData = {
            id: data.id,
        }
    //Mira si hay un usuario y lo actualiza
        if(data.username){
            authData.username = data.username;
        }
    //Mira si hay un password y lo actualiza
        if (data.password){
            authData.password = data.password;
        }

        return store.upsert(TABLA, authData)
    }
  //Devuelve la función a base de Datos que lo que devuelve es una promesa
    return{
        upsert,
        login
    }
    };