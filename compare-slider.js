(function(){
  function initSlider(slider){
    var before = slider.querySelector('.ba-before');
    var handle = slider.querySelector('.ba-handle');
    var dragging = false;

    function setPercent(percent){
      percent = Math.max(0, Math.min(100, percent));
      before.style.clipPath = 'inset(0 ' + (100 - percent) + '% 0 0)';
      handle.style.left = percent + '%';
      slider.setAttribute('aria-valuenow', Math.round(percent));
    }

    function percentFromX(clientX){
      var rect = slider.getBoundingClientRect();
      return ((clientX - rect.left) / rect.width) * 100;
    }

    slider.addEventListener('pointerdown', function(e){
      dragging = true;
      slider.setPointerCapture(e.pointerId);
      setPercent(percentFromX(e.clientX));
    });

    slider.addEventListener('pointermove', function(e){
      if(!dragging) return;
      setPercent(percentFromX(e.clientX));
    });

    slider.addEventListener('pointerup', function(){ dragging = false; });
    slider.addEventListener('pointercancel', function(){ dragging = false; });

    slider.addEventListener('keydown', function(e){
      var current = parseFloat(handle.style.left) || 50;
      if(e.key === 'ArrowLeft'){ setPercent(current - 5); e.preventDefault(); }
      if(e.key === 'ArrowRight'){ setPercent(current + 5); e.preventDefault(); }
    });

    setPercent(50);
  }

  var sliders = document.querySelectorAll('.ba-slider');
  for(var i = 0; i < sliders.length; i++){
    initSlider(sliders[i]);
  }
})();
