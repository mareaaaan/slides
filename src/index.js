import {loadFileIntoEditor, downloadFile} from './fileio.js';
import {deck, loadPreviewOnCtrlS, openPresentationWindow} from './slides.js';
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

compileButton.addEventListener('click', openPresentationWindow);

const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = ({data}) => {
    console.log('Message from server' , data);
}

deck.initialize();