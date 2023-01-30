const editor = document.getElementById('editor');
export function enableEditorTabs() {
    editor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault()
        
            editor.setRangeText(
                '  ',
                editor.selectionStart,
                editor.selectionStart,
                'end'
            )
        }
    })
}
