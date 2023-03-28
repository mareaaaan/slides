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

async function reloadPreview() {
    console.time("slide-load");
    let text = editor.value;
    deck.destroy();
    slides.innerHTML = text;
    await deck.initialize();
    console.timeEnd("slide-load");
}

export const deck = new Reveal( document.querySelector( '.reveal' ), {
        chart: {
            defaults: { 
                color: 'lightgray', // color of labels
                scale: { 
                    beginAtZero: true, 
                    ticks: { stepSize: 1 },
                    grid: { color: "lightgray" } , // color of grid lines
                },
            },
            line: { borderColor: [ "rgba(20,220,220,.8)" , "rgba(220,120,120,.8)", "rgba(20,120,220,.8)" ], "borderDash": [ [5,10], [0,0] ] }, 
            bar: { backgroundColor: [ "rgba(20,220,220,.8)" , "rgba(220,120,120,.8)", "rgba(20,120,220,.8)" ]}, 
            pie: { backgroundColor: [ ["rgba(0,0,0,.8)" , "rgba(220,20,20,.8)", "rgba(20,220,20,.8)", "rgba(220,220,20,.8)", "rgba(20,20,220,.8)"] ]},
            radar: { borderColor: [ "rgba(20,220,220,.8)" , "rgba(220,120,120,.8)", "rgba(20,120,220,.8)" ]}, 
        },
        plugins: [ Markdown , RevealHighlight, RevealMath.KaTeX, RevealAnimate, RevealChart, RevealChalkboard, RevealMenu],
        embedded: true,
        keyboardCondition: 'focused',
        animate: {
            autoplay: true
        },
        mouseWheel: true,
        menu: {width: '0px',},
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