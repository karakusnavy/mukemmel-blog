
import Links from '../Links/Link';

const Header = () => {
    return (
        <header class="default-header">
            <Links />
            <nav class="navbar navbar-expand-lg  navbar-light" style={{ marginTop: 70 }}>
                <div class="container" >
                    <a class="navbar-brand" href="/">
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
                            <li><a href="/">Anasayfa</a></li>
                            <li><a href="#">Portfolyo</a></li>
                            <li><a href="#">İlham</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="#">İletişim</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header;