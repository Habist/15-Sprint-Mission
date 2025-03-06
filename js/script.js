document.addEventListener('DOMContentLoaded', function () {
  Promise.all([
    fetch('/include/header.html').then((response) => response.text()),
    fetch('/include/footer.html').then((response) => response.text()),
  ])
    .then((data) => {
      document.querySelector('header').innerHTML = data[0];
      document.querySelector('footer').innerHTML = data[1];
    })
    .catch((error) => console.error('Error fetching HTML:', error))
   
  if (document.querySelector('.login-page')) {
    const toggleButtons = document.querySelectorAll('.toggle-password');
    const passwordFields = document.querySelectorAll('input[type="password"]');

    toggleButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        const type = passwordFields[index].getAttribute('type') === 'password' ? 'text' : 'password';
        passwordFields[index].setAttribute('type', type);

        this.querySelector('img').src =
          type === 'password' ? 'images/common/ic_eye_off.svg' : 'images/common/ic_eye_on.svg';
      });
    });
  }
});
