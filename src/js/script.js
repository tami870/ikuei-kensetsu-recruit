jQuery(function ($) {
  // ハンバーガーメニューのクリックイベント
  $(".js-hamburger").click(function () {
    $(this).toggleClass("is-active");
    $(".js-sp-nav").toggleClass("is-active");
    $(".header__logoLink").toggleClass("is-active");
    $("body").toggleClass("is-active");
  });

  // 別ページへのアンカーリンク
  var headH = $("header").outerHeight();
  var animeSpeed = 500;
  var urlHash = location.hash; // URLのハッシュタグを取得

  if (urlHash) {
    // ハッシュタグが有る場合
    $("body,html").scrollTop(0);
    setTimeout(function () {
      // 無くてもいいが有ると動作が安定する
      var target = $(urlHash);
      var position = target.offset().top - headH;
      $("body,html").stop().animate(
        {
          scrollTop: position,
        },
        animeSpeed
      );
    }, 0);
  }

  // アコーディオン
  $(".jsAccordionTitle").on("click", function () {
    $(this).next().slideToggle("is-open", "300");
    $(this).slideToggle("is-active", "300");
  });

  // ドロワー アコーディオン
  $(function () {
    $(".js-drawer-accordion").on("click", function () {
      $(this).next().slideToggle();
      $(".sp-nav__accordion-title").toggleClass("is-active", 1000);
    });
  });

  // 社員紹介アコーディオン
  $(".js-staff-toggle").on("click", function () {
    var $content = $(this)
      .closest(".page-staff__article")
      .find(".js-staff-content");
    var $button = $(this);

    $content.slideToggle(300, function () {
      if ($content.is(":visible")) {
        $button.find(".page-staff__toggle-text").text("閉じる");
        $button.addClass("is-active");
      } else {
        $button.find(".page-staff__toggle-text").text("もっと見る");
        $button.removeClass("is-active");
      }
    });
  });

  //FVスライダー
  const fvSwiper = new Swiper(".js-fv-swiper", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    allowTouchMove: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Topicsスライダー
  const swiper2 = new Swiper(".js-topics-swiper", {
    loop: false,
    spaceBetween: 34,
    centeredSlides: false,
    navigation: {
      nextEl: ".topics-button-next",
      prevEl: ".topics-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 2.5,
      },
      1201: {
        slidesPerView: 3.2,
      },
      1600: {
        slidesPerView: 4.2,
      },
    },
  });

  // Blogスライダー
  const swiper3 = new Swiper(".js-blog-swiper", {
    loop: false,
    spaceBetween: 34,
    centeredSlides: false,
    navigation: {
      nextEl: ".blog-button-next",
      prevEl: ".blog-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 2.5,
      },
      1201: {
        slidesPerView: 3.2,
      },
      1600: {
        slidesPerView: 4.2,
      },
    },
  });

  // sp-navアコーディオン
  $(".js-sp-accordion").on("click", function () {
    const $subItems = $(this)
      .closest(".sp-nav__item")
      .find(".sp-nav__sub-items")
      .first();
    $subItems.stop(true, true).slideToggle(300, function () {
      $(this).toggleClass("is-active", $(this).is(":visible"));
    });
    $(this).toggleClass("is-active");
  });

  // 記事本文内のtableをラップして横スクロール対応
  $(function () {
    $(".article__content table").each(function () {
      if (!$(this).parent().hasClass("table-scroll")) {
        $(this).wrap('<div class="table-scroll"></div>');
      }
    });

    // ScrollHint 初期化
    new ScrollHint(".js-scroll", {
      i18n: {
        scrollable: "横スクロール",
      },
    });
  });

  /* ===============================
   たみ追加
   =============================== */

  // worksスライダー
  $(function () {
    var swiper4 = new Swiper(".js-works-swiper", {
      loop: false,
      spaceBetween: 34,
      centeredSlides: false,
      navigation: {
        nextEl: ".works-button-next",
        prevEl: ".works-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 2.5,
        },
        1201: {
          slidesPerView: 3.2,
        },
        1600: {
          slidesPerView: 4.2,
        },
      },
    });
  });
});
