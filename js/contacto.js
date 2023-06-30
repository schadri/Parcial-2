document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Datos enviados correctamente.")
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('message').value = ""
});