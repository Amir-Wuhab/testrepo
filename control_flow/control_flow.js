let userRole = "amir"
let accessLevel;


if (userRole =="admin"){
    accessLevel="Full access level is granted"
}
else if (userRole =="manager"){
    accessLevel="Limited access level granted"
}
else {
    accessLevel="acces level is denied"
}

console.log("accessLevel is", accessLevel)

let isLoggedIn = false;
if (userRole == "admin" ||  userRole== "manager")
    {isLoggedIn = true;}
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log(userMessage)