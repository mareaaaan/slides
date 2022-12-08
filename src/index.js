import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

const fileSelector = document.getElementById('file-selector');
const saveButton = document.getElementById('save-button');
const editor = document.getElementById('editor');
const slides = document.getElementsByClassName("slides")[0];

async function loadFileIntoEditor(event) {
    var fileText = await readMarkdownFile(event.target.files[0])
    if(fileText) {
        editor.value = fileText;
    } else {
        alert("Error reading the file");
    }
}

async function readMarkdownFile(file) {
    if(file) {
        if(!isMarkdownFile(file)) {
            return;
        }
        return await file.text();
    }
    else {
        return;
    }
}

function isMarkdownFile(file) {
    return "md" === getFileExtension(file);
}

function getFileExtension(file) {
    return file.name.split('.').pop().toLowerCase();
}

async function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'plain/text' });
    const fileHandle = getNewFileHandle(filename);
    const fileStream = await fileHandle.createWritable();
    await fileStream.write(blob);
    await fileStream.close();
};

async function getNewFileHandle(filename) {
    const opts = {
      types: [{
        suggestedName: filename,
        description: 'Markdown file',
        accept: {'text/plain': ['.md']},
      }],
    };
    return await window.showSaveFilePicker(opts);
  }

  
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