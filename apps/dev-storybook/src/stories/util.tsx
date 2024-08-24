export const defaultStyle = {
    padding: '10px 40px'
}

export const tableStyle = {
    border: '1px solid gray'
}

export const featureList = [
    { name: 'style', component: 'select', description: 'format selected block'},
    { name: 'bold', component: 'button', description: ' toggle font weight'},
    { name: 'italic', component: 'button', description: 'toggle italic'},
    { name: 'strikethrough', component: 'button', description: 'toggle strikethrough'},
    { name: 'superscript', component: 'button', description: 'toggle superscript'},
    { name: 'subscript', component: 'button', description: 'toggle subscript'},

    { name: 'underline', component: 'button', description: 'toggle underline'},
    { name: 'clear', component: 'button', description: 'clear font style'},
    { name: 'fontname', component: 'select', description: 'set font family'},
    { name: 'fontsize', component: 'select', description: 'set font size'},
    { name: 'fontsizeunit', component: 'button', description: 'set font size unit'},    
    { name: 'color', component: 'select', description: ' set foreground and background color'},
    { name: 'forecolor', component: 'select', description: 'set foreground color'},    
    { name: 'backcolor', component: 'select', description: 'set background color'},        


    { name: 'ul', component: 'button', description: 'toggle unordered list'},
    { name: 'ol', component: 'button', description: 'toggle ordered list'},
    { name: 'paragraph', component: 'menu', description: 'dropdown for paragraph align'},
    { name: 'justifyLeft', component: 'button', description: ''},
    { name: 'justifyCenter', component: 'button', description: ''},
    { name: 'justifyRight', component: 'button', description: ''},
    { name: 'justifyFull', component: 'button', description: ''},
    { name: 'outdent', component: 'button', description: ''},
    { name: 'indent', component: 'button', description: ''},

    { name: 'height', component: 'select', description: 'set line height'},
    { name: 'hr', component: 'menu', description: ''},
    { name: 'redo', component: 'menu', description: 'undo'},
    { name: 'undo', component: 'menu', description: 'redo'},

    { name: 'table', component: 'select', description: 'insert a table'},
    { name: 'link', component: 'dialog', description: 'open link dialog'},
    { name: 'picture', component: 'dialog', description: 'open image dialog'},
    { name: 'video', component: 'dialog', description: ' open video dialog'},
    { name: 'fullscreen', component: 'button', description: 'toggle fullscreen editing mode'},
    { name: 'codeview', component: 'button', description: 'toggle wysiwyg and html editing mode'},
    { name: 'help', component: 'dialog', description: 'open help dialog'},

    { name: 'resizeFull', component: 'dialog', description: ''},
    { name: 'resizeHalf', component: 'dialog', description: ''},
    { name: 'resizeQuarter', component: 'dialog', description: ''},
    { name: 'resizeNone', component: 'dialog', description: ''},
    { name: 'floatLeft', component: 'dialog', description: ''},
    { name: 'floatRight', component: 'dialog', description: ''},
    { name: 'floatNone', component: 'dialog', description: ''},
    { name: 'removeMedia', component: 'dialog', description: ''},
    { name: 'unlink', component: 'dialog', description: ''},


    { name: 'addRowUp', component: 'dialog', description: ''},
    { name: 'addRowDown', component: 'dialog', description: ''},
    { name: 'addColLeft', component: 'dialog', description: ''},
    { name: 'addColRight', component: 'dialog', description: ''},
    { name: 'deleteRow', component: 'dialog', description: ''},
    { name: 'deleteCol', component: 'dialog', description: ''},
    { name: 'deleteTable', component: 'dialog', description: ''},    
]