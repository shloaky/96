var firebaseConfig = {
      apiKey: "AIzaSyAPq8M9DU5lHL4TCvWgORhHV9xepReN1i8",
      authDomain: "kwitter-8ca9a.firebaseapp.com",
      databaseURL: "https://kwitter-8ca9a-default-rtdb.firebaseio.com",
      projectId: "kwitter-8ca9a",
      storageBucket: "kwitter-8ca9a.appspot.com",
      messagingSenderId: "678536961367",
      appId: "1:678536961367:web:7aff752c3777634210f212"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
