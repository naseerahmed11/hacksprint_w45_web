fileForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(fileForm);
    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Show success message
            alert('File uploaded successfully!');
            
            // Refresh file list
            fetchFilesList();
        } else {
            alert('File upload failed!');
        }
    })
    .catch(error => console.error('Error:', error));
});
