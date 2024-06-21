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
    name: 'WindowComponent',
    components: {
    HeaderComponent,
    LeftNavBarComponent,
    FooterWindowComponent,
    HeaderNavBarComponent,
    CertificationCardComponent,
    
  },
  data: function () {
        return {
            styleCard: 'dark',
            sharedSearchVariable : ''
        };
    },
    emits :{
        updatestyleCard: null, 
        },
    
    methods: {
    turnOnLigths: function() {
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
        this.$emit("updatestyleCard",this.styleCard);
        WindowContainerEffects.darkMode(toggleButton); // <---read data
    },
    updateSearchVariable(event){
        this.sharedSearchVariable = event.target.value;
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


        }
}
</script>

<template>

    <div class="video-bg">
        <!-- <iframe  width="420" height="315" src="https://www.youtube.com/embed/gFRtAAmiFbE?autoplay=1&cc_load_policy=1&controls=0&mute=1&loop=1" frameborder="0"
        allowfullscreen></iframe> -->
    </div>
    
    <div @click="this.turnOnLigths" class="dark-light">
        <img v-if="this.styleCard=='light'" src="/src/assets/img/svg/sun.svg" class="imgSVG"/>
        <svg v-else viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
    </div>
    <div class="app">
        <HeaderComponent :sharedSearchVariableChild="sharedSearchVariable" @updateSearchVariable="updateSearchVariable"></HeaderComponent>
        <div class="wrapper">
            <LeftNavBarComponent></LeftNavBarComponent>
            <div class="main-container">
                <HeaderNavBarComponent></HeaderNavBarComponent>
                <div class="content-wrapper">
                    <div class="content-wrapper-header">
                        <div class="content-wrapper-context fontLatex">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corporis! Sunt impedit nihil dignissimos sed sequi labore fugit distinctio cum illo sint? Perferendis temporibus expedita unde possimus, obcaecati aliquid quasi.
                        </div>
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
