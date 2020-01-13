import React from 'react'

export default class Login extends React.Component {



    render() {
        return (
            <div>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <div class="container" style={{flex:1}}>
                        <div class="row justify-content-center align-items-center" style={{ height: 100 }}>
                            <div class="col-4">
                                <h1>Admin Girişi</h1>
                                <div class="card">
                                    <div class="card-body">
                                        <form action="" autocomplete="off">
                                            <a>Kullanıcı Adı</a>
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="username" />
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" name="password" />
                                            </div>
                                            <button type="button" id="sendlogin" class="btn btn-primary">login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                )
            }
}