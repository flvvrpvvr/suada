$(window).on('load', function() {
setTimeout(function() {
  $(".preloader").addClass('hidden');
      $('body').removeClass('loading');
    }, 2000);
  });
document.querySelector('#toggle').addEventListener('change', function() {
       document.querySelector('body').classList.toggle('loading')
})

var gradient =
  '<defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad"><stop offset="0%" stop-color="rgb(255, 88, 88)" stop-opacity="1"></stop><stop offset="100%" stop-color="rgb(248, 87, 166)" stop-opacity="1"></stop></defs>';

$(".percents").each(function(i) {
  var circle = new ProgressBar.Circle(this, {
    color: "url(#gradient)",
    easing: "linear",
    strokeWidth: 6,
    // duration: 1500,
    text: {
      className: "percents-text",
      value: null,
      style: {
        position: "absolute",
        left: "54%",
        top: "50%",
        padding: "0px",
        margin: "0px",
        transform: "translate(-50%, -50%)"
      }
    }
  });
  var value = $(this).attr("data-value") / 100;
  circle.svg.insertAdjacentHTML("afterbegin", gradient);
  circle.path.style.strokeLinecap = "round";
  //start on scroll
  $(window).scroll(function() {
    /* Check the location of each desired element */
    $(".percents").each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it in */
      if (bottom_of_window > bottom_of_object) {
        circle.animate(value, {
          duration: 1000,
          step: function(state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%");
          }
        });
      }
    });
  });
});
