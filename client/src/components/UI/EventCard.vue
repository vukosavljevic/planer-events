<template>
    <div class="wrapper--outer" :class="{ active: isActive}">
        <div class="icons--wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" @click="editEvent">
                <path
                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" @click="removeEvent">
                <path
                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
        </div>
        <h1 v-if="!editState && !editedState">{{ title }} - {{ date }}</h1>
        <p class="objectId">{{ id }}</p>
        <p v-if="!editState && !editedState">{{ description }}</p>
        <h1 v-if="editedState">{{ editedTitle }} - {{ date }}</h1>
        <p class="objectId">{{ id }}</p>
        <p v-if="editedState">{{ editedDescription }}</p>
        <form v-if="editState" @submit.prevent="changeData">
            <input type="text" :placeholder="title" v-model="editedTitle">
            <textarea rows="2" :placeholder="description" v-model="editedDescription"></textarea>
            <button @click="changeData">Save</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ['id', 'title', 'description', 'date'],
    data() {
        return {
            editState: false,
            editedState: false,
            isActive: false,
            editedTitle: '',
            editedDescription: ''
        }
    },
    methods: {
        editEvent() {
            this.editState = !this.editState;
            this.editedState = !this.editState;
        },
        removeEvent() {
            const id = this.$el.querySelector(".objectId").innerHTML;
            const deleteUrl = 'http://localhost:3000/events/' + id
            axios.delete(deleteUrl);
            this.isActive = true;
        },
        changeData() {
            const id = this.$el.querySelector(".objectId").innerHTML;
            const patchUrl = 'http://localhost:3000/events/' + id

            axios.patch(patchUrl, {
                title: this.editedTitle,
                description: this.editedDescription
            })
            this.editedState = true;
            this.editState = false;
        }
    }
}
</script>
<style scoped>
.active{
    display: none !important;
}
.icons--wrapper {
    display: flex;
    width: 100%;
    justify-content: space-around;
}

.objectId {
    display: none;
}

.wrapper--outer {
    width: 70%;
    margin-top: 5rem;
    padding: 2rem;
    box-shadow: 0 5px 5px 5px black;
}

div:hover {
    box-shadow: 0 0px 0px 0px black;
    transition: 0.5s ease;
}

div svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
}

form {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 600px;
}

input,
textarea {
    border: none !important;
}

input {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
}
</style>