import React, { useEffect, useState } from "react";
import firebase from 'firebase'
import firebaseconnection from '../../../components/firebaseconnection'
import { useRouter } from 'next/router'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}



const dashboard = ({ blogsamet }) => {

    const [blogs, setblogs] = useState([]);
    const [image, setimage] = useState(null);
    const [title, settitle] = useState('');
    const [blog, setblog] = useState('');
    const Router = useRouter()

    async function getBlog() {
        var BlogText = []
        await firebase.database().ref().child('blogs').on('child_added', data => {

            BlogText.push({
                title: data.val().title,
                date: data.val().date,
                image: data.val().image,
                link: data.val().link,
                blog: data.val().blog,
                id: data.key
            })

        })
        setblogs(BlogText.reverse())

    }



    useEffect(() => {

        getBlog()

    }, [blogs])


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



    async function addNewBlog() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var clock = today.getHours() + ':' + today.getMinutes()

        today = mm + '/' + dd + '/' + yyyy + ' ' + clock;


        var linkBlog = Convert(title)
        var ref = firebase.storage().ref().child('images/' + image[0].name);
        await ref.put(image[0])
        await firebase.storage().ref().child('images/' + image[0].name).getDownloadURL().then((ress) => {
            console.log('resim adresi: ' + ress)
            firebase.database().ref().child('blogs').push().set({
                title: title,
                blog: blog,
                image: ress,
                date: today,
                link: linkBlog
            });
        })


        alert('Yeni yazı eklendi')
    }

    async function onChange(e) {
        var adana = e.target.files

        await setimage(adana)
        console.log(image)
    }


    async function exit() {
        var ls = new SecureLS();
        ls.removeAll();
        router.push('/admin')
    }
    async function deleteBlog(id) {
        console.log(id)
        await firebase.database().ref('blogs/' + id).remove();
        alert('Silindi')

    }



    return (
        <div>
            <link rel="stylesheet" href="../css/bootstrap.css"></link>
            <link href="../admin/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
            <link href="../admin/vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet" />
            <link href="../admin/css/sb-admin.css" rel="stylesheet" />
            <div id="root" className="root" ></div>
            <div className="modal fade" id="newBlogModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Yeni Blog Ekle</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div style={{ padding: 15 }} >

                            Blog Başlığı:<br />

                            <input type="text" onChange={(text) => settitle(text.target.value)} placeholder="Başlık Giriniz" /><br />
                            Blog Yazısı Giriniz: <br />
                            <textarea placeholder="Blog Yazısı Giriniz" onChange={(text) => setblog(text.target.value)} value={blog} /><br />
                            Yazı Resmi Seçiniz:
                            <input id="newbloginput" type="file" onChange={onChange} /><br />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => addNewBlog()} >Yeni Blog Ekle</button>
                        </div>
                    </div>
                </div>
            </div>
            <title>Samed Karakuş Admin</title>
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                <a className="navbar-brand mr-1" href="index.html">Samed Karakuş - Admin Paneli</a>
                <a className="navbar-brand mr-1 samet" onClick={() => exit()} style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'gray', fontSize: 15, borderRadius: 10, padding: 5, marginLeft: 10 }} >Çıkış Yap</a>
            </nav>
            <div id="wrapper">
                <div id="content-wrapper">
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">Genel</a>
                            </li>
                            <li className="breadcrumb-item active">Blog Yazılarım</li>
                        </ol>
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-primary o-hidden h-100">
                                    <div className="card-body">
                                        <div className="card-body-icon">
                                            <i className="fas fa-fw fa-comments"></i>
                                        </div>
                                        <div className="mr-5">{blogs.length} Adet Blog Yazısı!</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-sm-6 mb-6">
                                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#newBlogModal">Yeni Blog Ekle</button>
                            </div>

                        </div>
                        <div className="card mb-3">
                            <div className="card-header">
                                <i className="fas fa-table"></i>
                                Blog Yazılarım</div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" width="100%" cellspacing="0">
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
                                                blogs.map((item) =>
                                                    <tr>
                                                        <td><img src={item.image} style={{ height: 150 }} /></td>
                                                        <td>{item.title}</td>
                                                        <td>{item.date}</td>
                                                        <td><a href={'../blog/' + item.link} className="btn btn-primary">YAZIYA GİT</a></td>
                                                        <td><button type="button" onClick={() => deleteBlog(item.id)} className="btn btn-danger">SİL</button></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer small text-muted">Son yazı eklenme tarihi : 09.09.2019</div>
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
.samet:hover{
    cursor:pointer;
}

`}</style>
        </div>
    )
}

dashboard.getInitialProps = async (req) => {


    


    return { blogsamet: 'getting' }
};


export default dashboard