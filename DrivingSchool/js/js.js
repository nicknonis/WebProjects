
/* =================
   ===== Login =====
   ================= */
  

//confirmation for login page to order page
function logformconf() {

	if (confirm("Are you sure you want to continue?") == true) {
		form.submit("loginform");
		location = "index.html";
	}

	else{
		alert("Aborting!");
		location = location;
		return false;
	}
}


/* =================
   === Register ====
   ================= */
function numbcheck(){
	var x=document.forms["regform"]["tel"].value;
	if(isNaN(x)){
		alert("Please ensure contact number consists of only numbers");
		return false;
	}
	else{
		return regformconf();
		}
}		


//confirmation to next page
function regformconf() {

	if (confirm("Submit?") == true) {
		form.submit("form");
		location = "login.html";
	}

	else{
		alert("Aborting!");
		location = location;
		return false;
	}
}


/* =================
   === Feedback  ===
   ================= */
  

//confirmation for login page to order page
function feedconf() {

	if (confirm("Are you sure you want to continue?") == true) {
		form.submit("feedform");
		location = "index.html";
	}

	else{
		alert("Aborting!");
		location = location;
		return false;
	}
}

