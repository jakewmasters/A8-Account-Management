function createAccount(){
  var username = document.getElementById("usernameInput").value;
  var password = document.getElementById("passwordInput").value;
  var loginInfo = "Name=" + username +
	             "&Password=" + password;
  var ajax = new XMLHttpRequest();
  var notification = document.getElementById("notification");
  if (document.getElementById("usernameInput").style.backgroundColor == "green"
      && document.getElementById("passwordInput").style.backgroundColor == "green") {
		ajax.responseType = "json";
		ajax.addEventListener("load", function() {
			console.log("server response =", this.response[0]);
			var status = this.response[0].status
			if ( status == true ) {
				notification.innerHTML = "Account '"+username+"' Created";
				document.getElementById("registerButtonDiv").style.display = "none";
				document.getElementById("loginButtonDiv").style.display = "block";
			}
			else {
			notification.innerHTML = "Account Already Exists";
			}
		} );
		ajax.open('POST', '//cse.taylor.edu/~cos143/users.php');
		ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajax.send(loginInfo);
	}
	else {
		notification.innerHTML = "Account NOT Created - Invalid Characters Found";
	}
}

function login() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    var params = "Name="+ username + "&Password=" + password;
	var ajax = new XMLHttpRequest();
	ajax.responseType = "json";
	ajax.addEventListener("load", function() { 
		 console.log("server response = ", this.response[0]);
         var status = this.response[0].status;
		 var message = this.response[0].message;
		 var notification = document.getElementById("notification");
         if ( status == true ) {
			notification.innerHTML = "Login Successful";
			document.getElementById("loggedIn").innerHTML = "Logged in as: "+username;
			document.getElementById("logoutButtonDiv").style.display = "block";
			document.getElementById("loginButtonDiv").style.display = "none";
			document.getElementById("usernameDiv").style.display = "none";
			document.getElementById("changePasswordDiv").style.display = "block";
         }
         else {
           notification.innerHTML = "Login Failed - Invalid Credentials";
         }
    } );
	ajax.open('POST', '//cse.taylor.edu/~cos143/sessions.php');
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send(params);
}

function logout() {
	var params = "method=DELETE";
	var ajax = new XMLHttpRequest();
	ajax.responseType = "json";
	ajax.addEventListener("load", function() { 
		 console.log("server response =", this.response[0]);
		 var status = this.response[0].status;
		 var notification = document.getElementById("notification");
		 if ( status == true ) {
			document.getElementById("loggedIn").innerHTML = "Not Logged In";
			notification.innerHTML = "User Logged Out";
			document.getElementById("logoutButtonDiv").style.display = "none";
			document.getElementById("changePasswordDiv").style.display = "none";
			document.getElementById("loginButtonDiv").style.display = "block";
			document.getElementById("usernameDiv").style.display = "block";
         }
         else {
           notification.innerHTML = "Unable To Log Out";
         } 
    } );
	ajax.open('POST', '//cse.taylor.edu/~cos143/sessions.php'); 
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
	ajax.send(params);
}
function changePassword() {
	var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
	var params = "Name="+ username + "&Password=" + password+"&method=PUT";
	var ajax = new XMLHttpRequest();
	ajax.responseType = "json";
	ajax.addEventListener("load", function() { 
		 console.log("server response =", this.response[0]);
		 var status = this.response[0].status;
		 var notification = document.getElementById("notification");
		 if ( status == true ) {
			notification.innerHTML = "Password Successfully Changed";
         }
         else {
           notification.innerHTML = "Password NOT Changed";
         } 
    } );
	ajax.open('POST', '//cse.taylor.edu/~cos143/users.php'); 
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
	ajax.send(params);
}

function showLogin(){
    document.getElementById("loginDiv").style.display = "block";
    document.getElementById("loginButtonDiv").style.display = "block";
    document.getElementById("welcomeOptionsDiv").style.display = "none";
}
function showRegister(){
    document.getElementById("loginDiv").style.display = "block";
    document.getElementById("registerButtonDiv").style.display = "block";
    document.getElementById("welcomeOptionsDiv").style.display = "none";
}
function validate(field) {
	console.log("validate(): field.value = " + field.value);
	var valid = /^[a-zA-Z0-9]+$/.test(field.value);
	if( valid ) {
		field.style.backgroundColor = "green";
	} else {
		field.style.backgroundColor = "red";
	}
}
