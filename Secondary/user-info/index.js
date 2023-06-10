function validateName(name) {
    const nameRegex = /^[A-Za-z]{1,20}$/;
    return nameRegex.test(name);
  }
  
  function validateYearOfBirth(year) {
    const currentYear = new Date().getFullYear();
    return year >= 1900 && year <= currentYear;
  }
  
  function validateGender(gender) {
    return gender === "Male" || gender === "Female";
  }
  
  function validatePhoneNumber(phoneNumber) {
    const phoneNumberRegex = /^[\d\s()-]{10,12}$/;
    return phoneNumberRegex.test(phoneNumber);
  }
  
  function getEmailFromCookie() {
    var cookies = document.cookie.split(';');
  
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
  
      if (cookie.startsWith('email=')) {
        return cookie.substring('email='.length);
      }
    }
  
    return null;
  }

  function clearAllCookies() {
    const cookies = document.cookie.split(";");
    console.log(document.cookie);
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        const path = "/";
        document.cookie = name.trim() + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=" + path;
    }  
    // Redirect the user to another page
    window.location.href = '../regirtration/registration.html';
  }
  
  
  

  function checkCookieExists(cookieName) {
    var cookies = document.cookie.split(";"); // Split the cookies string into an array of individual cookies
  
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim(); // Remove leading/trailing whitespace
  
      // Check if the current cookie starts with the provided cookie name
      if (cookie.indexOf(cookieName + "=") === 0) {
        return true; // Cookie exists
      }
    }
  
    return false; // Cookie does not exist
  }

  function populateInputFromCookie(cookieName, inputName) {
    var cookies = document.cookie.split(";");
  
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
  
      if (cookie.indexOf(cookieName + "=") === 0) {
        var cookieValue = decodeURIComponent(cookie.substring(cookieName.length + 1));
        var inputField = document.getElementsByName(inputName)[0];
        if (inputField) {
          inputField.value = cookieValue;
        }
        break;
      }
    }
  }
  
  function checkAnyCookieExists() {
    return document.cookie !== "";
  }
  


function saveEvent(){
  var form=document.getElementById('nameForm');
  var inputs=form.elements;
  if(!validateName(form.elements["firstName"].value)){
      alert("Uncorrect firstName")
      return false;
    }
    //....
  Array.from(inputs).forEach(function(input){
    if(input.type==="text" ||input.type==="tel" || input.type==="number" || input.tagName === "SELECT"){
      var nameInput=input.value;
      var nameKey=input.name;

      // Set the expiration time to 1 hour from the current date and time
      var expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + (60 * 60 * 1000));
      document.cookie = nameKey + "=" + encodeURIComponent(nameInput) + "; expires=" + expirationDate.toUTCString() + ";";
    }
  })
}


function loadFormInputsFromCookies() {
  if (checkAnyCookieExists()) {
    var form = document.getElementById("nameForm");
    var inputs = form.elements;

    Array.from(inputs).forEach(function(input) {
      if (input.type === "text" ||input.type==="tel" || input.type==="number") {
        var cookieValue = getCookieValue(input.name);
        if (cookieValue !== null) {
          input.value = cookieValue; // Set the input field value from the cookie
        }
      } else if (input.tagName === "SELECT") {
        var cookieValue = getCookieValue(input.name);
        if (cookieValue !== null) {
          input.value = cookieValue; // Set the selected option value from the cookie
        }
      }
    });
  }
}

function getCookieValue(cookieName) {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();

    if (cookie.indexOf(cookieName + "=") === 0) {
      return decodeURIComponent(cookie.substring(cookieName.length + 1)); // Extract and decode the cookie value
    }
  }

  return null; // Cookie not found
}



window.onload=function(){
  var email = getEmailFromCookie();
  if(!email)  window.location.href = '../regirtration/registration.html';
  var span=document.getElementById('greetingEmail');
  span.innerText=email;
  
  var myLink = document.getElementById('myLink');
  myLink.addEventListener('click', clearAllCookies);
  
  //------------------------------------------------
  
  var form=document.getElementById('nameForm');
  var inputs=form.elements;
  
  var btnSave=document.getElementById('btnSave');
  btnSave.addEventListener('click',saveEvent);

  // Call the function to load form inputs from cookies
  loadFormInputsFromCookies();
}

  
