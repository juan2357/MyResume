$('#main').append(" by: Juan Perez ");

var awesomeThoughts = "I am Juan and I am AWESOME!"
console.log(awesomeThoughts);

var email = "juanperez@icloud.com";
var newEmail = email.replace("icloud", "me");
console.log(email);
console.log(newEmail);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);
