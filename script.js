window.addEventListener('load', function() {
  var progressBar = document.getElementById('progress-bar');
  var width = 0;
  var interval = setInterval(fillProgressBar, 20);

  function fillProgressBar() {
    if (width >= 100) {
      clearInterval(interval);
      window.location.href = 'index.html';
    } else {
      width++;
      progressBar.style.width = width + '%';
    }
  }
});