"use script";

// メインメニュー
$(document).ready(function () {

  // (function ($) {
  let $nav = $("#navArea");
  let $btn = $(".toggle_btn1");
  let $mask = $("#mask");
  let open = "open"; // class
  // menu open close
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on("click", function () {
    $nav.removeClass(open);
  });
});


// サブメニュー 
// ※時折ポップアップ表示がイカれる？
$(function () {
  $('.js-modal-open').each(function () {
    $(this).on('click', function () {
      let target = $(this).data('target');
      let modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
  });
  $('.js-modal-close-btn').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });
});


// メインメニュー：illustration
$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#new_post]').click(function () {
    // スクロールの速度
    let speed = 1000; // ミリ秒
    // アンカーの値取得
    let href = $(this).attr("href");
    // 移動先を取得
    let target = $(href == "new_post" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    let position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});


// メインメニュー：about
$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#about_us]').click(function () {
    // スクロールの速度
    let speed = 1000; // ミリ秒
    // アンカーの値取得
    let href = $(this).attr("href");
    // 移動先を取得
    let target = $(href == "about_us" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    let position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

// 送信確認モーダル
$(function () {
  $('#confi-btn').click(function () {
    $('#overlay, .modal-window').fadeIn();
  });
  // オーバーレイクリックでもモーダルを閉じるように
  $('.close-btn, #overlay, #back').click(function () {
    $('#overlay, .modal-window').fadeOut();
  });
});

$(function () {
  $('#send').click(function () {
    $('#overlay, .modal-window').fadeOut();
    $('.comp-modal').fadeIn();
    $('.comp-modal').fadeOut(4000);
    formElement.reset();
  });
});


