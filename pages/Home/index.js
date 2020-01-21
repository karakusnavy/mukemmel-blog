import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'
import firebase from 'firebase'
import firebaseconnection from '../../components/firebaseconnection'
import SecureLS from 'secure-ls'
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseconnection);
}


export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liste: []
    }

  }

  componentDidMount = async () => {

   
    var getting = []

    var urlRef = firebase.database().ref().child("blogs");
    await urlRef.once("value", function (snapshot) {
      snapshot.forEach(function (child) {
        getting.push({
          title: child.val().title,
          date: child.val().date,
          image: child.val().image,
          link: child.val().link,
          blog: child.val().blog,
          id: child.val()
        })
      });

    });
    this.setState({
      liste: getting.splice(0, 6)
    })

  }

  render() {
    return (
      <>
        <Header />
        <section className="banner-area relative" id="home">
          <div className="container">
            <div className="row fullscreen d-flex align-items-center justify-content-center">
              <div className="banner-content col-lg-10">
                <h5 className="text-uppercase" style={{ color: 'white', borderWidth: 1 }} >Mid-Level</h5>
                <h1>
                  Mobile Developer
						</h1>
                <a href="#" className="primary-btn text-uppercase"
                  style={{ backgroundColor: '#499ac1' }}>HAKKIMDA</a>
              </div>
            </div>
          </div>
        </section>
        <section className="services-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-service">
                  <img className="img-fluid" src="img/react.png" style={{ height: 50 }} alt=""></img>
                  <h4>React Native</h4>
                  <p>
                    Popüler teknolojilerden bir tanesi olan React Native, Facebook tarafından ilk 2015
                    yılında çıkarıldı.
                    2017'den beridir React Native üzerinde çalışmalar yapıyorum.
							</p>
                  <p className="portfoliodetails">Portföy İncele</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="single-service">
                  <img className="img-fluid" src="img/s2.png" style={{ height: 50 }} alt=""></img>
                  <h4>ASP.NET MVC</h4>
                  <p>
                    Dünyanın en büyük .net web geliştirme teknolojilerinden bir tanesi. 2016'dan beri
                    üzerinde çeşitli
                    projeler geliştiriyorum. Github profilimi inceleyebilirsiniz.
							</p>
                  <p className="portfoliodetails">Portföy İncele</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-service">
                  <img className="img-fluid" src="img/react.png" style={{ height: 50 }} alt=""></img>
                  <h4>React JS</h4>
                  <p>
                    React JS, şuan da dünyada en ünlü frontend geliştirme teknolojilerinden bir tanesi.
                    Hatta
                    en popüler ve
                    en iyisi demek yanlış olmaz. 2018'den beri çalışıyorum.
							</p>
                  <p className="portfoliodetails">Portföy İncele</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-top-border" style={{ padding: 60 }}>
          <h3 className="mb-30">Yetkinlikler</h3>
          <div className="progress-table-wrap">
            <div className="progress-table">
              <div className="table-head">
                <div className="serial">#</div>
                <div className="country">Yetkinlik</div>
                <div className="visit">Tecrübe</div>
                <div className="percentage">Tecrübe Bar</div>
              </div>
              <div className="table-row">
                <div className="serial">01</div>
                <div className="country"> <img src="img/react.png" style={{ height: 40 }} alt="flag"></img> React Native
						</div>
                <div className="visit">Senior Developer</div>
                <div className="percentage">
                  <div className="progress">
                    <div className="progress-bar color-6" role="progressbar" style={{ width: '80%' }}
                      aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div className="serial">02</div>
                <div className="country"> <img src="img/react.png" style={{ height: 40 }} alt="flag"></img>React JS</div>
                <div className="visit">Junior Developer</div>
                <div className="percentage">
                  <div className="progress">
                    <div className="progress-bar color-6" role="progressbar" style={{ width: '30%' }}
                      aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div className="serial">03</div>
                <div className="country"> <img src="img/net.png" style={{ height: 40 }} alt="flag"></img>Asp.NET MVC</div>
                <div className="visit">Mid-Level Developer</div>
                <div className="percentage">
                  <div className="progress">
                    <div className="progress-bar color-6" role="progressbar" style={{ width: '50%' }}
                      aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div className="serial">03</div>
                <div className="country"> <img src="img/csharp.png" className="bars" style={{ height: 40 }} alt="flag"></img>C#</div>
                <div className="visit">Mid-Level Developer</div>
                <div className="percentage">
                  <div className="progress">
                    <div className="progress-bar color-6" role="progressbar" style={{ width: '70%' }}
                      aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="table-row align-items-center justify-content-center">
                <div className="country align-items-center justify-content-center"> <img src="img/diger/1.png" style={{ height: 40 }} alt="flag"></img></div>
                <div className="country align-items-center justify-content-center"> <img src="img/diger/2.png" style={{ height: 40 }} alt="flag"></img></div>
                <div className="country align-items-center justify-content-center"> <img src="img/diger/3.png" style={{ height: 40 }} alt="flag"></img></div>
                <div className="country align-items-center justify-content-center"> <img src="img/diger/4.png" style={{ height: 40 }} alt="flag"></img></div>
                <div className="country align-items-center justify-content-center"> <img src="img/diger/5.png" style={{ height: 40 }} alt="flag"></img></div>
                <div className="country align-items-center justify-content-center"> <img src="img/diger/6.png" style={{ height: 40 }} alt="flag"></img></div>
                <div className="country align-items-center justify-content-center"> <img src="img/diger/7.png" style={{ height: 40 }} alt="flag"></img></div>
                <div className="country align-items-center justify-content-center"> <img src="img/diger/8.png" style={{ height: 40 }} alt="flag"></img></div>
                <div className="country align-items-center justify-content-center"> <img src="img/diger/9.png" style={{ height: 40 }} alt="flag"></img></div>
                <div className="country align-items-center justify-content-center"> <img src="img/diger/10.png" style={{ height: 40 }} alt="flag"></img></div>
              </div>
              <div className="table-row align-items-center justify-content-center">
                <a style={{ fontWeight: 'bold' }} href="#">Detay ve Proje İçin İletişim Sayfasından CV Belgemi
							İsteyiniz </a>
              </div>
            </div>
          </div>
        </div>


        <div className="section-top-border" style={{ padding: 60 }}>
          <h3 className="mb-30">Son Blog Yazılarım<a style={{ fontSize: 12, backgroundColor: '#499ac1', color: 'white', borderRadius: 5, padding: 2 }}>TÜM BLOG YAZILARIM</a></h3>
          <div className="row">

            {



              this.state.liste.map((item) =>
                <div className="col-lg-6">
                  <blockquote className="generic-blockquote">
                    <div className="row">
                      <div className="col-lg-2">
                        <img src={item.image} style={{ height: 75, width: 75, backgroundColor: 'white' }} />
                      </div>
                      <div className="col-lg-10">
                        <h4>{item.title.length > 36 ? item.title.substring(0, 37) + '...' : item.title}</h4>
                        {item.blog}
                        <br />
                        <Link href={'/' + item.link}>
                          <a style={{ paddingTop: 5, color: 'black', borderRadius: 5, marginTop: 20 }}>DEVAMINI OKU</a>
                        </Link>

                      </div>
                    </div>
                  </blockquote>

                </div>

              )
            }



          </div>
        </div>


        <Footer />
      </>
    )
  }
}


