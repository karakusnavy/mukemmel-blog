import React from "react";
import Header from './SharedPages/Header'
import Footer from './SharedPages/Footer'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "",
  authDomain: "reactjs-98938.firebaseapp.com",
  databaseURL: "https://reactjs-98938.firebaseio.com",
  projectId: "",
  storageBucket: "reactjs-98938.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class Home extends React.Component {

  render() {
    return (
      <div class="protfolio-wrap">
        <Header />

        <section class="banner-area relative" id="home">
          <div class="container">
            <div class="row fullscreen d-flex align-items-center justify-content-center">
              <div class="banner-content col-lg-10">
                <h5 class="text-uppercase" style={{ color: 'white', borderWidth: 1 }} >YAZILIM,
							TEKNOLOJİ, BİLİM</h5>
                <h1>
                  Frontend Developer
						</h1>
                <a href="#" class="primary-btn text-uppercase"
                  style={{ backgroundColor: '#499ac1' }}>HAKKIMDA</a>
              </div>
            </div>
          </div>
        </section>
        <section class="services-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="single-service">
                  <img class="img-fluid" src="img/react.png" style={{ height: 50 }} alt=""></img>
                  <h4>React Native</h4>
                  <p>
                    Popüler teknolojilerden bir tanesi olan React Native, Facebook tarafından ilk 2015
                    yılında çıkarıldı.
                    2017'den beridir React Native üzerinde çalışmalar yapıyorum.
							</p>
                  <p class="portfoliodetails">Portföy İncele</p>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="single-service">
                  <img class="img-fluid" src="img/s2.png" style={{ height: 50 }} alt=""></img>
                  <h4>ASP.NET MVC</h4>
                  <p>
                    Dünyanın en büyük .net web geliştirme teknolojilerinden bir tanesi. 2016'dan beri
                    üzerinde çeşitli
                    projeler geliştiriyorum. Github profilimi inceleyebilirsiniz.
							</p>
                  <p class="portfoliodetails">Portföy İncele</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-service">
                  <img class="img-fluid" src="img/react.png" style={{ height: 50 }} alt=""></img>
                  <h4>React JS</h4>
                  <p>
                    React JS, şuan da dünyada en ünlü frontend geliştirme teknolojilerinden bir tanesi.
                    Hatta
                    en popüler ve
                    en iyisi demek yanlış olmaz. 2018'den beri çalışıyorum.
							</p>
                  <p class="portfoliodetails">Portföy İncele</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="section-top-border" style={{ padding: 60 }}>
          <h3 class="mb-30">SAMED KARAKUŞ</h3>
          <div class="row">
            <div class="col-md-3">
              <img src="img/ben.jpg" alt="" class="img-fluid"></img>
            </div>
            <div class="col-md-9 mt-sm-20">
              <p>Merhaba ben Samed Karakuş, 2000 yılında Kayseri'de doğdum. Küçüklüğümden bu yana yazılım ve
                teknoloji bağımlısı birisiyim. Sürekli güncel teknolojileri
                takip eder kendimi yazılım alanlarında geliştirmeye çalışırım. Pozitif düşünmeye özen gösteren
                ve enerjik birisiyim. Ortaokul zamanlarından Lise'ye geçiş
                esnasında yazılım ile tanıştım. Kendimi bu alanda geliştirmem gerektiğini çok kısa sürede
                anladım. 2014 senesinden beridir bu alanda kendimi sürekli
                geliştirmeye çalışır yeni projeler üretmeye çalışırım.
					</p>
              <p>
                Meslek lisesine gitmem ve lise yıllarında sürekli yazılımla ilgilenmem üniversiteye gitmeme
                engel oldu. Zamanımın bir çoğunu yazılım ve teknolojileri
                öğrenmeyle, aynı zamanda yeni projeler geliştirmeye harcıyorum. En büyük hedeflerimden bir
                tanesi dünyada trend bir yazılım firmasının kurucusu
                olmak veya başına geçmek.
					</p>
              <p>
                Sadece yazılımla ilgilenmekle kalmıyorum; aynı zamanda çeşitli proje yarışmalarına(hackathon,
                fikir yarışmaları vs..) katılıyorum. 2018-2019 yılları
                arasında Orta Anadolu Kalkınma Ajansı tarafından desteklenen Sera Kuluçka Merkezi ve Erciyes
                Teknopark tarafından düzenlenen yarışmada projem yatırım
                ve destek aldı. Size bunun gibi bir çok farklı başarı hikayemi analatabilirim. Kişisel sitemi
                gezmeye devam edin :)
					</p>
            </div>
          </div>
        </div>
        <div class="section-top-border" style={{ padding: 60 }}>
          <h3 class="mb-30">Yetkinlikler</h3>
          <div class="progress-table-wrap">
            <div class="progress-table">
              <div class="table-head">
                <div class="serial">#</div>
                <div class="country">Yetkinlik</div>
                <div class="visit">Tecrübe</div>
                <div class="percentage">Tecrübe Bar</div>
              </div>
              <div class="table-row">
                <div class="serial">01</div>
                <div class="country"> <img src="img/react.png" style={{ height: 40 }} alt="flag"></img> React Native
						</div>
                <div class="visit">Senior Developer</div>
                <div class="percentage">
                  <div class="progress">
                    <div class="progress-bar color-6" role="progressbar" style={{ width: '80%' }}
                      aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="table-row">
                <div class="serial">02</div>
                <div class="country"> <img src="img/react.png" style={{ height: 40 }} alt="flag"></img>React JS</div>
                <div class="visit">Junior Developer</div>
                <div class="percentage">
                  <div class="progress">
                    <div class="progress-bar color-6" role="progressbar" style={{ width: '45%' }}
                      aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="table-row">
                <div class="serial">03</div>
                <div class="country"> <img src="img/net.png" style={{ height: 40 }} alt="flag"></img>Asp.NET MVC</div>
                <div class="visit">Mid-Level Developer</div>
                <div class="percentage">
                  <div class="progress">
                    <div class="progress-bar color-6" role="progressbar" style={{ width: '50%' }}
                      aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="table-row">
                <div class="serial">03</div>
                <div class="country"> <img src="img/csharp.png" className="bars" style={{ height: 40 }} alt="flag"></img>C#</div>
                <div class="visit">Mid-Level Developer</div>
                <div class="percentage">
                  <div class="progress">
                    <div class="progress-bar color-6" role="progressbar" style={{ width: '70%' }}
                      aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="table-row align-items-center justify-content-center">
                <div class="country align-items-center justify-content-center"> <img src="img/diger/1.png" style={{ height: 40 }} alt="flag"></img></div>
                <div class="country align-items-center justify-content-center"> <img src="img/diger/2.png" style={{ height: 40 }} alt="flag"></img></div>
                <div class="country align-items-center justify-content-center"> <img src="img/diger/3.png" style={{ height: 40 }} alt="flag"></img></div>
                <div class="country align-items-center justify-content-center"> <img src="img/diger/4.png" style={{ height: 40 }} alt="flag"></img></div>
                <div class="country align-items-center justify-content-center"> <img src="img/diger/5.png" style={{ height: 40 }} alt="flag"></img></div>
                <div class="country align-items-center justify-content-center"> <img src="img/diger/6.png" style={{ height: 40 }} alt="flag"></img></div>
                <div class="country align-items-center justify-content-center"> <img src="img/diger/7.png" style={{ height: 40 }} alt="flag"></img></div>
                <div class="country align-items-center justify-content-center"> <img src="img/diger/8.png" style={{ height: 40 }} alt="flag"></img></div>
                <div class="country align-items-center justify-content-center"> <img src="img/diger/9.png" style={{ height: 40 }} alt="flag"></img></div>
                <div class="country align-items-center justify-content-center"> <img src="img/diger/10.png" style={{ height: 40 }} alt="flag"></img></div>
              </div>
              <div class="table-row align-items-center justify-content-center">
                <a style={{ fontWeight: 'bold' }} href="#">Detay ve Proje İçin İletişim Sayfasından CV Belgemi
							İsteyiniz </a>
              </div>
            </div>
          </div>
        </div>


        <Footer />
      </div>
    )
  }
}

