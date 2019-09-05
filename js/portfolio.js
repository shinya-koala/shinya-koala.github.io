$(function (){
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
      group: "group02",
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
        group: "group03",
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
          group: "group04",
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
            group: "group05",
            loop: true,
            title: "FANCL"
          });
});
