const fileSelector = document.getElementById('file-selector');
const saveButton = document.getElementById('save-button');
const fileContents = document.getElementById('file-contents');

fileSelector.addEventListener('change', loadFileIntoEditor);
saveButton.addEventListener('click', function () {
    downloadFile('file.md', fileContents.value);
})

async function loadFileIntoEditor(event) {
    var fileText = await readMarkdownFile(event.target.files[0])
    if(fileText) {
        fileContents.value = fileText;
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
    return extension = file.name.split('.').pop().toLowerCase();
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