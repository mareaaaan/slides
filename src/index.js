import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import {loadFileIntoEditor, downloadFile} from './fileio.js'

const fileSelector = document.getElementById('file-selector');
const saveButton = document.getElementById('save-button');
const editor = document.getElementById('editor');
const slides = document.getElementsByClassName("slides")[0];
  
  function keyPress(e) {
    if(e.keyCode == 83 && e.ctrlKey) {
      e.preventDefault();
      let text = editor.value;
      deck.destroy();
      slides.innerHTML = '<section data-markdown><textarea data-template id="code"></textarea></section>';
      let code = document.getElementById("code");
      code.textContent = text;
      console.log(code);
      deck.initialize();
    }
  }
  
  
  let deck = new Reveal( document.querySelector( '.reveal' ), {
    plugins: [ Markdown ],
    embedded: true,
    keyboardCondition: 'focused' 
  } );
  
  document.onkeydown = keyPress;
  fileSelector.addEventListener('change', loadFileIntoEditor);
  saveButton.addEventListener('click', function () {
      downloadFile('file.md', editor.value);
  })

  deck.initialize();