

console.log("hello");

$(function () {
  $(".footer-title").on("click", function () {
    if ($(window).width() > 768) {
      return;
    }
    const title = $(this);

    const icon = title.find(".footer-arrow");

    const links = title.next(".footer-links");

    links.slideToggle(300);
    if (icon.text() === "x") {
      icon.text("+");
    } else {
      icon.text("x");
    }
  });
});
