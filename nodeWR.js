var http = require('http');
var fs = require('fs');
var url = require('url'); // url 이라는 모듈을 사용할 것이다.

function templateHTML(title,list,body){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/defaultwr.css">
    <link rel="stylesheet" href="./css/wrcss1.css">
    <title>workroom8363 - ${title}</title>
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="/js/slider.js"></script>

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
            ${list}
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
function templateList(filelist){
    var list = '<ul>';
    var i = 0;
    while(i<filelist.length){
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
      i = i + 1;
    }
    list = list + '</ul>';
    return list;
  }

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url,true).pathname; 

    if(pathname === '/'){

        if(queryData.id===undefined){
            fs.readdir('data',function(error,filelist){
                var title = 'Welcome';
                var description = 'Hello';
                var list = templateList(filelist);
                var template = templateHTML(title,list,`<div class="container">${description}</div>`);
                response.writeHead(200);
                response.end(template);
            });
        }else{
            fs.readdir('data', function(error,filelist){
            fs.readFile(`data/${queryData.id}`,'utf-8', function(error,description){
                var title = queryData.id;
                var list = templateList(filelist);
                var template = templateHTML(title,list,`<h2>${title}</h2>${description}`);
                response.writeHead(200);
                response.end(template);
            });
            });

        }
    }else{
        response.writeHead(404);
        response.end('Not found');
    }

    // queryData에는 id값으로 쿼리값에 대한 객체를 갖는다.
    
});
app.listen(3000);