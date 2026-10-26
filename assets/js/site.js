/* Site-specific behaviour (loaded after main.min.js, which provides jQuery). */
$(function () {
  // "Show all / Show fewer" toggle for the news list and similar lists.
  $(".news__toggle").on("click", function () {
    var $btn = $(this);
    var $list = $($btn.data("target"));
    var expanded = $list.hasClass("is-expanded");
    $list.toggleClass("is-expanded", !expanded);
    $btn.text(expanded ? $btn.data("more") : $btn.data("less"));
    $btn.attr("aria-expanded", String(!expanded));
  });

  // Publication filter buttons (All / Journal / Conference / Preprint).
  $(".pub-filter").on("click", "button", function () {
    var type = $(this).data("type");
    $(this).addClass("is-active").siblings().removeClass("is-active");
    $(".pub").each(function () {
      var show = type === "all" || $(this).data("type") === type;
      $(this).toggle(show);
    });
    // hide year headings that have no visible publications
    $(".pub-year").each(function () {
      var $group = $(this).next(".pub-group");
      $(this).toggle($group.find(".pub:visible").length > 0);
    });
  });
});
