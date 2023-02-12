   
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';
import Print from 'reveal.js/js/controllers/print.js';

const slides = document.getElementsByClassName("slides")[0];

slides.addEventListener("change", initializePresentation());

async function initializePresentation () {
    await Reveal.initialize({
        plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX]
    });
    // if(! window.location.href.includes("?print-pdf")) {
    //     window.open("?print-pdf", "_self");
    // }
}
    

// await initializePresentation();
