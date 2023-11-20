function saveText() {
  const textContent = document.getElementById('textInput').value;
  const blob = new Blob([textContent], { type: 'text/plain' });

  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'note.txt';
  a.click();
}

function downloadText() {
  const textContent = document.getElementById('textInput').value;
  const blob = new Blob([textContent], { type: 'text/plain' });

  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'note.txt';
  a.click();
}

document.getElementById('fileInput').addEventListener('change', function() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById('textInput').value = event.target.result;
    };
    reader.readAsText(file);
  }
});
