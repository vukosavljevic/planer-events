<template>
    <base-card>
        <div>
            <h2>Events that I attended this week!</h2>
            <hr>
        </div>
    </base-card>
</template>
<script>
import axios from 'axios';

export default {
    created() {
        axios.get('http://localhost:3000/events/')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
    }
}
</script>

<style scoped>
div {
    position: relative;
    text-align: left;
}

hr {
    position: absolute;
    left: 0;
    width: 50%;
}
</style>