// <----- NO TOCAR ------->
const { perfiles } = require("../build/js/perfiles.js")

var asistente = {
    verPerfiles: function(opcion){
        if(opcion==="todo") return perfiles
        if(opcion==="nombre") return perfiles.map((perfiles)=>perfiles.usuario)
        if(opcion==="codigo") return perfiles.map((perfiles)=>perfiles.codigo)
        if(opcion==="nivel") return perfiles.map((perfiles)=>perfiles.nivel_de_autorizacion)
        if(opcion==="antiguedad") return perfiles.map((perfiles)=>perfiles.antiguedad)
    },
    
   verPerfilesPorAntiguedad: function(){

        let NuevoArray=[]

        for(let i=0; i<perfiles.length; i++){
            NuevoArray.push(perfiles[i])
        }

        return NuevoArray.sort(function(primero, segundo ){
            return segundo.antiguedad - primero.antiguedad;
        })

        
        
    },

    verAdministradores: function(){
        return  perfiles.filter((admin)=> admin.nivel_de_autorizacion==="admin" )
        
    },

    modificarAcceso: function(usuario, codigo){
        let encontrado= perfiles.find((perfil)=> perfil.usuario===usuario ) 
        if (!encontrado) return "usuario no encontrado"

        if(codigo.length !==4 || isNaN(codigo)) return "codigo de acceso invalido, debe contener solo 4 numeros"          
        
        encontrado.codigo = codigo 
        return "codigo de acceso modificado"

        
        
    }
}

// <----- NO TOCAR ------->
module.exports = {
    asistente
}