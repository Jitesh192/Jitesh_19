function saveData(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Save data to a text file and download it
    const data = `Username: ${username}\nPassword: ${password}`;
    const blob = new Blob([data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'login_data.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);

    alert('Data saved to your device.');
}
