   
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';

const slides = document.querySelector(".slides");


const deck = new Reveal({
        chart: {
            defaults: {
                color: 'lightgray', // color of labels
                borderColor: [ "rgba(20,220,220,.8)" , "rgba(220,120,120,.8)", "rgba(20,120,220,.8)" ],
                backgroundColor: [ ["rgba(0,0,0,.8)" , "rgba(220,20,20,.8)", "rgba(20,220,20,.8)", "rgba(220,220,20,.8)", "rgba(20,20,220,.8)"] ],
                scale: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 },
                    grid: { color: "lightgray" } , // color of grid lines
                },
            },
        },
        plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX, RevealAnimate, RevealChart],
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
