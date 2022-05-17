<template>
  <div class="problem-selector-hero">

<div class="all-4-gates">

<div class='top-2-gates' v-if="this.gate1 === true">
<!-- Sector Selector i.e. the part of the house -->
 <div class='problem-selector-no-back-gate-1' v-if="this.gate1 === true">
  <div class="gate-outer-gate-1">
    <div class="gate1" >
    <GateZero 
      class="gate0" 
      @GateZeroEmit="gate0Click"
      />
    <GateOne 
      :inboundFromOuter="this.chosenSectorList" 
      @GateOneEmit="gate1Click"
      :key="gate_0_switch"
    />
    </div>
  </div>
 </div>
 <!-- Ghost Gate 1 -->
 <div class='problem-selector-no-back' v-if="this.gate1 === false">
  <div class="gate-outer-gate-1">
    <div class="gate1" >

    </div>
  </div>
 </div>
<!-- Ghost Gate 1 END -->
  <!-- Sub-Sector Selector i.e. 1. in kitchen is it the floor or island, 2. in bathroom is it the toilet or shower -->
<div class='problem-selector-no-back-gate-2' id='gate-2-transition-square'  v-if="this.gate2 === true">
  <div class="gate-outer-gate-2">

    
    <div class="gate2"  v-if="this.gate2Single === true" >
    <GateTwo 
      :inboundFromOuter="this.forGateTwo"
      :switchPosition="this.gate2ClickSingle"
      :singleIfTrue="this.gate2Single" 
      @GateTwoEmit="gate2Click"
      @GateTwoSwitchChange="viewSwitchMain"
      :key="this.forGateTwo"
    />
    </div>

    <div class="gate2" v-if="this.gate2Single=== false">

    <GateTwo 
      :inboundFromOuter="this.forGateTwo"
      :switchPosition="this.gate2ClickSingle"
      :singleIfTrue="this.gate2Single" 
      @GateTwoEmit="gate2Click"
      @GateTwoSwitchChange="viewSwitchMain"
            :key="this.forGateTwo"

    />
    </div>


  </div>
</div>
<!-- Ghost Gate 2 -->
<div class='problem-selector-no-back-gate-2' id='gate-2-transition-square'  v-if="this.gate2 === false">
  <div class="gate-outer-gate-2">
    <div class="gate2" >
      <div v-if="this.gate2Single=== true">
          <p class='selector-title-gate-2-ghost-not-showing'>What part of the room is needing attention?</p>
      </div>
    </div>
  </div>
</div>
<!-- Ghost Gate 2 END -->
</div>

<div class="bottom-2-gates">
  <!-- Narrowing down i.e. is the toilet overflowing, is it clogged, is the clog visible -->
<div class='problem-selector-no-back-gate-3' v-if="this.gate3 === true"    >
  <div class="gate-outer-gate-3">
    <div class="gate3">
      <GateThree 
        :inboundFromOuter="this.forGateThree" 
        @GateThreeEmit="gate3Click" 
        :key="this.forGateThree"
      />
    </div>
  </div>
</div>

<!-- Form Assembly -->
<div class='problem-selector-no-back-gate-4'  v-if="this.gate4=== true">
  <div class="gate-outer-gate-4">
    <div class="gate4" >
      <GateFour 
      id="gate-4-id"
        :inboundFromOuter="this.forGateFour" 
        @GateFourEmit="gate4Click"
        :key="this.forGateFour" 
      />
    </div>
  </div>
  </div>

</div>
</div>

<div v-if="this.gate5=== true">
<GateFive
  :contactInfo="this.formExport"
  :enteredData="this.finalForm"
  :key="this.finalForm"
/>
</div>
<!-- complete outer borders below -->
        <div :class="this.bgClass" id='bg-container'>
    </div>
<!-- complete outer borders above -->

  </div>
</template>

<script>
import {mapState} from 'vuex';
import { INDOOR_SECTORS } from '../config/indoor-data';
import { OUTDOOR_SECTORS } from '../config/outdoor-data';
import GateZero from '../components/GateZero.vue'
import GateOne from '../components/GateOne.vue';
import GateTwo from '../components/GateTwo.vue';
import GateThree from '../components/GateThree.vue';
import GateFour from '../components/GateFour.vue';
import GateFive from '../components/GateFive.vue';


export default {
components: {
  GateZero,
  GateOne,
  GateTwo,
  GateThree,
  GateFour,
  GateFive
},
methods: {
  gate0Click(fromGateZero){
    console.log(fromGateZero);
    this.gate_0_switch = fromGateZero.gate0Export.sector_set_from_zero;
  },
  gate1Click(fromGateOne){
    // 1. setting what triggers computed property
    this.selectedSector = fromGateOne.gate1Export.sectorFromGate1;
    this.currentBg = fromGateOne.gate1Export.sectorFromGate1;
    this.updateBgImage();
    // 2. getting return from computed property and setting to local state binded to gate 2
    this.forGateTwo = this.subSectorReturn;
    // 3. Assigning values to the formExport Object exported from gate1
    Object.assign(this.formExport, fromGateOne);
/* 
    console.log('After Gate 1 - Current Form Export is below')
    console.log(this.formExport);
     */
    // 3. gate flip
    //this.gate1 = false;
    this.gate2 = true;
  },
  gate2Click(fromGateTwo){
/* 
    console.log('After Gate 2 - Current Form Export is below')
    Object.assign(this.formExport, fromGateTwo);
     */
    console.log(this.formExport);
    // 1. The func below Fills 'this.forGateThree' based on what is selected in gate 2
    this.calcGate3(fromGateTwo);
    // 2. gate flip
    //this.gate2 = false;
    this.gate3 = true;
  },
  gate3Click(fromGateThree){
    this.forGateFour = fromGateThree;
    console.log(`FROM GATE 3 BELOW`);
    console.log(this.forGateFour);
    
    this.gate4 = true;
  },
  gate4Click(){
    console.log(`FROM GATE 4 BELOW`);
    console.log(this.finalForm);
    this.gate5 = true;

  },
 
  //Calculates narrowers to go into Gate 3 based on Categorie/s selected in Gate 2 and stored in 'selectedSub'
  calcGate3(gate2Payload){
    this.forGateThree = [];
    this.selectedSub = [];
    // 1. Using Payload from gate 2 fill the local component this.selectedSub 
    gate2Payload.gate2Export.forEach((subcategory)=>{
          this.selectedSub.push(subcategory);
        });
    // 2. Fills 'this.forGateThree' based on what is set in step 1
    this.selectedSub.forEach((subCat)=>{
      this.forGateTwo.subSectors.find((toNarrow)=>{
        if(toNarrow.name === subCat){
          this.forGateThree.push({
            name: toNarrow.name, 
            narrower: toNarrow.narrower,
            id: toNarrow.id
            });
        }
      });
    });  
    },
  viewSwitchMain(){
     if(this.gate2Single === true){
        this.gate2Single = false;
      }else{
        this.gate2Single = true;
      }
  },
  formBuild(){
    return this.formExport = {
      contactInfo: this.contactInfo,
      sectorName: this.selectedSector,
      subcategorys: this.forGateThree,
    }
  },
  updateBgImage(){
    this.bgClass=`bg-container ${this.currentBg}`
},
},
computed:{
   ...mapState({
    finalForm: state => state.formEntrys,
  }),
  // Gate 1 Data - Returns all sectors a.k.a. biggest categories
  chosenSectorList(){
    if(this.gate_0_switch === 'OUTDOOR_SECTORS'){
      return OUTDOOR_SECTORS.sectors;
    }else{
      return INDOOR_SECTORS.sectors;
    }
    },
  sectorListToSearch_4_gate2(){
    if(this.gate_0_switch === 'OUTDOOR_SECTORS'){
      return OUTDOOR_SECTORS;
    }else{
      return INDOOR_SECTORS;
    }
    },
  // Gate 2 Data -Returns a subsector based on value stores in component state on gate 1
  subSectorReturn(){
      return this.sectorListToSearch_4_gate2.sectors.find((singleSector)=>{
        if(singleSector.name === this.selectedSector){
          this.forGateTwo = singleSector;
          return singleSector;
        }
      })
    },
},
data(){
  return{
    gate_0_switch: '',
    gate1: true,
    gate2: false,
    gate2Single: true,
    gate3: false,
    gate4: false,
    gate5: false,
    // FROM GATE 1
    //used as a tool to generate correct computed property for subSelectorReturn
    selectedSector: '',
    contactInfo: null,
    // GATE 2
    //used to store the data of the selected part of the room needing attention
    forGateTwo: {},
    // GATE 3
    // used to store all the questions gate 3 needs to ask
    forGateThree: [],
    // used as a tool to generate correct computed property for narrowList from all selected subcats from gate2
    selectedSub: [],
    forGateFour: {},
    // Captures the data exported from all 3 Gates then is used to fill out the email form
    formExport: {},
    //Change of this attribute changes the current background
    bgClass: '',
    currentBg: '',
  }
},
beforeMount(){
  this.currentBg = 'outside-house-bg-1'
  this.updateBgImage();
  //Resets to first gate after each run
  this.gate1 = true;
  this.gate2 = false;
  this.gate3 = false;
},

}
</script>

<style>
@font-face {
  font-family: Mont;
  src: url('~@/assets/fonts/Montserrat-Regular.ttf');
}
@font-face {
  font-family: Mont2;
  src: url('~@/assets/fonts/Montserrat-Light.ttf');
}


/* GRID */
.all-4-gates{
  margin-top: 50px;
  margin-left: 25px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
    z-index: 1;

}

.top-2-gates{
  display: flex;
  flex-direction: row;
  z-index: -5;
}
.bottom-2-gates{
  display: flex;
  flex-direction: column;
    z-index: -7;

  }
/* GRID END */
.problem-selector-hero{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* Background Start */
.problem-selector-no-back{
  height: 100%;
  justify-content: center;
  align-items: center;
  
}
.problem-selector-no-back-gate-1{
  height: 100%;
  justify-content: center;
  align-items: center;
  animation: firstBoxFadeIn .8s;
}
@keyframes firstBoxFadeIn {
  from{
    filter: opacity(20%) blur(15px) sepia(100);
  }
  to{
    filter: opacity(100%) blur(0px);
  }
}

.problem-selector-no-back-gate-3{
  height: 100%;
  justify-content: center;
  align-items: center;
  
  animation: gate3SlideIn 1.8s;
}
@keyframes gate3SlideIn {
  from{
      transform: translateY(-87%);
      filter: opacity(0%) blur(8px);
    }
  to{
      transform: translateY(-0%);
      filter: opacity(100%) blur(0px);
    }
  }

  
.problem-selector-no-back-gate-4{
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: -8;
  animation: gate3SlideIn 1.8s;
}
@keyframes gate3SlideIn {
  from{
      transform: translateY(-87%);
      filter: opacity(0%) blur(8px);
    }
  to{
      transform: translateY(-0%);
      filter: opacity(100%) blur(0px);
    }
  }

.selector-title-gate-2-ghost-not-showing{
  font-size: 50px;
  font-family: Mont2;
  position: fixed;
}
.bg-container{
  background-image: url('~@/assets/bg-images/bg-kitchen-2.jpg');
  background-repeat: repeat;
  background-size: cover;
  height: 100%;
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: -10;
  filter: blur(2px);
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}
/* background end */

/* GATE OUTER */
.gate-outer-gate-1{
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  border-top-width: 10px;
  border-left-width: 10px;
  border-bottom-width: 5px;
  border-right-width: 5px;
  border-style: solid;
  border-color: rgba(204, 199, 187, 0.8);
  filter: invert(1);
}
.gate1{
  width: 40vw;
  height: 70vh;
  filter: contrast(1.15);
  position: relative;
  background: rgba(219, 219, 219, 0.8);
  border-color: rgba(112, 109, 102, 0.3);
  /*  */
  box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.71) inset;
  -webkit-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.71) inset;
  -moz-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.71) inset;
  
}

.gate2{
  width: 40vw;
  height: 70vh;
  filter: contrast(1.15);
  position: relative;
  background: rgba(219, 219, 219, 0.8);
  border-color: rgba(112, 109, 102, 0.3);
  /*  */
  box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.71) inset;
  -webkit-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.71) inset;
  -moz-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.71) inset;

}
.gate-outer-gate-2{
  box-sizing: border-box;
  border-top-width: 10px;
  border-left-width: 4.9px;
  border-bottom-width: 5px;
  border-right-width: 10px;
  border-style: solid;
  border-color: rgba(204, 199, 187, 0.8);
  filter: invert(1);
  
}
.gate-outer-gate-3{
  /* ADDED */
  justify-content: center;
  box-shadow: 5px 4px 33px 10px rgba(209,209,209,1);
  -webkit-box-shadow: 5px 4px 33px 10px rgba(209,209,209,1);
  -moz-box-shadow: 5px 4px 33px 10px rgba(209,209,209,1);
  /*  */
  box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.51) inset;
  -webkit-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.51) inset;
  -moz-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.51) inset;
  /* ADDED */
  /*  */

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-top-width: 5px;
  border-left-width: 15px;
  border-bottom-width: 5px;
  border-right-width: 15px;
  border-style: solid;
  border-color: rgba(204, 199, 187, 0.8);
  filter: invert(1);
}
.gate3{
  overflow: hidden;
  height: 50%;
  filter: contrast(1.15);
  position: relative;
  background: rgba(219, 219, 219, 0.8);
  border-color: rgba(112, 109, 102, 0.3);
  /*  */
  box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.71) inset;
  -webkit-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.71) inset;
  -moz-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.71) inset;
}
.gate-outer-gate-4{
  /* ADDED */
  justify-content: center;
  box-shadow: 5px 4px 33px 10px rgba(209,209,209,1);
  -webkit-box-shadow: 5px 4px 33px 10px rgba(209,209,209,1);
  -moz-box-shadow: 5px 4px 33px 10px rgba(209,209,209,1);
  /*  */
  box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.51) inset;
  -webkit-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.51) inset;
  -moz-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.51) inset;
  /* ADDED */
  /*  */
  box-sizing: border-box;
  border-top-width: 5px;
  border-left-width: 15px;
  border-bottom-width: 10px;
  border-right-width: 15px;
  border-style: solid;
  border-color: rgba(204, 199, 187, 0.8);
  filter: invert(1);
}
.gate4{
  position: relative;
  filter: contrast(1.15);
  background: rgba(219, 219, 219, 0.8);
  border-color: rgba(112, 109, 102, 0.3);
  /*  */
  box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.71) inset;
  -webkit-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.71) inset;
  -moz-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.71) inset;
}
.selector-title{
  font-size: 50px;
  font-family: Mont2;
}
.selector-subtitle{
  font-size: 21px;
  font-family: Mont2;
  font-style: italic;
}
.not-underline{
  text-decoration: underline;
  text-decoration-thickness: .1px;
  text-decoration-color: rgba(63, 53, 28, 0.59);
}
.select-main-class{
  cursor: pointer;
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
.button-select-merge{
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
  border-bottom-right-radius: 59px;/* 
// @ is an alias to /src
import logo from './assets/homepage/AcreTrader_Logo.jpg';
import magIcon from './assets/homepage/magIcon.svg';
import social1 from './assets/homepage/fb.png';
import social2 from './assets/homepage/insta.png';
import social3 from './assets/homepage/link.png';
import social4 from './assets/homepage/twit.png';
import arrow from './assets/homepage/arrow.svg';
 */
  font-size: 21px;
  filter: invert(1);
  font-family: Mont2;
  z-index: 4;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}

.selector-title:hover{
  transform: scale(.9995);
}
.select-main-class:hover{
  filter: invert(0);
  background-color: rgba(255, 255, 255, .90);
  /*  */
  box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.12);
  -webkit-box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.12);
  -moz-box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.12);

}
.button-select-merge:hover{
  filter: invert(.1);
  background-color: rgba(255, 255, 255, .90);
  box-shadow: 7px 0px 20px 1px rgba(28,28,28,0.12);
  -webkit-box-shadow: 7px 0px 20px 1px rgba(28,28,28,0.12);
  -moz-box-shadow: 7px 0px 20px 1px rgba(28,28,28,0.12);
}


/* Any Computer Screen */
@media screen and (min-device-width: 821px){ 
      .problem-selector-no-back-gate-2{
        height: 100%;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        z-index: -1;
        animation: topBoxSlideIn 1.2s;
      }
      @keyframes topBoxSlideIn {
        from{
          transform: translateX(-97%);
          filter: opacity(0%) blur(7px);
        }
        to{
          transform: translateX(-0%);
          filter: opacity(100%) blur(0px);
        }
      }
 
  .gate3{
      width: 80vw;

  }




}
/* TABLETS */
@media screen and (min-device-width: 481px) and (max-device-width: 820px) { 
     .top-2-gates{
      flex-direction: row;
      }
      .gate1{
        width: 45vw;
        height: 70vh;
      }
      .gate2{
        width: 45vw;
        height: 70vh;
      }
      .gate3{
        width: 90vw;
      }
     
      .gate4{
        width: 90vw;
      }
.gate-outer-gate-2{
    border-top-width: 10px;
    border-left-width: 15px;
    border-bottom-width: 5px;
    border-right-width: 15px;
    border-style: solid;
    border-color: rgba(204, 199, 187, 0.8);
    filter: invert(1); 
  }
/*             .gate-outer-gate-2{
  box-sizing: border-box;
  border-top-width: 10px;
  border-left-width: 4.9px;
  border-bottom-width: 5px;
  border-right-width: 10px;
  border-style: solid;
  border-color: rgba(204, 199, 187, 0.8);
  filter: invert(1);
  
} */
      .gate-outer-gate-3{
              border-top-width: 10px;
              border-left-width: 23px;
              border-bottom-width: 5px;
              border-right-width: 23px;
              border-style: solid;
              border-color: rgba(204, 199, 187, 0.8);
              filter: invert(1); 
      }
      .gate-outer-gate-4{
              border-top-width: 10px;
              border-left-width: 23px;
              border-bottom-width: 5px;
              border-right-width: 23px;
              border-style: solid;
              border-color: rgba(204, 199, 187, 0.8);
              filter: invert(1); 
      }
/*  */
    .problem-selector-no-back-gate-2{
            height: 100%;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            z-index: -1;
            animation: topBoxSlideIn 1.2s;
            
          }
          @keyframes topBoxSlideIn {
            from{
              transform: translateX(-97%);
              filter: opacity(0%) blur(7px);
            }
            to{
              transform: translateX(-0%);
              filter: opacity(100%) blur(0px);
            }
          }

}
/* Phone Screens */
@media only screen and (max-device-width: 480px) {
  .problem-selector-hero{
      margin-right: 5%;
      margin-left: 1%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  .top-2-gates{
    flex-direction: column;
    }
    .gate1{
        width: 90vw;
        height: 100%;
      }
    .gate2{
      width: 90vw;
      height: 100vh;
      }
    .selector-title-gate-2-ghost-not-showing{
      font-family: Mont2;

      align-self: center;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
        font-size: 32px;
        margin-bottom: 28px;
    }
            .gate-outer-gate-2{
              height: 100%;
                      width: 100%;

              border-top-width: 10px;
              border-left-width: 15px;
              border-bottom-width: 5px;
              border-right-width: 15px;
              border-style: solid;
              border-color: rgba(204, 199, 187, 0.8);
              filter: invert(1); 
            }
      
        .problem-selector-no-back-gate-2{
        height: 100%;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        z-index: -1;
        animation: topBoxSlideIn 1.2s;
      }
   .gate-outer-gate-1{
      border-top-width: 10px;
      border-left-width: 15px;
      border-bottom-width: 5px;
      border-right-width: 15px;
      border-style: solid;
      border-color: rgba(204, 199, 187, 0.8);
      filter: invert(1);
   }

    .gate3{
        width: 90vw;
      }
      .gate4{
        width: 90vw;
      }

          .problem-selector-no-back-gate-2{
            height: 100%;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            z-index: -1;
            animation: topBoxSlideIn 1.8s;
          }
          @keyframes topBoxSlideIn {
            from{
              transform: translateY(-87%);
              filter: opacity(0%) blur(8px);
            }
            to{
              transform: translateY(-0%);
              filter: opacity(100%) blur(0px);
            }
          }

            .gate-outer-gate-3{
              border-top-width: 10px;
              border-left-width: 15px;
              border-bottom-width: 5px;
              border-right-width: 15px;
              border-style: solid;
              border-color: rgba(204, 199, 187, 0.8);
              filter: invert(1); 
            }
}




/* BACKGROUND IMAGE IMPORT */
/* Inside house */
.inside-house-bg-1{
  background-image: url('~@/assets/bg-images/inside-house-bg-1.jpg');
}
.inside-house-bg-2{
  background-image: url('~@/assets/bg-images/inside-house-bg-2.jpg');
}
/* Outside house */
.outside-house-bg-1{
  background-image: url('~@/assets/bg-images/outside-house-bg-1.jpg');
}



.Kitchen{
  background-image: url('~@/assets/bg-images/bg-kitchen-1.jpg');
  animation: transitionImage 1.7s;
  animation-delay: 15ms;
}
.Bathroom{
  background-image: url('~@/assets/bg-images/bg-bathroom-1.jpg');
  animation: transitionImage 1.7s;
  animation-delay: 15ms;
}
.Deck{
  background-image: url('~@/assets/bg-images/bg-deck-1.jpg');
  animation: transitionImage 1.7s;
  animation-delay: 15ms;
}
.Garage{
  background-image: url('~@/assets/bg-images/bg-garage-1.jpg');
  animation: transitionImage 1.7s;
  animation-delay: 15ms;
}
/* END BACKGROUND IMAGE IMPORT */


      @keyframes transitionImage {
        from{
          filter: blur(17px) saturate(10%);
        }
        30%{
          filter: blur(9px) saturate(20%);
        }
        75%{
          filter: blur(7px) saturate(75%);
        }
        to{
          filter: blur(2px) saturate(100%);
        }
      } 
</style>
