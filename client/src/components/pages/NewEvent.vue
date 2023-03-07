<template>
    <div class="card">
        <h3>Domagoj, ukoliko si imao nekakvu novu aktivnost napiši ju ovdje</h3>
        <form @submit.prevent="sendData">
            <input type="text" placeholder="Naslov" v-model="title">
            <textarea rows="2" placeholder="Opis radionice" v-model="description"></textarea>
            <input type="text" placeholder="Datum" v-model="date">
        </form>
        <button @click="sendData">Pošalji event</button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            title:'',
            description:'',
            date:''
        }
    },
    methods: {
        sendData() {
            axios.post('http://localhost:3000/events/', {
                title: this.title,
                description: this.description,
                date: this.date
            })
            console.log('event sent')
        }
    }
}
</script>
<style scoped>
h3 {
    padding-top: 5rem;
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto
}

input {
    margin: 2rem 0;
}

.card {
    margin: auto;
    width: 50%;
    box-shadow: 2px 4px 4px 5px black;
}
</style>