const { createApp } = Vue;

createApp({
    data(){
        return{
            listaEmail:[null],
            numeroIndirizzi : 10,
        };
    },
    mounted(){
        this.generaLista(this.listaEmail);
    },
    methods: {
        generaLista(array){
            for(let i=0;i<this.numeroIndirizzi;i++){
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((risposta) => {
                    array[i] = risposta.data.response;
                    console.log(i,array[i]);
                })
            }
        }
    }
}).mount("#app");