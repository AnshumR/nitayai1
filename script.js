window.addEventListener('scroll', function() {
    var video = document.getElementById('intro-video');
    var introPosition = document.getElementById('introduction').getBoundingClientRect().top;
    var videoPosition = video.getBoundingClientRect().top;
    
    if (videoPosition < introPosition) {
      video.play();
    }
  });
  

  