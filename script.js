const root = document.querySelector('.root');

function setLevel(level, element) {
    level--;

    if(level > 0) {
        [...element.children].forEach(child => setLevel(level, child));
    } else {
        element.children[0].classList.add('firstItem');
        element.children[element.children.length-1].classList.add('lastItem');
    }
};

setLevel(1, root);
