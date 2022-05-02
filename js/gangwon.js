(function(){

  $('.main-btn').on({
    mouseenter:function(){
      $('.sub').stop().slideUp(0);
      $(this).next().stop().slideDown(200);
  
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
    },
    focusin:function(){
      $('.sub').stop().slideUp(0);
      $(this).next().stop().slideDown(200);
  
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
    }
  });

  $('#nav').on({
    mouseleave:function(){
      $('.sub').stop().fadeOut(300);
      $('.main-btn').removeClass('on');
    }
  });

  let cnt=0;
  const slideWrap = $('.slide-wrap');
  const n = 3-1;

  function mainSlide(){
    slideWrap.stop().animate({left:`${-100*cnt}%`},600,function(){
      cnt>n ? cnt=0 : cnt;
      slideWrap.stop().animate({left:`${-100*cnt}%`},0)
    });
  }

  function nextCount(){
    cnt++;
    mainSlide();
  }

  function autoTimer(){
    setId=setInterval(nextCount,3000);
  }
  autoTimer();

  $('.gallery-btn').on({
    click:function(){
      $('.notice-btn').addClass('on');
      $('.gallery-btn').addClass('on');
      $('.notice-box').addClass('on');
      $('.gallery-box').addClass('on');
    }
  })

  $('.notice-btn').on({
    click:function(){
      $('.notice-btn').removeClass('on');
      $('.gallery-btn').removeClass('on');
      $('.notice-box').removeClass('on');
      $('.gallery-box').removeClass('on');
    }
  })

  $('.link-btn').on({
    click:function(){
      $('#modal').stop().fadeIn(300);
    }
  })
  
  $('.close-btn').on({
    click:function(){
      $('#modal').stop().fadeOut(0);
    }
  })

})(jQuery);