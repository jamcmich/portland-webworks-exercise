<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__column">
        <h1>South Carolina<br>Revenue and Fiscal Affairs Office</h1>
        <a href="/">
          <img src="/assets/scrfao-logo-transparent.png"
               alt="South Carolina Revenue and Fiscal Affairs Office logo" />
        </a>
      </div>

      <div class="footer__column">
        <a href="https://rfa.sc.gov/page/privacy-statement-disclaimers">Privacy Statement</a>
        <a href="https://rfa.sc.gov/freedom-information-act-foia">FOIA</a>
        <a href="https://rfa.sc.gov/agency-disclosures-and-reporting-requirements">Disclosures and Reporting</a>
        <a href="https://oig.sc.gov/file-complaint">Report Fraud</a>
        <a href="https://rfa.sc.gov/page/accessibility">Accessibility</a>
        <a href="https://www.governmentjobs.com/careers/sc?department%5B0%5D=Revenue%20and%20Fiscal%20Affairs%20Office&sort=PositionTitle%7CAscending"
           target="_blank">
          <span>Employment Opportunities</span>
          <Icon icon="mdi:open-in-new" />
        </a>
        <a href="https://rfa.sc.gov/contact-us">Contact Us</a>
      </div>

      <div class="footer__column">
        <h2>Location</h2>
        <p>
          1000 Assembly Street<br>
          Rembert Dennis Building, Suite 421<br>
          Columbia, SC 29201<br>
          (803) 734-3793
        </p>

        <a href="mailto:publicrelations@rfa.sc.gov">publicrelations@rfa.sc.gov</a>
      </div>
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