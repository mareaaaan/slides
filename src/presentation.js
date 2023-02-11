   
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';


// const slides = document.getElementsByClassName("slides")[0];

// slides.addEventListener("change", initializePresentation());

// function initializePresentation () {
//     Reveal.initialize({
//         hash: true,
//         plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX]
//     });
// }

// 

await Reveal.initialize();
if(! window.location.href.includes("?print-pdf")) {
   window.open("?print-pdf", "_self");
}
