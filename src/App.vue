<template>
  <v-app>
       <v-content>
      <scroll-component/>
    </v-content>
  </v-app>
</template>

<script>
import ScrollComponent from './components/ScrollComponent.vue';

export default {
  name: 'App',

  components: {
    ScrollComponent,
  },

  data: () => ({
    //
  }),
};
</script>
