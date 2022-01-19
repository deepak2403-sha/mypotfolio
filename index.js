$(".about").click(function()
{
  $('html, body').animate({scrollTop: $(".sec1").offset().top}, 400);
});

$(".portfolio").click(function()
{
  $('html, body').animate({scrollTop: $(".sec2").offset().top}, 400);
});

$(".reach").click(function()
{
  $('html, body').animate({scrollTop: $(".sec3").offset().top}, 400);
});