import App, { Container } from 'next/app';
import React from 'react';
import { useRouter } from 'next/router'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import parseCookies from '../../components/cookie'
import cookies from 'next-cookies'
import firebase from 'firebase'
import firebaseconnection from '../../components/firebaseconnection'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}

const index = ({ cookies }) => {
    const Router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    async function loginChecker() {
        var usernamecok = cookies.loguser
        var passwordcok = cookies.logpass
        const getting = []
        var log = 0
        await firebase.database().ref('users').on('child_added', data => {

            if (data.val().username == usernamecok && data.val().password == passwordcok) {

                log = 1
                Router.push('/admin/dashboard')

            }

        })

        return log

    }


    async function checkLogin() {
        const getting = []
        var log = 0
        await firebase.database().ref('users').on('child_added', data => {

            if (data.val().username == username && data.val().password == password) {
                alert('Hoş geldin ' + data.val().name)
                document.cookie = 'loguser=' + username + '; path=/'
                document.cookie = 'logpass=' + password + '; path=/'
                log = 1
                Router.push('/admin/dashboard')

            }

        })

        if (log == 0)
            alert('Bilgiler hatalı')
    }

    useEffect(() => {

        loginChecker()


    }, [])





    return (
        <>
            <div>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <div class="container" style={{ flex: 1 }}>
                    <div class="row justify-content-center align-items-center" style={{ height: 100 }}>
                        <div class="col-4">
                            <h1>Admin Girişi</h1>
                            <div class="card">
                                <div class="card-body">
                                    <form action="" autocomplete="off">
                                        <a>Kullanıcı Adı</a>
                                        <div class="form-group">
                                            <input type="text" onChange={(text) => setUsername(text.target.value)} class="form-control" name="username" />
                                        </div>
                                        <a>Şifre</a>
                                        <div class="form-group">
                                            <input type="password" onChange={(text) => setPassword(text.target.value)} class="form-control" name="password" />
                                        </div>
                                        <button type="button" onClick={() => checkLogin()} id="sendlogin" class="btn btn-primary">Giriş Yap</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


index.getInitialProps = ctx => ({

    cookies: cookies(ctx)


});

export default index