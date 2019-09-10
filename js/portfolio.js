$(function () {
  var topBtn = $('#page-top');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  //要素を一回消して再描写
  $('#contents').hide().fadeIn('slow');
  //HALベーカリーのモーダルウィンドウ
  $(".iziModal_iframe_HALbakery").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group01",
    loop: true,
    title: "HALベーカリー"
  });
  //Guillereのモーダルウィンドウ
  $(".iziModal_iframe_Guillere").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group01",
    loop: true,
    title: "Guillere"
  });
  //HAL幼稚園のモーダルウィンドウ
  $(".iziModal_iframe_HALkids").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group01",
    loop: true,
    title: "HAL幼稚園"
  });
  //アクアリウム de ショップのモーダルウィンドウ
  $(".iziModal_iframe_aquarium").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group01",
    loop: true,
    title: "アクアリウム de ショップ"
  });
  //FANCELのモーダルウィンドウ
  $(".iziModal_iframe_FANCL").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group02",
    loop: true,
    title: "FANCL"
  });
  //CastingAsiaのモーダルウィンドウ
  $(".iziModal_iframe_asia").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group02",
    loop: true,
    title: "CastingAsia"
  });
  //HELP MEET!のモーダルウィンドウ
  $(".iziModal_iframe_HELP-MEET").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group02",
    loop: true,
    title: "HELP MEET!"
  });
    //Match!のモーダルウィンドウ
    $(".iziModal_iframe_Match").iziModal({
      iframe: true,
      fullscreen: true,
      headerColor: '#5ABE3B',
      iframeHeight: 450,
      width: '750px',
      group: "group03",
      loop: true,
      title: "Match!"
    });
  //プロフィールのモーダルウィンドウ
  $(".iziModal_iframe_profile").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group03",
    loop: true,
    title: "プロフィール"
  });
  //s新規登録画面のモーダルウィンドウ
  $(".iziModal_iframe_new-insert").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group03",
    loop: true,
    title: "新規登録画面"
  });
  //メッセージのモーダルウィンドウ
  $(".iziModal_iframe_message").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group03",
    loop: true,
    title: "メッセージ"
  });
  //料理アプリのモーダルウィンドウ
  $(".iziModal_iframe_cook-app").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group03",
    loop: true,
    title: "料理アプリ"
  });
  //お天気アプリのモーダルウィンドウ
  $(".iziModal_iframe_weather-app").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group03",
    loop: true,
    title: "お天気アプリ"
  });
  //音楽アプリのモーダルウィンドウ
  $(".iziModal_iframe_music-app").iziModal({
    iframe: true,
    fullscreen: true,
    headerColor: '#5ABE3B',
    iframeHeight: 450,
    width: '750px',
    group: "group03",
    loop: true,
    title: "音楽アプリ"
  });
});
