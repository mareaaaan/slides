   
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';

const slides = document.querySelector(".slides");


const deck = new Reveal({
        plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX, RevealAnimate],
        animate: {
            autoplay: true
        }
    }   
);

const mutationObserver = new MutationObserver(async entries => {
    mutationObserver.disconnect();
    await deck.initialize();
});

var config = { childList: true, subtree: true };
mutationObserver.observe(slides, config);
