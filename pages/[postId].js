import React from "react";

const posts = ({ query }) =>{
  return(
    <div>
      {query}
    </div>
  )
}

posts.getInitialProps = async ({ req2, query }) => {
  
  
  
 return {query: query.postId};
 
};

export default posts;