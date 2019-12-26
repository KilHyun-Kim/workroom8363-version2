const express = require('express')
const app = express();
const newTemplate = require('./lib/newTemplate');
const newTemplate2 = require('./lib/newTemplate2');

app.use(express.static(__dirname +'/public'));
app.get('/', function(req, res){
    var script = `
    <link rel="stylesheet" href="../css/newmain.css">
    <script src="/js/slider.js"></script>
    <script>
    fetch('mainobject_list').then(function(response){
        response.text().then(function(text){
             var items = text.split(',');
            var i = items.length - 1;
            var j = items.length;
            var tags = '';
            while (i>=0){
                var tag = '<li><div class="product_listArray"><a href="/object/'+j+'"><img src="'
                +items[i]+
                '"</a></div></li>'
                tags = tags + tag;
                i = i - 1;
                j = j - 1;
            }
            document.querySelector('.arrival_ul').innerHTML = tags;
        })
    });</script>`
    var html = newTemplate.HTML(script,
        main = `
        <div class="__mainpage">
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
            </div>
            </div>
            <div class="__explain">
                <h2>New Arrival</h2>
            </div>
            
            <div class="arrival_image">
                <ul class="arrival_ul">
                </ul>
            </div>
        </div>
        
        `
    );res.send(html);
});
app.get('/aboutus', function(req,res){
    var script =`<link rel="stylesheet" href="../css/newabout.css">`
    var html = newTemplate.HTML(script,
        main = `
        <div class="__aboutpage">

            <div class="__explain">
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
        `
        );res.send(html);
})
app.get('/object', function(req,res){
    var script = `<link rel="stylesheet" href="../css/newobject.css">
    <script>
        
    fetch('object_list').then(function(response){
        response.text().then(function(text){
            
            var items = text.split(',');
            var i = items.length - 1;
            var j = items.length/3-1;
            var tags = '';
            while (i>0){
                var tag = '<li><div class="product_listArray"><a href="/object/'+j+'"><img src="'
                +items[i-2]+
                '"</a></div><div class="product_info"><ul class="name"><li><span>'
                +items[i-1]+
                '</span></li></ul><ul class="price"><li><span>'
                +items[i]+
                '</span></li></ul></div></li>'
                tags = tags + tag;
                i = i - 3;
                j = j - 1;
            }
            document.querySelector('.product_list').innerHTML = tags;
        })
    });
    
    </script>`
    var html = newTemplate.HTML(script,
        main = `
        <div class="__objectpage">
        <div class="__explain">
            <h2>Object</h2>
        </div>
        <div class="object_list">
            <ul class="product_list">    
            </ul>
        </div>
        </div>
        `);res.send(html)
})
app.get('/onedayclass', function(req,res){
    var script = `
    <link rel="stylesheet" href="../css/newoneday.css">
    <script src="js/scrolltrigger.js"></script>
    <script src="/ScrollTrigger-master/ScrollTrigger.min.js"></script>
    `
    var html = newTemplate.HTML(script,
        main = `
        <div class="__onedayclass">
            <div class="__explain">
                <h2>Oneday Class</h2>
            </div>

            <div class="pictures">
                <img src="/onedayimage/oneday(1).jpg">
                <img src="/onedayimage/oneday(2).jpg">
                <img src="/onedayimage/onday(3).jpg">
                <img src="/onedayimage/onday(4).jpg">
                <img src="/onedayimage/onday(5).jpg">
                <img src="/onedayimage/onday(6).jpg">
                <img src="/onedayimage/oneday(7).jpg">
                <img src="/onedayimage/oneday(8).jpg">
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
                <img src="/onedayimage/oneday(33).jpg">
            </div>
            <div class="onedayclass_explan" data-scroll>
                <div class="class_procedure">
                    <h1>원데이 클래스는 이렇게 진행됩니다.</h1>
                    <img src="/image/sequence.jpg" />
                    <h2>＊ 원데이 클래스는 인스타그램 DM으로만 문의 받습니다 ＊</h2>
                </div>
            </div>
            <div class="onedayclass_schedule" data-scroll>
                <h1>원데이 클래스 일정</h1>
                <img src="/image/Planner.png" alt="#">
            </div>
            <div class="onedayclass_map" data-scroll>
                <h1>찾아오시는 길</h1>
                <img src="/image/mapWorkRoom8363.png" alt="map" />
                <h2>＊  주소 : 대구광역시 중구 봉산문화2길 14 2층 </h2>
            </div>
        </div>
        `);res.send(html)
})

app.get('/qna', function(req,res){
    var script = `<link rel="stylesheet" href="../css/newQna.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <script src="../js/bootstrap.js"></script>
    `
    var html = newTemplate.HTML(script,
        main = `
        <div class="__qna">
            <div class="__explain">
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
                    <td><a href="/qna/1">원데이 클래스 신청은 어떻게 하나요?</a></td>
                    <td>관리자</td>
                    <td>2019.11.23</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><a href="/qna/0">상품을 사려면 어떻게 해야하나요?</a></td>
                    <td>관리자</td>
                    <td>2019.11.23</td>
                </tr>
            </tbody>
            </table>
        </div>
        `);res.send(html)
})
app.get('/qna/0',function(req,res){
    var script = `
    <link rel="stylesheet" href="../css/newQna.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <script src="../js/bootstrap.js"></script>
    `
    var html = newTemplate.HTML(script,
        main = `
        <div class="qnaclass_container">
        <div class="__explain">
            <h2>Answer</h2>
        </div>
        <div class="qna_container">
            <div class="board_wrap">
                <div class="board_top">
                    상품을 구매하려면 어떻게 해야하나요?
                </div>
                <div class="board_detail">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p><strong><span>상품 구매 요령</span></strong></p>
                    <p>workroom8363은 인스타그램으로만 판매하고 있습니다.</p>
                    <p>구매절차, 배송비등 문의하려면 인스타그램 DM을 남겨주세요.</p>
                    <p>제주도 및 도서 산간지역은 추가비용이 발생합니다.</p>
                    <p></p>
                    <p></p>
                    <p id="changeid"><strong><span>교환, 반품, A/S</span></strong></p>
                    <p>
                        <span>- 주문제작 형태의 상품으로 주문완료한 제품은 교환 및 반품이 불가능합니다.</span>
                        <br />
                        <span>-  가죽 본연의 얼룩과 주름, 상처, 점, 질감의 차이 등은 천연 베지터블 가죽의 특성이므로 반품사유가 되지 않습니다.</span>
                        <br />
                        <span>- 제품 사용 중 발생한 하자는 제작 공정에 따라 A/S 가능 여부가 결정되며 전화 상담을 통해 진행됩니다.</span>
                    </p>
                    <p></p>
                    <p></p>
                </div>
                <div class="board_bottom">
                    <button type="button" class="qna_list" onclick="location.href='/qna'">List</button>
                </div>
            </div>
        </div>
        `
    );res.send(html)});
app.get('/qna/1',function(req,res){
        var script = `
        <link rel="stylesheet" href="../css/newQna.css">
        <link rel="stylesheet" href="../css/bootstrap.css">
        <script src="../js/bootstrap.js"></script>
        `
        var html = newTemplate.HTML(script,
            main = `
            <div class="qnaclass_container">
            <div class="__explain">
                <h2>Answer</h2>
            </div>
            <div class="qna_container">
                <div class="board_wrap">
                    <div class="board_top">
                        상품을 구매하려면 어떻게 해야하나요?
                    </div>
                    <div class="board_detail">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p><strong><span>상품 구매 요령</span></strong></p>
                        <p>workroom8363은 인스타그램으로만 판매하고 있습니다.</p>
                        <p>구매절차, 배송비등 문의하려면 인스타그램 DM을 남겨주세요.</p>
                        <p>제주도 및 도서 산간지역은 추가비용이 발생합니다.</p>
                        <p></p>
                        <p></p>
                        <p id="changeid"><strong><span>교환, 반품, A/S</span></strong></p>
                        <p>
                            <span>- 주문제작 형태의 상품으로 주문완료한 제품은 교환 및 반품이 불가능합니다.</span>
                            <br />
                            <span>-  가죽 본연의 얼룩과 주름, 상처, 점, 질감의 차이 등은 천연 베지터블 가죽의 특성이므로 반품사유가 되지 않습니다.</span>
                            <br />
                            <span>- 제품 사용 중 발생한 하자는 제작 공정에 따라 A/S 가능 여부가 결정되며 전화 상담을 통해 진행됩니다.</span>
                        </p>
                        <p></p>
                        <p></p>
                    </div>
                    <div class="board_bottom">
                        <button type="button" class="qna_list" onclick="location.href='/qna'">List</button>
                    </div>
                </div>
            </div>
            `
    );res.send(html)});
app.get('/qna/2',function(req,res){
    var script = `
    <link rel="stylesheet" href="../css/newQna.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <script src="../js/bootstrap.js"></script>
    `
var html = newTemplate.HTML(script,
main = `
<div class="qnaclass_container">
<div class="__explain">
    <h2>Answer</h2>
</div>
<div class="qna_container">
    <div class="board_wrap">
        <div class="board_top">
            상품을 구매하려면 어떻게 해야하나요?
        </div>
        <div class="board_detail">
            <p></p>
            <p></p>
            <p></p>
            <p><strong><span>상품 구매 요령</span></strong></p>
            <p>workroom8363은 인스타그램으로만 판매하고 있습니다.</p>
            <p>구매절차, 배송비등 문의하려면 인스타그램 DM을 남겨주세요.</p>
            <p>제주도 및 도서 산간지역은 추가비용이 발생합니다.</p>
            <p></p>
            <p></p>
            <p id="changeid"><strong><span>교환, 반품, A/S</span></strong></p>
            <p>
                <span>- 주문제작 형태의 상품으로 주문완료한 제품은 교환 및 반품이 불가능합니다.</span>
                <br />
                <span>-  가죽 본연의 얼룩과 주름, 상처, 점, 질감의 차이 등은 천연 베지터블 가죽의 특성이므로 반품사유가 되지 않습니다.</span>
                <br />
                <span>- 제품 사용 중 발생한 하자는 제작 공정에 따라 A/S 가능 여부가 결정되며 전화 상담을 통해 진행됩니다.</span>
            </p>
            <p></p>
            <p></p>
        </div>
        <div class="board_bottom">
            <button type="button" class="qna_list" onclick="location.href='/qna'">List</button>
        </div>
    </div>
</div>
`
);res.send(html)});
app.get('/qna/3',function(req,res){
var script = `
<link rel="stylesheet" href="../css/newQna.css">
<link rel="stylesheet" href="../css/bootstrap.css">
<script src="../js/bootstrap.js"></script>
`
var html = newTemplate.HTML(script,
    main = `
    <div class="qnaclass_container">
    <div class="__explain">
        <h2>Answer</h2>
    </div>
    <div class="qna_container">
        <div class="board_wrap">
            <div class="board_top">
                상품을 구매하려면 어떻게 해야하나요?
            </div>
            <div class="board_detail">
                <p></p>
                <p></p>
                <p></p>
                <p><strong><span>상품 구매 요령</span></strong></p>
                <p>workroom8363은 인스타그램으로만 판매하고 있습니다.</p>
                <p>구매절차, 배송비등 문의하려면 인스타그램 DM을 남겨주세요.</p>
                <p>제주도 및 도서 산간지역은 추가비용이 발생합니다.</p>
                <p></p>
                <p></p>
                <p id="changeid"><strong><span>교환, 반품, A/S</span></strong></p>
                <p>
                    <span>- 주문제작 형태의 상품으로 주문완료한 제품은 교환 및 반품이 불가능합니다.</span>
                    <br />
                    <span>-  가죽 본연의 얼룩과 주름, 상처, 점, 질감의 차이 등은 천연 베지터블 가죽의 특성이므로 반품사유가 되지 않습니다.</span>
                    <br />
                    <span>- 제품 사용 중 발생한 하자는 제작 공정에 따라 A/S 가능 여부가 결정되며 전화 상담을 통해 진행됩니다.</span>
                </p>
                <p></p>
                <p></p>
            </div>
            <div class="board_bottom">
                <button type="button" class="qna_list" onclick="location.href='/qna'">List</button>
            </div>
        </div>
    </div>
    `
);res.send(html)});

app.get('/object/1', function(req,res){
    var script = `
    <link rel="stylesheet" href="../css/newdetailobject.css">
    `
    var image =`
    /image/redWallet5.jpg
    `
    var name =`"classic dulles wallet (L)_pink"
    `
    var description=`
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

        STRAP : 60cm * 2cm'
    `
    var price = `3,000
    `
    var longImage =`
    /image/longpng.png
    `
    var html = newTemplate2.HTML(script,image,name
               ,description,price,longImage
        );res.send(html)
})
app.listen(5000)
