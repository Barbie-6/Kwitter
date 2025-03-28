
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

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
firebase_message_id = childkey;
message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "h4" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-danger' id=" + firebase_message_id + "value = " + like + "onclick ='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + Like + "</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
}
)};

getData();

function updateLike(message_id)
{
  console.log("clicked on the like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes
  });
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter.html");
}

