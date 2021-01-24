//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAyVSVVB6bAa_FUrXzXcPZLVwqL8Jxq5a0",
      authDomain: "kwiter-b5ec3.firebaseapp.com",
      projectId: "kwiter-b5ec3",
      storageBucket: "kwiter-b5ec3.appspot.com",
      messagingSenderId: "642066814400",
      appId: "1:642066814400:web:867baff50878bea343e425"
    };
    firebase.initializeApp(firebaseConfig);

    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");
    function send()
{
      msg = document.getElementById("msg").nodeValue;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

