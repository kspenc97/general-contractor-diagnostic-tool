<template> 
  <div class='selector-outer-gate-5' id="gate-5-final-form"  ref="gate5final">
    <p class='selector-title-gate-5'>Email Form With Data</p>

      <hr>
      <div class='gate-5-hero' v-for="outerObj in this.enteredData" :key="outerObj.name">
        <p class="gate-5-section-title" >{{outerObj.name}}</p>
        <div class='inside-title-gate-5'>
          <div 
            v-for="packedItem in outerObj.packedItems" 
            :key="packedItem.user_input_id" 
            >
          <!-- GLASS PANE START -->  
          <div class="glass-pane-gate-5" >
            <div class="gate-5-row" >
            <p class="gate-5-subtitle">Question: {{packedItem.question}}</p>
              <div v-if="packedItem.answersArr[0] !== 'INPUT'">
                <p>Selected Answer: {{packedItem.currentAnswer}}</p>
              </div>
                <p>User Input: {{packedItem.currentInput}}</p>
            </div>
          <br>
        <!-- GLASS PANE END -->
        </div>
        <!-- Inside Title div end -->
        </div>
        
        </div>
        </div>
        <hr class='end-hr'>
        <button class='button-gate3-submit' @click="gate5Click">Submit</button>

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
.selector-outer-gate-5{
  overflow: hidden;
  filter: invert(1);
  background-color: rgb(165, 165, 165);
}
/* .gate-5-hero{

} */
.gate-5-row{
  display: flex;
  flex-direction: column;
}
.selector-title-gate-5{
  font-family: Mont2;
  letter-spacing: 15px;
  font-size: 45px;
}
.inside-title-gate-5{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.gate-5-section-title{
  font-family: Mont2;
  letter-spacing: 15px;
  font-size: 45px;
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
.glass-pane-gate-5{
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 10vh;
  width: 90vw;
  flex-direction: row;
  filter: contrast(1.15);
  padding-top: .01rem;
  padding-bottom: 3.4rem;
  margin-top: 30px;
  background-color: rgba(0, 0, 0, 0.75);
  border-color: rgba(112, 109, 102, 0.7);
  border-width: 5px;
  border-radius: 5px;
  padding-left: 25px;
  padding-right: 25px;

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