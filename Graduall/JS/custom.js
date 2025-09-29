// document.addEventListener('click',function(e){
//   if(e.target.classList.contains('grad-toggle-pass')){
//     var btn=e.target;
//     var form=btn.closest('form');
//     if(!form) return;
//     var input=form.querySelector('input[type="password"]');
//     if(!input) return;
//     if(input.type==='password'){input.type='text';btn.textContent='Hide';}
//     else{input.type='password';btn.textContent='Show';}
//   }
// });

jQuery(document).ready(function($){
  // simple fade effect on form submit
  $(".grad-form").on("submit", function(){
    $(this).css("opacity","0.5");
  });
});


