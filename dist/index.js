function typeText(element, text) {
  let interval;
  const letters = text.split('');

  const createLetterNode = letter => {
    const node = document.createElement('span');
    node.classList.add('letter');
    node.textContent = letter;
    return node;
  };

  const typeNextLetter = () => {
    if (!letters.length) return clearInterval(interval);
    const letter = letters.shift();
    const node = createLetterNode(letter);
    element.appendChild(node);
  };

  interval = setInterval(typeNextLetter, 100);
}

const rootNode = document.getElementById('root');
typeText(rootNode, 'tunpi tech');