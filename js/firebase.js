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
 
var messagesRef = firebase.database().ref('signups');

function saveToFirebase(name, email){
    var newmessagesRef = messagesRef.push();
    newmessagesRef.set({
        name: name,
        email: email
    });
 }
 $(function() { //shorthand document.ready function
    $('#contactForm').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        var data = $("#contactForm :input").serializeArray();
        console.log(data[0].value);
        console.log(data[1].value);
        var newmessagesRef = messagesRef.push();
        newmessagesRef.set({
            name: data[0].value,
            email: data[1].value
        });

        $("#frame").attr("src", "http://emolio.nl/thankyoufordownload.html");
        console.log("before colorbox");
        $.colorbox({
            iframe  : true,
            width	: "90%",
            height	: "90%",
            fixed	:true,
            href    : "/preview.html"
            });
            console.log("after colorbox");
    });
});