
import React from "react";
import firebase from 'firebase'
import firebaseconnection from '../firebaseconnection'
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseconnection);
}


export default class Footer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          anasayfaSettings:[]
        }
      }
    
      componentDidMount(){
        firebase.database().ref('homesettings').once('value', (data) => {     
          var Data = data.toJSON()
          this.setState({
            anasayfaSettings: Data
          })
        })
      }
    
    render(){
        return(
            <footer class="footer-area section-gap" style={{borderRadius:20}}  >
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h6>Bu Site Hakkında</h6>
                            <p>
                               {this.state.anasayfaSettings.footertext}
							</p>
                            <a>
                                Next JS, React JS, Firebase, Markdown
							</a>
                        </div>
                    </div>
                    <div class="col-lg-5  col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h6>Bültenime Kayıt Ol</h6>
                            <p>Aşğıya e-posta adresini gir</p>
                            <div class="" id="mc_embed_signup">
                                <input class="form-control" name="EMAIL" placeholder="Enter Email" required
                                    type="email"></input>
                                    <button class="btn"
                                         ><i
                                            class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
						 
                            
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-6 social-widget">
                        <div class="single-footer-widget">
                            <h6>Beni Takip Et</h6>
                            <p>Sosyal medya ve diğer</p>
                            <div class="footer-social d-flex align-items-center">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                <a href="#"><i class="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
      
        </footer >
        )
    }
}
 