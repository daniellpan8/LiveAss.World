window.addEventListener('load', function() {
  var progressBar = document.getElementById('progressBar');
  var progressText = document.getElementById('percentage');
  var width = 0;
  var delay = 35;
  var interval = setInterval(fillProgressBar, delay);

  function fillProgressBar() {
    if (width > 80){
        delay = 50;
    }

    if (width >= 100) {
      clearInterval(interval);
      window.location.href = 'index.html';
    } else {
      

      width++;
      progressBar.style.width = width + '%';
      progressText.textContent = width + '%';
      
    }
  }
});