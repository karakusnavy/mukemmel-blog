import React, { useEffect, useState } from "react";
import firebase from 'firebase'
import firebaseconnection from '../../components/firebaseconnection'
import Link from 'next/link'
import Layout from '../../components/Layout/Layout'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}


const blog = ({ }) => {


    return (
        <Layout sidebar={true} >

            <div class="col-lg-12 portfolio">
                <h1>Samed Karakuş</h1>
                <p>Girişimci - Yazılım Geliştirici - Kampçı</p>
                <h3>Hayatım</h3>
                <p>
                    Merhaba, ben Samed. <b>2000</b> yılında <b>Kayseri</b>'de doğdum. Güzel bir o kadar da inanılmaz çoçukluk yaşadım.
                    İlkokulu ve ortaokulu <b>Esentepe Mumcular İ.Ö.O</b>'nda tamamlayarak lise'yi <b>Hürriyet Endüstri ve Meslek Anadolu Lisesi</b>
                    'nde tamamladım. Kendimi bildim bileli teknolojik çevreye ve genel olarak teknolojiye meraklıyım. Evet, herkes gibi bende
                    küçükken bir şeyler icat etmeye çalışırdım, bir oyuncak arabanın motorunu çıkartıp başka bir araba yapardım. Ancak bu merakım
                    diğer insanlarda olduğu gibi büyüdükçe gitmek yerine daha fazla kabardı. Lise yıllarının başına yazılıma kafayı yormaya karar
                    vererek kendi oyunlarımı, uygulamalarımı ve web sitelerimi yapmak istedim. O zamanlarda henüz bir hedefim, istikrarım ve
                    net bir kararım olmadığından dolayı bir şeyler üretsemde henüz bir altyapım yoktu. Zamanla kendimi geliştirerek birşeyleri
                    bilmediğimin farkına vardım. Neyi bildiğimi biliyordum fakat bununla yetinebileceğimi düşünmüyordum. Lise hayatım boyunca
                    sürekli projeler geliştirdim ve yarışmalara katıldım. Lise mezuniyeti döneminde hayatım boyunca sürekli yazılıma ilgi göstermekten
                    güzel bir <b>üniversite</b> kazanamadım. Bu benim için bir engel değildi. Zaten lise mezuniyeti sırasındaki yazılım bilgimin
                    üniversite son sınıf öğrencilerinin kapasitesinde olduğunu düşündüm. Üniversiteye Yazılım Mühendisliği veya Bilgisayar Mühendisliği
                    için gidecektim ki çevreme bir göz gezdirdiğimde ilgili bölümlerin mühendislik öğrencilerinin okulda fazla zaman kaybettiklerini ve
                    özellikle <b>Türkiye</b>'de kaliteli eğitim alamadıklarının farkına vardım. Bundan dolayı <b style={{ fontWeight: 'bold' }} >hiçbir zaman hedefim bir üniversite kazanmak olmadı.</b>
                    Şimdi ise üniversiteye gitmediğime rağmen gayet güzel, dolgun ve kaliteli bir portfolyo ve başarılı bir geçmişe sahibim. Daha yolun
                    başında olduğumun farkındayım ve çalışmaya devam ediyorum.
                </p>
                <h3>Girişimcilik'te Ben</h3>
                <p>
                    Girişimci olmak bana göre dünyanın en eğlenceli şeyi. Bir şeyler <b>üretmek</b>, bir çok kişinin kullanacağı bir şeyi yapmak veya
                    çoğu kişinin işine yarayacağı / işini kolaylaştıracağı bir şeyler yapmak inanılmaz eğlenceli bir durum. Yazılım geliştirmek ve bir şeyleri
                    biliyor olmaktan ziyade bir şeyleri bilmediğimin farkına varmak bana yeni girişimcilik hikayeleri yaratmama yol açtı. Hayatımda ilk projem ve
                    ilk üstünde çok durduğum projem olan <b style={{ fontWeight: 'bold' }} >Karakod</b> henüz daha lise 3. sınıfta aklıma gelmişti. Çıkış sebebi
                    meslek liselerinde yazılım öğrenen öğrencilerin yazılımı çok zor kavrayabilmeleri ve pekde iyi olmayan bir müfredat sistemiydi. Uygulamamın
                    detaylarına Projeler sayfasından göz atabilirsiniz. Karakod başta masaüstü uygulaması olarak 2 sene boyunca geliştirilmeye devam etti ve arkaplanda
                    toplam <b>59.000 satır kod yazıldı</b>.
                </p>

                <img src='img/sunum.jpg' style={{ width: '100%', marginTop: 10, marginBottom: 10 }} />

                <div class='row' style={{marginTop:10,marginBottom:10}} >
                    <div class='col-sm-3'>
                        <img src='img/ben.jpg' style={{ height: 200 }} />
                    </div>
                    <div class='col-sm-9'>
                        <p>

                            2018-2019 döneminde Karakod'un masaüstü versiyonu ve gelecek planlarımız ile birlikte Kayseri'de düzenlenen <b>Benim İşim Girişim</b> yarışmasına
                            katıldım. Yarışma çerçevesinde uzun bir eğitimler ve juri sunumları sonrasında Erciyes Teknopark Sera Kuluçka Merkezi'nde kuluçka girişimcilik
                            desteği, Lab Erciyes hizmeti, Prototip Geliştirme Yatırımı ve ofis desteği aldım. Benim İşim Girişim yarışmasında detaylı mentor görüşmeleri sonucunda
                            Karakod'un bir mobil uygulamasını yapmamız gerektiğini ve herkese ücretsiz erişme fırsatı vermemiz gerektiğine karar verdik. Karakod şuanda ücretsiz bir
                            şekilde erişime açık ilk geniş kapsamlı mobil uygulamam. <b>React Native</b> ile yazıldı.
                </p>
                    </div>
                </div>

                <p>
                    Hayatım sadece bir projeden ibaret değil tabiki, sürekli yeni projeler geliştirme peşindeyim. Yeni yarışmalara katılıp kendimi bu yönde geliştirmeye çalışıyorum.
                    Son zamanlarda çok büyük firmalarında sponsor olduğu bir <b style={{fontWeight:'bold'}}>Hackathon Etkinliğinin Baş Organizatörüyüm</b>. <b>Big React</b> adını
                    verdiğim topluluğum sadece Hackathon etkinliği düzenlemekle kalmıyor aynı zamanda ileride süpriz farklı sistemlere de tabi tutulacak. Üzerinde çalışıyorum.
                </p>
                <p>
                    Kayseri'de yazılım veya teknoloji ekosistemi fazla olmadığı için çevremdeki tümetkinliklere katılmaya özen gösteriyorum. Gerekirse kendi aramızda etkinlik veya
                    eğitim düzenliyoruz ve bu şekilde açlığımızı gidiyoruz diyebilirim. Örneğin <b>KayseriCoders</b> grubumuz sürekli yazılım geliştirme üzerine seminerler düzenliyor.
                    Her ay veya her hafta gönüllü birisi aşina olduğu bir platform veya teknoloji ile ilgili sunum yapıyor.
                </p>
                <img src='img/sunum3.jpeg' style={{ width: '100%', marginTop: 10, marginBottom: 10 }} />
                <p>
                    Şu zamana kadar çok güzel projelerde yer aldım, oldukça güzel platformlar geliştirdim. Amacım para kazanmaktan ziyade her zaman <b>bak şunu ben yaptım</b> diyebilmekti.
                    Beni en daha başarılı ve daha güçlü hale getiren şey başarısızlıklarım ve kimseye ikinci şansı vermemek oldu. Yazacak çok hikayem ve projem var fakat bunları sadece burada
                    sıralamak yerine projelerim sayfasından detaylara bakabilir bloğumu gezerek beni daha yakından tanıyabilirsiniz. Aşağıdaki linklerden beni takip edebilirsiniz.
                </p>




            </div>

        </Layout>
    )
}






export default blog
