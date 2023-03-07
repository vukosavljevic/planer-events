<template>
    <base-card>
        <div>
            <h2>Events that I attended this year!</h2>
            <hr>
            <event-card v-for="event in events" :key="event.id" :id="event._id" :title="event.title" :description="event.description" :date="event.date">
            </event-card>
        </div>
    </base-card>
</template>
<script>
import axios from 'axios';
import EventCard from '../UI/EventCard.vue';

export default {
    components: {
        EventCard
    },
    data(){
        return {
            events:[]
        }
    },
    created() {
        axios.get('http://localhost:3000/events/')
            .then(response => {
                const data = response.data;
                this.events = data;
            })
            .catch(error => {
                console.log(error)
            });
            console.log(this.events)
    }
}
</script>

<style scoped>
div {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

hr {
    position: absolute;
    left: 25%;
    top:10%;
    width: 50%;
}
</style>