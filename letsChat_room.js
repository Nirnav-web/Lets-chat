var firebaseConfig = {
    apiKey: "AIzaSyDGgCthFn68cp1y4zmLlIu05csxMUTiE8w",
    authDomain: "lets-chat-2dccf.firebaseapp.com",
    projectId: "lets-chat-2dccf",
    storageBucket: "lets-chat-2dccf.appspot.com",
    messagingSenderId: "992514486757",
    appId: "1:992514486757:web:d5ed7bf2289d678143ff0c",
    measurementId: "G-PL60DSDHSB"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"add username"
    });
    localStorage.setItem("room_name",room_name);
    window.location="letsChat_room.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_names"+Room_names);
       row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML=row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="letsChat_room.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}