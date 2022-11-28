//Validación de email
function validation(){
  const form = document.getElementById('form');
  const email = document.getElementById('email').value.trim();
  const text = document.getElementById('text');
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //El pattern permite que el email a ingresar tenga la forma correcta


  if (email.match(pattern)) {
    form.classList.add('valid')
    form.classList.remove('invalid');
    text.innerHTML = "Tu email es válido";
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = "Tu email es inválido";
    text.style.color = "ff0000";
  };
}