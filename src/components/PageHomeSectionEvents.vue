<template>
  <div class="events">
    <h1>Upcoming Events</h1>

    <div class="events__content">
      <div class="events__item" v-for="event in events" :key="event.id">
        <div class="item__column">
          <span>{{ event.date.month }}</span>
          <span>{{ event.date.day }}</span>
          <span>{{ event.date.year }}</span>
        </div>

        <div class="item__column">
          <span class="item__badge" v-if="event.status">{{ event.status }}</span>
          <h2>{{ event.title }}</h2>

          <p v-if="event.description">{{ event.description }}</p>

          <div class="item__details-text">
            <p v-if="event.info.location">
              <Icon icon="mdi:map-marker-outline" />
              <span>{{ event.info.location }}</span>
            </p>

            <p v-if="event.info.time">
              <Icon icon="mdi:clock-outline" />
              <span>{{ event.info.time }}</span>
            </p>
          </div>

          <div class="item__details-links">
            <a v-if="event.links.phone" :href="`tel:${event.links.phone}`">
              <Icon icon="mdi:phone" />
              <span>{{ event.links.phone }}</span>
            </a>

            <a v-if="event.links.video" :href="event.links.video" target="_blank">
              <Icon icon="mdi:laptop-account" />
              <span>Zoom Meeting</span>
            </a>

            <template v-for="attachment in event.attachments" :key="attachment.id">
              <a class="item__details-agenda"
                 v-if="attachment.name"
                 :href="attachment.file"
                 title="BEA Agenda - 10-18-22_0.pdf"
                 target="_blank">
                <Icon icon="mdi:format-list-bulleted" />
                {{ attachment.name }}
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
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