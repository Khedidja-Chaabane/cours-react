import React from 'react'
function Inscription() {
  return (
    <div> 
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
                <input type="password" class="form-control" id="password" name="password" required/>
            </div>
           
            <button type="submit" class="btn btn-primary">Inscription</button>
        </form>
    </div>
    </div>
  )
}
export default Inscription