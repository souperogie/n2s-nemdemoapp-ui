let checkbox = document.querySelector("input[name=checkbox]");
let submit = document.querySelector('#sub');


// term 1
checkbox.addEventListener( 'change', function(event) {
    event.preventDefault();
    if(this.checked) {
        submit.classList.remove("disabled");
    } else {
        submit.classList.add("disabled");
    }
});

