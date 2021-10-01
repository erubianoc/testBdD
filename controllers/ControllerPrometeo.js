
import fetch from 'node-fetch'
import { dataID } from "../models/datalink.js";
import a  from '../models/datoUser.js';

const datosCuenta = async (req,res)=>{
    const apyKey='AiX9p2qREH0hziqVvogwmapQlH8W27G7TIGth370e2c8x0hw9FZuMsiWqsu8j1HI';
    console.log("Funciono" , a.banco)
    try {
        dataID.removeAttribute('id');
        //const datoURL = await dataID.findAll()
        //setTimeout(() => {console.log("this is the first message")}, 10000);
        //console.log("Data De Mysq",datoURL.banco1)
        try {
            const errores = [];
            
            dataID.removeAttribute('id');
            url = `https://api.prometeoapi.com/login/`;     
            const rta = await fetch (url,{
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'X-API-Key' : apyKey
                    },body: new URLSearchParams({
                        'provider': a.banco,
                        'username': a.user,
                        'password': a.pass
                    })
                    
                 })
            const datoLogin = await rta.json() 
            
            if (datoLogin.status == 'logged_in') {    
                const resultadoLogin = [];
                resultadoLogin.push ({mensaje:'login satisfactorio' , banco:`para el banco ${a.banco}`}) 
                    // Llamo account 
                    a.clave = datoLogin.key;
                    console.log(a.clave)
                    const resultadoLogin1 = [];
                    const errores = [];
                    try{
                        //dataID.removeAttribute('id');
                        //const datoURL = await dataID.findAll()
                        //console.log("Data De Mysq",datoURL)
                            var url = `https://api.prometeoapi.com/account/?key=${a.clave}`;  
                            const rta = await fetch (url,{
                                method:'GET',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                    'X-API-Key' : apyKey
                                }                    
                            })
                            const dato = await rta.json() 
                            console.log(dato);
                            if (dato.status == 'success') {    
                                var labels1 = dato.accounts.map(function (e){
                                    return e.name
                                })
                                var data1 = dato.accounts.map(function (e){
                                    return e.balance
                                })
                                a.id = dato.accounts.number
                                a.moneda = dato.accounts.currency
                                console.log(a.moneda)
                                res.render('TusDatos', {
                                    pagina:"TusDatos",
                                    dato,
                                    errores,
                                    labels1,
                                    data1
                                    });
                               /* try
                                {
                                         //cierro sesion 
                                    var url1 = `https://api.prometeoapi.com/logout/?key=${a.clave}`;  
                                    const rta1 = await fetch (url1,{
                                        method:'GET',
                                        headers: {
                                            'Content-Type': 'application/x-www-form-urlencoded',
                                            'X-API-Key' : apyKey
                                        }                    
                                    })
                                    const dato1 = await rta1.json() 
     
                                }
                                catch (error)
                                {
                                    console.log(error)
                                }*/
                                
                            }
                            else {
                                errores.push({mensaje:`error al consultar  la  API ha devuelto el siguiente error  ${dato.message} `});
                                res.render('TusDatos' ,{
                                    pagina:"TusDatos",
                                    errores
                                })
                            }
                        }
                        catch (error){
                            console.log(error)
                        }
                        //dato = JSON.parse(datoURL);
                        /*console.log(datoURL)
                        res.render('TusDatos', {
                            pagina:"TusDatos",
                            datoURL,
                            errores
                            });*/
            }
            else {
                errores.push({mensaje:`error al login para el Banco ${a.banco} con el siguiente error ${datoLogin.status}`});
                res.render('TusDatos' ,{
                    pagina:"TusDatos",
                    errores
                })
                console.log("error en login" , datoLogin.message)
            }
        }
        catch (error){
            console.log(error)
        }
        
    }
    catch (error){
        console.log(error)
    }

}
export {datosCuenta}
