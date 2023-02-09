function Login(){
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) =>{
     let user = userCredential.user;

window.alert("Login sucessfull")
localStorage.setItem("user",user.uid)
window.location.href="./home.html"
    })

}