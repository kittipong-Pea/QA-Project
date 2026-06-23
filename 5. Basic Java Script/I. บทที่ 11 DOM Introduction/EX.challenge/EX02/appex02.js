const boxes = document.querySelectorAll('li');

boxes.forEach(box => {
    box.classList.toggle('highlight');
});