import fetch from 'node-fetch'
//import {dataID} from '../models/datalink.js'; //SE ELIMINA PERSISTENCIA DE DATOS
import a  from '../models/datoUser.js';
import b from '../models/datoUserdav.js';
import c  from '../models/datoUserscotia.js';
var dataId
var clave
const apyKey='AiX9p2qREH0hziqVvogwmapQlH8W27G7TIGth370e2c8x0hw9FZuMsiWqsu8j1HI';
var url = `https://api.prometeoapi.com/login/`;
const altaCliente = async (req,res)=>{
    const {banco1,user1,pass1} = req.body
    const errores = [];
    const resultadoLogin =[];
    console.log(banco1)
    if (user1.trim() === '') {
        errores.push({mensaje:'el usuario esta vacio'});
    }
    else {
        clave == user1
    }
    if (pass1.trim() === '') {
        errores.push({mensaje:'el password esta vacio'});
    }
    if (typeof  banco1 === 'undefined') {
        errores.push({mensaje:'el banco esta vacio'});
    }

    if (errores.length > 0) {
        res.render  ('Registrate' , {
            pagina:"Registrate",
            errores,
            banco1,
            user1,
            pass1
        })
      
    }
    else {

        try {
            /* SE ELIMINA PERSISTENCIA DE DATOS
            dataID.removeAttribute('id');
            await dataID.create({
                
                user1,
                clave,
                banco1,
                pass1
            })*/
            a.user = user1;
            a.banco= banco1;
            a.pass = pass1
   /*         if (banco1 === 'bcp')
            {
                a.user = user1;
                a.banco= banco1;
                a.pass = pass1
            }
            if (banco1 === 'scotia_pe')
            {
                b.user = user1;
                b.banco= banco1;
                b.pass = pass1
            }
            if (banco1 === 'davivienda')
            {
                c.user = user1;
                c.banco= banco1;
                c.pass = pass1
            }*/
            resultadoLogin.push({mensaje:"Cargado en la BD satisfactoriamente el banco " , banco : banco1})
            res.render  ('Registrate' , {
                pagina:"Registrate",
                errores,
                resultadoLogin,
                banco1,
                user1,
                pass1
            })

        }
        catch (error)
        {
            console.log(error)                   
        }

     }

}



export {altaCliente,dataId}