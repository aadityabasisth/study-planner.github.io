document.getElementById("study-session-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    const sessionName = document.getElementById("session-name").value;
    const taskName = document.getElementById("task-name").value;
    const deadline = document.getElementById("deadline").value;

    if (sessionName && taskName && deadline) {
        const session = {
            sessionName,
            taskName,
            deadline
        };

        // Display new session
        displaySession(session);
        // Clear input fields
        document.getElementById("study-session-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

function displaySession(session) {
    const sessionsList = document.getElementById("sessions");

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <strong>${session.sessionName}</strong><br>
        Task: ${session.taskName}<br>
        Deadline: ${session.deadline}
    `;
    
    sessionsList.appendChild(listItem);
}