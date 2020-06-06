// check jQuery
// $(document).ready(function(){
//     if (jQuery) {
//       // jQuery is loaded
//       alert("Yeah!");
//     } else {
//       // jQuery is not loaded
//       alert("Doesn't Work");
//     }
//  });

$(document).ready(function () {
  $(".card img").click(function () {
    var imgName;
    imgName = $(this).attr("src");
    $("body").css("background-image", "url(" + imgName + ")");
  });
});

$(document).ready(function () {
  $(".section-header h2").mouseover(function () {
    $(this).css("animation-play-state", "paused");
    $(
      "<style>.section-header h2::before{animation-play-state:paused}</style>"
    ).appendTo("head");
  });
  $(".section-header h2").mouseout(function () {
    $(this).css("animation-play-state", "running");
    $(
      "<style>.section-header h2::before{animation-play-state:running}</style>"
    ).appendTo("head");
  });
});

// random img for each card
// get random date
function appendLeadingZeroes(n) {
  if (n <= 9) {
    return "0" + n;
  }
  return n;
}
function randomDate(start, end) {
  let current_datetime = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  let formatted_date =
    current_datetime.getFullYear() +
    "" +
    appendLeadingZeroes(current_datetime.getMonth() + 1) +
    "" +
    appendLeadingZeroes(current_datetime.getDate());
  return formatted_date;
}
// random img for each card
$(function () {
  var imgName = "BingImageOfTheDay_";
  var x;
  x = randomDate(new Date(2020, 4, 23), new Date());

  $(".card img").each(function () {
    x = randomDate(new Date(2020, 4, 23), new Date());

    $(this).attr("src", "images/" + imgName + x + ".jpg");
  });
});

// navbar auto hide
var navHeight = $("#navbar1").outerHeight();
$(function () {
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    // alert(navHeight);
    if (prevScrollpos < currentScrollPos) {
      $("#navbar1").css("top", -navHeight);
    } else {
      $("#navbar1").css("top", 0);
    }
    prevScrollpos = currentScrollPos;
  };
});

$(function () {
  $("#jumboBtn").click(function () {
    $("#hello").animate({ fontSize: "60px", opacity: "0.9" }, 1000);
  });
});
