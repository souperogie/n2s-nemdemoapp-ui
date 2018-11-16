$(function(){
    $("#show").load("include/nav.html"); 
  });

     //Load footer
     $(function(){
        $("#footer").load("include/footer.html"); 
      });


//cashout

let sub = document.querySelector('.sub');
let cashout = document.querySelector('#amount').addEventListener('click', function(){
  if(cashout.value == '') {
    sub.classList.add("disabled");
    console.log(cashout.value);
  } else {
    sub.classList.remove("disabled");
  }
});

