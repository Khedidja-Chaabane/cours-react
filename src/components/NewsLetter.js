import React from 'react'
import './newsletter.css'
function NewsLetter() {
    const handlePseudoLength = (event) =>{
        if(event.target.value.length > 3){
            event.target.className = 'green';
        }
        
        else if(event.target.value.length >= 1){
            event.target.className = 'red'; 

        }
        else{
            event.target.className = '';
        }
    }
  return (
    <div>
        <form>
                <label>Username</label>
                <input type="text" onChange={handlePseudoLength} />

                <label>Email</label>
                <input type="email"  />

                <input type="submit" />


            </form>
        
        </div>
  )
}

export default NewsLetter