<template>
  <div class='selector-outer-gate-2'>
  <!-- SINGLE PART OF ROOM -->
    <div class="gate-2-box" v-if="this.singleIfTrueOuter === true">
    <p class='selector-title-gate-2'>What part of the room is needing attention?</p>

      <SwitchComp
      @GateTwoSwitchChange="viewSwitch"
       />
       <hr class="switch-hr-gate-2"/>
          <form action="submit" @submit.prevent="gate2ClickSingle('gate2Export', $event)">

            <div class="around-select-button-gate-2">
            <select  class='select-main-class-gate-2' name="sub-sector" id="sub-sector" @change="interactSingle">
              <option value="placeholder" disabled selected>Select your option</option>
              <option v-for="subSector in this.dataFromOuter.subSectors" :key="subSector.name">
                {{subSector.name}}
              </option>
            </select>
            <button class='button-select-merge-gate-2'>Next ></button>
            </div>

        </form>
    </div>
  <!-- MULTIPLE PARTS OF ROOM -->
    <div class="gate-2-box" v-if="this.singleIfTrueOuter === false">

    <p class='selector-title-gate-2'>What part's of the room need attention?</p>

      <SwitchComp
      @GateTwoSwitchChange="viewSwitch"
       />
       <hr class="switch-hr-gate-2"/>

          <form action="submit" @submit.prevent="gate2ClickPlural('message', $event)">
            <div class="checkboxes-container-gate-2">
                <div v-for="subSector in this.dataFromOuter.subSectors" :key="subSector.name">

                  <div class="checkbox-wrapper-gate-2">
                  <label class="checkbox-title-gate-2">{{subSector.name}}</label>
                  <div class="gate-2-checkbox-single">
                      <input class="checkbox-2-input" type="checkbox" :id="subSector.name" :name="subSector.name" :value="subSector.name" @click="interactList">
                      <label class="checkbox-2-label" :for="subSector.name"><div></div></label>                      
                  </div>
                  </div>


                </div>
            </div>

            <button class='button-gate2-submit'>Next Step</button>
        </form>
    </div>
  </div>
</template>

<script>
import SwitchComp from '../components/SwitchComp.vue';

export default {

props:['inboundFromOuter', 'singleIfTrue'],
components: {
  SwitchComp
},
data(){
    return{
        dataFromOuter: this.inboundFromOuter,
        singleIfTrueOuter: true,
        selectedSub: [],
        /* Single or multiple parts of sector of house */
        singlePart: true,
        multipleParts: false,
        /* multiple parts array, updates live with checkboxes */
        selectedPlural: [],
        

    }
},
methods:{
    gate2ClickSingle(){
      this.$emit('GateTwoEmit', {gate2Export: this.selectedSub});
      this.selectedSub = [];
    },
    gate2ClickPlural(){
      this.$emit('GateTwoEmit', {gate2Export: this.selectedPlural});
      this.selectedPlural = [];
    },
   
    viewSwitch(){
      if(this.singlePart === true){
        this.singlePart = false;
        setTimeout(()=> {
        this.singleIfTrueOuter = false;
        this.$emit('GateTwoSwitchChange', {newValue: this.singlePart})
        }, 110);
        this.multipleParts = true;
      }else{
        this.singlePart = true;
        setTimeout(()=> {
        this.singleIfTrueOuter = true;
        this.$emit('GateTwoSwitchChange', {newValue: this.singlePart})
        }, 110);
        this.multipleParts = false;
      }
    },
    /* Live Select functionality */
    interactSingle(e){
    this.selectedSub = [];
    this.selectedSub.push(e.target.value);
    },
    /* Live Checkbox functionality */
    interactList(e){
      if(!this.selectedPlural.includes(e.target.value)){
        this.selectedPlural.push(e.target.value);
      }else{
        this.selectedPlural = this.selectedPlural.filter((el)=>{
          return el !== e.target.value;
        });
      }
    },
}
}
</script>

<style>
.gate-2-box{
  height: 100%;
}

.selector-title-gate-2{
  font-size: 50px;
  font-family: Mont2;

}
.selector-title-gate-2-not-showing{
  font-size: 50px;
  font-family: Mont2;
}
.select-main-class-gate-2{
  border-style: solid;
  bottom: 10px;
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
  padding: 35px;
  font-size: 21px;
  /* inverting back to normal */
  filter: invert(1);
  font-family: Mont2;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}
.select-main-class-gate-2:hover{
  filter: invert(0);
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.58) inset;
}
.button-select-merge-gate-2{
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
  padding: 36px;
  font-size: 21px;
  filter: invert(1);
  font-family: Mont2;
  z-index: 4;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}
.button-select-merge-gate-2:hover{
  filter: invert(0);
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.58) inset;
}
.selector-title-gate-2:hover{
  transform: scale(.9995);
}


.around-select-button-gate-2{
  margin-right: 10px;
  margin-left: -10px;
  position: relative;
  padding: 15px;
}




.gate-2-checkbox-single{
	display: block;
	width: 43px;
	height: 43px;
	border: solid 1px rgba(0, 0, 10, 0.5);
	border-radius: 5px;
	position: relative;
}
.checkbox-2-label{
	height: 40px;
	width: 40px;
	z-index: 0;
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
}
.gate-2-checkbox-single label div {
	height: 17px;
	width: 17px;
	border: solid 2px rgba(0, 0, 10, 0.5);
	margin: 11px;
	border-radius: 50%;
	transform: rotate(45deg);
	transition: all 100ms ease-in-out, border 50ms ease 100ms;
}
.gate-2-checkbox-single input {
	height: 40px;
	width: 40px;
	margin: 0;
	opacity: 0;
	z-index: 1;
	position: relative;
	cursor: pointer;
}
.gate-2-checkbox-single input:checked + label > div {
	border-radius: 0;
	border-top: 0;
	border-left: 0;
	border-color: rgba(0, 0, 10, 0.5);
	height: 25px;
	width: 15px;
	margin-top: 3px;
	margin-left: 12.9px;
	transform: rotate(40deg);
	transition: all 150ms ease-in-out;
}
 


.button-gate2-submit{
  border-style: solid;
  border-width: 0px;
  background-color: rgba(255, 255, 255, .55);
  border-radius: 59px;
  padding: 20px;
  padding-left: 80px;
  padding-right: 80px;
  margin-top: 15px;
  font-size: 22px;
  filter: invert(1);
  font-family: Mont2;
  z-index: 4;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.59) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.59) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.59) inset;
}
.button-gate2-submit:hover{
  filter: invert(.1);
  background-color: rgba(255, 255, 255, .90);
  /* outer dropshadow */
  box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.17);
  -webkit-box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.17);
  -moz-box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.17);
}

/*  */
/*  */
/*  */

.gate-2-checkbox-hr{
  width: 100px;
  filter: invert(.3);
  margin-bottom: 30px;
  align-self: center;
  
}


.switch-hr-gate-2{
  filter: invert(1);
  filter: blur(.1px);
  background-color: rgba(34, 34, 34, 0.55);
  width: 70%;
  margin-bottom: 45px;
  justify-content: center;
  justify-self: center;
  align-content: center;
  align-self: center;
  align-items: center;
  justify-items: center;
}





/*  */
/*  */
/* Any Computer Screen */
@media screen and (min-device-width: 821px){ 
.selector-outer-gate-2{
  width: 100%;
/*   height: calc(100% - 30px);
 */  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
}
.checkbox-title-gate-2{
  font-family: Mont;
  margin-right: 30px;
    } 
  
  .checkboxes-container-gate-2{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .checkbox-wrapper-gate-2{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: 10px;
    margin-left: -10px;
    padding-bottom: 10px;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
    justify-items: center;
  }

}
/* TABLETS */
@media screen and (min-device-width: 481px) and (max-device-width: 820px) {
  .selector-outer-gate-2{
  width: 100%;
/*   height: calc(100% - 30px);
 */  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
} 
  .selector-title-gate-2{
    align-self: center;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    font-size: 32px;
    margin-bottom: 28px;
  }
  
  .select-main-class-gate-2{
    padding: 20px;
    width: 59%;
    font-size: 14px;
    }
  .button-select-merge-gate-2{
    width: 37%;
    padding: 20px;
    font-size: 14px;
  }
 
  .switch-hr-gate-2{
    padding-right: 10px;
    right: 5px;
  }


.checkbox-title-gate-2{
  font-family: Mont;
  margin-right: 30px;
    } 
  
  .checkboxes-container-gate-2{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .checkbox-wrapper-gate-2{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: 10px;
    margin-left: -10px;
    padding-bottom: 10px;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
    justify-items: center;
  }

}
/* Phone Screens */
@media only screen and (max-device-width: 480px) {
.selector-outer-gate-2{
  width: 100%;
  height: calc(100% - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
}


  .selector-title-gate-2{
    align-self: center;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    font-size: 32px;
    margin-bottom: 28px;
  }

  .select-main-class-gate-2{
       padding: 20px;
    width: 59%;
    }
  .button-select-merge-gate-2{
    width: 37%;
    padding: 20px;
  }
 


.checkbox-title-gate-2{
  font-family: Mont;
  margin-right: 30px;
    } 
  
  .checkboxes-container-gate-2{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .checkbox-wrapper-gate-2{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: 10px;
    margin-left: -10px;
    padding-bottom: 10px;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
    justify-items: center;
  }
   .button-gate2-submit{
    margin-right: 20px;
    margin-bottom: 40px;
  }        
}
</style>