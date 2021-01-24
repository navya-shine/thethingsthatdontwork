
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAyVSVVB6bAa_FUrXzXcPZLVwqL8Jxq5a0",
      authDomain: "kwiter-b5ec3.firebaseapp.com",
      projectId: "kwiter-b5ec3",
      storageBucket: "kwiter-b5ec3.appspot.com",
      messagingSenderId: "642066814400",
      appId: "1:642066814400:web:867baff50878bea343e425"
    };
    firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("username");

    document.getElementById("user_name").innerHTML="Welcome"+username
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({  
                purpose
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "kwitter.html";
}