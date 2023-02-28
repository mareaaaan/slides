import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';
import 'reveal.js-plugins/animate/plugin.js';
import 'reveal.js-plugins/animate/svg.min.js';

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
    slides.innerHTML = text;
    deck.initialize();
}

export const deck = new Reveal( document.querySelector( '.reveal' ), {
        katex: {
            version: 'latest',
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ],
            ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre']
        },
        plugins: [ Markdown , RevealHighlight, RevealMath.KaTeX, RevealAnimate],
        embedded: true,
        keyboardCondition: 'focused',
        animate: {
            autoplay: true
        }
    }   
);

export function openPresentationWindow() {
    var presentation = window.open('./presentation.html?print-pdf');
    presentation.addEventListener("DOMContentLoaded", function () {
        let text = editor.value;
        presentation.document.getElementsByClassName("slides")[0].innerHTML = text;
    })
}

document.addEventListener('keydown', loadPreviewOnCtrlS);

deck.initialize();