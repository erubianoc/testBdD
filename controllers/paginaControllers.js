const paginaInicio = (req,res) =>{
    res.render('Inicio' , {
        pagina : "Inicio"
    });
}
 const paginaNosotros = (req,res) =>{
    res.render('Nosotros' ,{
        pagina:"Nosotros"
    });
}
const paginaRegistro = (req,res) =>{
    res.render('Registrate',{
        pagina:"Añade Tu Banco"
    });
}
const paginaRegistraDatos  = (req,res) =>{
    res.render('TusDatos', {
        pagina:"TusDatos"
    });
}
export {paginaInicio,paginaNosotros,paginaRegistro,paginaRegistraDatos}