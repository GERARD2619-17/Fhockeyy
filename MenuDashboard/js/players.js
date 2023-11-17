document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
    // @ts-ignore
    var formData = new FormData(event.target);
 
    fetch('http://localhost:1337/api/players', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
 });
 