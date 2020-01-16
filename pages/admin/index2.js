import App, { Container } from 'next/app';
import React from 'react';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import auth from '../../components/auth/login'
import SecureLS from 'secure-ls'

function index() {
  const router = useRouter()
  useEffect(() => {
    var ls = new SecureLS();
    if(ls.get('log_in_my_blog_546_555').length == 0){      
      router.push('/admin')
    }    
    else{      
      router.push('/admin/dashboard')
    }
  })

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
                  <button type="button" onClick={() => auth(username, password, 'test')} id="sendlogin" class="btn btn-primary">Giriş Yap</button>
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

export default index