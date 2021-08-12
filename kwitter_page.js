//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDRZ3RVimDMKFv6sRCXwKtDVTfeQn6wMS4",
      authDomain: "practice-94-a1b37.firebaseapp.com",
      databaseURL: "https://practice-94-a1b37-default-rtdb.firebaseio.com",
      projectId: "practice-94-a1b37",
      storageBucket: "practice-94-a1b37.appspot.com",
      messagingSenderId: "774865928023",
      appId: "1:774865928023:web:90b6e51cc1d540b2a64812"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function send() 
{ msg = document.getElementById("Message").value; 
firebase.database().ref(room_name).push({
       name:user_name,
        message:msg, 
        like:0 
      });
          document.getElementById("Message").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
