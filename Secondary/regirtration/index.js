window.addEventListener('load', function() {
    var email = getCookie('email');
    var password = getCookie('password');
  
    if (email && password) {
      // Якщо дані про користувача знайдено, перенаправити на наступну сторінку
      //window.location.href = 'nextPage.html';
    }
  });
  
  function getCookie(name) {
    var cookies = document.cookie.split(';');
  
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
  
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
  
    return null;
  }
  

// Отримати посилання на форму реєстрації
// var registrationForm = document.getElementById('registrationForm');

// // Додати обробник події для подання форми
// registrationForm.addEventListener('submit', function(event) {
//   event.preventDefault(); // Запобігти дійсному поданню форми

//   // Отримати значення введених користувачем даних
//   var email = document.getElementById('inputEmail').value;
//   var password = document.getElementById('inputPassword').value;

//   // Зберегти дані користувача в куках
//   setCookie('email', email);
//   setCookie('password', password);

//   // Перенаправити користувача на наступну сторінку
//   window.location.href = 'nextPage.html';
// });

// function setCookie(name, value) {
//   document.cookie = name + '=' + value + '; path=/';
// }



function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  }
  
  function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
  }
  
  // Приклад використання:
  
  const email = "example@email.com";
  const password = "Password123";
  const confirmPassword = "Password123";
  
  if (!validateEmail(email)) {
    console.log("Некоректна електронна пошта");
  }
  
  if (!validatePassword(password)) {
    console.log("Некоректний пароль");
  }
  
  if (!validateConfirmPassword(password, confirmPassword)) {
    console.log("Пароль не збігається");
  }
  // Get the button element
const button = document.getElementById("myButton");
console.log(button);
// Add a click event listener to the button
button.addEventListener("click", function() {
  // Code to be executed when the button is clicked
  
    // Отримати значення введених користувачем даних
    var email = document.getElementById('inputEmail').value;
    if(!validateEmail(email)){
         console.log("email!!");
         let errorEmail=document.getElementById('errorEmail');
         errorEmail.style.display = "inline";
         return false;
        }
        errorEmail.style.display = "none";
    //return false;
    var password = document.getElementById('inputPassword').value;
    if(!validatePassword(password)){
        console.log("pass!!!");
        let errorPassword=document.getElementById('errorPassword')
        errorPassword.style.display = "inline";
        return false;
    }
    errorPassword.style.display = "none";
    var confirmPassword=document.getElementById('inputReapt').value;
    if(!validateConfirmPassword(password,confirmPassword)){
        console.log("Repeat!!!");
        let errorRepeat=document.getElementById('errorRepeat')
        errorRepeat.style.display = "inline";
        return false;
    }

    errorRepeat.style.display = "none";

    console.log("Button clicked!");
    // Зберегти дані користувача в куках
    setCookie('email', email);
    setCookie('password', password);
  
    // Перенаправити користувача на наступну сторінку
  
  function setCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + (1 * 60 * 60 * 1000)); // 1 година в мілісекундах
    var expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  window.location.href="../user-info/userInfo.html";
  // Additional actions or functions can be performed here
});


  