let checkboxs = document.querySelector("input[name=checkboxs]");
let submitT = document.querySelector('#subs');

// term2
checkboxs.addEventListener( 'change', function(event) {
    event.preventDefault();
    if(this.checked) {
        submitT.classList.remove("disabled");
        console.log('check');
    } else {
        submitT.classList.add("disabled");
    }
});