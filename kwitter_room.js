  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA15KPvDDIGPExGmyHBeI1BTd5eOfQP_a0",
    authDomain: "kwitter-7017f.firebaseapp.com",
    databaseURL: "https://kwitter-7017f-default-rtdb.firebaseio.com",
    projectId: "kwitter-7017f",
    storageBucket: "kwitter-7017f.appspot.com",
    messagingSenderId: "680301630858",
    appId: "1:680301630858:web:c67a6a466436de75fba473",
    measurementId: "G-FZ6Z26D6S2"
  };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}



function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


