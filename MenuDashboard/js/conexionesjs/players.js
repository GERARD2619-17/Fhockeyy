// @ts-nocheck
document.addEventListener('DOMContentLoaded', () => {
    const playerForm = document.getElementById('playerForm');
 
    playerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
 
        // Obtén los valores de los campos del formulario
        // @ts-ignore
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const height = document.getElementById('height').value;
        const position = document.getElementById('position').value;
        const gender = document.getElementById('gender').value;
        const image = document.getElementById('image').files[0];
 
        // Crea un objeto FormData para enviar los datos
        const formData = new FormData();
        formData.append('name', name);
        formData.append('age', age);
        formData.append('height', height);
        formData.append('position', position);
        formData.append('gender', gender);
        formData.append('image', image);
 
        try {
            const response = await fetch('http://localhost:1337/api/players', {
                method: 'POST',
                headers: {
                   'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: formData,
            });
 
            if (response.ok) {
                console.log('Jugador guardado con éxito');
            } else {
                console.error('Error al guardar el jugador');
            }
        } catch (error) {
            console.error('Error de red: ' + error);
        }
    });
 });
 