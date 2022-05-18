<template> 
  <div class='selector-outer-gate-3'>
    <div class='gate-3-full-background'>
    <p class='selector-title'>Give me some specific details about this issue</p>
    <p class='selector-subtitle-gate-3'>** You are <u class='not-underline'>not</u> required to fill out all sections to submit the form **</p>
      <form action="submit" @submit.prevent="gate3Click('message', $event)">
      <hr>
        <div  v-for="outerObj in this.importedData" :key="outerObj.name">
        <p class="gate-3-section-title" >{{outerObj.name}}</p>
          <div class="glass-pane-gate-3">
          <div class="glass-pane-gate-3-row" v-for="packedItem in outerObj.packedItems" :key="packedItem.user_input_id">
          <div class="glass-pane-gate-3-cell">
          <p class="gate-3-subtitle">{{packedItem.question}}</p>
          <!--  -->
          <div v-if="packedItem.answersArr[0] !== 'INPUT'">
          <div class='select-and-button-gate-3'>
          <select 
              class='select-gate-3' 
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
          <!-- Add Input BTN -->
            <button 
            v-if="!inputTray.includes(packedItem.question)"
            class='button-edit-q' 
            @click.prevent="renderInput(packedItem.question)"
            >
            Add Text</button>
          <!-- Remove Input BTN -->      
            <button 
            v-if="inputTray.includes(packedItem.question)" 
            class='button-edit-q' 
            @click.prevent="removeInput(packedItem.question)"
            >Remove Text</button>
          <!--  -->
          </div>
          </div>
          <!--  -->
          <!-- optional input start -->
          <div class="optional-input-gate-3-block"  v-if="inputTray.includes(packedItem.question) || packedItem.answersArr[0] === 'INPUT'">
            <input 
                class="optional-input-gate-3" 
                type="text" 
                placeholder="Enter info here..."
                v-model="packedItem.currentInput"
            >
            <hr class='input-hr'>
          </div>
          <!-- optional input end -->
          </div>
        </div>
        </div>
        </div>
        <hr class='end-hr'>
        <button class='button-gate3-submit' @click="gate3Click">Next Step</button>
    </form>
    </div>
  </div>
</template>

<script>
import {mapState, /* mapGetters, */  mapActions, } from 'vuex';



export default {

props:['inboundFromOuter'],

data(){
    return{
        dataFromOuter: this.inboundFromOuter,
        //For Selecting which questions have inputs, if entered into inputTray it will then have an input under it
        inputTray: [],
        ///
        importedData: [],
        ////
        exportArr: [],
        //
        prevAsked: [],
    }
},
computed:
  mapState({
    alreadyAsked: state => state.prevAsked,
    alreadyAskedV2: state => state.prevAskedV2,
    currentG3: state => state.gate3Live
  }),
  
  

methods:{
   ...mapActions([
      'addPrev',
      'addPrevV2',
      'updateG3',
    ]),
    computeG3(){
      this.importedData = this.currentG3.filter(inGlobal=>{
        if(this.alreadyAskedV2.includes(inGlobal.id) === false ){
          return inGlobal
        }
      });
    },
    computeG3Initial(){
      this.importedData = this.currentG3;
    },
    gate3Click(){
      

      //Adding to global state tray 2 to stop duplicates
      this.importedData.forEach((question)=>{
          this.addPrevV2(question.id);
        }); 
          

      this.$emit('GateThreeEmit', this.importedData);
      this.updateG3('clear');
    },
    renderInput(question){
       this.inputTray.push(question);
    },
    removeInput(question){
      this.inputTray = this.inputTray.filter((eachQuestion)=>{
          return question !== eachQuestion
      });
    },
    // 1. Initial Event hit when changing select
    selectChange(event){
      let packagedQuestion = {
        currentAnswer: event.target.value,
      };
      this.importedData.forEach((category) => {
          category.packedItems.forEach((exportQ)=>{
            if(exportQ.question === event.srcElement._value){
              Object.assign(exportQ, packagedQuestion);
            }
          });
      });
    },
    // 2. function used to specifically modify live updated export, 'exportArr'
    manageSelectAnswers(packedQ){
      this.exportArr.find((exportQ)=>{
        if(exportQ.question === packedQ.question){
          Object.assign(exportQ, packedQ);
        }
      });
    },
  },
  created(){
    console.log('created ran');

 /*    
    // 1. puts global state into this.importedData local state
    this.computeG3();
 */

    // 2. Bringing imported data in and making it into an easier format to 
    // reassign parts of the selected data 
    // and pre-pairing said data for export to the final custamizable form step

    this.dataFromOuter.forEach((bigObj)=>{
        let name = bigObj.name;
        let narrower = bigObj.narrower;
        let id = bigObj.id;
        let packedItems = [];
      bigObj.narrower.forEach((narrowerQ)=>{
        let packedItem = Object.assign({}, {
          question: narrowerQ.question,
          sub_cat: narrowerQ.sub_cat,
          user_input_id: narrowerQ.user_input_id,
          answersArr: narrowerQ.answers,
          currentAnswer: undefined,
          currentInput: undefined,
          name: name,
          narrower: narrower,
          editSwitch: false
        });
      packedItems.push(packedItem);
    });
    Object.assign(bigObj, {
      name: name,
      narrower: narrower,
      id: id,
      packedItems: packedItems,
    });
  });

//3.
  /* STOPS DUPLICATES TO GATE 4 START */
    console.log('before duplicates');
    console.log(this.dataFromOuter);
    // 11. make the dataFromOuter local state a filtered version where no id's currently on the this.alreadyAsked tray are in it
  this.dataFromOuter = this.dataFromOuter.filter((question)=>{
    if(this.alreadyAsked.includes(question.id) === false && this.alreadyAskedV2.includes(question.id) === false){
      return question;
    }
  });


    // 22. Stops duplicates if they're never exported to gate 4
  this.dataFromOuter.forEach((question)=>{
          this.addPrev(question.id);
        });   

  /* STOPS DUPLICATES TO GATE 4 END */


    // 3. Puts questions that are going to be asked in gate3 into global state to stop overwriting if user adds more
  this.dataFromOuter.forEach((dataObj) =>{
      this.updateG3(dataObj);
          });
    // 4. MANUALLY reloads global G3 state into local
  this.computeG3Initial();
  },
}

</script>

<style>
.selector-outer-gate-3{
    margin-bottom: 45px;
}
/* Gate 3 */
.select-gate-3{
  width: 100%;
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
  padding: 12px;
  font-size: 14px;
  /* inverting back to normal */
  filter: invert(1);
  font-family: Mont2;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}
.select-gate-3:hover{
  filter: invert(0);
  background-color: rgba(255, 255, 255, .90);
  /*  */
  box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.12);
  -webkit-box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.12);
  -moz-box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.12);

}
.button-edit-q{
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
  padding: 17px;
  font-size: 14px;
  filter: invert(1);
  font-family: Mont2;
  z-index: 4;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}
.button-gate3-submit{
  border-style: solid;
  border-width: 0px;
  background-color: rgba(255, 255, 255, .55);
  border-radius: 59px;
  padding: 36px;
  padding-left: 80px;
  padding-right: 80px;
  margin-top: 25px;
  font-size: 27px;
  filter: invert(1);
  font-family: Mont2;
  z-index: 4;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.59) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.59) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.59) inset;
}
.button-gate3-submit:hover{
  filter: invert(.1);
  background-color: rgba(255, 255, 255, .90);
  /* outer dropshadow */
  box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.17);
  -webkit-box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.17);
  -moz-box-shadow: -7px 0px 20px 1px rgba(28,28,28,0.17);
}
.select-and-button-gate-3{
  display: flex;
  flex-direction: row;
  justify-self: center;
  justify-content: center;
}
.gate-3-section-title{
  font-family: Mont2;
  letter-spacing: 15px;
  font-size: 45px;
}
.gate-3-subtitle{
  font-family: Mont2;
  font-size: 23px;
  font-style: italic;
  font-style: oblique;
  text-shadow: 0px 18px 126px 40px rgba(74,74,74,1);
  -webkit-text-shadow: 0px 18px 126px 40px rgba(74,74,74,1);
  -moz-text-shadow: 0px 18px 126px 40px rgba(74,74,74,1);
  letter-spacing: 4.5px;
}
.selector-subtitle-gate-3{
  font-size: 25px;
}
.section-hr{
  margin-top: 34px;
  margin-bottom: 11px;
  bottom: 0px;
  filter: invert(1);
  width: 83%;
  background-color: rgba(34, 34, 34, 0.55);
}
.glass-pane-gate-3{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  filter: contrast(1.15);
  padding-top: .01rem;
  padding-bottom: 3.4rem;
  margin-top: 30px;
  margin-left: 25px;
  margin-right: 25px;
  background-color: rgba(230, 230, 230, 0.40);
  border-color: rgba(112, 109, 102, 0.7);
  border-width: 5px;
  border-radius: 5px;
  padding-left: 25px;
  padding-right: 25px;
  /*  */
  box-shadow: 5px 4px 33px 10px rgba(209,209,209,1);
  -webkit-box-shadow: 5px 4px 33px 10px rgba(209,209,209,1);
  -moz-box-shadow: 5px 4px 33px 10px rgba(209,209,209,1);
  /*  */
  box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.51) inset;
  -webkit-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.51) inset;
  -moz-box-shadow: 4px 0px 51px 72px rgba(217,217,217,0.51) inset;
}
.glass-pane-gate-3-row{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
}

.glass-pane-gate-3-cell{
display: flex;
flex-direction: column;
width: 22vw;
/* Stops from snapping when adding an input */
height: 45vh;
}
.optional-input-gate-3-block{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  vertical-align: center;
}
/* input */
.optional-input-gate-3{
  background-color: rgba(255, 255, 255, .55);
  filter: invert(1);
  border-style: solid;
  border-width: 0;
  margin-top: 22px;
  margin-bottom: 35px;
  padding: 25px;
  width: 50%;
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
.optional-input-gate-3:focus{
  scale: 1.01;
}
.input-hr{
  filter: invert(1);
  filter: blur(.1px);
  background-color: rgba(34, 34, 34, 0.55);
  width: 70%;
  margin-bottom: 77px;
}



.end-hr{
  filter: invert(1);
  filter: blur(.1px);
  background-color: rgba(34, 34, 34, 0.55);
  margin-top: 27px;
}


/* Any Computer Screen */
@media screen and (min-device-width: 821px){ 


}
/* TABLETS */
@media screen and (min-device-width: 481px) and (max-device-width: 820px) { 
    

}
/* Phone Screens */
@media only screen and (max-device-width: 480px) {
.gate-3-subtitle{
  font-size: 12.9px;
  
  letter-spacing: .2px;
}
.glass-pane-gate-3{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: .01rem;
  padding-bottom: .4rem;
  margin-top: 30px;
  padding-left: 10px;
  padding-right: 10px;

  border-width: 5px;
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  /*  */
}
.gate-3-section-title{
  letter-spacing: 3px;
  font-size: 22px;
}
.glass-pane-gate-3-cell{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: top;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding-right: 5px;
  padding-left: 5px;
  margin-bottom: 12px;
}
.glass-pane-gate-3-row{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 45%;
}
.selector-title{
  font-size: 27px;
}
.selector-subtitle-gate-3{
  font-size: 21px;
}
.select-gate-3{
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
  padding-left: 14px;
  padding-right: 0px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 61%;
  font-size: 10px;
  /* inverting back to normal */
  filter: invert(1);
  font-family: Mont2;
  /*  */
  box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -webkit-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
  -moz-box-shadow: 4px 0px 23px 7px rgba(46,46,46,0.58) inset;
}
.button-edit-q{
  width: 39%;
  border-top-left-radius: 0px;
  border-top-right-radius: 59px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 59px;
  padding-right: 14px;
  padding-left: 7px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 8px;
  text-align: center;
  vertical-align: center;
}
.optional-input-gate-3{
  margin-top: 12px;
  font-size: 11px;
  margin-bottom: 5px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 80%;
  align-self: center;
}
.input-hr{
  filter: blur(.1px);
  width: 70%;
  margin-bottom: 17px;
}
.button-gate3-submit{
  border-style: solid;
  border-width: 0px;
  background-color: rgba(255, 255, 255, .55);
  border-radius: 59px;
  padding-bottom: 15px;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 15px;
  font-size: 17px;

}
}
</style>