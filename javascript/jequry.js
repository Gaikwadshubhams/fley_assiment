$(document).ready(function () {
  const slides = $(".slides img");
  const dotsContainer = $(".dots-container");

  let counter = 0;
  const slideWidth = slides.first().width();
  const slideCount = slides.length;

  // Create dots
  for (let i = 0; i < slideCount; i++) {
    const dot = $('<span class="dot"></span>');
    dotsContainer.append(dot);
    dot.on("click", function () {
      counter = i;
      changeSlide();
    });
  }

  const dots = $(".dot");
  dots.first().addClass("active");

  function changeSlide() {
    $(".slides").css("transition", "transform 0.5s ease-in-out");
    $(".slides").css(
      "transform",
      "translateX(" + -slideWidth * counter + "px)"
    );

    dots.removeClass("active");
    dots.eq(counter).addClass("active");
  }

  setInterval(function () {
    counter++;
    if (counter === slideCount) {
      counter = 0;
    }
    changeSlide();
  }, 3000);
});

$(document).ready(function () {
  $(".text-item").click(function () {
    var newImage = $(this).data("image");
    $("#project-image").attr("src", newImage);
  });
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
