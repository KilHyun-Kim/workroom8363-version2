const express = require('express')
const app = express();
const newTemplate = require('./lib/newTemplate');
const template = require('./lib/template.js');
const template2 = require('./lib/template2');

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
            <div>
                <h2>New Arrival</h2>
            </div>
            
            <div class="arrival_image">
                <ul class="arrival_ul"></ul>
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
        `
        );res.send(html);
})
app.listen(5000, ()=> console.log('port 5000!'))

