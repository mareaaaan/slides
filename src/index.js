import {loadFileIntoEditor, downloadFile} from './fileio.js';
import {deck, loadPreviewOnCtrlS} from './slides.js';
import { enableEditorTabs } from './editor.js';

const fileSelector = document.getElementById('file-selector');
const saveButton = document.getElementById('save-button');
const editor = document.getElementById('editor');
const printButton = document.getElementById('print-button');

fileSelector.addEventListener('change', loadFileIntoEditor);

saveButton.addEventListener('click', function () {
    downloadFile();
})

enableEditorTabs();

document.addEventListener('keydown', loadPreviewOnCtrlS);
deck.initialize();

printButton.addEventListener('click', function () {
    window.open('./presentation.html');
})