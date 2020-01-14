import App, {Container} from 'next/app';
import React from 'react';
import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'
import loginControl from '../../components/loginControl'


function Page() {
  const router = useRouter()
    const [loginControl, setloginControl] = useState('0')

  useEffect(() => {
    
    if(loginControl == true)
    alert('giriş yapmışsın')
    else
    alert('giriş yapmamışsın')
    //router.push('/admin/dashboard')
    
    
  }, [])


  return(
    <div>

    </div>
  )

 
}

export default Page
 