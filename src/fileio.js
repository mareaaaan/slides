const editor = document.getElementById('editor');

export async function loadFileIntoEditor(event) {
    var fileText = await readMarkdownFile(event.target.files[0])
    if(fileText) {
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

export async function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'plain/text' });
    const fileHandle = getNewFileHandle(filename);
    const fileStream = await fileHandle.createWritable();
    await fileStream.write(blob);
    await fileStream.close();
};
