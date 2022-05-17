<template> 
  <div class='selector-outer-gate-4' id="gate-4-final-form"  ref="gate4final">
    <p class='selector-title-gate-4'>Email Form With Data</p>
      <form action="submit" @submit.prevent="gate4Click('message', $event)">
      <hr>
           <div v-for="outerObj in this.finalForm" :key="outerObj.name">
        <p class="gate-4-section-title" >{{outerObj.name}}</p>
        <div class='inside-title-gate-4'>
          <div 
            v-for="packedItem in outerObj.packedItems" 
            :key="packedItem.user_input_id" 
            
            >
          <!-- GLASS PANE START -->  
          <div class="glass-pane-gate-4" >
          <!-- STATIC MODE -->
            <div class='static-mode-on-div'  v-if="packedItem.editSwitch === false">
            <p class="gate-4-subtitle">{{packedItem.question}}</p>
            <div class="static-mode-row" v-if="packedItem.answersArr[0] !== 'INPUT'">
            <p>Answer: {{packedItem.currentAnswer}}</p>
            </div>
            <div class="static-mode-row">
            <p>Additional info: {{packedItem.currentInput}}</p>
            </div>
            <hr class='input-hr-gate-4'>
            <button 
            class="button-gate-4"
            @click.prevent="dbShow(packedItem.question)"
            >Edit</button>
          </div>
          <!-- END STATIC MODE -->
          <!-- EDIT MODE -->
          <div class='edit-mode-on-div'  v-if="packedItem.editSwitch === true">
            <p class="gate-4-subtitle" >{{packedItem.question}}</p>
              <div v-if="packedItem.answersArr[0] !== 'INPUT'">
          <select 
              class='select-gate-4' 
              name="narrower" 
              id="narrower" 
              :value="packedItem.question" 
              @change.prevent="selectChange($event)" 
              v-model="packedItem.currentAnswer"
            >
            <option value="placeholder" disabled selected>Select your option</option>
            <option v-for="answer in packedItem.answersArr" :key="answer" :value="answer">
              {{answer}}
            </option>
          </select>
          <input 
                class="optional-input-gate-4" 
                type="text" 
                placeholder="Enter additional information about issue here..."
                v-model="packedItem.currentInput"
            >
            <hr class='input-hr-gate-4'>
          </div>
          <!-- IF INPUT ONLY -->
          <div v-if="packedItem.answersArr[0] === 'INPUT'">
            <input 
                class="optional-input-gate-4" 
                type="text" 
                placeholder="Enter additional information about issue here..."
                v-model="packedItem.currentInput"
            >
           <hr class='input-hr-gate-4'>
          </div>
          <!-- IF INPUT ONLY END -->
            <button 
            class="button-gate-4"
            @click.prevent="dbHide(packedItem.question)"
            >Done</button>
            </div>
         <!-- END EDIT MODE -->

        <!-- GLASS PANE END -->
        </div>
        <!-- Inside Title div end -->
        </div>
        
        </div>
        </div>
        <hr class='end-hr'>
        <button class='button-gate-4-submit' @click="gate4Click">Submit Service Form</button>
    </form>
  </div>
</template>

<script>
import {mapState, /* mapGetters, */  mapActions, } from 'vuex';


export default {

props:['inboundFromOuter'],

data(){
    return{
        dataFromOuter: this.inboundFromOuter,
        intermediateForm:{},
        //edit tray
        editTray: [],
        //For Selecting which questions have inputs, if entered into inputTray it will then have an input under it
        inputTray: [],
        questionAnswerTray: [],
    }
},
methods:{
    ...mapActions([
      'updateObj'
    ]),
    dbShow(questionToToggle){
      let packagedTrue = {
          editSwitch: true,
        };
    let finalFormNew = this.finalForm.forEach((category) => {
          category.packedItems.forEach((exportQ)=>{
            if(exportQ.question === questionToToggle){
                Object.assign(exportQ, packagedTrue);
           }
          });
      });
    Object.assign(this.finalForm, finalFormNew);
    this.$forceUpdate();
    },
    dbHide(questionToToggle){
      let packagedFalse = {
              editSwitch: false,
            };
      let finalFormNew = this.finalForm.forEach((category) => {
          category.packedItems.forEach((exportQ)=>{
            if(exportQ.question === questionToToggle){
                Object.assign(exportQ, packagedFalse);
           }
          });
      }); 
      Object.assign(this.finalForm, finalFormNew);
      this.$forceUpdate();
    },
    gate4Click(event){
      console.log(event);


      this.$emit('GateFourEmit', this.objToFill);
    },

    renderInput(question){
       this.inputTray.push(question);

    },
    removeInput(question){
      this.inputTray = this.inputTray.filter((eachQuestion)=>{
          return question !== eachQuestion
      });
    },
    selectChange(){
      this.$forceUpdate();
    },
  },
computed:
  mapState({
    testVal: state => state.test,
    finalForm: state => state.formEntrys,
  })
,
  created(){
  this.updateObj(this.dataFromOuter);


  },
}

</script>

<style>
.selector-outer-gate-4{
  overflow: hidden;
}
.static-mode-row{
  display: flex;
  flex-direction: row;
}
.selector-title-gate-4{
  font-family: Mont2;
  letter-spacing: 15px;
  font-size: 45px;
}
.inside-title-gate-4{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.gate-4-section-title{
  font-family: Mont2;
  letter-spacing: 12px;
  font-size: 35px;
}
.gate-4-subtitle{
  font-family: Mont2;
  font-size: 14px;
  font-style: italic;
  font-style: oblique;
  text-shadow: 0px 18px 126px 40px rgba(74,74,74,1);
  -webkit-text-shadow: 0px 18px 126px 40px rgba(74,74,74,1);
  -moz-text-shadow: 0px 18px 126px 40px rgba(74,74,74,1);
  letter-spacing: 2.5px;
}
.glass-pane-gate-4{
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: 380px;
  width: 250px;
  flex-direction: column;
  filter: contrast(1.15);
  padding-top: .01rem;
  padding-bottom: 3.4rem;
  margin-top: 30px;
  background-color: rgba(230, 230, 230, 0.59);
  border-style: none;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  /*  */
  box-shadow: 0px 0px 17px 7px rgba(46,46,46,0.78) inset;
  -webkit-box-shadow: 0px 0px 17px 7px rgba(255, 255, 255, 0.78) inset;
  -moz-box-shadow: 0px 0px 17px 7px rgba(46,46,46,0.78) inset;

}

/* select */
.select-gate-4{
  border-style: solid;
  cursor: pointer;
  font-family: Mont;
  color: rgb(22, 22, 22);
  width: 95%;
  background-color: rgba(255, 255, 255, .55);
  border-right-width: 0px;
  border-left-width: 0px;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-top-left-radius: 59px;
  border-top-right-radius: 59px;
  border-bottom-left-radius: 59px;
  border-bottom-right-radius: 59px;
  padding: 15px;
  font-size: 14px;
  /* inverting back to normal */
  filter: invert(1);
  font-family: Mont2;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}


/* input */
.optional-input-gate-4{
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, .55);
  filter: invert(1);
  border-style: none;
  margin-top: 21px;
  margin-bottom: 21px;
  padding: 20px;
  width: 90%;
  border-radius: 59px;
  /* outer shadow */
  box-shadow: 12px 38px 114px 25px rgba(74,74,74,0.81);
  -webkit-box-shadow: 12px 38px 114px 25px rgba(74,74,74,0.81);
  -moz-box-shadow: 12px 38px 114px 25px rgba(74,74,74,0.81);
  /* inner shadow */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}
.optional-input-gate-4:focus{
  scale: 1.01;
}
.input-hr-gate-4{
  filter: invert(1);
  filter: blur(.1px);
  background-color: rgba(34, 34, 34, 0.55);
  width: 70%;
  margin-bottom: 5px;
}
/* button edit switch */
.button-gate-4{
  border-style: solid;
  border-width: 0px;
  background-color: rgba(255, 255, 255, .45);
  border-radius: 59px;
  padding: 20px;
  padding-left: 70px;
  padding-right: 70px;
  margin-top: 12px;
  font-size: 17px;
  margin-bottom: 12px;
  filter: invert(1);
  font-family: Mont2;
  z-index: 4;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.59) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.59) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.59) inset;
}
.button-gate-4:hover{
  filter: invert(.1);
  background-color: rgba(255, 255, 255, .90);
  /* outer dropshadow */
  box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.17);
  -webkit-box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.17);
  -moz-box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.17);
}

.button-gate-4-submit{
   border-style: solid;
  border-width: 0px;
  background-color: rgba(255, 255, 255, .45);
  border-radius: 50px;
  padding: 20px;
  padding-left: 50px;
  padding-right: 59px;
  margin-top: 12px;
  font-size: 17px;
  margin-bottom: 17px;
  filter: invert(1);
  font-family: Mont2;
  z-index: 4;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.59) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.59) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.59) inset;
}
.button-gate4-submit:hover{
   filter: invert(.1);
  background-color: rgba(255, 255, 255, .90);
  /* outer dropshadow */
  box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.17);
  -webkit-box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.17);
  -moz-box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.17);
}

@media screen and (min-device-width: 821px){ 



}
/* TABLETS */
@media screen and (min-device-width: 481px) and (max-device-width: 820px) { 
  .glass-pane-gate-4{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  box-sizing: border-box;
  height: 90%;
  width: 220px;
  flex-direction: column;
  filter: contrast(1.15);
  margin-top: 30px;
  background-color: rgba(230, 230, 230, 0.75);
  border-color: rgba(112, 109, 102, 0.7);
  border-width: 5px;
  border-radius: 5px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
  padding-bottom: 25px;
}

}
/* Phone Screens */
@media only screen and (max-device-width: 480px) {
  .glass-pane-gate-4{
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  height: 380px;
  width: 159px;
  flex-direction: column;
  filter: contrast(1.15);
  padding-top: .01rem;
  padding-bottom: 3.4rem;
  margin-top: 30px;
  background-color: rgba(230, 230, 230, 0.75);
  border-style: none;
  border-radius: 7px;
  padding-left: 9px;
  padding-right: 9px;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  /*  */
  box-shadow: 0px 0px 17px 7px rgba(46,46,46,0.78) inset;
  -webkit-box-shadow: 0px 0px 17px 7px rgba(255, 255, 255, 0.78) inset;
  -moz-box-shadow: 0px 0px 17px 7px rgba(46,46,46,0.78) inset;

}
.selector-title-gate-4{
      letter-spacing: 10px;
      font-size: 30px;
  }
.gate-4-section-title{
    letter-spacing: 4px;
    font-size: 20px;
    margin-bottom: 7px;
    margin-top: 14px;
    width: 100%;
    box-sizing: border-box;
    padding-right: 8px;
    padding-left: 8px;
    text-align: center;
    align-self: center;
    justify-self: center;
    justify-content: center;
    align-content: center;
  }
/* button edit switch */
.button-gate-4{
  padding: 15px;
  padding-left: 45px;
  padding-right: 45px;
  margin-top: 12px;
  font-size: 17px;
  margin-bottom: 7px;
}
/* input */
.optional-input-gate-4{
  box-sizing: border-box;
  margin-top: 14px;
  margin-bottom: 14px;
  padding: 17px;
  width: 95%;
  border-radius: 59px;
}
  }

</style>