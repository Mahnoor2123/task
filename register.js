function Register(){
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userCredential =>{
        let user = userCredential.user;
        db.collection ("user").doc(user.uid).set({
            name:name,
            email:email,
            uid:user.uid,
        })
        .then(() =>{
         window.alert("registered");
         window.location.href="./Login.html"
        }
        
        )
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(error.message);
            // ..
          });
    }))


}