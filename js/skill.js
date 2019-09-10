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
    //Engineerのモーダルウインドウ
    //javascriptのモーダルウィンドウ
    $(".iziModal_iframe_javascript").iziModal({
        iframe: true,
        fullscreen: true,
        headerColor: '#5ABE3B',
        iframeHeight: 450,
        width: '750px',
        group: "group01",
        loop: true,
        title: "javascript",
    });
    //jQueryのモーダルウィンドウ
    $(".iziModal_iframe_jquery").iziModal({
        iframe: true,
        fullscreen: true,
        headerColor: '#5ABE3B',
        iframeHeight: 450,
        width: '750px',
        group: "group01",
        loop: true,
        title: "jquary",
    });
    //PHPのモーダルウィンドウ
    $(".iziModal_iframe_php").iziModal({
        iframe: true,
        fullscreen: true,
        headerColor: '#5ABE3B',
        iframeHeight: 450,
        width: '750px',
        group: "group01",
        loop: true,
        title: "PHP",
    });
    //javaのモーダルウィンドウ
    $(".iziModal_iframe_java").iziModal({
        iframe: true,
        fullscreen: true,
        headerColor: '#5ABE3B',
        iframeHeight: 450,
        width: '750px',
        group: "group01",
        loop: true,
        title: "java",
    });
    //PHPのモーダルウィンドウ
    $(".iziModal_iframe_react").iziModal({
        iframe: true,
        fullscreen: true,
        headerColor: '#5ABE3B',
        iframeHeight: 450,
        width: '750px',
        group: "group01",
        loop: true,
        title: "ruby",
    });
    //Web-Designのモーダルウィンドウ
    //photoshopのモーダルウィンドウ
    $(".iziModal_iframe_photoshop").iziModal({
        iframe: true,
        fullscreen: true,
        headerColor: '#5ABE3B',
        iframeHeight: 450,
        width: '750px',
        group: "group02",
        loop: true,
        title: "photoshop",
    });
    //illustratorのモーダルウィンドウ
    $(".iziModal_iframe_illustrator").iziModal({
        iframe: true,
        fullscreen: true,
        headerColor: '#5ABE3B',
        iframeHeight: 450,
        width: '750px',
        group: "group02",
        loop: true,
        title: "illustrator",
    });
    //sassのモーダルウィンドウ
    $(".iziModal_iframe_sass").iziModal({
        iframe: true,
        fullscreen: true,
        headerColor: '#5ABE3B',
        iframeHeight: 450,
        width: '750px',
        group: "group02",
        loop: true,
        title: "sass",
    });
    //HTML5のモーダルウィンドウ
    $(".iziModal_iframe_HTML5").iziModal({
        iframe: true,
        fullscreen: true,
        headerColor: '#5ABE3B',
        iframeHeight: 450,
        width: '750px',
        group: "group02",
        loop: true,
        title: "HTML5",
    });
    //CSS3のモーダルウィンドウ
    $(".iziModal_iframe_CSS3").iziModal({
        iframe: true,
        fullscreen: true,
        headerColor: '#5ABE3B',
        iframeHeight: 450,
        width: '750px',
        group: "group02",
        loop: true,
        title: "CSS3",
    });
    //UX/UIのモーダルウィンドウ
    $(".iziModal_iframe_UXUI").iziModal({
        iframe: true,
        fullscreen: true,
        headerColor: '#5ABE3B',
        iframeHeight: 450,
        width: '750px',
        group: "group02",
        loop: true,
        title: "UX/UI",
    });
    //XDのモーダルウィンドウ
    $(".iziModal_iframe_XD").iziModal({
        iframe: true,
        fullscreen: true,
        headerColor: '#5ABE3B',
        iframeHeight: 450,
        width: '750px',
        group: "group02",
        loop: true,
        title: "XD",
    });
});
