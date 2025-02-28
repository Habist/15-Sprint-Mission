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
});
