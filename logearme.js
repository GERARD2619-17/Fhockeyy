document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // @ts-ignore
        const email = document.getElementById('email').value;
        // @ts-ignore
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('https://0159-190-62-3-5.ngrok-free.app/api/auth/local', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // Almacena el token de autenticación en localStorage.
                localStorage.setItem('token', data.jwt);

                // Redirige al usuario a una página ficticia de inicio.
                window.location.href = 'home.html';
            } else {
                console.error('Error de inicio de sesión');
            }
        } catch (error) {
            console.error('Error de red: ' + error);
        }
    });
});

