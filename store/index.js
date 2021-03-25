import Vuex from 'vuex'
import axios from 'axios'

const store = () => {
    return new Vuex.Store({
    state:{
        clients:[],
        pickedDate:null,
        mailFilterText:'',
        mailFilteringMethod:''
    },
    getters:{
        activeClients(state){
            return state.clients.filter(client => client.isActive === true)
        }
    },
    actions:{
        fetchClients({ commit }) {
            axios
              .get("http://www.json-generator.com/api/json/get/ceWnIIvVKa?indent=2")
              .then(response => {
                let data = response.data;
                commit("setClients", data);
              })
              .catch(e => {
                router.push("/");
              });
          }
        

    },
    mutations:{
        setClients: (state, clients) => {state.clients = clients},
        setPickedDate: (state, pickedDate)=>{state.pickedDate = pickedDate},
        setMailFilterText: (state, text)=>{state.mailFilterText = text.target.value},
        setMailFilteringMethod: (state, method)=> {state.mailFilteringMethod = method},
    },
})}

export default store;