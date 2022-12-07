const fileSelector = document.getElementById('file-selector');

fileSelector.addEventListener('change', loadFileIntoEditor);

async function loadFileIntoEditor(event) {
    var fileContents = await readMarkdownFile(event.target.files[0])
    if(fileContents) {
        document.getElementById("file-contents").value = fileContents;
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