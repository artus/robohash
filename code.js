const url = "https://robohash.org/";
const fileType = ".png";

const minLength = 2;
const maxLength = 20;

const generateRobot = (text) => {
    if (text.length < minLength || text.length > maxLength) {
        alert("The robot description needs to be between 2 and 20 characters.");
    } else {
        document.getElementById("robot-image").src = `${url}${text}${fileType}`;
    }
}

document.getElementById("create-robot-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const value = document.getElementById("description").value;
    generateRobot(value);
})