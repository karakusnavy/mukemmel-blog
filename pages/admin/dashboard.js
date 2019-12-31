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
                    <a class="navbar-brand mr-1" href="index.html">Start Bootstrap</a>
                    <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                        <i class="fas fa-bars"></i>
                    </button>

                    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>


                    <ul class="navbar-nav ml-auto ml-md-0">
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bell fa-fw"></i>
                                <span class="badge badge-danger">9+</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                                <span class="badge badge-danger">7</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-user-circle fa-fw"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">Settings</a>
                                <a class="dropdown-item" href="#">Activity Log</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
                            </div>
                        </li>
                    </ul>

                </nav>

                <div id="wrapper">


                    <ul class="sidebar navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="index.html">
                                <i class="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-fw fa-folder"></i>
                                <span>Pages</span>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="pagesDropdown">
                                <h6 class="dropdown-header">Login Screens:</h6>
                                <a class="dropdown-item" href="login.html">Login</a>
                                <a class="dropdown-item" href="register.html">Register</a>
                                <a class="dropdown-item" href="forgot-password.html">Forgot Password</a>
                                <div class="dropdown-divider"></div>
                                <h6 class="dropdown-header">Other Pages:</h6>
                                <a class="dropdown-item" href="404.html">404 Page</a>
                                <a class="dropdown-item" href="blank.html">Blank Page</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="charts.html">
                                <i class="fas fa-fw fa-chart-area"></i>
                                <span>Charts</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="tables.html">
                                <i class="fas fa-fw fa-table"></i>
                                <span>Tables</span></a>
                        </li>
                    </ul>

                    <div id="content-wrapper">

                        <div class="container-fluid">


                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="#">Dashboard</a>
                                </li>
                                <li class="breadcrumb-item active">Overview</li>
                            </ol>


                            <div class="row">
                                <div class="col-xl-3 col-sm-6 mb-3">
                                    <div class="card text-white bg-primary o-hidden h-100">
                                        <div class="card-body">
                                            <div class="card-body-icon">
                                                <i class="fas fa-fw fa-comments"></i>
                                            </div>
                                            <div class="mr-5">26 New Messages!</div>
                                        </div>
                                        <a class="card-footer text-white clearfix small z-1" href="#">
                                            <span class="float-left">View Details</span>
                                            <span class="float-right">
                                                <i class="fas fa-angle-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 mb-3">
                                    <div class="card text-white bg-warning o-hidden h-100">
                                        <div class="card-body">
                                            <div class="card-body-icon">
                                                <i class="fas fa-fw fa-list"></i>
                                            </div>
                                            <div class="mr-5">11 New Tasks!</div>
                                        </div>
                                        <a class="card-footer text-white clearfix small z-1" href="#">
                                            <span class="float-left">View Details</span>
                                            <span class="float-right">
                                                <i class="fas fa-angle-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 mb-3">
                                    <div class="card text-white bg-success o-hidden h-100">
                                        <div class="card-body">
                                            <div class="card-body-icon">
                                                <i class="fas fa-fw fa-shopping-cart"></i>
                                            </div>
                                            <div class="mr-5">123 New Orders!</div>
                                        </div>
                                        <a class="card-footer text-white clearfix small z-1" href="#">
                                            <span class="float-left">View Details</span>
                                            <span class="float-right">
                                                <i class="fas fa-angle-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 mb-3">
                                    <div class="card text-white bg-danger o-hidden h-100">
                                        <div class="card-body">
                                            <div class="card-body-icon">
                                                <i class="fas fa-fw fa-life-ring"></i>
                                            </div>
                                            <div class="mr-5">13 New Tickets!</div>
                                        </div>
                                        <a class="card-footer text-white clearfix small z-1" href="#">
                                            <span class="float-left">View Details</span>
                                            <span class="float-right">
                                                <i class="fas fa-angle-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>


                            <div class="card mb-3">
                                <div class="card-header">
                                    <i class="fas fa-chart-area"></i>
                                    Area Chart Example</div>
                                <div class="card-body">
                                    <canvas id="myAreaChart" width="100%" height="30"></canvas>
                                </div>
                                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                            </div>


                            <div class="card mb-3">
                                <div class="card-header">
                                    <i class="fas fa-table"></i>
                                    Data Table Example</div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>Edinburgh</td>
                                                    <td>61</td>
                                                    <td>2011/04/25</td>
                                                    <td>$320,800</td>
                                                </tr>
                                                <tr>
                                                    <td>Garrett Winters</td>
                                                    <td>Accountant</td>
                                                    <td>Tokyo</td>
                                                    <td>63</td>
                                                    <td>2011/07/25</td>
                                                    <td>$170,750</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                            </div>

                        </div>



                        <footer class="sticky-footer">
                            <div class="container my-auto">
                                <div class="copyright text-center my-auto">
                                    <span>Copyright © Bootstrap Tasarımı - Samed Karakuş 2019</span>
                                </div>
                            </div>
                        </footer>

                    </div>
                </div>
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>
                <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a class="btn btn-primary" href="login.html">Logout</a>
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