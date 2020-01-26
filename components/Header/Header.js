
import Links from '../Links/Link';
import Link from 'next/link'

const Header = props => {
    return (
        <>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <link rel="shortcut icon" href="img/fav.png"></link>
            <meta name="author" content="codepixer"></meta>
            <meta name="description" content=""></meta>
            <meta name="keywords" content=""></meta>
            <meta charSet="UTF-8"></meta>
            <title>Samed Karakuş - Kişisel</title>
            <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"></link>
            <link rel="stylesheet" href="../css/linearicons.css"></link>
            <link rel="stylesheet" href="../css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="../css/bootstrap.css"></link>
            <link rel="stylesheet" href="../css/animate.min.css"></link>
            <link rel="stylesheet" href="../css/main.css"></link>
           
            <header class="default-header"  >

                <nav class="navbar navbar-expand-lg  navbar-light" style={{ marginTop: 5 }}>
                    <div class="container" >
                        <a class="navbar-brand" href="/">
                            <img src={props.headerlogo == true ? 'img/logo.png' : '../img/logo.png'} alt=""></img>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="text-white lnr lnr-menu"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-end align-items-center"
                            id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li>
                                    <Link href="/">
                                        <a>Anasayfa</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a>Hakkımda</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio">
                                        <a>Projeler</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>İletişim</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;