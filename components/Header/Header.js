
import Links from '../Links/Link';
import Link from 'next/link'

const Header = () => {
    return (
        <>

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
                                <li>
                                    <Link href={'/'}>
                                        <a>Anasayfa</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={''}>
                                        <a>Portfolyo</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={''}>
                                        <a>İlham</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'blog'}>
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={''}>
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