import React from "react";
import firebase from 'firebase'
import firebaseconnection from '../firebaseconnection'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}

export default class dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <title>Samed Karakuş Admin</title>
                <link rel="stylesheet" href="css/bootstrap.css"></link>
                <link href="../admin/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
                <link href="../admin/vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet" />
                <link href="../admin/css/sb-admin.css" rel="stylesheet" />
                <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
                    <a class="navbar-brand mr-1" href="index.html">Samed Karakuş - Admin Paneli</a>
                </nav>
                <div id="wrapper">
                    <div id="content-wrapper">
                        <div class="container-fluid">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="#">Genel</a>
                                </li>
                                <li class="breadcrumb-item active">Blog Yazılarım</li>
                            </ol>
                            <div class="row">
                                <div class="col-xl-3 col-sm-6 mb-3">
                                    <div class="card text-white bg-primary o-hidden h-100">
                                        <div class="card-body">
                                            <div class="card-body-icon">
                                                <i class="fas fa-fw fa-comments"></i>
                                            </div>
                                            <div class="mr-5">26 Adet Blog Yazısı!</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 mb-3">
                                    <div class="card text-white bg-warning o-hidden h-100">
                                        <div class="card-body">
                                            <div class="card-body-icon">
                                                <i class="fas fa-fw fa-list"></i>
                                            </div>
                                            <div class="mr-5">3 Adet Kullanıcı!</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 mb-6">
                                <button type="button" class="btn btn-success">Yeni Blog Ekle</button>
                                <button style={{marginLeft:10}} type="button" class="btn btn-success">Yeni Kullanıcı Ekle</button>
                                </div>
                                
                            </div>
                            <div class="card mb-3">
                                <div class="card-header">
                                    <i class="fas fa-table"></i>
                                    Blog Yazılarım</div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Başlık</th>
                                                    <th>Tarih</th>
                                                    <th>Yazıya Git</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Başlık</th>
                                                    <th>Tarih</th>
                                                    <th>Yazıya Git</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td><button type="button" class="btn btn-primary">YAZIYA GİT</button></td>
                                                    <td><button type="button" class="btn btn-danger">SİL</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Garrett Winters</td>
                                                    <td>Accountant</td>
                                                    <td><button type="button" class="btn btn-primary">YAZIYA GİT</button></td>
                                                    <td><button type="button" class="btn btn-danger">SİL</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="card-footer small text-muted">Son yazı eklenme tarihi : 09.09.2019</div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="../admin/vendor/jquery/jquery.min.js"></script>
                <script src="../admin/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="../admin/vendor/jquery-easing/jquery.easing.min.js"></script>
                <script src="../admin/vendor/chart.js/Chart.min.js"></script>
                <script src="../admin/vendor/datatables/jquery.dataTables.js"></script>
                <script src="../admin/vendor/datatables/dataTables.bootstrap4.js"></script>
                <script src="../admin/js/sb-admin.min.js"></script>
                <script src="../admin/js/demo/datatables-demo.js"></script>
                <script src="../admin/js/demo/chart-area-demo.js"></script>
            </div>
        )
    }
}