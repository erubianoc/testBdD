import fetch from 'node-fetch'
import a  from '../models/datoUser.js';
const movimientos = [];
const errores = [];
const apyKey='AiX9p2qREH0hziqVvogwmapQlH8W27G7TIGth370e2c8x0hw9FZuMsiWqsu8j1HI';
const datosMovi = async  (req,res)=>{

    console.log("llegue a movimiento" , a.banco)
    console.log("llegue a movimiento con esta clave" , a.clave)
    datoCOP = consumoServicio(a.id,a.clave,"COP");
    datoPEN = consumoServicio(a.id,a.clave,"PEN");
    datoUSD = consumoServicio(a.id,a.clave,"USD");
    if (movimientos.length > 0 )
    {
        res.render('Movimientos', {
            pagina:"Movimientos",
            datoCOP,
            datoPEN,
            datoUSD,
            errores,
            });
    }
    else
    {
        res.render('Movimientos' ,{
            pagina:"Movimientos",
            errores
        })
    }
    try
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
        }

}

async function  consumoServicio  (id , clave , moneda ) 
{
    try{
        var url = `https://api.prometeoapi.com/account/${id}/movement/?key=${clave}&currency=${moneda}&date_start=01%2F09%2F2021&date_end=30%2F09%2F2021`;  
        const rta = await fetch (url,{
            method:'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-API-Key' : apyKey
            }                    
        })
        const dato = await rta.json() 
        console.log("en movimientos" ,dato);
        if (dato.status == 'success') {    
            movimientos.push(dato)
            return dato;
        }
        else {
            errores.push({mensaje:`error al consultar  la  API ha devuelto el siguiente error  ${dato.message} `});
            
        }
    }
    catch (error){
        console.log(error)
    }
}
export {datosMovi}
