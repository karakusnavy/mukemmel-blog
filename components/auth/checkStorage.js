import react from 'react'
import SecureLS from 'secure-ls'

const check = () => {
    var ls = new SecureLS();
    if (ls.get('log_in_my_blog_546_555').length == 0) {
        return false    
    }
    else{
        return true
    }

    
}

export default check