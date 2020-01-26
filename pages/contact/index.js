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


            <div class="col-lg-12 contact">
                <div class='row'>
                    <div class='col-lg-8'>
                        <h5>İletişim Formu</h5>
                        <br />
                        
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" id="name" name="name" placeholder="İsim Soyisim" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                        </div>
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Mail Adresiniz" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-phone text-info"></i></div>
                                        </div>
                                        <input type="phone" class="form-control" id="phone" name="phone" placeholder="Telefon Numaranız" required />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                        </div>
                                        <textarea class="form-control" placeholder="Mesajınız" required></textarea>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <input type="submit" value="Gönder" class="btn btn-info btn-block rounded-0 py-2" />
                                </div>
                            

                    
                </div>
                    <div class='col-lg-4'>
                    <b>
                            Konum
                        </b>
                        <br/>
                        Kayseri / Seyahat Edebilir
                        <br/>
                        <b>
                            Eposta
                        </b>
                        <br/>
                        karakusnavy@gmail.com
                        <br/>
                        <b>
                            Skype
                        </b>
                        <br/>
                        idarki38
                        <br/>
                        <b>
                            Sosyal Mecralar
                        </b>
                        <br/>
                        karakusnavy

            </div>
                </div>
            </div>



        </Layout>
    )
}






export default blog
