import express from 'express';
import router from './routes/index.js';
//import db from './confg/db.js'

const app = express();
/* LA BASE DE DATOS NO VA PARA LA CARGA EN EL HISTONG GRATUITOS
db.authenticate()
    .then(()=> console.log('db connect'))
    .catch(error=> console.log(error))
*/
const port =  40000;


app.set('view engine', 'pug')
app.use((req,res,next) => {
    const year = new Date();    
    res.locals.actualYear = year.getFullYear();
    return next();
})


app.use(express.urlencoded({extended:true}))
app.use (express.static('public'))
app.use('/' ,router)

app.listen(port, () => 
{console.log(`servidor escuchando por el puerto ${port}`)
})