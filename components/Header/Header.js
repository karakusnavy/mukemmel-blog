
import Links from '../Links/Link';
import Link from 'next/link'


const Header = props => {
    return (
        <>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          
            
           
            <header className="default-header"  >

                <nav className="navbar navbar-expand-lg  navbar-light" style={{ marginTop: 5 }}>
                    <div className="container" >
                        <a className="navbar-brand" href="/">
                            <img src={props.headerlogo == true ? 'img/logo.png' : '../img/logo.png'} alt=""></img>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="text-white lnr lnr-menu"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end align-items-center"
                            id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li>
                                   
                                        <a href="/" >Anasayfa</a>
                                   
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