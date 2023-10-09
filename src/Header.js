import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div class="Header">
    
    
     

      <img class="nav_image" src='https://pngimg.com/uploads/amazon/amazon_PNG13.png' alt="Pro"/>

      <div class="Header_search">
      <input class='Header_search_input' type='text'/>
        <SearchIcon class="Header_search_icon"/>


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

          <div class="Header_basketCounter">
           <ShoppingBasketIcon /> 
          </div>
       </div>
    
    </div>






  )
}

export default Header