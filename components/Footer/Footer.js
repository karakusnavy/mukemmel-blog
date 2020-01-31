const Footer = () => {
    return (
        <footer className="footer-area section-gap" style={{ borderRadius: 20 }}  >
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Bu Site Hakkında</h6>
                            <p>
                                Footer Text Buraya Gelecek
                        </p>
                            <a>
                                Next JS, React JS, Firebase, Markdown
							</a>
                        </div>
                    </div>
                    <div className="col-lg-5  col-md-6 col-sm-6">
                        
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                        <div className="single-footer-widget">
                            <h6>Beni Takip Et</h6>
                            <p>Sosyal medya ve diğer</p>
                            <div className="footer-social d-flex align-items-center">
                                <a href="https://facebook.com/karakusnavy"><i className="fa fa-facebook"></i></a>
                                <a href="https://twitter.com/karakusnavy"><i className="fa fa-twitter"></i></a>
                                <a href="https://linkedin.com/in/karakusnavy"><i className="fa fa-linkedin"></i></a>
                                <a href="https://github.com/karakusnavy"><i className="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </footer >
    )
}
export default Footer;