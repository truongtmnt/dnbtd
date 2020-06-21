$(function () {
  $("#btnSidebar").click(function () {
    $("#mySidebar").toggleClass("active");

    // $("#btnSidebar").toggleClass("active");
  });

  //   get  name for itemList
  var itemName = "";
  var i = 0;
  $("#allPage h1").each(function () {
    itemName = $(this).html();

    $("#mySidebar a")
      .eq(i + 0)
      .html(itemName);
    i++;
  });
});
