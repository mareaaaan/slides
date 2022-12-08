import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

const editor = document.getElementById('editor');
const slides = document.getElementsByClassName("slides")[0];
  
export function loadPreviewOnCtrlS(event) {
    if(event.keyCode == 83 && event.ctrlKey) {
        event.preventDefault();
        reloadPreview();
    }
}

function reloadPreview() {
    let text = editor.value;
    deck.destroy();
    let code = createPreviewCode();
    code.textContent = text;
    deck.initialize();
}

function createPreviewCode() {
    slides.innerHTML = '<section data-markdown><textarea data-template id="code"></textarea></section>';
    return document.getElementById("code");
}

export const deck = new Reveal( document.querySelector( '.reveal' ), {
        plugins: [ Markdown ],
        embedded: true,
        keyboardCondition: 'focused' 
    }   
);

document.addEventListener('keydown', loadPreviewOnCtrlS);

deck.initialize();