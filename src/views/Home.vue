<template>
  <div class="home">



<div class="hero">
      <div class='container'>
      <div class='topBar'>
      <img class='homepage-logo' src="../assets/homepage/new-site-logo.png" width="315" height="135" />
      <div class='btnCont'>
      <button class='clearBtn'>Home</button>
      <button class='clearBtn'>Diagnostic Tool</button>
      
      </div>
      </div>

      <div class='imageCont'>
      <div class='imgTitle'>
        <p class='imgTitle-p'>Home Remodeling</p>
      </div>

      <div >
      <p class='imgSubtitle'>Use the tool below to start the process of a cost estimate for a variety of home remodeling</p>
      </div>


      <div class='imageMenu'>
      <div class='imageRow'>
        <button :class="this.imageBtn1">Flooring</button>
        <button :class='this.imageBtn2' >Counters</button>
        <button :class='this.imageBtn3' >Paint</button>
        <button :class='this.imageBtn4' >Landscaping</button>
      </div>

      <div class='imageRow2'>
        <div class='imageCol'>
          <p>Flooring Material</p>
          <select class='select-homepage-top'>
            <option>Marble</option>
            <option>Wood</option>
            <option>Tile</option>
            <option>Laminant</option>
          </select>
        </div>
        <div class='imageCol'>
          <p>Price Range</p>
          <select class='select-homepage-top'>
            <option>under $1,000</option>
            <option>$1,000 - $2,000</option>
            <option>$2,000 - $3,000</option>
            <option>$3,000 - $4,000</option>
          </select>
        </div>
        <div class='imageCol'>
          <p>Room Size</p>
          <select class='select-homepage-top'>
            <option>0-20sq. ft</option>
            <option>21-50sq. ft</option>
            <option>51-80sq. ft</option>
            <option>81-100sq. ft</option>


          </select>
        </div>
        <div class='imageCol'>
          <div class='buttonCont'>

       
        <button class='searchBtn'>        
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" class="magIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path></svg>
        </button>
        </div>
        </div>
      </div>



      </div>
      </div>

      <div class='interTitle'>
      <hr class='interTitle-hr' />
      <p class='interTitle-text'>Our Strengths:</p>

      
<div class="ul-div">
        <ul class='interTitle-ul'>
          <li class='interTitle-li'>
            Provide a single point of contact for all of your design, planning, construction and renovation needs from the first idea to the final touches
          </li>
          <li class='interTitle-li'>
            Manage design, construction, cost, and schedule with a dedicated project team that cares about your satisfaction every step of the way
          </li>
          <li class='interTitle-li'>
            Are responsive and friendly — we pride ourselves on returning messages promptly, providing clear project updates, and maintaining open lines of communication
          </li>
          <li class='interTitle-li'>
            Value every project equally, from large-scale commercial construction projects to home bathroom remodeling
          </li>
          <li class='interTitle-li'>
            Exclusively focus on luxury remodeling, thus giving us deeper insight into the demands of unique, custom projects
          </li> 
          <li class='interTitle-li'>
            Guarantee elegance and character in every design through the highest quality architecture and craftsmanship
          </li>


        </ul>
</div>
      <hr class='interTitle-hr' />

      <p class="interTitle-title">Past Projects</p>

      </div>
        <div class='interTitle2'>
          <p class='interTitle-2-left'>Recently Completed</p>
          <p class='interTitle-2-right'>See all</p>
        </div>
      <div class='cardRow'>
        <div class='card1'>
          <p class="cardTitle">Boat Dock</p>
        </div>
        <div class='card2'>
           <p class="cardTitle">Backyard Staircase</p>
        </div>
        <div class='card3'>
           <p class="cardTitle">Custom Pool</p>
        </div>
        <div class='card4'>
           <p class="cardTitle">Botanical Garden</p>
        </div>

      </div>
      <hr class='interTitle-hr-last' />

  
      <div class='imageCont2'>
    

        
        <button class='addyBtn2'>Contact Us</button>
      </div>

      <hr class='interTitle-hr-last' />
      <!-- {/*  */} -->
      <div class='bottomBar'>
      <div class='bottomCol-far-left'>
      <img class='footer-company-logo' src="../assets/homepage/new-site-logo.png" width="210" height="100" />
      <p>Website Created by Kyle Spencer for demonstration purposes</p>
      <div class="socialFoot">
      <div class="social-image-cont">
              <img class='footer-img-class' src="../assets/homepage/fb.png" width="38" height="38"/>
      </div>
      <div class="social-image-cont">
              <img class='footer-img-class' src="../assets/homepage/new-link.png" width="42" height="42"/>
      </div>
      <div class="social-image-cont">
              <img class='footer-img-class' src="../assets/homepage/new-insta.png" width="43" height="43"/>
      </div>
      <div class="social-image-cont">
              <img class='footer-img-class' src="../assets/homepage/twit.png" width="39" height="39"/>
      </div>
      
      </div>
      <p>© 2022 | All Rights Reserved</p>
      </div>
      <div class='bottomCol'>
        <label>Pages</label>
      <button class='clearBtn2'>Home</button>
      <button class='clearBtn2'>Remodeling Price Tool</button>
      <button class='clearBtn2'>Diagnostic Tool</button>
      <button class='clearBtn2'>Contact Us</button>
      <button class='clearBtn2'>Admin Panel</button>
      </div>
      <div class='bottomCol'>
      <label>Learn</label>
      <button class='clearBtn2'>Who We Are</button>
      <button class='clearBtn2'>Values Statement</button>
      <button class='clearBtn2'>Apply</button>
      <button class='clearBtn2'>Our Mission</button>
      </div>
      <div class='bottomCol'>
      <label>Subscribe</label>
      <p>Our monthly newsletter about current trends</p>
      <div class='inpDiv'>
      <input class='footerInp' />
      <button class='inpBtn'>
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="arrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
      </button>
      </div>
      </div>
      </div>



      </div>



    
  </div>

  <div class="home-bg"></div>
    </div>

</template>

<script>
//import socialImg1 from '../assets/homepage/fb.png';


export default {
  name: 'Home',
  components: {
  },
data(){
  return{
    magClass: 'magIcon',
    imageBtn1: 'imageBtn',
    imageBtn2: 'imageBtn2',
    imageBtn3: 'imageBtn2',
    imageBtn4: 'imageBtn2',
    imageBtn5: "imageBtn2",
    arrowClass: 'arrow'
  }

}
}
</script>


<style scoped>

@font-face {
  font-family: Mont;
  src: url('~@/assets/fonts/Montserrat-Regular.ttf');
}
@font-face {
  font-family: Mont2;
  src: url('~@/assets/fonts/Montserrat-Light.ttf');
}



.brand-logo{
  background-image: url('~@/assets/homepage/AcreTrader_Logo.jpg');
}
.magIcon{
  background-image: url('~@/assets/homepage/magIcon.svg');
}

@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');



.homepage-logo{
  cursor: pointer;
}

  .hero{

  align-items: center;
  justify-content: center;
  align-content: center;
  justify-self: center;
  justify-items: center;
  position: relative;

  left:-webkit-calc(100% - 90%);
  top: 0;
  width: 80%;

  border-radius: 7px;
  -webkit-box-shadow:  0px 0px 17px 3px rgba(0,0,0,0.59); 
  box-shadow:  0px 0px 17px 3px rgba(0,0,0,0.59);

  background-color: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(7px);

}
.container{
   justify-content: center;
  align-self: center;
  justify-self: center;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.imageCont{
  -webkit-box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57); 
  box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57);
  margin-left: 59px;
  margin-right: 59px;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 575px;
  background-image: url('~@/assets/homepage/homepage-main-1.jpg');
  background-size: cover;
  background-position: 45%;
  border-radius: 33px;
  position: relative;
  font-family: Mont2;
  width: auto;
  box-sizing: border-box;
  filter: contrast(1.1);
  

  
}
.topBar{
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-family: Mont2;
  background-color: rgba(0,0,0,0.0);
  margin-bottom: 21px;
  margin-left: 59px;
  margin-right: 59px;
  margin-top: 21px;
  width: auto;
}
.logo{
  flex-direction: row;
  height: 40px;
  margin-right: 300px;
}
.btnCont{
  flex-direction: row;
  
}
.clearBtn{
   cursor: pointer;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 25px;
  margin-left: 4px;
  margin-right: 4px;
  border-style: none;
  background-color: rgba(0,0,0,0.0);
  color: black;
  font-family: Mont2;
  font-size: 22px;
}
.clearBtn:hover{
  color: rgba(0, 16, 29, 0.547);
  background-color: rgba(0,0,0,0.0);

}
.logBtn{
  height: 50px;
  flex-direction: row;
  border: 2px solid lime;
  box-sizing: border-box;
  font-family: Mont2;
  width: 150px;
  font-size: 22px;
  border-radius: 14px;
  color: lime;
  background-color: rgba(0, 0, 0, 0);
}
.socialFoot{
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  vertical-align: center;
}

.social-image-cont{
  padding-left: 30px;
  vertical-align: center;
}



.imageMenu{
  left: 30px;
  bottom: 55px;
  width: 828px;
  box-sizing: border-box;
  position: absolute;
}

.imageRow{
  display: flex;
}
.imageRow2{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  backdrop-filter: blur(20px);
  font-family: Mont2;
  backdrop-filter: blur(3px);
  justify-content: space-evenly;
  border-radius: 0px 20px 20px 20px;
  background-color: rgba(255, 255, 255, 0.35);
  filter: contrast(1.55);

  padding-right: 12px;
  border-color: rgba(0, 0, 0, 0.35);


}
.imageBtn{
  border-radius: 20px 20px 0px 0px;
  border: 0px;
  color: rgba(0,0,0,1);
  font-family: Mont;
  letter-spacing: 3px;

  background-color: rgba(255, 255, 255, 0.35);

  
  backdrop-filter: blur(3px);
  padding: 20px;
  font-size: 15px;
  filter: contrast(1.55);

  
  
}
.imageBtn2{
  border-radius: 20px 20px 0px 0px;
  font-family: Mont;
  letter-spacing: 3px;
  color: rgba(0,0,0,1);
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  padding: 20px;
  font-size: 15px;
  border: .2px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.07);
  -moz-box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.07);
  box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.07);

    filter: contrast(1.55);

}
.imageBtn:hover{
 

  border-radius: 20px 20px 0px 0px;
  font-family: Mont;
  letter-spacing: 3px;
  color: rgba(0,0,0,1);
  background-color: rgba(255, 255, 255, 0.25);
  
  backdrop-filter: blur(3px);

  padding: 20px;
  font-size: 15px;

  
  border: .4px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.47);
  -moz-box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.47);
  box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.47);
}
.select-homepage-top{
  background-color: rgba(0, 0, 0, 0.35);

  font-family: Mont2;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 10px;
  letter-spacing: 3px;


  background-color: rgba(255, 255, 255, 0.0);
  border: none;
  font-size: 16px;
  font-weight: 400;
  font-family: Mont2;
}
.searchBtn{
  height: 50px;
  width: 50px;
  font-size: 7px;
  border: 0px;
  font-family: Mont2;
  padding: 25px;
  border-radius: 11px;
  background-color: rgba(53, 145, 231, 0.59);
  /*  */
  -webkit-box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.22);
  -moz-box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.22);
  box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.22);
}
.searchBtn:hover{
    background-color: rgba(53, 145, 231, 0.87);
}
.imageCol{
  margin: auto;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  vertical-align: center;
  padding: 15px;
  line-height: 2px;
  font-family: Mont2;

}

.imgTitle{
  font-size: 18px;
  color: #101010;
  position: absolute;
  font-family: Mont2;
  width: 490px;
  top: -10px;
  left: -18px;
  font-size: 56px;
  padding: 18px;
  backdrop-filter: blur(3px);
  text-align: center;
}

.imgSubtitle{
  position: absolute;
  text-align: center;
  backdrop-filter: blur(3px);
  font-family: Mont;
  width: 435px;
  line-height: 40px;
  left: 39px;
  top: 235px;
  padding-bottom: 10px;
  color: #000000;
  font-size: 17px;
}
.buttonCont{
  position: relative;
}
.magIcon{
  left: 12px;
  top: 12px;
  position: absolute;
  width: 25px;
  color: aliceblue;
}

/* Section 2 */
.interTitle-hr{
  width: 59%;
  background-color: rgba(34, 34, 34, 0.55);
  margin-top: 27px;
  margin-bottom: 27px;
  filter: invert(.2);
  -webkit-box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.17);
  -moz-box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.17);
  box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.17);
}
.interTitle-hr-last{
  width: 59%;
  background-color: rgba(34, 34, 34, 0.55);
  margin-top: 27px;
  margin-bottom: 27px;
  filter: invert(.2);
  -webkit-box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.17);
  -moz-box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.17);
  box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.17);
}
.interTitle{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 45px;
}
.interTitle-title{
  margin: auto;
  font-size: 38px;
  margin-top: 25px;
  letter-spacing: 10px;
  font-weight: 600;
  text-align: center;
  font-family: Mont2;
  width: 80%;
  align-self: center;
}
.interTitle-text{
  text-align: left;
  width: 80%;
  font-family: Mont2;
  font-size: 24px;
  font-weight: 700;
    margin-left: 7%;


}
.ul-div{
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 80%;
  margin-left: 5%;
  line-height: 37px;
}
.interTitle-ul{
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 80%;

}
.interTitle-li{
  font-family: Mont2;
  padding-bottom: 10px;
  font-size: 18px;
  width: 100%;
  margin-left: 10%;
    text-align: left;

}
.cardRow{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  box-sizing: border-box;

  justify-content: space-evenly;
}
.cardTitle{
  color: rgba(255, 255, 255, 1);
  font-size: 29px;
  font-weight: 700;
  align-self: center;
  font-family: Mont2;
  box-sizing: border-box;
  text-align: center;
  backdrop-filter: blur(3px);
  filter: contrast(1.5) saturate(.7);
  padding: 10px;
  margin-top: 52%;
  -webkit-box-shadow: 0px 0px 15px 4px rgba(0,0,0,0.39);
  -moz-box-shadow: 0px 0px 15px 4px rgba(0,0,0,0.39);
  box-shadow: 0px 0px 15px 4px rgba(0,0,0,0.39);


}
.cardTitle:hover{
 transform: scale(.99);
}
.card1{
  cursor: pointer;
  background-image: url('~@/assets/homepage/project-home-2.jpg');
           filter: grayscale(.45);

  height: 450px;
  width: 45%;
  justify-content: center;
  background-size: cover;
    border-radius: 33px;

  position: relative;
  margin-bottom: 50px;
  background-position: 50%;
  -webkit-box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57); 
  box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57);
}
.card2{
    cursor: pointer;

  background-image: url('~@/assets/homepage/project-home-5.jpg');
  height: 450px;
  width: 45%;
           filter: grayscale(.45);

  background-size: cover;
    border-radius: 33px;

  position: relative;
  background-position: 10%;
  margin-bottom: 50px;
  -webkit-box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57); 
  box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57);
}
.card3{
    cursor: pointer;

  background-image: url('~@/assets/homepage/project-home-3.jpg');
  height: 450px;
           filter: grayscale(.45);

  background-position: 100%;
  width: 45%;
  background-size: cover;
    border-radius: 33px;

  position: relative;
  -webkit-box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57); 
  box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57);
}
.card4{
    cursor: pointer;

  background-image: url('~@/assets/homepage/project-home-4.jpg');
  background-position: 10%;
           filter: grayscale(.45);

  height: 450px;
  width: 45%;
  background-size: cover;
    border-radius: 33px;

  position: relative;
  -webkit-box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57); 
  box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57);
}
.card1:hover{
    filter: grayscale(0);

}
.card2:hover{
    filter: grayscale(0);

}
.card3:hover{
    filter: grayscale(0);

}
.card4:hover{
    filter: grayscale(0);

}


/* Section 3 */
.interTitle2{
  font-size: 33px;
  font-weight: 500;
  font-family: Mont2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-self: center;

}
.interTitle-2-left{
  padding-left: 5%;
}
.interTitle-2-right{
  color: rgb(0, 148, 148);
  padding-right: 5%;
}
.interTitle-2-right:hover{
  color: rgb(0, 207, 207);
}





/*  */
.imageCont2{
  width: 82%;
  margin-top: 55px;
  margin-bottom: 55px;
  height: 450px;
  background-image: url('~@/assets/homepage/outside-house-bg-3.jpg');
  background-size: cover;
  background-position: 45%;
     border-radius: 33px;

  position: relative;
  padding: 55px;
  align-self: center;
  filter: grayscale(.17);
  -webkit-box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57); 
  box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57);
}
.imageCont2:hover{
  filter: grayscale(0) saturate(1.15);
}




.addyBtn2{
  cursor: pointer;
  font-family: Mont;
  border: 0px;
  background: #1DAEFF;
  border-radius: 35px;
  color: antiquewhite;
  font-size: 19px;
  font-weight: 500;
  height: 50px;
  width: 194px;
  bottom: -50%;
  position: relative;
  padding-left: 35px;
  padding-right: 35px;
  letter-spacing: 1px;
  -webkit-box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.32);
  -moz-box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.32);
  box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.32);
}
.addyBtn2:hover{
  transform: scale(.985);
}

/*  */


.bottomBar{
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: left;
  width: auto;
  vertical-align: center;
  box-sizing: border-box;
  font-family: Mont2;
  background-color: rgba(0,0,0,0.0);
  justify-content: space-evenly;
  margin-top: 70px;
  margin-bottom: 70px;
  padding-right: 10px;
    padding-left: 10px;

}
.footer-company-logo{
  cursor: pointer;
  align-self: center;
}
.footer-company-logo:hover{
  transform: scale(.98);
}
.logo2{
  width: 180px;
}
.social{
  cursor: pointer;
  width: 22px;
  padding-right: 30px;
}
.bottomCol p{
  margin-top: 20px;
  width: 300px;
  color: rgb(16, 16, 16);
  font-weight: 400;
  font-size: 18px;
  padding-bottom: 10px;
  font-family: Mont2;
  

}
.bottomCol label{
  font-weight: 700;
  font-family: Mont;
  font-size: 20px;
  padding-right: 5px;
  padding-bottom: 10px;
}

.bottomCol-far-left{
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-right: 30px;
  width: 23%;
}
.bottomCol{
  display: flex;
    width: 23%;

  flex-direction: column;
  float: left;
  align-items: flex-start;
}
.footer-img-class{
  cursor: pointer;
}
.footer-img-class:hover{
  transform: scale(.97);
}
.clearBtn2{
  padding: 7px;
  font-size: 15px;
}
.clearBtn2{
   cursor: pointer;
  padding-right: 2px;
  padding-left: 2px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: 7px;
  margin-right: 2px;
  border-style: none;
  background-color: rgba(0,0,0,0.0);
  color: black;
  font-family: Mont2;
  font-size: 15px;
}
.clearBtn2:hover{
  color: rgba(0, 16, 29, 0.547);
  background-color: rgba(0,0,0,0.0);

}


.footerInp{
  border-radius: 7px;
  width: 277px;
  height: 54px;
  background: #FFFFFF;
  border: 2px solid #D0D0E3;
  box-sizing: border-box;
  border-radius: 15px;
}

.inpDiv{
  position: relative;

}

.inpBtn{
  position: absolute;
  width: 35px;
  height: 35px;
  border: 0px;
  border-radius: 21px;
  right: 12px;
  top: 9px;
  background-color: rgba(0, 151, 178, 0.801);
  /*  */
  -webkit-box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.22);
  -moz-box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.22);
  box-shadow: inset 0px 0px 14px 2px rgba(0,0,0,0.22);
}
.inpBtn:hover{
  background-color: rgba(4, 195, 228, 0.801);
}
.arrow{
  width: 15px;
  left: 10px;
  top: 10px;
  position: absolute;
  color: aliceblue;

}

.outside-house-bg-2{
  background-image: url('~@/assets/homepage/outside-house-bg-2.jpg');
}
.outside-house-bg-3{
  background-image: url('~@/assets/homepage/outside-house-bg-3.jpg');
}




/* Any Computer Screen */
@media screen and (min-device-width: 821px){ 

.home-bg{
  background-image: url('~@/assets/homepage/side-bg/home-side-bg-10.jpg');
  background-repeat: repeat;
  background-size: cover;
  height: 100vh;
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: -10;
  filter: contrast(.5) blur(2px);

  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}


}
/* TABLETS */
@media screen and (min-device-width: 481px) and (max-device-width: 820px) { 








.home-bg{
  background-image: url('~@/assets/homepage/side-bg/home-side-bg-10.jpg');
  background-repeat: repeat;
  background-size: cover;
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: -10;
  filter: contrast(.5) blur(2px);
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}
}
/* Phone Screens */
@media only screen and (max-device-width: 480px) {
.home{
  width: 100vw;
}
.hero{
  border-radius: 7px;
  -webkit-box-shadow:  0px 0px 17px 3px rgba(0,0,0,0.59); 
  box-shadow:  0px 0px 17px 3px rgba(0,0,0,0.59);
  background-color: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(7px);
  width: 185%;
  justify-self: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

}
.container{
  width: 95%;
  flex-direction: column;
  justify-self: center;
  
}
.topBar{
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  font-family: Mont2;
  background-color: rgba(0,0,0,0.0);
  margin-bottom: 21px;
  margin-left: 59px;
  margin-right: 59px;
  margin-top: 21px;
  width: auto;
}
.btnCont{
  display: flex;
  flex-direction: column;
  vertical-align: center;
}
.clearBtn{
  text-decoration: underline;
  margin-bottom: 10px;
}
.home-bg{
  background-image: url('~@/assets/homepage/side-bg/home-side-bg-10.jpg');
  background-repeat: repeat;
  background-size: cover;
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: -10;
  filter: contrast(.5) blur(2px);

  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}
.imageCont{
  -webkit-box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57); 
  box-shadow: inset 0px 0px 15px 15px rgba(0,0,0,0.57);
  margin-left: 10px;
  margin-right: 10px;
  height: 80vh;
  background-image: url('~@/assets/homepage/homepage-main-1.jpg');
  background-size: cover;
  background-position: 45%;
  padding: 25px;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 33px;
  font-family: Mont2;
  filter: contrast(1.1);
  box-sizing: border-box;

  
}



.imgTitle{
  backdrop-filter: blur(3px);
}
.imgTitle-p{
  box-sizing: border-box;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  color: #101010;
  font-family: Mont;
  width: 80%;
  font-size: 35px;
  position: absolute;
  left: 7.5%;
}
.imgSubtitle{
  position: absolute;
  text-align: center;
  font-family: Mont2;
  width: 80%;

  line-height: 30px;
  left: 12.5%;
  top: 80px;
  padding-bottom: 10px;
  color: #000000;
  font-size: 17px;
}
/* 
.imageMenu{
  left: 30px;
  bottom: 55px;
  width: 828px;
  box-sizing: border-box;
  position: absolute;
} */



.imageMenu{
  justify-content: center;
  left: 0px;
  box-sizing: border-box;
  padding-bottom: 10px;
  bottom: 95px;
  width: 100%;
  height: 59%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  position: absolute;
  }

.imageRow{
    width: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.imageRow2{
  flex-direction: row;
  flex-wrap: wrap;
    top: 450px;

  width: 80%;
  backdrop-filter: blur(20px);
  font-family: Mont2;
  backdrop-filter: blur(3px);
  justify-content: space-evenly;
  border-radius: 0px 20px 20px 20px;
  background-color: rgba(255, 255, 255, 0.55);
  filter: contrast(1.55);
  padding-right: 2px;

  border-color: rgba(0, 0, 0, 0.35);

}
.imageBtn{
  border-radius: 20px 20px 0px 0px;
  border: 0px;
  color: rgba(0,0,0,1);
  font-family: Mont;
  letter-spacing: 3px;

  background-color: rgba(255, 255, 255, 0.55);

  
  backdrop-filter: blur(3px);
  padding: 20px;
  font-size: 15px;
  filter: contrast(1.55);

  
  
}

.interTitle-text{
  margin-left: 0%;
  text-align: center;
  width: 80%;
  font-family: Mont2;
  font-size: 24px;
  font-weight: 700;
  

}
.ul-div{
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 80%;
  margin-left: 5%;
  line-height: 37px;
}
.interTitle-li{
  font-family: Mont2;
  padding-bottom: 10px;
  font-size: 18px;
  width: 80%;
    text-align: left;

}
.cardRow{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-evenly;
}
.card1{
  width: 300px;
}
.card2{
  width: 300px;
}
.card3{
  width: 300px;
}
.card4{
  width: 300px;
}

.bottomCol-far-left{
  padding-top: 17px;
  padding-left: 10px;
  width: 45%;
}
.bottomCol{
  padding-top: 17px;
  padding-left: 10px;
  width: 45%;
}

.socialFoot{
  transform: scale(.7);
}
}


</style>