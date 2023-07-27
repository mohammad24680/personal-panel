$(".header_menu>ul>li, .container_head>nav>ul>li").click(function () {
  $(this).css({
    "border-bottom": "2px solid #fff",
    color: "#fff",
  });
  $(this).prevAll().css({
    "border-bottom": "none",
    color: "rgb(113 119 144 / 78%)",
  });
  $(this).nextAll().css({
    "border-bottom": "none",
    color: "rgb(113 119 144 / 78%)",
  });
});

$(".dropdown>i").click(function () {
  $(this).children("ul").css("opacity", "1");
  $(".dark").fadeIn(500);
});
$(".dark").click(function () {
  $(".dropdown>i").children("ul").css("opacity", "0");
  $(".dark").fadeOut(500);
});
$(".update_button").click(function () {
  $(".update_request").css("opacity", "1");
  $(".update_request").css("z-index", "30");

  $(".dark2").fadeIn(500);
});
$(".hide_section").click(function () {
  $(".update_request").css("opacity", "0");
  $(".update_request").css("z-index", "0");
  $(".dark2").fadeOut(500);
});

// light light light light

$(".dark_light").click(function () {
  document.querySelector(".wrapper2").classList.toggle("darkWrapper");
  document.querySelector(".wrapper2").classList.toggle("darkside");
  document.querySelector(".wrapper2").classList.toggle("darkwindow");
  $(".update_request").toggleClass("update_requestlight");
  $(".lightform").toggleClass("lightform2");
  $(".dark").toggleClass("darkmainlight");
  $(".content_button").toggleClass("midbordercolor");
  $(".dark_light").toggleClass("dark_light2");
  $(this).children("svg").toggleClass("mmd").toggleClass("mmd2");
  $(".app").toggleClass("app_light");
  $(".container_body").toggleClass("container_bodylight");
  $(".container_head, .header").toggleClass("borderbottom_light");
  $(".main_container, .left_menu").toggleClass("border_light");
  $(
    "a, h3 .left_menu>div>nav>ul>li>i, span, .dropdown>i, .content_button, .cards>p, .left_menu>div>nav>ul>li>i, .container_head>div>h3, .update_request>div:nth-of-type(2)>div>button:nth-of-type(1)"
  ).toggleClass("text_color");
  $("input").toggleClass("input_light");
  $(".update_request>div:nth-of-type(2)>div>button:nth-of-type(1)").toggleClass(
    "borderdark"
  );
  $(".notification>nav>ul>li>a").toggleClass("icontop_light");
  $(".dropdown>i>ul").toggleClass("dropdownlight");
});

const darkLightButton = document.querySelector(".dark_light");
/**
 * @description mamad
 * @param {Event} element Target Element
 * @function
 */
const darkChanger = (element) => {
  document.querySelector(".video").classList.toggle("videolight");
  document.querySelector(".check12").classList.toggle("checklight");
  document.querySelector(".check13").classList.toggle("checklight");
};
darkLightButton.addEventListener("click", darkChanger);

// const darkLightButton = document.querySelector(".dark_light")
//     /**
//      * @description Haha mamad
//      * @param {Event} element Target Element
//      * @function
//      */
// const darkChanger = (element) => {
//     const videoTag = document.querySelector(".video")
//     videoTag.classList.toggle(".videolight");
// }
// darkLightButton.addEventListener("click", darkChanger)
