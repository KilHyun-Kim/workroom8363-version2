module.exports = {
 HTML:function(title,body){
     return `
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/defaultwr.css">
    <link rel="stylesheet" href="./css/wrcss1.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif+KR&display=swap" rel="stylesheet">
    
    <title>workroom8363 - ${title}</title>
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="/js/slider.js"></script>
    <script src="js/scrolltrigger.js"></script>
    <script src="/ScrollTrigger-master/ScrollTrigger.min.js"></script>

    <script>
        
    fetch('object_list').then(function(response){
        response.text().then(function(text){
            
            var items = text.split(',');
            
            var i = 0;
            var j = 0;
            var tags = '';
            while (i<items.length){
                var item =  items[i];
                var tag = '<li><div class="product_listArray"><a href="object/0"><img src="'
                +items[i]+
                '"</a></div><div class="product_info"><ul class="name"><li><span>'
                +items[i+1]+
                '</span></li></ul><ul class="price"><li><span>'
                +items[i+2]+
                '</span></li></ul></div></li>'
                tags = tags + tag;
                i = i + 3;
                j = j + 1;
            }
            document.querySelector('.product_list').innerHTML = tags;
        })
    });
    </script>

</head>
<body>
    <div class="container">
    <header>
        <!--logo-->
        <div class="logo"><a href="/">WorKroom8363</a></div>
       
    </header>
    <nav>
        <!--메뉴바-->
        <ul>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/object">Object</a></li>
            <li><a href="/onedayclass">Oneday Class</a></li>
            <li><a href="#">Q & A</a></li>
            <li><a href="https://www.instagram.com/workroom8363/?igshid=1b6l8y8av4fq4" target="_blank"><img src="/image/insta.png" alt="instagram"></a></li>
        </ul>
        
    </nav>
    ${body}
    <footer>
        <div class="footer_container">
            <ul class="shop_pre">
                <li>
                    <pre>
010-5695-2014
MON - FRI : 11AM - 6PM
BREAKTIME : 1PM - 2PM
SAT SUN HOLIDAY OFF
국민 00000-01-0000
심대명(WORKROOM8363))
                    </pre>

                </li>
            </ul>
            <ul class="shop_info">
                <li>
                    COMPANY : WORKROOM8363 . CEO . CPO : SSIM DAE MYOUNG
                </br>
                    ADDRESS : 3F, 30, EUNHAENG-RO 218BEON-GIL, SIHEUNG-SI, GYEONGGI-DO, REPUBLIC OF KOREA
                </br>
                    BUSINESS LICENSE : 405-10-98106
                
                </br>    
                    COPYRIGHT (C) WORKROOM8363
                </li>
            </ul>
            <ul class="footer_link">
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">OBJECT</a></li>
                <li><a href="#">ONEDAYCLASS</a></li>
                <li><a href="#">Q&A</a></li>
            </ul>

        </div>
    </footer>
   
    </div>
</body>
</html>
    `;
     
 }   
}

// 여기서 각각마다 사용한것들 정리해서 변수로 집어넣기 