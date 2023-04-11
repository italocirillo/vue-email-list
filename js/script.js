const { createApp } = Vue;

createApp({
    data(){
        return{
            listaEmail:[null],
            numeroIndirizzi : 10,
        };
    },
    mounted(){
        for(let i=0;i<this.numeroIndirizzi;i++){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((risposta) => {
                this.listaEmail[i] = risposta.data.response;
                console.log(i,this.listaEmail[i]);
            })
        }
    }
}).mount("#app");