<template>
  
<div class='selector-outer-gate-1'>
  <div>
      <form class='form-gate-1' action="submit" @submit.prevent="gate1Click('gate1Export', $event)">

<!-- 
        <div class='contact-section-gate-1'>
              <p class='selector-title-gate-1'>Contact Information</p>
              <div class='contact-row-gate-1'>
                  <input v-model="contactName" class="contact-input-gate-1" type="text" placeholder="Name" required>
                  <input 
                  :value="generatePhoneNumber" 
                  class="contact-input-gate-1" 
                  type="tel" 
                  placeholder="Phone" 
                  @input="formatNumber($event)"
                  required
                  maxlength = "12"
                  >
                </div>  
                <div class='contact-row-gate-1'>
                  <input v-model="contactEmail" class="contact-input-gate-1" type="email"   placeholder="Email" required>
                  <input v-model="contactCity" class="contact-input-gate-1" type="text" placeholder="City">
                </div>
      </div>
 -->

      <div class='select-and-button-gate-1'>
        <p class='selector-title-gate-1'>What part of the home is the problem located at?</p>
        <select required class='select-main-class-gate-1' name="sector-sector" id="sector-sector" v-model="selectedSector">
          <option value="placeholder" disabled selected>Select your option</option>
          <option v-for="sector in this.dataFromOuter" :key="sector.id">
            {{sector.name}}
          </option>
        </select>
        <button class='button-select-merge-gate-1'>Next ></button>
      </div>
        </form>
        </div>
</div>
</template>

<script>
export default {

props:['inboundFromOuter'],

data(){
    return{
        dataFromOuter: this.inboundFromOuter,
        // Contact Information
        contactName: '',
        contactEmail: '',
        contactCity: '',
        //
        selectedSector: '',
        //
        originalPhone: '',
        formatedPhone: '',
    }
},
computed: {
  generatePhoneNumber(){
    let exportPhone = this.formatedPhone;
    return exportPhone;
  },
  contactInfoExport(){
    return {
      contactName: this.contactName,
      contactPhone: this.generatePhoneNumber,
      contactEmail: this.contactEmail,
      contactCity: this.contactCity
    }
  },
},
methods:{
    gate1Click(){
        this.$emit('GateOneEmit', {gate1Export: {
          sectorFromGate1: this.selectedSector,
          contactInfoGate1: this.contactInfoExport,
        }});

    },
    formatNumber(event){
    this.originalPhone = event.target.value;
    let clensedNum = this.originalPhone.replace(/[^0-9]/g, '');
    let clensedLayer2 = clensedNum.slice(0,3)+"-"+clensedNum.slice(3,6)+"-"+clensedNum.slice(6);  
    this.formatedPhone = this.removeDashConditional(clensedLayer2);
    },
    removeDashConditional(num){
      if(num.length < 5){
        return num.slice(0, -2);
      }
      if(num.length > 4 && num.length < 8){
        return num.slice(0,-1);
      } 
        return num
    },
}
}
</script>

<style>
/* input */
.selector-outer-gate-1{
  width: 100%;
/*   height: calc(100% - 30px);
 */  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.contact-section-gate-1{
  display: flex;
  flex-direction: column;
}
.contact-row-gate-1{
  display: flex;
  flex-direction: row;
}
.contact-input-gate-1{
  background-color: rgba(255, 255, 255, .55);
  filter: invert(1);
  border-style: solid;
  border-width: 0;
  margin: 10px;
  padding: 20px;
  width: 50%;
  border-radius: 35px;
  /* outer shadow */
  box-shadow: 12px 38px 114px 25px rgba(74,74,74,0.81);
  -webkit-box-shadow: 12px 38px 114px 25px rgba(74,74,74,0.81);
  -moz-box-shadow: 12px 38px 114px 25px rgba(74,74,74,0.81);
  /* inner shadow */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}
.selector-title-gate-1{
  font-size: 25px;
  font-family: Mont2;
}
.select-main-class-gate-1{
  border-style: solid;
  border-right-color: rgba(22, 22, 22, .75);
  color: rgb(22, 22, 22);
  background-color: rgba(255, 255, 255, .55);
  border-right-width: .1rem;
  border-left-width: 0px;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-top-left-radius: 59px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 59px;
  border-bottom-right-radius: 0px;
  padding: 25px;
  font-size: 21px;
  /* inverting back to normal */
  filter: invert(1);
  font-family: Mont2;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}
.button-select-merge-gate-1{
  border-style: solid;
  border-left-color: rgba(22, 22, 22, .75);
  border-left-width: .1rem;
  border-right-width: 0px;
  background-color: rgba(255, 255, 255, .55);
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 59px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 59px;
  padding: 25.5px;
  font-size: 21px;
  filter: invert(1);
  font-family: Mont2;
  z-index: 4;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}
.selector-title-gate-1:hover{
  transform: scale(.9995);
}
.select-main-class-gate-1:hover{
  filter: invert(0);
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.58) inset;
}
.button-select-merge-gate-1:hover{
  filter: invert(0);
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.58) inset;
}
















/* Any Computer Screen */
@media screen and (min-device-width: 821px){ 
  



}
/* TABLETS */
@media screen and (min-device-width: 481px) and (max-device-width: 820px) { 
   
    .contact-section-gate-1{
      align-self: center;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      margin-bottom: 70px;
    } 
     
    .contact-input-gate-1{
      padding: 15px;
      font-family: Mont;
      font-size: 17px;
      font-weight: bold;
    }
   .selector-title-gate-1{
    align-self: center;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    margin-bottom: 27px;
    font-size: 21px;
  }
 
  .select-main-class-gate-1{
    padding: 20px;
    width: 59%;
  }
  .select-and-button-gate-1{
    margin-right: 15px;
  }
  .button-select-merge-gate-1{
    width: 37%;
    padding: 20px;
  }

}
/* Phone Screens */
@media only screen and (max-device-width: 480px) {
   .contact-section-gate-1{
      align-self: center;
      justify-content: center;
      align-items: center;
    
      margin-right: 15px;
      margin-bottom: 15px;
    } 
     
    .contact-input-gate-1{
      padding: 15px;
      font-family: Mont2;
      font-size: 14px;
    }
   .selector-title-gate-1{
    align-self: center;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    font-size: 21px;
    margin-bottom: 12px;
  }
 
  .select-main-class-gate-1{
    padding: 20px;
    width: 59%;
  }
  .select-and-button-gate-1{
    margin-right: 15px;
  }
  .button-select-merge-gate-1{
    width: 37%;
    padding: 20px;
  }




          
}
</style>