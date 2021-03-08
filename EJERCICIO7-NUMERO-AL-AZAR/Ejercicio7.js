let promise = new Promise(function(resolve, reject){
        var aleatorio = Math.floor(Math.random() * 3);
        console.log("El resultado fue: " + aleatorio);
        if(aleatorio > 0){
            resolve("Ejecución correcta!");
        }else{
            reject("Error numero generado 0");
        }    
});
promise.then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){
    console.log(error);
});