<script>
export default {
  name: 'TaskBarComponent',
  mounted: function() {

      const time = document.getElementById("time");
      const day = document.getElementById("day");
      const midday = document.getElementById("midday");

      let clock = setInterval(
        function calcTime() {
          let date_now = new Date();
          let hr = date_now.getHours();
          let min = date_now.getMinutes();
          let sec = date_now.getSeconds();
          let middayValue = "AM";

          let days = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado"
          ];

          day.textContent = days[date_now.getDay()];

          middayValue = hr >= 12 ? "PM" : "AM";

          if (hr == 0) {
            hr = 12;
          } else if (hr > 12) {
            hr -= 12;
          }

          hr = hr < 10 ? "0" + hr : hr;
          min = min < 10 ? "0" + min : min;
          sec = sec < 10 ? "0" + sec : sec;

          time.textContent = hr + ":" + min + ":" + sec;
          midday.textContent = middayValue;
        },

        1000
      );

  },
  props: {
    receivedData: {
      type: String,
      required: true
    }
  },
  computed: {
    statusClass() {
      return {
        'table fill-light': this.receivedData === 'dark',
        'table': this.receivedData === 'light'
      };
    }
  }
}
</script>

<template>
                <div class="taskBarFooter dark" id="taskBar-Footer">
                  <div class="windows-container">
                    <a><img src="/src/assets/img/svg/list-table.svg" :class="statusClass"/></a>
                    <div class="windows-tab">
                      <a><img src="/src/assets/img/svg/window.svg" class="win-tab fill-light"/> <img src="/src/assets/img/wallpaper.jpg" class="win-img"/></a>
                      <a><img src="/src/assets/img/svg/window.svg" class="win-tab fill-light"/></a>
                      <a><img src="/src/assets/img/svg/window.svg" class="win-tab fill-light"/></a>
                    </div>
                    <a><img src="/src/assets/img/svg/search.svg" class="table fill-light"/></a>
                  </div>
                  <div class="gadgets">
                    <a><img src="/src/assets/img/svg/whatsapp.svg" class="gadget"/></a>
                    <a><img src="/src/assets/img/svg/github.svg" class="gadget"/></a>
                    <a><img src="/src/assets/img/svg/gmail.svg" class="gadget"/></a>
                    <a><img src="/src/assets/img/svg/linkedin.svg" class="gadget"/></a>
                    <a><img src="/src/assets/img/svg/terminal.png" class="gadget"/></a>
                    <a><img src="/src/assets/img/svg/google-chrome.svg" class="gadget"/></a>
                    <a><img src="/src/assets/img/svg/google-Drive.svg" class="gadget"/></a>
                    <a><img src="/src/assets/img/svg/trash.svg" class="gadget"/></a>
                    <a><img src="/src/assets/img/svg/settings.svg" class="gadget"/></a>
                  </div>
                  <div class="clock-container">
                    <div class="otherIcons">
                      <a><img src="/src/assets/img/svg/arrow-up.svg" class="fill-light"/></a>
                      <a><img src="/src/assets/img/svg/connect.svg" class="fill-light"/></a>
                      <a><img src="/src/assets/img/svg/power-off.svg" class="fill-light"/></a>
                      <a><img src="/src/assets/img/svg/bell.svg" class="fill-light"/></a>
                      <el-popover
                          :width="320"
                          trigger="click"
                          transition="el-fade-in-linear"
                          :effect=receivedData 
                          placement="top"
                          title="Battery"
                        >
                            <template #reference>
                              <span class="battery">100%  <img src="/src/assets/img/svg/battery.svg" /></span>
                            </template>
                            <p>Power Source: Power Adapter </p>
                            <span class=""><hr>Battery Preferences...</span>
                        </el-popover>
                        
                    </div>
                    <div class="shape1"></div>
                    <div class="clock">
                      <div id="day"></div>
                      <div class="wrapper">
                        <div id="time"></div>
                        <div id="midday"></div>
                      </div>
                    </div>
                  </div>
                </div>
</template>