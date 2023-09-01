const textArea = document.getElementById('text-input');
const lineNumbers = document.querySelector('.line-numbers');

textArea.addEventListener('input', updateLineNumbers);
textArea.addEventListener('scroll', updateLineNumbers);

function updateLineNumbers() {
    const lines = textArea.value.split('\n').length;
    lineNumbers.innerHTML = '';
    for (let i = 1; i <= lines; i++) {
        lineNumbers.innerHTML += i + '<br>';
    }
}

// Initial call to set line numbers when the page loads
updateLineNumbers();
