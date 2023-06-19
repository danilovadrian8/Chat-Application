const chatWindow = document.getElementById("chat-window");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

const socket = new WebSocket("wss://your-chat-server");

socket.addEventListener("message", function(event) {
    const message = event.data;
    displayMessage(message);
});

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const message = messageInput.value;
    if (message !== "") {
        socket.send(message);
        messageInput.value = "";
    }
});

function displayMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
}
