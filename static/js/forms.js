const sendform = (form) => {
    const { action, method } = form;
    const body = new FormData(form);
    form.reset();
    fetch(action, {
        body, 
        method
    }); 
}

let form = document.forms[0];
form.onsubmit = (e) => {
    e.preventDefault();
    sendform(form);
}
