import React, { useState } from 'react'
import './inscription.css';
function Inscription() {

    const [password , setPassword] = useState('');
    const [message , setMessage] = useState('');
    const [couleur , setCouleur] = useState('');
    function handlePasswordChange(event){
        setPassword(event.target.value);
        console.log(event.target.value);
        
        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/ 
       // const regExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$');
        const isValidPassword = regExp.test(password);
        console.log(regExp);
        console.log(isValidPassword);
        
        if(isValidPassword) {
            setMessage('Password is valid');
            setCouleur('valid');
        }
else{
    setMessage('Invalid password');
    setCouleur('invalid');
}
    }
  return (
    <div> <div> 
    <h1 class="text-center">Inscription</h1>
<div class="container mt-5">
    <form action="http://localhost:5000/api/newuser" method="post">
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" name="username" required/>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" required/>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" onChange={handlePasswordChange} required/>
            <span className={couleur}>{message}</span>
        </div>
       <label>Date d'inscription</label>
       <input type="date" name="date_inscription"></input>
        <button type="submit" class="btn btn-primary">Inscription</button>
    </form>
</div>
</div></div>
  )
}

export default Inscription