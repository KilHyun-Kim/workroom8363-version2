module.exports = {
    HTML:function(script,main){
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>flex</title>

    <link rel="stylesheet" href="../css/defaultwr.css">
    <link rel="stylesheet" href="../css/newds.css">
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    ${script}
    
</head>
<body>
    <div class="container">
        <header>
            <a href="/">WORKROOM8363</a>
        </header>

        <section class="content">
            <nav>
                <ul>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/object">Object</a></li>
                    <li><a href="/onedayclass">Oneday Class</a></li>
                    <li><a href="/qna">Q & A</a></li>
                    <li><a class="insta" href="https://www.instagram.com/workroom8363/?igshid=1b6l8y8av4fq4" target="_blank"><img src="/image/insta.png" alt="instagram"></a></li>
                </ul>
            </nav>
        </section>
        <main>
            ${main}
        </main>
        
        <footer>
            <div class="footer_container">
                <ul class="footer_info">
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
                <ul class="footer_info">
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
                <ul class="footer_info">
                    <li><a href="/aboutus">ABOUT</a></li>
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
   