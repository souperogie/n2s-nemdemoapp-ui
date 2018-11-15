let checkbox = document.querySelector("input[name=checkbox]");
let submit = document.querySelector('#sub');
let submitT = document.querySelector('#subs');

// term 1
checkbox.addEventListener( 'change', function(event) {
    event.preventDefault();
    if(this.checked) {
        submit.classList.remove("disabled");
    } else {
        submit.classList.add("disabled");
    }
});

// term2
// checkbox.addEventListener( 'change', function(event) {
//     event.preventDefault();
//     if(this.checked) {
//         submitT.classList.remove("disabled");
//         console.log('check');
//     } else {
//         submitT.classList.add("disabled");
//     }
// });