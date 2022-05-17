<template> 
  <div class='selector-outer-gate-5' id="gate-5-final-form"  ref="gate5final">
    <p class='selector-title-gate-5'>Email Form With Data</p>

      <hr>
      <div class='gate-5-hero' v-for="outerObj in this.enteredData" :key="outerObj.name">
        <p class="gate-5-section-title" >{{outerObj.name}}</p>
        <hr class='line-under-question-gate-5'>
        <div class='inside-title-gate-5'>
          <div 
           class='each-box-gate-5'
            v-for="packedItem in outerObj.packedItems" 
            :key="packedItem.user_input_id" 
            >
          <!-- GLASS PANE START -->  
          <div class="glass-pane-gate-5" >
            <div class="gate-5-row" >
            <p class="gate-5-subtitle-1-question">Question: {{packedItem.question}}</p>
              <div v-if="packedItem.answersArr[0] !== 'INPUT'">
                <p class="gate-5-subtitle-2-user-answer">Selected Answer: {{packedItem.currentAnswer}}</p>
              </div>
                <p class="gate-5-subtitle-3-user-input">User Input: {{packedItem.currentInput}}</p>
            </div>
          <br>
        <!-- GLASS PANE END -->
        </div>
        <!-- Inside Title div end -->
        </div>
        
        </div>
        </div>

  </div>
</template>

<script>

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default {

props:['contactInfo', 'enteredData'],

data(){
    return{
  
    }
},
methods:{
    makePDF(){
      
      //LEFT OFF HERE, SAVING PDF BUT LOOKS TERRIBLE
        const doc = new jsPDF({
            orientation: 'p',
            unit: 'px',
            format: 'a4',
            hotfixes: ['px_scaling'],
          });

        html2canvas(this.$refs.gate5final, {
            width: (this.$refs.gate5final.clientWidth),
            height: (this.$refs.gate5final.clientHeight)
          }).then((canvas) => {
            //const img = canvas.toDataURL("image/png");
            doc.addImage(canvas, "PNG", 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
            doc.save("p&lstatement.pdf");
          });
      //LEFT OFF HERE, SAVING PDF
    },
    gate5Click(){
      this.makePDF();


    },

  },

  created(){
    console.log('gate 5 contact info below');
    console.log(this.contactInfo);
    console.log('gate 5 data below');
    console.log(this.enteredData);

    this.$nextTick(()=>{
      this.gate5Click();
    });
  },
}

</script>

<style>
.gate-5-hero{
  display: flex;
  flex-direction: column;
 justify-content: right;
  align-content: right;
  align-items: right;
  justify-items: right;
}
.selector-outer-gate-5{
  overflow: hidden;
  width: auto;
  height: auto;

  filter: invert(1);
  background-color: rgb(164, 153, 134);
}
/* .gate-5-hero{

} */
.gate-5-row{
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  align-content: left;
  justify-content: left;
}
.selector-title-gate-5{

  font-family: Mont2;
  letter-spacing: 15px;
  font-size: 45px;
}

.inside-title-gate-5{
  display: flex;
  flex-direction: column;
  width: 2550px;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.each-box-gate-5{
  display: flex;
  justify-content: right;
  align-content: right;
  align-items: right;
  justify-items: right;
  align-self: right;
  
  flex-direction: column;
  width: 100%;
}
.gate-5-section-title{
  font-family: Mont;
  letter-spacing: 15px;
  font-size: 59px;
  color: #2c3e50;
}
.line-under-question-gate-5{
  color: #2c3e50;
  border-color: inherit;
  background-color: #2c3e50;
  border-color: #2c3e50;
  width: 77%;
}
.gate-5-subtitle{
  font-family: Mont2;
  font-size: 14px;
  font-style: italic;
  font-style: oblique;
  text-shadow: 0px 18px 126px 40px rgba(74,74,74,1);
  -webkit-text-shadow: 0px 18px 126px 40px rgba(74,74,74,1);
  -moz-text-shadow: 0px 18px 126px 40px rgba(74,74,74,1);
  letter-spacing: 4.5px;
}
.gate-5-subtitle-1-question{
  font-family: Mont;
  font-size: 41px;
  letter-spacing: 1px;
  color: rgba(247, 243, 187, 0.85);
}
.gate-5-subtitle-2-user-answer{
  font-family: Mont2;
  font-size: 51px;
  letter-spacing: 2px;
  color: rgba(247, 243, 187, 0.85);
}
.gate-5-subtitle-3-user-input{
  font-family: Mont2;
  font-size: 51px;
  letter-spacing: 2px;
  flex-wrap: wrap;
  word-wrap: normal;
  color: rgba(247, 243, 187, 0.85);
}
.glass-pane-gate-5{
  border-top-right-radius: 51px;
  border-bottom-right-radius: 51px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  filter: contrast(1.15);
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
  margin-top: 17px;
  margin-bottom: 17px;
  background-color: rgba(0, 0, 0, 0.75);
  border-color: rgba(112, 109, 102, 0.7);
  border-width: 5px;
  padding-left: 17px;
  padding-right: 17px;
  /*  */
  box-shadow: 4px 0px 14px 7px rgba(46,46,46,0.78) inset;
  -webkit-box-shadow: 4px 0px 14px 7px rgba(46,46,46,0.78) inset;
  -moz-box-shadow: 4px 0px 14px 7px rgba(46,46,46,0.78) inset;
}


/* input */
.optional-input-gate-5{
  background-color: rgba(255, 255, 255, .55);
  filter: invert(1);
  border-style: solid;
  border-width: 0;
  margin-top: 22px;
  margin-bottom: 35px;
  padding: 32px;
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
.optional-input-gate-5:focus{
  scale: 1.01;
}





</style>