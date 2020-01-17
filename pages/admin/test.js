import React from 'react'
import Login from '../admin/index';
import PageWithAuth from '../../components/hoc/pagewithauth';

const GirisYap = () => {
    return(
        <Login />
    )
}

export default PageWithAuth(GirisYap);