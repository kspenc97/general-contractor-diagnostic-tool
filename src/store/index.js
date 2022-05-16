import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 'Herrow',
    formEntrys: [],
    prevAsked: [],
    prevAskedV2: [],
    gate3Live: [],
  },
  mutations: {
    updateForm(state, freshBatch){ 
      //state.formEntrys = [];
      freshBatch.forEach(batchEl => {


        batchEl.packedItems.forEach(batchItem=>{
          /* UPDATES */
          state.formEntrys.forEach(formEntry =>{
           formEntry.packedItems.forEach(packedItem=>{
              if(packedItem.question === batchItem.question){
                Object.assign(packedItem, batchItem);
              }
            });
          });
        });
        /* Adding if not alread there */
        let result = state.formEntrys.find((alreadyHere)=>{
          return alreadyHere.name === batchEl.name;
          //  IF something is not already in the state.formEntry's 
          //  but IS in freshBatch I want to add it to the state.formEntry's array
          });
        if(result !== undefined){
          return
        }else{
          state.formEntrys.push(batchEl);
        }
      }); /* <--- END OF FOREACH */
     return state;    
  },
  updatePrev(state, potentialAdd){
    if(state.prevAsked.includes(potentialAdd)===false){
      state.prevAsked.push(potentialAdd);
      return state;
    }else{
      return state;
    }
  },
  updatePrev2(state, potentialAdd){
    if(state.prevAskedV2.includes(potentialAdd)===false){
      state.prevAskedV2.push(potentialAdd);
      return state;
    }else{
      return state;
    }
  },
  newG3(state, newG3){
    if(newG3 === 'clear'){
      state.gate3Live =[];
    }else{
      state.gate3Live.push(newG3);
    }
  },
  },
  actions: {
    updateObj({commit}, data){
      commit('updateForm', data);
    },
    addPrev({commit}, prevQ){
      commit('updatePrev', prevQ);
    },
    addPrevV2({commit}, prevQ){
      commit('updatePrevV2', prevQ);
    },
    updateG3({commit}, datag3){
      commit('newG3', datag3);
    },
  },
  modules: {
  }
})
