// Function to show the modal with teacher details
function showTeacherDetails(subject, teacher) {
    document.getElementById('subjectName').textContent = `Subject: ${subject}`;
    document.getElementById('teacherName').textContent = `Teacher: ${teacher}`;
    document.getElementById('teacherModal').style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById('teacherModal').style.display = "none";
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('teacherModal')) {
        closeModal();
    }
}
