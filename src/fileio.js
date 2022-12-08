const editor = document.getElementById('editor');
const filenameInput = document.getElementById('filename-input');

export async function loadFileIntoEditor(event) {
    var filename = getFileName(event.target.files[0]);
    var fileText = await readMarkdownFile(event.target.files[0]);
    if(fileText && filename) {
        filenameInput.value = filename;
        editor.value = fileText;
    } else {
        alert("Error reading the file");
    }
}

export async function readMarkdownFile(file) {
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

function getFileName(file) {
    return file.name.split('.')[0];
}


export async function downloadFile() {
    
    const blob = new Blob([editor.value], { type: 'plain/text' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filenameInput.value + '.md';
    a.style.display = 'none';

    document.body.append(a);

    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
};
