import React from "react";
import firebase from 'firebase'
import firebaseconnection from '../firebaseconnection'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}

function Convert(link) {
    var trMap = {
        'çÇ': 'c',
        'ğĞ': 'g',
        'şŞ': 's',
        'üÜ': 'u',
        'ıİ': 'i',
        'öÖ': 'o'
    };

    for (var key in trMap) {
        link = link.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
    }
    return link.replace(/[^-a-zA-Z0-9\s]+/ig, '')
        .replace(/\s/gi, "-")
        .replace(/[-]+/gi, "-")
        .toLowerCase();
}


export default class dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            image: null,
            imagelocation: null,
            title: '',
            blog: ''
        };
        this.onChange = this.onChange.bind(this)
    }

    Convert(link) {
        var trMap = {
            'çÇ': 'c',
            'ğĞ': 'g',
            'şŞ': 's',
            'üÜ': 'u',
            'ıİ': 'i',
            'öÖ': 'o'
        };

        for (var key in trMap) {
            link = link.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
        }
        return link.replace(/[^-a-zA-Z0-9\s]+/ig, '')
            .replace(/\s/gi, "-")
            .replace(/[-]+/gi, "-")
            .toLowerCase();
    }



    addNewBlog = async () => {



        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var clock = today.getHours() + ':' + today.getMinutes()

        today = mm + '/' + dd + '/' + yyyy + ' ' + clock;



        await this.uploadImage()
        var linkBlog = this.Convert(this.state.title)
        await firebase.database().ref().child('blogs').push().set({
            title: this.state.title,
            blog: this.state.blog,
            image: this.state.imagelocation,
            date: today,
            link: linkBlog
        });

        alert('Yeni yazı eklendi')


    }

    onChange = async (e) => {
        var adana = e.target.files[0]
        await this.setState({ image: adana })
        console.log(this.state.image)
    }
    uploadImage = async () => {
        var ref = firebase.storage().ref().child('images/' + this.state.image.name);
        await ref.put(this.state.image)
        await firebase.storage().ref().child('images/' + this.state.image.name).getDownloadURL().then((ress) => {
            this.setState({
                imagelocation: ress
            })
        })
    }
    deleteBlog = async (id) => {
        await firebase.database().ref('blogs/' + id).remove();
        alert('Silindi')

    }

  
    componentDidMount = async () => {
        var getting = []
        firebase.database().ref().child('blogs').on('child_added', data => {
            getting.push({
                title: data.val().title,
                date: data.val().date,
                image: data.val().image,
                link: data.val().link,
                id: data.key
            })
            this.setState({ blogs: getting })
        })

    
        firebase.database().ref().child('blogs').on('child_removed', data => {
            var List = []
            List = this.state.blogs
            for(var i = 0;i<List.length;i++){
                if(List[i].id == data.key){
                    List.splice(i, 1);
                }
            }
            this.setState({ blogs: List })
        })

    }


    render() {
        return (
            <div>
                <div class="modal fade" id="newBlogModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Yeni Blog Ekle</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div style={{ padding: 15 }} >

                                Blog Başlığı:<br />
                                <input id="newbloginput" onChange={(text) => this.setState({ title: text.target.value })} placeholder="Başlık Giriniz" /><br />
                                Blog Yazısı Giriniz: <br />
                                <textarea placeholder="Blog Yazısı Giriniz" onChange={(text) => this.setState({ blog: text.target.value })} value={this.state.blog} /><br />
                                Yazı Resmi Seçiniz:
                                <input id="newbloginput" type="file" onChange={this.onChange} /><br />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={() => this.addNewBlog()} >Yeni Blog Ekle</button>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#newBlogModal">Yeni Blog Ekle</button>
                                    <button style={{ marginLeft: 10 }} type="button" class="btn btn-success">Yeni Kullanıcı Ekle</button>
                                </div>

                            </div>
                            <div class="card mb-3">
                                <div class="card-header">
                                    <i class="fas fa-table"></i>
                                    Blog Yazılarım</div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Resim</th>
                                                    <th>Başlık</th>
                                                    <th>Tarih</th>
                                                    <th>Yazıya Git</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.blogs.map((item) =>
                                                        <tr>
                                                            <td><img src={item.image} style={{height:150}} /></td>
                                                            <td>{item.title}</td>
                                                            <td>{item.date}</td>
                                                            <td><button type="button" onClick={() => alert(item.link)} class="btn btn-primary">YAZIYA GİT</button></td>
                                                            <td><button type="button" onClick={() => this.deleteBlog(item.id)} class="btn btn-danger">SİL</button></td>
                                                        </tr>
                                                    )
                                                }
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
                <style jsx>{`

input{
padding:10px;
font-weight:bold;
margin:5px;
width:400 !important;
}
textarea{
padding:10px;
font-weight:bold;
height:200px;
width:400px;
margin:5px
}

`}</style>
            </div>
        )
    }
}