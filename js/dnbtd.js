$(function () {
  var res = document.location.href
    .substr(document.location.href.lastIndexOf("/") + 1)
    .split("#");
  var fileName = res[0];
  res = fileName.replace(".html", "").split("-");
  var fileNumber = parseInt(res[1]);
  if (fileName == "index.html") {
    fileNumber = 1;
  }

  var j = 1;
  var itemName = "";
  var startImgItem = 1;

  switch (fileNumber) {
    case 2:
      var startImgItem = 29;
      break;
    case 3:
      var startImgItem = 48;
      break;
    case 4:
      var startImgItem = 67;
      break;
    case 5:
      var startImgItem = 81;
      break;
    case 6:
      var startImgItem = 100;
      break;
  }

  // curtain when screen small
  $(window).resize(function () {
    let sidebarWidth = parseInt($("#mySidebar").css("width").replace("px", ""));
    let sidebarOpen = sidebarWidth > 10 ? true : false;
    if ($(window).width() < 600 && sidebarOpen) {
      $(".overlay").addClass("active");
    } else {
      $(".overlay").removeClass("active");
    }
  });

  // click overlay hide sidebar
  $(".overlay").click(function () {
    $(this).removeClass("active");
    $("#mySidebar").css("width", "0px");
    $(".openbtn").css("left", "-10px");
  });
  // -----side bar button
  $(".openbtn").click(function () {
    var sidebarWidth = parseInt($("#mySidebar").css("width").replace("px", ""));
    var sidebarOpen = sidebarWidth > 10 ? true : false;
    // -----side bar button get curtain div
    if ($(window).width() < 600) {
      if (!sidebarOpen) {
        $(".overlay").addClass("active");
      } else {
        $(".overlay").removeClass("active");
      }
    }
    // action show sidebar
    if (!sidebarOpen) {
      $("#mySidebar").css("width", "250px");
      $(this).css("left", "238px");
    } else {
      $("#mySidebar").css("width", "0px");
      $(this).css("left", "-10px");
    }
    //hide open button
    if ($("#mySidebar").scrollTop() < 10) {
      $(".openbtn").css("left", "-10px");
    }
  });
  $(".closebtn").click(function () {
    $("#mySidebar").css("width", "0");
    $(".openbtn").css("left", "-10px");
    // -----side bar button get curtain div
    if ($(window).width() < 600) {
      $(".overlay").toggleClass("active");
    }
  });

  // ------asign contentt for #allPage

  $('#allPage div[class="page"]').each(function () {
    $(this).attr("id", "list-item-" + j); // set id for page div
    $(this)
      .children("h1")
      .html(contents[j - 1].heading); //content for h1 in page
    $(this)
      .children("p")
      .html(contents[j - 1].content); //content for p in page
    $(this)
      .children("a")
      .attr("href", "images/dnbtd/" + startImgItem + ".jpg"); //href for a tag in page

    // ------img address in page
    $(this)
      .children("a")
      .children("img")
      .attr("src", "images/dnbtd/" + startImgItem + ".jpg");

    //-------get name for side bar list
    itemName = startImgItem + ". " + $(this).children("h1").html();
    $("#mySidebar a")
      .eq(j - 0)
      .html(itemName);
    $("#mySidebar a")
      .eq(j - 0)
      .attr("href", "#" + "list-item-" + j);
    startImgItem++;
    j++;
  });

  // ---hr scroll---
  var $window = $(window);
  $(document).scroll(function () {
    hr_scroll();
  });
  function hr_scroll() {
    var scroll_top = $window.scrollTop();
    $("hr").each(function () {
      var $this = $(this),
        from_top = $this.offset().top - scroll_top - 100;
      // alert(from_top);
      if (from_top < 300 && from_top > 0) {
        $this.css("width", 100 - (from_top / 300) * 100 + "%");
      }
    });
  }

  // window scroll to bottom

  $(window).scroll(function () {
    if (
      $(window).scrollTop() + $(window).height() >
      $(document).height() - 600
    ) {
      //reach bottom
      let amountLeft = contents.length - $("#allPage div").length;
      if (amountLeft >= 3 && amountLeft > 0) {
        add_content(3);
      } else {
        add_content(amountLeft);
      }
    }
  });

  // scroll side bar
  $("#mySidebar").scroll(function () {
    //hide undide open button
    if ($(this).scrollTop() < 10) {
      $(".openbtn").css("left", "-10px");
    } else {
      $(".openbtn").css("left", "238px");
    }
    // reach end
    if (
      $(this).scrollTop() + $(this).innerHeight() >=
      $(this)[0].scrollHeight
    ) {
      let amountLeft = contents.length - $("#allPage div").length;
      if (amountLeft >= 3) {
        add_content(3);
      } else {
        add_content(amountLeft);
      }
    }
  });

  // function add more content when scroll to bottom
  function add_content(xTimes) {
    for (i = 1; i <= xTimes; i++) {
      $("#allPage").append(
        "<div class=page><h1>...</h1><a href='images/dnbtd/1.jpg'><img class=' img-thumbnail rounded mx-auto d-block box' alt='1'/></a><p>...</p> <hr/></div>"
      );
      $("#mySidebar").append(
        "<a class='list-group-item list-group-item-action' href='#'>Item 5</a>"
      );
      var count = $("#allPage div").length;
      // alert(startImgItem);

      var $selectedDiv = $('#allPage div[class="page"]').last();
      $selectedDiv.attr("id", "list-item-" + count); // set id for page div
      $selectedDiv.children("h1").html(contents[count - 1].heading); //contetnt for h1 in page
      $selectedDiv.children("p").html(contents[count - 1].content); //content for p in page
      $selectedDiv
        .children("a")
        .attr("href", "images/dnbtd/" + startImgItem + ".jpg"); //href for a tag in page
      // ------img address in page
      $selectedDiv
        .children("a")
        .children("img")
        .attr("src", "images/dnbtd/" + startImgItem + ".jpg");
      //-------get name for side bar list
      var itemName2 = startImgItem + ". " + $selectedDiv.children("h1").html();
      $("#mySidebar a")
        .eq(count - 0)
        .html(itemName2);
      $("#mySidebar a")
        .eq(count - 0)
        .attr("href", "#" + "list-item-" + count);
      startImgItem++;
    }
  }
  // read more - less
  $("#right-bar input").click(function () {
    var more = $("#right-bar label").html();
    if (more == "read more") {
      $("#right-bar label").html("read less");
    } else $("#right-bar label").html("read more");
  });
  // add more pagination
  addMorePagination(2);
  function addMorePagination(numberOfNew) {
    for (i = 1; i <= numberOfNew; i++) {
      $(".pagination ").each(function () {
        var lengthOfPagination = $(this).children("li").length;
        var newPagination = `<li class="page-item"> <a class="page-link" href="#">${
          lengthOfPagination - 1
        }</a> </li>`;
        $(this).children("li").last().before(newPagination);
      });
    }
  }
  //  pagination
  $(".pagination a").each(function () {
    var nameTag = $(this).html();
    var nameLabel = $(this).attr("aria-label");
    // add active
    if (nameTag == fileNumber) {
      $(this).parent("li").addClass("active");
    }
    // // add disable
    if (nameLabel == "Previous" && fileNumber == 1) {
      $(this).parent("li").addClass("disabled");
    }
    if (nameLabel == "Next" && fileNumber == 5) {
      $(this).parent("li").addClass("disabled");
    }

    // link for nameTag
    if (nameTag == 1) {
      $(this).attr("href", "index.html");
    } else if (nameLabel == "Previous" && fileNumber == 2) {
      $(this).attr("href", "index.html");
    } else if (nameLabel == "Previous" && !(fileNumber == 2)) {
      $(this).attr("href", "dnbtd-" + (fileNumber - 1) + ".html");
    } else if (nameLabel == "Next") {
      $(this).attr("href", "dnbtd-" + (fileNumber + 1) + ".html");
    } else {
      $(this).attr("href", "dnbtd-" + nameTag + ".html");
    }
  });
});
