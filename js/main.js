$(document).ready(function () {
  //Табы меню
  $(document).ready(function () {
    var tabsItem = $(".header-nav__link");
    var contentItem = $(".header-nav__dropdown");
    tabsItem.on("click", function (event) {
      var activeContent = $(this).attr("data-target");
      tabsItem.removeClass("header-nav__link--arrow-active");
      contentItem.removeClass("header-nav__dropdown--active");
      $(activeContent).addClass("header-nav__dropdown--active");
      $(this).addClass("header-nav__link--arrow-active");
    });
  });
  //мобильное меню
  $(document).ready(function () {
    var menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", function () {
      document
        .querySelector(".header__navbar-bottom")
        .classList.toggle("header__navbar-bottom--active");
    });
  });
  //модальное окно
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  document.body.addEventListener(
    "keyup",
    function (e) {
      var key = e.keyCode;
      if (key == 27) {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
      }
    },
    false
  );
  //Смена цвета меню при скроле
  var scrolled;
  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
      $(".header,.dropdown-content").css({ background: "#183B56" });
    }
    if (100 > scrolled) {
      $(".header, .dropdown-content").css({ background: "" });
    }
  };

  const examplesSwiper = new Swiper(".examples-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".examples-button--next",
      prevEl: ".examples-button--prew",
    },
  });

  const articleSwiper = new Swiper(".article-swiper__container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".article-button--next",
      prevEl: ".article-button--prew",
    },
  });
  //Валидация форм
  $("form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, укажите ваше имя",
          minlength: "Имя должно состоять более чем из 2 символов",
        },
        email: {
          required: "Введите свой электронный адрес",
          email: "Формат ввода: name@domain.com",
        },
        phone: {
          required: "Ввведите ваш телефон",
          minlength: "Телефон должен состоять из 11 цифр",
        },
      },
    });
  });
  //Маска на телефон
  $(document).ready(function () {
    $(".phone").mask("+7 (000) 000-00-00");
  });
  var go_down = jQuery("body");
  jQuery(function () {
    $("#Go_Top").hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $("#Go_Top").fadeIn("slow");
    var scrollDiv = $("#Go_Top");
    $(window).scroll(function () {
      if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow");
      else $(scrollDiv).fadeIn("slow");
    });
    $("#Go_Bottom").hide().removeAttr("href");
    if ($(window).scrollTop() <= go_down.height() - "999")
      $("#Go_Bottom").fadeIn("slow");
    var scrollDiv_2 = $("#Go_Bottom");
    $(window).scroll(function () {
      if ($(window).scrollTop() >= go_down.height() - "999")
        $(scrollDiv_2).fadeOut("slow");
      else $(scrollDiv_2).fadeIn("slow");
    });
    $("#Go_Top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $("#Go_Bottom").click(function () {
      $("html, body").animate({ scrollTop: go_down.height() }, "slow");
    });
  });
});
$(".modal-container").on("click", function (e) {
  if (!event.target.closest(".modal__dialog")) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});
