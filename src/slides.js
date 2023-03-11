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
        // chalkboard: {
        //     boardmarkerWidth: 3,
        //     chalkWidth: 7,
        //     chalkEffect: 1.0,
        //     storage: null,
        //     src: null,
        //     readOnly: undefined,
        //     transition: 800,
        //     theme: "chalkboard",
        //     background: [ 'rgba(127,127,127,.1)' , path + 'img/blackboard.png' ],
        //     grid: { color: 'rgb(50,50,10,0.5)', distance: 80, width: 2},
        //     eraser: { src: path + 'img/sponge.png', radius: 20},
        //     boardmarkers : [
        //             { color: 'rgba(100,100,100,1)', cursor: 'url(' + path + 'img/boardmarker-black.png), auto'},
        //             { color: 'rgba(30,144,255, 1)', cursor: 'url(' + path + 'img/boardmarker-blue.png), auto'},
        //             { color: 'rgba(220,20,60,1)', cursor: 'url(' + path + 'img/boardmarker-red.png), auto'},
        //             { color: 'rgba(50,205,50,1)', cursor: 'url(' + path + 'img/boardmarker-green.png), auto'},
        //             { color: 'rgba(255,140,0,1)', cursor: 'url(' + path + 'img/boardmarker-orange.png), auto'},
        //             { color: 'rgba(150,0,20150,1)', cursor: 'url(' + path + 'img/boardmarker-purple.png), auto'},
        //             { color: 'rgba(255,220,0,1)', cursor: 'url(' + path + 'img/boardmarker-yellow.png), auto'}
        //     ],
        //     chalks: [
        //             { color: 'rgba(255,255,255,0.5)', cursor: 'url(' + path + 'img/chalk-white.png), auto'},
        //             { color: 'rgba(96, 154, 244, 0.5)', cursor: 'url(' + path + 'img/chalk-blue.png), auto'},
        //             { color: 'rgba(237, 20, 28, 0.5)', cursor: 'url(' + path + 'img/chalk-red.png), auto'},
        //             { color: 'rgba(20, 237, 28, 0.5)', cursor: 'url(' + path + 'img/chalk-green.png), auto'},
        //             { color: 'rgba(220, 133, 41, 0.5)', cursor: 'url(' + path + 'img/chalk-orange.png), auto'},
        //             { color: 'rgba(220,0,220,0.5)', cursor: 'url(' + path + 'img/chalk-purple.png), auto'},
        //             { color: 'rgba(255,220,0,0.5)', cursor: 'url(' + path + 'img/chalk-yellow.png), auto'}
        //     ]
        // },
        // customcontrols: {
        //     controls: [
        //         { icon: '<i class="fa fa-pen-square"></i>',
        //         title: 'Toggle chalkboard (B)',
        //         action: 'RevealChalkboard.toggleChalkboard();'
        //         },
        //         { icon: '<i class="fa fa-pen"></i>',
        //         title: 'Toggle notes canvas (C)',
        //         action: 'RevealChalkboard.toggleNotesCanvas();'
        //         }
        //     ]
        // },
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
        plugins: [ Markdown , RevealHighlight, RevealMath.KaTeX, RevealAnimate, RevealChart, RevealChalkboard],
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