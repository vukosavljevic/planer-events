<template>
    <div>
        <h1>{{ title }} - {{ date }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'description', 'date']
}
</script>
<style scoped>
div{
    margin-top:5rem;
}
</style>