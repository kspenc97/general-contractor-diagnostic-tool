<template>
    <div class="gate-0-outer">
        <label class="label-gate-0">Is the problem indoors or ourdoors?</label>
        <div>
        <button @click="leftClicked" :class='leftClass'>Inside Home</button>
        <button @click="rightClicked" :class='rightClass'>Outside Home</button>
        </div>
    </div>
</template>

<script>
export default {
methods:{
    leftClicked(){
        this.rightClass="button-select-merge-gate-0-right";
        this.leftClass= "button-select-merge-gate-0-left-clicked";
        this.selectedArea= '';
        this.selectedArea= 'INDOOR_SECTORS';
        this.$emit('GateZeroEmit', {gate0Export: {
          sector_set_from_zero: this.selectedArea,
        }});
    },
    rightClicked(){
        this.leftClass="button-select-merge-gate-0-left";
        this.rightClass= "button-select-merge-gate-0-right-clicked";
        this.selectedArea= '';
        this.selectedArea= 'OUTDOOR_SECTORS';
        this.$emit('GateZeroEmit', {gate0Export: {
          sector_set_from_zero: this.selectedArea,
        }});
    }
},
data(){
    return{
        leftClass: "button-select-merge-gate-0-left",
        rightClass: "button-select-merge-gate-0-right",
        selectedArea: ''
    }
},
created(){
    this.leftClass= "button-select-merge-gate-0-left-clicked";
}
}
</script>

<style>
.gate-0-outer{
    padding: 10px;
    padding-top: 50px;
    padding-bottom: 30px;
}
.label-gate-0{
  font-size: 14px;
  font-family: Mont2;
}
.button-select-merge-gate-0-right{
  margin-top: 10px;
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
  padding: 25px;
  width: 250px;
  font-size: 21px;
  filter: invert(1);
  font-family: Mont2;
  z-index: 4;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  
}
.button-select-merge-gate-0-left{
  margin-top: 10px;
  border-style: solid;
  border-right-color: rgba(22, 22, 22, .75);
  border-left-width: 0px;
  border-right-width: .1rem;
  background-color: rgba(255, 255, 255, .55);
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-top-left-radius: 59px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 59px;
  border-bottom-right-radius: 0px;
  padding: 25px;
  width: 250px;
  font-size: 21px;
  filter: invert(1);
  font-family: Mont2;
  z-index: 4;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}



/* HOVERS */
.button-select-merge-gate-0-right:hover{
  filter: invert(0);
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.15) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.15) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.15) inset;
}
.button-select-merge-gate-0-left:hover{
  filter: invert(0);
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.15) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.15) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 0.15) inset;
}
/* HOVERS END */


/* CLICKED */
.button-select-merge-gate-0-left-clicked{
  margin-top: 25px;
  border-style: solid;
  border-left-color: rgba(22, 22, 22, .75);
  border-left-width: 0px;
  border-right-width: .1rem;
  background-color: rgba(255, 255, 255, .55);
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-top-left-radius: 59px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 59px;
  border-bottom-right-radius: 0px;
  padding: 25px;
  width: 250px;
  font-size: 21px;
  font-family: Mont2;
  z-index: 4;
  /*  */
  filter: invert(0);
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 1) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 1) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 1) inset;
}
.button-select-merge-gate-0-right-clicked{
  margin-top: 25px;
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
  padding: 25px;
  width: 250px;
  font-size: 21px;
  font-family: Mont2;
  z-index: 4;
  /*  */
    filter: invert(0);
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 1) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 1) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(255, 255, 255, 1) inset;
}








/* Any Computer Screen */
@media screen and (min-device-width: 821px){ 
  



}
/* TABLETS */
@media screen and (min-device-width: 481px) and (max-device-width: 820px) { 
   .button-select-merge-gate-0-left{
     padding: 20px;
     width: 49%;
   }
   .button-select-merge-gate-0-right{
     padding: 20px;
     width: 49%;

   }
  .button-select-merge-gate-0-left-clicked{
    padding: 20px;
    width: 49%;
  }
  .button-select-merge-gate-0-right-clicked{
    padding: 20px;
    width: 49%;
  }
}
/* Phone Screens */
@media only screen and (max-device-width: 480px) {


   .button-select-merge-gate-0-left{
     padding: 10px;
     width: 45%;
   }
   .button-select-merge-gate-0-right{
     padding: 10px;
     width: 45%;

   }
  .button-select-merge-gate-0-left-clicked{
    padding: 10px;
    width: 45%;
  }
  .button-select-merge-gate-0-right-clicked{
    padding: 10px;
    width: 45%;
  }

  .gate-0-outer{
    padding: 10px;
    padding-top: 20px;
    padding-bottom: 10px;
  }
}
</style>