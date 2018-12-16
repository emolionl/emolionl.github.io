// Initialize Firebase
var config = {
    apiKey: "AIzaSyC3j_shehFiJbFVo9eg4AfUEoesr3uEPBE",
    authDomain: "emolio-nl.firebaseapp.com",
    databaseURL: "https://emolio-nl.firebaseio.com",
    projectId: "emolio-nl",
    storageBucket: "emolio-nl.appspot.com",
    messagingSenderId: "619699037685"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log('logged in');
    $(function() { //shorthand document.ready function
      $('#contactForm').hide();
      $('#loginDropdown').show();
      $('#downloadRapportButton').show();
    });
    // ...
  } else {
    // User is signed out.
    // ...
    console.log('logged out');
    $(function() { //shorthand document.ready function
      $('#contactForm').show();
      $('#downloadRapportButton').hide();
      
    });
  }
});

$(function(){
  $( "#logout" ).click(function() {
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
      location.reload();
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  });
  
});

 
var messagesRef = firebase.database().ref('signups');

function saveToFirebase(name, email){
    var newmessagesRef = messagesRef.push();
    newmessagesRef.set({
        name: name,
        email: email
    });
 }
 $(function() { //shorthand document.ready function

    $("#vraagOpnieuwWachtwoord").click(function() {
      var forgotPassEmail = $("#forgotPassEmail").val();
      firebase.auth().sendPasswordResetEmail(forgotPassEmail)
      .then(function() {
        // Password reset email sent.
        console.log("sendPasswordResetEmail");
        console.log(error);
        console.log(error.code);

        $("#wachtwoordVergeten").hide();
        $("#wachtwoordVerzonden").show();
        $("#wachtwoordError").hide();
        
      })
      .catch(function(error) {
        console.log(error);
        $("#wachtwoordVergeten").hide();
        $("#wachtwoordVerzonden").show();
        $("#wachtwoordError").hide();
        // Error occurred. Inspect error.code.
      });
    });
    $('#contactForm').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        var data = $("#contactForm :input").serializeArray();
        console.log(data[0].value);
        console.log(data[1].value);
        console.log(data[2].value);
        firebase.auth().createUserWithEmailAndPassword(data[1].value, data[2].value).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log(errorMessage);
          console.log(errorCode);

          

          if(errorCode == "auth/email-already-in-use"){
            firebase.auth().signInWithEmailAndPassword(data[1].value, data[2].value).catch(function(error) {
              // Handle Errors here.
              var loginErrorCode = error.code;
              var loginErrorMessage = error.message;
              console.log(loginErrorCode);
              console.log(loginErrorMessage);
              if(loginErrorCode == "auth/wrong-password"){
                $("#wachtwoordError").show();
                $("#wachtwoordVergeten").show();
                $("#wachtwoordTekortError").hide();
              } else {
                var newmessagesRef = messagesRef.push();
                newmessagesRef.set({
                    name: data[0].value,
                    email: data[1].value
                });
                $("#frame").attr("src", "https://emolio.nl/thankyoufordownload.html");
                  console.log("before colorbox");
                  $.colorbox({
                      iframe  : true,
                      width	: "90%",
                      height	: "90%",
                      fixed	:true,
                      href    : "/preview.html"
                      });
              }
              // ...
            });
          } else if (errorCode == "auth/weak-password") {
            $("#wachtwoordTekortError").show();
          } else {
            var newmessagesRef = messagesRef.push();
            newmessagesRef.set({
                name: data[0].value,
                email: data[1].value
            });
            $("#frame").attr("src", "https://emolio.nl/thankyoufordownload.html");
                  console.log("before colorbox");
                  $.colorbox({
                      iframe  : true,
                      width	: "90%",
                      height	: "90%",
                      fixed	:true,
                      href    : "/preview.html"
                      });
          }
        });

        /*
        var newmessagesRef = messagesRef.push();
        newmessagesRef.set({
            name: data[0].value,
            email: data[1].value
        });

        $("#frame").attr("src", "https://emolio.nl/thankyoufordownload.html");
        console.log("before colorbox");
        $.colorbox({
            iframe  : true,
            width	: "90%",
            height	: "90%",
            fixed	:true,
            href    : "/preview.html"
            });

            console.log("after colorbox");
        */
    });
});