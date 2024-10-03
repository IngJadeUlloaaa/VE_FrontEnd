document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const code = document.getElementById('codeInput').value;
    const passwd = document.getElementById('passwordInput').value;

    if (!code || !passwd) {
        console.log('Both fields are required.');
        return;
    }

    console.log(`credentials here: ${code} - ${passwd}`);

    // Redirigir a la acción VE del controlador Home
    window.location.href = '/Home/VE';
});