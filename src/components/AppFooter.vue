<template>
  <footer>
    <div class="column">
      <h1 class="__h1">South Carolina<br>Revenue and Fiscal Affairs Office</h1>
      <img src="/assets/scrfao-logo-transparent.png"
           alt="South Carolina Revenue and Fiscal Affairs Office logo" />
    </div>

    <div class="column">
      <ul>
        <li><a class="__text" href="https://rfa.sc.gov/page/privacy-statement-disclaimers">Privacy Statement</a></li>
        <li><a class="__text" href="https://rfa.sc.gov/freedom-information-act-foia">FOIA</a></li>
        <li>
          <a class="__text" href="https://rfa.sc.gov/agency-disclosures-and-reporting-requirements">
            Disclosures and Reporting
          </a>
        </li>
        <li><a class="__text" href="https://oig.sc.gov/file-complaint">Report Fraud</a></li>
        <li><a class="__text" href="https://rfa.sc.gov/page/accessibility">Accessibility</a></li>
        <li class="item">
          <a class="__text"
             href="https://www.governmentjobs.com/careers/sc?department%5B0%5D=Revenue%20and%20Fiscal%20Affairs%20Office&sort=PositionTitle%7CAscending"
             target="_blank">
            Employment Opportunities</a>
          <Icon icon="mdi:open-in-new" width="20" color="rgb(195, 195, 195)" />
        </li>
        <li><a class="__text" href="https://rfa.sc.gov/contact-us">Contact Us</a></li>
      </ul>
    </div>

    <div class="column">
      <h4 class="__h4">Location</h4>
      <p class="__text">
        1000 Assembly Street<br>
        Rembert Dennis Building, Suite 421<br>
        Columbia, SC 29201<br>
        (803) 734-3793
      </p>
      <p class="__text">publicrelations@rfa.sc.gov</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "AppFooter",
  components: {
    Icon,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_app-footer.scss";
</style>