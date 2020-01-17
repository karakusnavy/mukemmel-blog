import React from 'react'
import SecureLS from 'secure-ls'
import Dashboard from '../../pages/admin/dashboard'
import Login from '../../pages/admin/index'
 

export default function (AuthComponent) {
  
    class Auth extends React.Component{
        state = {
            durum:false
        } ;
        componentWillMount(){
            if (ls.get('log_in_my_blog_546_555').length == 0) {
                this.setState({
                    durum:false
                })
            }
            else{
                this.setState({
                    durum:true
                })
            }
        }
        render(){
            return( 

                <>

                {
                    this.state.durum == true ? 
                    <Dashboard />
                    :
                    <AuthComponent />
                }
                </>

            )
        }
    }
 }

 