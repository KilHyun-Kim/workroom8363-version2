$(function(){
    var container = $('.slideshow'),
        slideGroup = container.find('.slideshow_slides'),
        slides = slideGroup.find('a'),
        nav = container.find('.slideshow_nav'),
        indicator = container.find('.indicator'),
        slideCount = slides.length,
        indicatorHtml = '',
        currentIndex = 0,
        duration = 500,
        interval = 3500,
        timer; 

        // 슬라이드를 가로로 배열
        // slides 마다 할일 , left 0% 100% 200% 300%
        console.log(slides); 
        slides.each(function(i){
            var newLeft = i * 100 +'%';
            $(this).css({left:newLeft});
            //<a href="">1</a>
            indicatorHtml += '<a href="">'+(i+1)+'</a>';
            console.log(indicatorHtml);
        });// slides.each

        indicator.html(indicatorHtml);

        // 슬라이더 이동 함수
        function goToSlide(index){
            // i 0 left:0% , i 1 left:-100%, i2 left:-200%
            slideGroup.animate({left:-100*index + '%'},
            duration);
            currentIndex = index;
            console.log(currentIndex);

            updateNav(); // 처음인지, 마지막인지 검사
        
        }//goToSlide

        function updateNav(){
            var navPrev = nav.find('.prev');
            var navNext = nav.find('.next');
            // 처음 currentIndex : 0, 이전버튼이 안보이도록
            // 마지막 currentIndex : 3. 다음버튼이 안보이도록

            if(currentIndex == 0){
                navPrev.addClass('disabled');
            }else{
                navPrev.removeClass('disabled');
            }

            if(currentIndex == slideCount - 1){
                navNext.addClass('disabled');
            }else{
                navNext.removeClass('disabled');
            }

            indicator.find('a').removeClass('active');
            // .eq(숫자) 
            indicator.find('a').eq(currentIndex).addClass('active');
            // 모든요소에서 active 빼고, 원하는 요소에만 active 추가

            // 반대로 원하는 요소에만 active를 추가하고 나머지들에서 active를 빼기
            // indicator.find('a').eq(currentIndex).addClass('active').slblings().removeClass('active');
        } //updateNav

        // 인디케이터로 이동하기
        indicator.find('a').click(function(e){
            e.preventDefault();
            var idx = $(this).index();
            //console.log(idx);
            goToSlide(idx);
        });

        // 좌우 버튼으로 이동하기
        // 다음버튼 클릭 c+1 -> gotoslide(?)
        // 이전버튼 클릭 c-1 -> gotoslide(?)

        // nav.find('.prev').click(function(e){
        //     e.preventDefault();
        //     // var i = currentIndex - 1;
        //     goToSlide(currentIndex - 1);
        // });

        // nav.find('.next').click(function(e){
        //     e.preventDefault();
        //     // var i = currentIndex + 1;
        //     goToSlide(currentIndex + 1);
        // });

        nav.find('a').click(function(e){
            e.preventDefault();
            if($(this).hasClass('prev')){
                goToSlide(currentIndex - 1);
            }else{
                goToSlide(currentIndex + 1);
            }
        });

        updateNav();

        // 자동 슬라이드 함수
        function startTimer(){
            // 일정시간 마다 할일
            // setInterval(할일, 시간), clearInterval(이름)
            // 할일(함수) function(){실제로 할일}
            timer = setInterval(function(){
            var nextIndex = (currentIndex + 1) % slideCount;
            goToSlide(nextIndex);
        },interval);}
        
    
        startTimer();
        function stopTimer(){
            clearInterval(timer);
        }

        container.mouseenter(function(){
            stopTimer();
        })
        .mouseleave(function(){
            startTimer();
        });
    }

);
