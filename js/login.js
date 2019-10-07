const thisIsBtn = document.getElementsByClassName("loginBtn")[0];
const userId = document.getElementsByClassName('inputId')[0];
const userPw = document.getElementsByClassName('inputPassword')[0];

document.addEventListener('keyup',function() {
  const idValue = userId.value;
  const pwValue = userPw.value;

  if(idValue && pwValue){
    thisIsBtn.style.opacity = 1;
    thisIsBtn.style.cursor = 'pointer'
    is_ok_to_submit = true;
  } else {
    thisIsBtn.style.opacity = 0.3;
  }
})