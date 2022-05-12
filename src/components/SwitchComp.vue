<template>
  <!-- Switch -->
    <div class="switchCont-gate-2">
        <div v-if="gate2SingleSwitch">
        <p class="switchTitle-gate-2">If multiple parts of the room are experiencing issues click here</p>
        </div>
        <div  v-if="!gate2SingleSwitch">
        <p class="switchTitle-gate-2">If a single part of the room are experiencing issues click here</p>
        </div>
        <label class="switch-gate-2">
                <input class="switch-input-gate-2" type="checkbox" id='viewSwitch' @click="viewSwitchGate2">
                <span class="slider-gate-2"></span>
        </label>
    </div>
    <!-- Switchend -->
</template>

<script>
export default {
data(){
    return{
        // for export when switch is clicked
        gate2SingleSwitch: true,
    }
},
methods:{
     viewSwitchGate2(){
      if(this.gate2SingleSwitch === true){
        this.gate2SingleSwitch = false;
        this.$emit('GateTwoSwitchChange', {switchChangeGate2: this.gate2SingleSwitch})
      }else{
        this.gate2SingleSwitch = true;
        this.$emit('GateTwoSwitchChange', {switchChangeGate2: this.gate2SingleSwitch})
      }
    },
}
}
</script>

<style>


/* The switch START - the box around the slider */
.switchCont-gate-2{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 20px;
}
.switchTitle-gate-2{
  font-size: 14px;
  font-family: Mont2;
  
}
.switch-gate-2{
    position: relative;
    display: inline-block;
    
    width: 100px;
    height: 24px;
    padding: 15px;
    
  }
  
  /* Hide default HTML checkbox */
  .switch-input-gate-2{
    opacity: 0;
    
    width: 0;
    height: 0;
    /*  */
    
  }
  /* The slider */
  .slider-gate-2{
    position: absolute;
    
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: invert(.8);
    background-color: rgba(161, 161, 161, 0.03);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 32px;
    
    /*  */
    filter: invert(1);
    -webkit-box-shadow: inset 0px 0px 7px 3px #000000; 
    box-shadow: inset 0px 0px 7px 3px #000000;
  }
  
  .slider-gate-2:before {
    position: absolute;
    content: "";
    height: 7px;
    width: 7px;
    left: 11px;
    bottom: 8px;
    background-color: rgba(249, 249, 249, 0.5);
    -webkit-transition: .2s;
    transition: .2s;
    padding: 15px;
    border-radius: 32px;
     /*  */
    -webkit-box-shadow: 0px 0px 7px 3px #000000; 
    box-shadow: 0px 0px 7px 3px #000000;
  }
  
  .switch-input-gate-2:checked + .slider-gate-2{
    background-color: rgba(237, 237, 237, 0.2);
  }
  
  .switch-input-gate-2:focus + .slider-gate-2{
    box-shadow: 1 1 1px #2196F3;
  }
  
  .switch-input-gate-2:checked + .slider-gate-2:before {
    -webkit-transform: translateX(70px);
    -ms-transform: translateX(70px);
    transform: translateX(67px);
  }
  /* Switch END */





@media screen and (min-device-width: 821px){ 
  



}
/* TABLETS */
@media screen and (min-device-width: 481px) and (max-device-width: 820px) { 
  .switchCont-gate-2{
    align-content: center;
    right: 10px;
    padding: 15px;
    line-height: 20px;
    position: relative;
  }
  .switchTitle-gate-2{
    align-self: center;
    font-size: 14px;
    padding: 5px;
  }

}
/* Phone Screens */
@media only screen and (max-device-width: 480px) {
  .switchCont-gate-2{
    align-content: center;
    right: 10px;
    padding: 15px;
    line-height: 20px;
    position: relative;
  }
  .switchTitle-gate-2{
    align-self: center;
    font-size: 14px;
    padding: 5px;
  }

}
</style>