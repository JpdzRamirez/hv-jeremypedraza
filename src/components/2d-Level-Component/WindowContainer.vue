<script >
import {
    ref
} from 'vue'

import HeaderComponent from './window-components/HeaderWindow.vue';
import HeaderNavBarComponent from './window-components/HeaderNavBarWindow.vue'; 
import LeftNavBarComponent from './window-components/LeftNavBarWindow.vue';
import CertificationCardComponent from './window-components/CertificationsCard.vue'; 
import FooterWindowComponent from './window-components/FooterWindow.vue';




import WindowContainerEffects from './window-components/window';

// Add Jquery functions
import $ from 'jquery';



export default {
    name: 'ChildWindowComponent',
    components: {
    HeaderComponent,
    LeftNavBarComponent,
    FooterWindowComponent,
    HeaderNavBarComponent,
    CertificationCardComponent,
    
  },
  data: function () {
        return {
            styleCard: 'dark'
        }
    },
    mounted: function () {

        const dropdowns = document.querySelectorAll(".dropdown");
        
        $(function () {
            $(".menu-link").click(function () {
                $(".menu-link").removeClass("is-active");
                $(".menu-link").addClass("is-active");
            });
        });

        $(function () {
            $(".main-header-link").click(function () {
                $(".main-header-link").removeClass("is-active");
                $(".main-header-link").addClass("is-active");
            });
        });

        
        dropdowns.forEach((dropdown) => {
            dropdown.addEventListener("click", (e) => {
                e.stopPropagation();
                dropdowns.forEach((c) => c.classList.remove("is-active"));
                dropdown.classList.add("is-active");
            });
        });

        $(".search-bar input")
            .focus(function () {
                $(".header").addClass("wide");
            })
            .blur(function () {
                $(".header").removeClass("wide");
            });

        $(document).click(function (e) {
            var container = $(".status-button");
            var dd = $(".dropdown");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                dd.removeClass("is-active");
            }
        });


    },
    methods: {
    turnOnLigths() {
        const toggleButton = document.querySelector('.dark-light');
        let card= $(".card  div");
        card.each( function(){
            $( this ).toggleClass( "offLigths" );;
        });
        if(this.styleCard == "dark"){
            this.styleCard = "light";
        }else{
            this.styleCard = "dark";
        }
        WindowContainerEffects.darkMode(toggleButton); // <---read data
    },

  }
}
</script>

<template>

    <div class="video-bg">
        <!-- <iframe  width="420" height="315" src="https://www.youtube.com/embed/gFRtAAmiFbE?autoplay=1&cc_load_policy=1&controls=0&mute=1&loop=1" frameborder="0"
        allowfullscreen></iframe> -->
    </div>
    
    <div @click="turnOnLigths" class="dark-light">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
    </div>
    <div class="app">
        <HeaderComponent></HeaderComponent>
        <div class="wrapper">
            <LeftNavBarComponent></LeftNavBarComponent>
            <div class="main-container">
                <HeaderNavBarComponent></HeaderNavBarComponent>
                <div class="content-wrapper">
                    <div class="content-wrapper-header">
                        <div class="content-wrapper-context">
                            <h3 class="img-content">
                                <svg viewBox="0 0 512 512">
                                    <path d="M467 0H45C20.099 0 0 20.099 0 45v422c0 24.901 20.099 45 45 45h422c24.901 0 45-20.099 45-45V45c0-24.901-20.099-45-45-45z" fill="#d6355b" data-original="#ff468c" />
                                    <path xmlns="http://www.w3.org/2000/svg" d="M512 45v422c0 24.901-20.099 45-45 45H256V0h211c24.901 0 45 20.099 45 45z" fill="#d6355b" data-original="#d72878" />
                                    <path xmlns="http://www.w3.org/2000/svg" d="M467 30H45c-8.401 0-15 6.599-15 15v422c0 8.401 6.599 15 15 15h422c8.401 0 15-6.599 15-15V45c0-8.401-6.599-15-15-15z" fill="#2e000a" data-original="#700029" />
                                    <path xmlns="http://www.w3.org/2000/svg" d="M482 45v422c0 8.401-6.599 15-15 15H256V30h211c8.401 0 15 6.599 15 15z" fill="#2e000a" data-original="#4d0e06" />
                                    <path xmlns="http://www.w3.org/2000/svg" d="M181 391c-41.353 0-75-33.647-75-75 0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45c41.353 0 75 33.647 75 75s-33.647 75-75 75z" fill="#d6355b" data-original="#ff468c" />
                                    <path xmlns="http://www.w3.org/2000/svg" d="M391 361h-30c-8.276 0-15-6.724-15-15V211h45c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15s-15 6.709-15 15v45h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v135c0 24.814 20.186 45 45 45h30c8.291 0 15-6.709 15-15s-6.709-15-15-15z" fill="#d6355b" data-original="#d72878" />
                                </svg>
                                Adobe Stock
                            </h3>
                            <div class="content-text">Grab yourself 10 free images from Adobe Stock in a 30-day free trial plan and find perfect image, that will help you with your new project.</div>
                            <button class="content-button">Start free trial</button>
                        </div>
                        <img class="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt="">
                    </div>
                    <CertificationCardComponent :styleCard="styleCard"></CertificationCardComponent>
                    <!-- Footer Content Section -->
                     <FooterWindowComponent></FooterWindowComponent>
                </div>
            </div>
        </div>
        <div class="overlay-app"></div>
    </div>

</template>
