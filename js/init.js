$(window).load(function () {
	"use strict";
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({
		'overflow': 'visible'
	});
});
$(function () {
	"use strict";

	$(".youtube").colorbox({iframe:true, innerWidth:"70%", innerHeight:"70%"});

	
	/* ---------------------------------------------------------
	 * Form validation
	 */

	/* Signup form */
/*
	$('#signupForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'fa fa-check',
			invalid: 'fa fa-times',
			validating: 'fa fa-refresh'
		},
		submitHandler: function (validator, form, submitButton) {
			var l = Ladda.create(submitButton[0]),
				btnText = submitButton.children(".ladda-label");
			
			l.start();
			btnText.html("verzenden..");
			
			$.get(form.attr('action'), form.serialize(), function(result) { 
				btnText.html(result.message);							
			}, 'json')
			.always(function() { 
				l.stop(); 
				validator.disableSubmitButtons(true);
			});
		},
		fields: {
			email: {
				validators: {
					notEmpty: {
						message: 'Email cannot be empty'
					},
					emailAddress: {
						message: 'The input is not a valid email address'
					}
				}
			}
		}
	});

	/* Contact form */
/*
	$('#contactForm').bootstrapValidator({
		fields: {
			name: {
				validators: {
					notEmpty: {
						message: 'Vul hier je naam in'
					},
					stringLength: {
						min: 2,
						max: 30,
						message: 'Naam moet minstens 2 tekens bevatten'
					},
					regexp: {
						regexp: /^[a-zA-Z\s]+$/,
						message: 'Een naam kan alleen uit letters bestaan'
					}
				}
			},
			contactEmail: {
				validators: {
					notEmpty: {
						message: 'Dit is geen geldig emailadres'
					},
					emailAddress: {
						message: 'Vul hier je emailadres in'
					}
				}
			}
		},
		feedbackIcons: {
			valid: 'fa fa-check',
			invalid: 'fa fa-times',
			validating: 'fa fa-refresh'
		},
		submitHandler: function (validator, form, submitButton) {
			var l = Ladda.create(submitButton[0]),
				btnText = submitButton.children(".ladda-label");
			
			l.start();
			btnText.html("Verzenden...");
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
			messagesRef.set({
				name: 'name',
				email: 'email'
			});
			var data = $("#contactForm :input").serializeArray();
			console.log(data);
			


			$.post(form.attr('action'), form.serialize(), function(result) {
				console.log(result.sent);
				if(result.sent == '1'){
					btnText.html("Verzonden!");
					
		                        			
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
					
				}
				else{
					btnText.html("Error!");
				}
				
				// Reset form after 5s
				setTimeout(function() {
					btnText.html("verzenden");
					$(form[0])[0].reset();
					validator.resetForm();
				}, 5000);
				
			}, 'json')
			.always(function() { 
				l.stop(); 
				validator.disableSubmitButtons(true);
			});
	
		
		},
	});
	
	*/
});
