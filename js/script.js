/* 
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const {createApp} = Vue;
createApp({
    data(){
        return{
            mails:null,
        }
    },
    method:{
        getMails(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{

        })
    }
    },
    mounted(){

    }
}).mount('#app')