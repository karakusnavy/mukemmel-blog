
const Header = () => {
    return (
        <header  class="default-header">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <link rel="shortcut icon" href="img/fav.png"></link>
            <meta name="author" content="codepixer"></meta>
            <meta name="description" content=""></meta>
            <meta name="keywords" content=""></meta>
            <meta charSet="UTF-8"></meta>
            <title>Samed Karakuş - Kişisel</title>
            <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"></link>
            <link rel="stylesheet" href="css/linearicons.css"></link>
            <link rel="stylesheet" href="css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="css/bootstrap.css"></link>
            <link rel="stylesheet" href="css/animate.min.css"></link>
            <link rel="stylesheet" href="css/main.css"></link>
            <script src="/js/vendor/jquery-2.2.4.min.js"></script>
            <script src="/js/vendor/bootstrap.min.js"></script>
            <script src="/js/jquery.sticky.js"></script>
            <script src="/js/jquery.nice-select.min.js"></script>
            <script src="/js/main.js"></script>
            <nav class="navbar navbar-expand-lg  navbar-light" style={{marginTop:70}}>
                <div class="container" >
                    <a class="navbar-brand" href="index.html">
                        <img src="img/logo.png" alt=""></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="text-white lnr lnr-menu"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end align-items-center"
                        id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li><a href="#home">Anasayfa</a></li>
                            <li><a href="#">Portfolyo</a></li>
                            <li><a href="#">İlham</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">İletişim</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;