<script setup>
import { ref } from 'vue'
import CertificationsCard from './CertificationsCardComponent.vue';

</script>

<template>
<div>
    <h1>This is certification window</h1>
    <div class="window">
        <div class="header">
            <div class="header__input-menu">
                <a href="" class="header__input-close"></a>
                <a href="" class="header__input-full-screen"></a>
                <a href="" class="header__input-minimize"></a>
            </div>
            <div class="header__text">
                <span>Window</span>
            </div>
        </div>

        <div class="window__content">
            <p>This repository contains HTML and CSS code for creating a window design inspired by the Mac OS user interface style. The interface offers a visually appealing window design with blur effects and interactive hover animations for control elements. <br> <br> Author:<span style="text-decoration:underline;"> d1yorhay</span> <br><br>Contact:</p>
            <CertificationsCard />
            <a href="https://d1yorhay.github.io/" target="_blank">website</a>
            <a href="https://github.com/d1yorhay/" target="_blank">github</a>
        </div>
    </div>
    

</div>


</template>
