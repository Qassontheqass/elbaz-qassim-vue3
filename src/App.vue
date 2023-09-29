<script setup>

import TheNav from './components/TheNav.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    
    <TheNav></TheNav>
    <TheHeader></TheHeader>
    <RouterView></RouterView>
    <TheFooter></TheFooter>



</template>

<style scoped>

</style>
