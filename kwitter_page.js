//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");

      window.location.replace("kwitter.html");
}
