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

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("input[type='password']").forEach(input => {
    // Wrap only if not already wrapped
    if (!input.parentElement.classList.contains("pass-wrap")) {
      let wrapper = document.createElement("div");
      wrapper.classList.add("pass-wrap");

      input.parentNode.insertBefore(wrapper, input);
      wrapper.appendChild(input);

      // Eye icon
      let icon = document.createElement("span");
      icon.classList.add("toggle-pass");
      icon.innerHTML = "🙈"; // closed eye by default
      wrapper.appendChild(icon);

      // Toggle event
      icon.addEventListener("click", function () {
        if (input.type === "password") {
          input.type = "text";
          this.innerHTML = "👁"; // open eye
        } else {
          input.type = "password";
          this.innerHTML = "🙈"; // closed eye
        }
      });
    }
  });
});
