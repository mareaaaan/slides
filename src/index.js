import {loadFileIntoEditor, downloadFile} from './fileio.js';
import {deck, loadPreviewOnCtrlS} from './slides.js';
import { enableEditorTabs } from './editor.js';

const fileSelector = document.getElementById('file-selector');
const saveButton = document.getElementById('save-button');
const editor = document.getElementById('editor');
const compileButton = document.getElementById('compile-button');

fileSelector.addEventListener('change', loadFileIntoEditor);

saveButton.addEventListener('click', function () {
    downloadFile();
})

enableEditorTabs();

document.addEventListener('keydown', loadPreviewOnCtrlS);
deck.initialize();

compileButton.addEventListener('click', function () {
    var presentation = window.open('./presentation.html');
    // var presentation = window.open('./presentation.html?print-pdf');
    presentation.onload = function () {
        let text = editor.value;
        presentation.document.getElementsByClassName("slides")[0].innerHTML = text;
    }
})
