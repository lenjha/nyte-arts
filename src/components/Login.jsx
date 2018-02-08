import React from 'react';
import {Link} from 'react-router-dom';

function Login(){
  const link={
    textDecoration:'none',
    color:'white'
  };

  return(
    <div>
      <style jsx>{`
        color: lightgrey;
      `}</style>
      <Link style={link} to='/loginPage'>Login</Link>
    </div>
  );
}

export default Login;
