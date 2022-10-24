<template>
  <div class="events">
    <h3 class="__header-style-2">Upcoming Events</h3>

    <div class="card" v-for="event in events" :key="event.id">
      <div class="date">
        <span>{{ event.date.month }}</span>
        <span>{{ event.date.day }}</span>
        <span>{{ event.date.year }}</span>
      </div>

      <div class="details">
        <div class="group">
          <span v-if="event.status" class="__h4 __badge __red">{{ event.status }}</span>
          <h2 class="__h2">{{ event.title }}</h2>
        </div>

        <p class="__text" v-if="event.description">
          {{ event.description }}
        </p>

        <div class="group">
          <p class="item" v-if="event.info.location">
            <Icon icon="mdi:map-marker-outline" width="24" color="rgb(140, 105, 16)" />
            <span class="__text">{{ event.info.location }}</span>
          </p>

          <p class="item" v-if="event.info.time">
            <Icon icon="mdi:clock-outline" width="24" color="rgb(140, 105, 16)" />
            <span class="__text">{{ event.info.time }}</span>
          </p>

          <p class="item" v-if="event.links.phone">
            <Icon icon="mdi:phone" width="24" color="rgb(140, 105, 16)" />
            <a class="__link-style-2" :href="`tel:${event.links.phone}`">
              {{ event.links.phone }}
            </a>
          </p>

          <p class="item" v-if="event.links.video">
            <Icon icon="mdi:laptop-account" width="24" color="rgb(140, 105, 16)" />
            <a class="__link-style-2"
               :href="event.links.video"
               target="_blank">
              {{ event.links.video }}
            </a>
          </p>
        </div>

        <template v-for="attachment in event.attachments" :key="attachment.id">
          <p class="item agenda" v-if="attachment.name">
            <Icon icon="mdi:format-list-bulleted" width="24" color="rgba(51, 51, 51, 0.5)" />
            <a class="__link-style-1"
               :href="attachment.file"
               title="BEA Agenda - 10-18-22_0.pdf"
               target="_blank">{{ attachment.name }}</a>
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import json from "../../../data/events.json";

export default defineComponent({
  name: "SectionEvents",
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
@import "../../styles/components/home-events";
</style>