<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          category: "food",
          title: "foods",
          description: "FOOD",
          location: "FOOOOOOOD",
          date: "fOoD",
          time: "FoOd",
          petsAllowed: true,
          organizer: "doof"
        },
        {
          id: 2,
          category: "tuna",
          title: "tunas",
          description: "TUNA",
          location: "TUUUUUUNA",
          date: "tUnA",
          time: "TuNa",
          petsAllowed: true,
          organizer: "anut"
        },
        {
          id: 3,
          category: "milk",
          title: "milks",
          description: "MILK",
          location: "MIIIILK",
          date: "mIlK",
          time: "MiLk",
          petsAllowed: true,
          organizer: "klim"
        },
        {
          id: 4,
          category: "water",
          title: "waters",
          description: "WATER",
          location: "WAAAAATER",
          date: "wAtEr",
          time: "WaTeR",
          petsAllowed: true,
          organizer: "retaw"
        }
      ]
    }
  }
};
</script>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
