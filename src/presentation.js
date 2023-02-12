   
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';


const slides = document.querySelector(".slides");

const mutationObserver = new MutationObserver(entries => {Reveal.initialize()});
var config = { childList: true, subtree: true };
mutationObserver.observe(slides, config);

// const deck = new Reveal( document.querySelector( '.reveal' ), {
//     plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX]
// }   
// );

// function initializePresentation () {
//     deck.initialize();
// }


// slides.addEventListener("change", initializePresentation());
// window.addEventListener("load", Reveal.initialize());

// window.addEventListener("load", console.log("slides.innerHTML"));

