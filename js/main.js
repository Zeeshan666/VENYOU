

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDS93LT_lLz1GymLkqlwOdQCSOMvlAmNvA",
    authDomain: "venyou-5eb57.firebaseapp.com",
    databaseURL: "https://venyou-5eb57.firebaseio.com",
    projectId: "venyou-5eb57",
    storageBucket: "venyou-5eb57.appspot.com",
    messagingSenderId: "461304424936"
  };
  firebase.initializeApp(config);


//messageref to initialize
var messagesRef = firebase.database().ref("messages");



///get id 
document.getElementById("form").addEventListener('click',submitted)
function submitted(e){
    e.preventDefault()
    console.log("hi")
    var name =document.getElementById("name").value;
    console.log("name")

  var Email =document.getElementById("Email").value
    var Phone=document.getElementById("Phone").value;
    var Enter_Message =document.getElementById("Enter_Message").value;
 
   

saveMessages(name,Email,Phone,Enter_Message);
console.log(name+"hi")
console.log(Email+"hi")
    if(name !="" )
    {
      swal({
        title: "Good job!",
        text: "will contact you!",
        icon: "success",
        button: "Take care!",
      
      }) 
      
    }
  else{

    swal({
      title: "SORRY",
      text: "Plz fill the form!",
      icon: "error",
    }) 
    
  }



}


function saveMessages(name,Email,Enter_Message,Phone){
    var newmessagesRef=messagesRef.push();
    newmessagesRef.set({
        name:name,
        email:Email,
       Enter_Message: Enter_Message,
       Phone:Phone,
    })

}

