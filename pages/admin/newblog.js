import React from "react";
import firebase from 'firebase'
import firebaseconnection from '../firebaseconnection'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconnection);
}

export default class newblog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            imagelocation: null,
            title: '',
            blog: ''
        };
        this.onChange = this.onChange.bind(this)
    }





    addNewBlog = async () => {



        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var clock = today.getHours()+':'+today.getMinutes()
        
        today = mm + '/' + dd + '/' + yyyy + ' ' + clock;

      

        await this.uploadImage()

        await firebase.database().ref().child('blogs').push().set({
            title: this.state.title,
            blog: this.state.blog,
            image: this.state.imagelocation,
            date: today
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
    render() {
        return (
            <div>

                Blog Başlığı:<br />
                <input id="newbloginput" onChange={(text) => this.setState({ title: text.target.value })} placeholder="Başlık Giriniz" /><br />
                Blog Yazısı Giriniz: <br />
                <textarea placeholder="Blog Yazısı Giriniz" onChange={(text) => this.setState({ blog: text.target.value })} value={this.state.blog} /><br />
                Yazı Resmi Seçiniz:
                <input id="newbloginput" type="file" onChange={this.onChange} /><br />
                <input type="button" value="Yeni Yazı Ekle" onClick={() => this.addNewBlog()} />

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