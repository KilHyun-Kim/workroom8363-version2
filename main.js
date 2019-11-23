const express = require('express')
const app = express();
const template = require('./lib/template.js');

app.use(express.static(__dirname +'/public'));
app.get('/', function(request, response){
    var title = 'Welcome';
    var script = '';
    //var list = template.list(filelist);
    var html = template.HTML(title,script,
        body=`
        <div class="slideshow">
        <div class="slideshow_slides">
            <a href=""><img src="image/slide-1.jpg" alt="slide1"></a>
            <a href=""><img src="image/slide-2.jpg" alt="slide2"></a>
            <a href=""><img src="image/slide-3.jpg" alt="slide3"></a>
            <a href=""><img src="image/slide-4.jpg" alt="slide4"></a>
        </div>
        <div class="slideshow_nav">
            <a href="" class="prev">prev</a>
            <a href="" class="next">next</a>
        </div>
        <div class="indicator">
            <!-- 
                <a href="">1</a>
                <a href="" class="active">2</a>
                <a href="">3</a>
                <a href="">4</a> 
            -->
        </div>
        </div>
        
        <div class="image_object">
        <ul>
            <li><a href="#"><img src="image/KakaoTalk_20190929_190847442_01.png" width="485"></a></li>
            <li><a href="#"><img src="image/model1.jpg" width="485"></a></li>
            <li><a href="#"><img src="image/KakaoTalk_20190929_190847442_03.jpg" width="485"></a></li>
            <li><a href="#"><img src="image/KakaoTalk_20190929_190847442_04.jpg" width="485"></a></li>
            <li><a href="#"><img src="image/KakaoTalk_20190929_190847442_05.jpg" width="485"></a></li>
            <li><a href="#"><img src="image/KakaoTalk_20190929_190847442_06.jpg" width="485"></a></li>
            <li><a href="#"><img src="image/slide-1.jpg" width="485"></a></li>
            <li><a href="#"><img src="image/slide-2.jpg" width="485"></a></li>
        </ul> 
        </div>
        `
        );response.send(html); 
});

app.get('/aboutus', function(request,response){
    var title = ' about us ';
    var script = '';
    var html = template.HTML(title,script,
        body = `
        <div class="aboutus_container">

        <div>
            <h2>About</h2>
        </div>
        
        <div class="aboutus_image">
            <img src="./image/aboutusmain.jpg">
        </div>

        <div class="aboutus_intro">
            <p><br/></p>
            <p><br/></p>
            <p><br/></p>
            <p>좋은가죽으로 잘 만든 제품은 오래 사용할수록 낡지 않고 변화됩니다.</p>
            <p>workroom8363은 가죽 본연의 멋스러움, 사용자의 습관과 시간에 따라 변화되는 멋,</p>
            <p>핸드메이드의 따뜻한 디테일이 어울어진 감성적인 디자인을 추구합니다.</p>
            <p><br/></p>
            <p>workroom8363's Leathers are never worn out,</p>
            <p>they adjust their own forms along the person's behavior and the age.</p>
            <p>We, workroom8363 always look for the design balanced between</p>
            <p>the aesthetic of nature from leather and warmth from our handmade.</p>
            <p>CONTACT : 031-314-6438 / 135official@gmail.com</p>
            <p><br/></p>
            <p><br/></p>
            <p>-</p>
            <p><br/></p>
            <p><br/></p>
            <p>MON - FRI : 11AM - 6PM / BREAKTIME : 1PM - 2PM</p>
            <p>SAT SUN HOLIDAY OFF</p>

            <p>COPYRIGHT (C) <strong>workroom8363</strong></p>
 
                
        </div>

    </div> 
        `);
        response.send(html);
});
app.get('/object', function(request,response){
    var title = ' object';
    var script = `
    <script>
        
    fetch('object_list').then(function(response){
        response.text().then(function(text){
            
            var items = text.split(',');
            
            var i = 0;
            var j = 0;
            var tags = '';
            while (i<items.length){
                var item =  items[i];
                var tag = '<li><div class="product_listArray"><a href="'+j+'"><img src="'
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
    `
    var html = template.HTML(title,script,
        body = `
        <div>
        <h2>Object</h2>
        </div>

        <div class="object_container">
        <div class="object_list">
            <ul class="product_list">    
            </ul>
        </div>
        </div>
        `);
        response.send(html);
});
app.get('/0', function(request,response){
    var title = '';
    var script = '';
    var html = template.HTML(title,
        script,
        body = `
        <div>
        <h2>Detail Object</h2>
    </div>
    <!-- 상단 제품 정보 -->
    <div class="over_info">
        <div class="over_picture">
            <div class="thumbnail">
                <img src="/image/KakaoTalk_20190929_190847442_05.jpg" >
            </div>
        </div>
        <div class="over_detailArea">
            <div class="infoArea">
                <ul>
                    <li class="name">
                        <p class="name">
                            <span class="delivery">[해외배송 가능상품]</span>
                            "classic dulles wallet (L)_pink"
                        </p>
                    </li>
                    <li class="about_1">
                        <pre>
                        이태리 베지터블 소가죽으로 만든
                        숄더, 토트 2가지 방법으로 착용이 가능한 가방입니다.
                        
                        프레임을 사용하여 제작된 다레스백으로
                        수납공간이 넉넉합니다.
                        
                        가방 안쪽에는 안감과 포켓이 포함되어 있습니다.
                        
                        입고되는 가죽마다 엠보가 일정하지 않기 때문에
                        상세사진과 엠보가 다를 수 있습니다.
                       
                        LEATHER : Vegetable cow leather 100% (ltaly)

                        FABRIC : cotton 100%

                        SIZE :  32cm * 11cm * 26cm

                        STRAP : 60cm * 2cm
                        </pre>
                    </li>
                    <li class="ProductPrice">367,000</li>
                    <li class="price_sale">
                        <s>367,000</s>
                    </br>
                    "367,000"
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 전체적인 사진 정보 -->
    <div class="total_info">
        <div id="prdDetail">
            <div class="cont">
                <p></p>

                <p><img src="/image/longpng.png"></p>
                <p></br></p>
                <p></p>
            </div>
        </div>
    </div>
        `);response.send(html);
});

app.get('/onedayclass', function(request,response){
    var title = ' - onedayclass';
    var script = '';
    var html = template.HTML(title,script,
        body=`
        <div class="onedayclass_container">

        <div>
            <h2>Oneday Class</h2>
        </div>

    
    <!-- <div class='bigPictureWrapper'>
        <div class='bigPicture'>
        </div>
    </div> -->
    <div class="pictures">
        <img src="/onedayimage/onday(1).jpg">
        <img src="/onedayimage/onday(2).jpg">
        <img src="/onedayimage/onday(3).jpg">
        <img src="/onedayimage/onday(4).jpg">
        <img src="/onedayimage/onday(5).jpg">
        <img src="/onedayimage/onday(6).jpg">
        <img src="/onedayimage/onday(7).jpg">
        <img src="/onedayimage/onday(8).jpg">
        <img src="/onedayimage/onday(9).jpg">
        <img src="/onedayimage/onday(10).jpg">
        <img src="/onedayimage/onday(11).jpg">
        <img src="/onedayimage/onday(12).jpg">
        <img src="/onedayimage/onday(13).jpg">
        <img src="/onedayimage/onday(14).jpg">
        <img src="/onedayimage/onday(15).jpg">
        <img src="/onedayimage/onday(16).jpg">
        <img src="/onedayimage/onday(17).jpg">
        <img src="/onedayimage/onday(18).jpg">
        <img src="/onedayimage/onday(19).jpg">
        <img src="/onedayimage/onday(20).jpg">
        <img src="/onedayimage/onday(21).jpg">
        <img src="/onedayimage/onday(22).jpg">
        <img src="/onedayimage/onday(23).jpg">
        <img src="/onedayimage/onday(24).jpg">
        <img src="/onedayimage/onday(25).jpg">
        <img src="/onedayimage/onday(26).jpg">
        <img src="/onedayimage/onday(27).jpg">
        <img src="/onedayimage/onday(28).jpg">
        <img src="/onedayimage/onday(29).jpg">
        <img src="/onedayimage/onday(30).jpg">
        <img src="/onedayimage/onday(31).jpg">
        <img src="/onedayimage/onday(32).jpg">

        </div>
    
    <!-- scrolltrigger 사용하여 페이지 내릴때마다 나타나게 구현하기 -->
    
    
   

    <div class="ondayclass_explan" data-scroll>
        <div class="class_procedure">
            <h1>원데이 클래스는 이렇게 진행됩니다.</h1>
            <img src="/image/sequence.jpg">
            </br>
            </br>
            <h2>＊ 원데이 클래스는 인스타그램 DM으로만 문의 받습니다. </h2>
        </div>

    </div>
    <div class="onedayclass_schedule" data-scroll   >
        <h1>원데이 클래스 일정</h1>
        <img src="" alt="">
    </div>



    <div class="onedayclass_map" data-scroll>
        <div class="map_naver">
            <h1>찾아오시는 길</h1>
            </br>
            </br>
            <img src="/image/mapWorkRoom8363.png" alt="map">
            <h2>＊  주소 : 대구광역시 중구 봉산문화2길 14 2층 </h2>
        </div>
    </div>
    </div>
        `);
        response.send(html);
});


app.get('/qna', function(request,response){
    var title = ' ';
    var script = ' <script src="js/bootstrap.js"></script><link rel="stylesheet" href="css/bootstrap.css">'
    var html = template.HTML(title,script,
        body=`
        <div class="qnaclass_container">
        
        <div>
            <h2>Question</h2>
        </div>

    <table class="table table-hover">
        <thead>
            <tr>
                <th>번호</th>
                <th>자주 묻는 질문</th>
                <th>작성자</th>
                <th>날짜</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>4</td>
                <td><a href="">질문 할 수 있는 게시판은 없나요?</a></td>
                <td>관리자</td>
                <td>2019.11.23</td>
            </tr>
            <tr>
                <td>3</a></td>
                <td><a href="">상품을 인터넷으로 주문할수는 없나요?</a></td>
                <td>관리자</td>
                <td>2019.11.23</td>
            
            </tr>
            <tr>
                <td>2</td>
                <td><a href="">원데이 클래스 신청은 어떻게 하나요?</a></td>
                <td>관리자</td>
                <td>2019.11.23</td>
            </tr>
            <tr>
                <td>1</td>
                <td><a href="">상품을 사려면 어떻게 해야하나요?</a></td>
                <td>관리자</td>
                <td>2019.11.23</td>
            </tr>
            
        </tbody>
    </table>
    </div>
    `);
    response.send(html);
});

app.listen(3000, ()=> console.log('port 3000!'))