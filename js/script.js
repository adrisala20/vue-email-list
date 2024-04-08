/* 
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue;
createApp({
    data() {
        return {
            mails: [],
            numMails: 10,
        }
    },
    method: {
        generateMails() {
            for (let i = 0; i < this.numMails;i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    const mail = res.data.numMails;
                    if(this.mails < this.numMails){
                        this.mails.push(mail)
                    }
                
                })
            }
            }
        },
        mounted() {
        }
    }).mount('#app');