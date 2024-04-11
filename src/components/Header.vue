<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    components: {
        RouterLink,
        RouterView
    }
}
</script>

<template>
    <div class="header">
        <RouterLink class="text" to="/">Home</RouterLink>
        <span class="text">|</span>
        <RouterLink class="text" to="/VtextAndVmodel">VtextAndVmodel</RouterLink>
        <span class="text">|</span>
        <RouterLink class="text" to="/Von">Von</RouterLink>
        <span class="text">|</span>
        <RouterLink class="text" to="/Vfor">Vfor</RouterLink>
        <span class="text">|</span>
        <RouterLink class="text" to="/VshowAndVif">VshowAndVif</RouterLink>
        <span class="text">|</span>
        <RouterLink class="text" to="/Vbind">Vbind</RouterLink>
        <span class="text">|</span>
        <RouterLink class="text" to="/Props">Props</RouterLink>
        <span class="text">|</span>
        <RouterLink class="text" to="/Emits">Emits</RouterLink>
        <span class="text">|</span>
        <RouterLink class="text" to="/DataFlow">DataFlow</RouterLink>
        <span class="text">|</span>
        <RouterLink class="text" to="/GuessNum">GuessNum</RouterLink>
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&family=Nunito:ital@0;1&display=swap');

.header {
    height: 100%;
    width: 100%;
    background: rgb(199, 220, 251);
    box-shadow: 0px 3px 5px rgb(20,20,20, 20%);
    margin-bottom: 0.4%;
}


.text {
    font-family: "Nunito", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 1.5dvw;
    text-decoration: none;
    transition: 0.5s All;
    color: rgb(39, 74, 127);
    margin-left: 1%;
}
</style>