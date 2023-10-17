var user = firebase.auth().currentUser;

user.updateProfile({
    displayName: "Jane Q. User",
    photoURL: ""
}).then(function(){
   //Update successful.  
})

// PARA serrar
var user = firebase.auth().currentUser;

user.delete().then(function(){
    //user delete.
}).catch(function(error){
    //An error happend
});

//actualizar el correo

var user = firebase.auth().currentUser;

user.updateEmail("user@example.com").then(function(){
    //Update succesful
}).catch(function(error){
 //An error succesful
});

//descargar paquete auth:export
//firebase autch:export account_file --format=file_format

