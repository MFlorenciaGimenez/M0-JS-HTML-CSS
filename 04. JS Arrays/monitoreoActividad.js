// <------- Arreglo de actividades sospechozas -----> modificar el valor de ser necesario
var actividadesSospechozas = [];
var riesgo=['bajo', 'medio', 'alto'];

function agregarActividad(descripcion, nivelRiesgo){
    if (descripcion==="" || nivelRiesgo ===""){
        return "Descripcion o nivel de riesgo no valido"
    }
        if(!riesgo.includes(nivelRiesgo)) {
            return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto"
        }
    actividadesSospechozas.push(`Descripcion: ${descripcion} ,Riesgo - ${nivelRiesgo}`)

    return `Actividad: ${descripcion} con Nivel de riesgo: ${nivelRiesgo} fue agregada con exito`
   
    }        
   
    

function eliminarActividad(indice){
   if (isNaN(indice)){
        return "El indice no es valido, debe ser un numero"
    }
    if (indice<0 || indice>=actividadesSospechozas.length){
        return "El indice no es valido, se encuentra fuera del rango"
    }
        actividadesSospechozas.splice(indice,1)
        return "Actividad eliminada con exito"
}


function filtrarActividadesPorRiesgo(nivelRiesgo){
    if(nivelRiesgo==="") return "Nivel de riesgo no valido"
    if(!riesgo.includes(nivelRiesgo)) return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto"

    let ArrayFiltrado= actividadesSospechozas.filter(function(actividad){
        if(actividad.includes(nivelRiesgo)) return actividad
    })
    if (!ArrayFiltrado.length) return "No hay actividades con este nivel de riesgo"
    else return ArrayFiltrado
}

function generarReporteDeActividades(){
    if(actividadesSospechozas.length===0){
        return "No hay actividades para mostrar"
    }
    let nuevoArr=[];
    for(let i=0; i<actividadesSospechozas.length; i++){
       nuevoArr.push( `Id: ${i} ${actividadesSospechozas[i]}`)
    }
    return nuevoArr
    
    }
        
    

    
    


// <------- NO TOCAR -------->
module.exports = {
  agregarActividad,
  eliminarActividad,
  filtrarActividadesPorRiesgo,
  generarReporteDeActividades
}




