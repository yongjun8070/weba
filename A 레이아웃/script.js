$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".nav>ul>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp();
    });
})
$(function(){
    let currentindex  = 0;

    setInterval(function(){
        let nextindex = (currentindex + 1)%3

        $(".slider").eq(currentindex).fadeOut(1200);
        $(".slider").eq(nextindex).fadeIn(1200);

        currentindex = nextindex;

    },3000);
});

$(function(){
    $(".tabbtn a:nth-child(2)").click(function(){
        $(".notice").hide();
    });
    $(".tabbtn a:nth-child(2)").click(function(){
        $(".gallery").show();
    });
    $(".tabbtn a:nth-child(1)").click(function(){
        $(".gallery").hide();
    });
    $(".tabbtn a:nth-child(1)").click(function(){
        $(".notice").show();
    });

    $(".tabbtn a:nth-child(2)").click(function(){
        $(".tabbtn a:nth-child(1)");
    });
});

$('.tabbtn a').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
});

$('.notice ul li:nth-child(1)').click(function(){
    $(".pop").show();
});
$('.button').click(function(){
    $(".pop").hide();
})
