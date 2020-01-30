const Footer = () => {
    return (
        <footer class="footer-area section-gap" style={{ borderRadius: 20 }}  >
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h6>Bu Site Hakkında</h6>
                            <p>
                                Footer Text Buraya Gelecek
                        </p>
                            <a>
                                Next JS, React JS, Firebase, Markdown
							</a>
                        </div>
                    </div>
                    <div class="col-lg-5  col-md-6 col-sm-6">
                        
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-6 social-widget">
                        <div class="single-footer-widget">
                            <h6>Beni Takip Et</h6>
                            <p>Sosyal medya ve diğer</p>
                            <div class="footer-social d-flex align-items-center">
                                <a href="https://facebook.com/karakusnavy"><i class="fa fa-facebook"></i></a>
                                <a href="https://twitter.com/karakusnavy"><i class="fa fa-twitter"></i></a>
                                <a href="https://linkedin.com/in/karakusnavy"><i class="fa fa-linkedin"></i></a>
                                <a href="https://github.com/karakusnavy"><i class="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </footer >
    )
}
export default Footer;