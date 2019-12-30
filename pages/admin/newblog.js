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
          imagelocation:null
        };
        this.onChange = this.onChange.bind(this)
      }





      onChange = async (e) => {
          var adana = e.target.files[0]
           await this.setState({image:adana})
        console.log(this.state.image)
        
     
      }
    uploadImage = async (uri,imageName) => {
        const response = await fetch(this.state.image);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child('images/' + this.state.image.name);
        ref.put(this.state.image).then((resi) => {
            if (resi.state == 'success') {
                firebase.storage().ref().child('images/' +this.state.image.name).getDownloadURL().then((ress) => {
                    this.setState({
                        imagelocation: ress
                    })
                    console.log(ress)
                })
            }
        });
    }
    render() {
        return (
            <div>
                <input type="file"  onChange={this.onChange} />
                <input type="button" title="Yükle" onClick={()=>this.uploadImage()} />
            </div>
        )
    }
}