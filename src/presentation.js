   
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';


const slides = document.getElementsByClassName("slides")[0];

const deck = new Reveal( document.querySelector( '.reveal' ), {
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX]
}   
);

function initializePresentation () {
    deck.initialize();
}


// slides.addEventListener("change", initializePresentation());
window.addEventListener("load", Reveal.initialize());

