function changeColor(color) {
    var postIt = document.getElementById('postIt');

    if (color === 'yellow') {
        postIt.classList.add('yellow-active');
    } else {
        postIt.classList.remove('yellow-active');
        postIt.style.backgroundColor = color;
    }

    if (color === 'blue') {
        postIt.classList.add('blue-active');
    } else {
        postIt.classList.remove('blue-active');
        postIt.style.backgroundColor = color;
    }
    if (color === 'red') {
        postIt.classList.add('red-active');
    } else {
        postIt.classList.remove('red-active');
        postIt.style.backgroundColor = color;
    }
    if (color === 'pink') {
        postIt.classList.add('pink-active');
    } else {
        postIt.classList.remove('pink-active');
        postIt.style.backgroundColor = color;
    }
    if (color === 'orange') {
        postIt.classList.add('orange-active');
    } else {
        postIt.classList.remove('orange-active');
        postIt.style.backgroundColor = color;
    }
}

function addTextToPostIt() {
    var textInput = document.getElementById('textInput');
    var postItText = document.getElementById('postIt').getElementsByTagName('span')[0];
    postItText.textContent = textInput.value;
}