// **17. Validate Email Address**
// Implement a function that validates if a given string is a valid email address.

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const emailAddress = "lokeshbohara42@gmail.com";
if (isValidEmail(emailAddress)) {
  console.log(`${emailAddress} is a valid email address.`);
} else {
  console.log(`${emailAddress} is not a valid email address.`);
}
