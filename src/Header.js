import React from 'react'
import "./Header.css";
function Header() {
  return (
    <div class="Header">
    
    
     <div class="nav_logo">

      <img src='https://pngimg.com/uploads/amazon/amazon_PNG13.png'/>
      <input class='Header_search' type='text'/>
        {/*logo*/}


     </div>


      


        <div class='Header_nav'>
            <div class='Header_option'>
            <span class='Header_option_lineOne'>
            Hello 
             </span>
              <span class='Header_option_lineto'>
             Sign in
                 </span>
                </div>

                <div class='Header_option'>
                    <span class='Header_option_lineOne'>
                   Returns </span>
          <span class='Header_option_lineto'>
           & Orders</span>
         </div>

          <div class='Header_option'>

            <span class='Header_option_lineOne'>
           Your</span>
            <span class='Header_option_lineto'>
           Prime</span>
          </div>
       </div>
    
    </div>






  )
}

export default Header