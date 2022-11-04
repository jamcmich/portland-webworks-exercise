<template>
  <section class="events events--flex">
    <h1 class="events__header">Upcoming Events</h1>

    <div class="events__items events__items--grid">
      <div class="events__item events__item--grid" v-for="event in events" :key="event.id">
        <div class="events__column events__column--grid">
          <span>{{ event.date.month }}</span>
          <span>{{ event.date.day }}</span>
          <span>{{ event.date.year }}</span>
        </div>

        <div class="events__column events__column--grid">
          <div class="events__headings">
            <span v-if="event.status">{{ event.status }}</span>
            <h2>{{ event.title }}</h2>
          </div>

          <p v-if="event.description">
            {{ event.description }}
          </p>

          <div class="events__details">
            <div class="events__details-location" v-if="event.info.location">
              <p class="events__details-text">
                <Icon icon="mdi:map-marker-outline" />
                <span class="__text">{{ event.info.location }}</span>
              </p>
            </div>

            <div class="events__details-time" v-if="event.info.time">
              <p class="events__details-text">
                <Icon icon="mdi:clock-outline" />
                <span class="__text">{{ event.info.time }}</span>
              </p>
            </div>

            <p class="events__details-phone" v-if="event.links.phone">
              <a class="events__link" :href="`tel:${event.links.phone}`">
                <Icon icon="mdi:phone" />
                <span>{{ event.links.phone }}</span>
              </a>
            </p>

            <p class="events__details-video" v-if="event.links.video">
              <a class="events__link"
                 :href="event.links.video"
                 target="_blank">
                <Icon icon="mdi:laptop-account" />
                <span>{{ event.links.video }}</span>
              </a>
            </p>
          </div>

          <template v-for="attachment in event.attachments" :key="attachment.id">
            <p class="events__details-agenda" v-if="attachment.name">
              <a class="events__link"
                 :href="attachment.file"
                 title="BEA Agenda - 10-18-22_0.pdf"
                 target="_blank">
                <Icon icon="mdi:format-list-bulleted" color="rgba(51, 51, 51, 0.5)" />
                {{ attachment.name }}
              </a>
            </p>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import json from "../data/events.json";

export default defineComponent({
  name: "PageHomeSectionEvents",
  components: {
    Icon,
  },
  data() {
    return {
      events: json.events,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_page-home-section-events.scss";
</style>