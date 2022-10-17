<template>
  <section class="hero">
    <p class="__header-style-4">Providing insightful research, analysis, and resources to facilitate informed
                                policy decisions and administration of services</p>

    <form id="search-form" class="search-form">
      <label></label>
      <input class="__text" placeholder="Search rfa.sc.gov" />
      <button class="__button __solid" form="search-form" type="submit">Apply</button>
    </form>
  </section>

  <section class="cards">
    <div class="flex-container">
      <div class="card" v-for="(card, index) in cardItems.hero" :key="index">
        <img :src="card.img" :alt="card.alt" />
        <p>{{ card.title }}</p>
      </div>
    </div>
  </section>

  <section class="public-dashboard">
    <div class="flex-container">
      <div class="left-column">
        <h2 class="__header-style-2">RFA Analytics - Public Dashboard</h2>

        <div class="text-container">
          <p class="__text">
            The S.C. Revenue and Fiscal Affairs Office offers online solutions for accessing publicly sourced data. This
            is accomplished through the use of a business intelligence dashboard tool and ArcGIS Server.
          </p>

          <p class="__text">
            Our latest dashboards include population counts from the 2020 Census used for the redistricting process.
            Please note that gender and age are not included in this release.
            <a class="__link-style-2"
               href="https://rfa.sc.gov/data-research/population-demographics/census-state-data-center/decennial-census-data">
              Click here for population tables, downloadable files, and dashboards.</a>
          </p>

          <p class="__text">
            Read more about RFA Online Analytics
            <a class="__link-style-2"
               href="https://rfa.sc.gov/data-services/online-analytics">here</a>.
          </p>
        </div>
      </div>

      <div class="right-column">
        <div class="image-container">
          <button class="__button __solid">Click here to view census dashboards</button>
        </div>
      </div>
    </div>
  </section>

  <section class="popular-services">
    <div class="flex-container">
      <h3 class="__header-style-3">Popular Services and Links</h3>

      <div class="row">
        <div class="column">
          <p>
            <a class="__link-style-1" href="https://rfa.sc.gov/boards-committees/bea">
              Board of Economic Advisors (meeting documents and other information)
            </a>
          </p>

          <p>
            <a class="__link-style-1" href="https://rfa.sc.gov/data-research/state-finances/monthly-general">
              General Fund Revenue Reports
            </a>
          </p>

          <p>
            <a class="__link-style-1" href="https://rfa.sc.gov/data-research/presentations">
              Presentations
            </a>
          </p>
        </div>

        <div class="column">
          <p>
            <a class="__link-style-1"
               href="https://rfa.sc.gov/data-research/population-demographics/census-state-data-center/decennial-census-data">
              Decennial Census Data
            </a>
          </p>

          <p>
            <a class="__link-style-1"
               href="https://rfa.sc.gov/page/data-research/inflation-adjustments-legal-proceedings">
              Inflation Adjustments for Legal Proceedings
            </a>
          </p>

          <p>
            <a class="__link-style-1" href="https://rfa.sc.gov/programs-services/geodetic/rtnstatus">
              Real Time Network
            </a>
          </p>
        </div>

        <div class="column">
          <p class="with-icon">
            <a class="__link-style-1"
               href="/provisions.pdf"
               title="Provisions Affecting GF Revenue (Tax Savings) FY21 9.7.21.pdf"
               target="_blank">
              Estimated Tax Savings FY 2020-21
            </a>
            <Icon icon="mdi:file-document-outline" width="20" color="rgb(117, 117, 117)" />
          </p>

          <p class="with-icon">
            <a class="__link-style-1"
               href="https://www.localblrenewal.com/"
               target="_blank">
              Local Business License Renewal Center (links to an external website)
            </a>
            <Icon icon="mdi:open-in-new" width="20" color="rgb(117, 117, 117)" />
          </p>

          <p class="with-icon">
            <a class="__link-style-1"
               href="/sales.pdf"
               title="Sales and Use Tax Exemptions - FY2019-20.pdf"
               target="_blank">
              Sales and Use Tax Exemptions
            </a>
            <Icon icon="mdi:file-document-outline" width="20" color="rgb(117, 117, 117)" />
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="updates-and-events">
    <div class="flex-container">
      <div class="recent-updates">
        <h3 class="__header-style-2">Recent Updates</h3>

        <ul>
          <li>
            <a class="__link-style-1">
              Motor Fuel Information
            </a>
            <p>
              <span>Updated:</span> Thu, 09/22/2022 - 13:15
            </p>
          </li>

          <li>
            <a class="__link-style-1">
              State Finances and Economy
            </a>
            <p>
              <span>Updated:</span> Thu, 09/01/2022 - 15:10
            </p>
          </li>

          <li>
            <a class="__link-style-1">
              Teacher Salary Projections
            </a>
            <p>
              <span>Updated:</span> Thu, 09/22/2022 - 13:15
            </p>
          </li>

          <li>
            <a class="__link-style-1">
              Economic Analyses
            </a>
            <p>
              <span>Updated:</span> Tue, 08/16/2022 - 09:49
            </p>
          </li>

          <li>
            <a class="__link-style-1">
              Online Analytics
            </a>
            <p>
              <span>Updated:</span> Tue, 08/02/2022 - 10:09
            </p>
          </li>

          <li>
            <a class="__link-style-1">
              Jurisdictional Mapping
            </a>
            <p>
              <span>Updated:</span> Fri, 07/22/2022 - 11:32
            </p>
          </li>
        </ul>
      </div>

      <div class="upcoming-events">
        <h3 class="__header-style-2">Upcoming Events</h3>

        <div class="row">
          <div class="left">
            <span>Oct</span>
            <span>18</span>
            <span>2022</span>
          </div>

          <div class="right">
            <h2 class="__h2">Board of Economic Advisors Meeting and Annual Regional Advisory Meeting</h2>

            <p class="with-icon">
              <a class="__link-style-2"
                 href="https://us06web.zoom.us/j/86022440281"
                 target="_blank">
                https://us06web.zoom.us/j/86022440281
              </a>
              <Icon icon="mdi:open-in-new" width="20" color="rgb(117, 117, 117)" />
            </p>

            <p class="__text">
              Access by Phone:
              <a class="__link-style-2" href="tel:13126266799">1-312-626-6799</a>
              , Webinar ID:
              <a class="__link-style-2"
                 href="https://us06web.zoom.us/j/86022440281"
                 target="_blank">860 2244 0281</a>
              <br>
              Board of Economic Advisors Meeting begins at 10:30 a.m.
              <br>
              Annual Regional Advisory Meeting begins at 12:45 p.m.
            </p>

            <p class="with-icon">
              <Icon icon="mdi:phone" width="24" color="rgb(140, 105, 16)" />
              <a class="__link-style-2"
                 href="tel:8037343793"
                 target="_blank">
                803-734-3793
              </a>
            </p>

            <p class="with-icon agenda">
              <Icon icon="mdi:format-list-bulleted" width="24" color="rgba(51, 51, 51, 0.5)" />
              <a class="__link-style-1"
                 href="/agenda.pdf"
                 title="BEA Agenda - 10-18-22_0.pdf"
                 target="_blank">Agenda</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";

import Research from "../assets/research.svg";
import Geography from "../assets/geography.svg";
import Programs from "../assets/programs.svg";
import Legislative from "../assets/legislative.svg";

export default {
  name: "Home",
  components: {
    Icon,
  },
  data() {
    return {
      cardItems: {
        hero: [
          {
            title: "Data & Research",
            img: Research,
            alt: "Data & Research",
          },
          {
            title: "Geography & Mapping",
            img: Geography,
            alt: "Geography & Mapping",
          },
          {
            title: "Programs & Services",
            img: Programs,
            alt: "Programs & Services",
          },
          {
            title: "Legislative Fiscal Impacts",
            img: Legislative,
            alt: "Legislative Fiscal Impacts",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "../styles/pages/_home.scss";
</style>