import React from 'react'
import './App.css'
import { useState } from 'react';



export default function Dailer () {

const [searchterm, setSearchTerm] = useState('');
// const [showResults, setShowResults] = useState(false);
   

function handleSearch(e){
setSearchTerm(e.target.value);
}


function handleDial(e){
     console.log(e);
}

  return (
    <>
    <div className='hero'>
       

        <div className='newcall'>
             <p className='newCall'>NEW CALL FROM </p>
            
        </div>

<div className='DC-Section'>

    <div className='circle'>SP</div>

   <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shadow proprerties
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Recent</a></li>
            <li><a class="dropdown-item" href="#">All Calls</a></li>
            <li><a class="dropdown-item" href="#">missed calls</a></li>
          </ul>
        </div>

</div>

  <div className='formargin'>
     <p>Your Caller ID Displays as <span className='number'>(202)944-6641</span> <span className='change'>.Change</span></p>
   </div>


     <div className='box'>

     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg> 


            <input className='inputnum' type='text' placeholder='type a name or number'   value={searchterm}   onChange={handleSearch}   ></input>
     
    </div>

    
    

<div className='circles'>
 
       <div className='circle-1'>P </div>
       <div className='circle-2'># </div>
       <div className='circle-3'>P </div>
       <div className='circle-4'># </div>
        <div className='circle-5'>U </div>
       <div className='circle-6'>RR</div>
       
</div>
    
<div class="grid-container">
  <div class="grid-item" onClick={() => handleDial(1)}>1<br/><span className='letters'></span></div>
  <div class="grid-item" onClick={() => handleDial(2)}>2<br/><span className='letters'>ABC</span></div>
  <div class="grid-item" onClick={() => handleDial(3)}>3<br/><span className='letters'>DEF</span></div>  
  <div class="grid-item"onClick={() => handleDial(4)}>4<br/><span className='letters'>GHI</span></div>
  <div class="grid-item"onClick={() => handleDial(5)}>5<br/><span className='letters'>JKL</span></div>
  <div class="grid-item" onClick={() => handleDial(6)}>6<br/><span className='letters'>MNO</span></div>  
  <div class="grid-item" onClick={() => handleDial(7)}>7<br/><span className='letters'>PQRS</span></div>
  <div class="grid-item" onClick={() => handleDial(8)}>8<br/><span className='letters'>TUV</span></div>
  <div class="grid-item" onClick={() => handleDial(9)}>9<br/><span className='letters'>WXYZ</span></div>  
  <div class="grid-item" onClick={() => handleDial('*')}>*<br/><span className='letters'></span></div>  
  <div class="grid-item" onClick={() => handleDial(0)}>0<br/><span className='letters'>+</span></div>  
  <div class="grid-item" onClick={() => handleDial('#')}>#<br/><span className='letters'></span></div>  
</div>

 





 



    </div>

    </>
  )
}

