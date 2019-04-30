<template lang="pug">
  nav.navbar.is-dark.is-fixed-top.level.is-mobile(role="navigation" aria-label="main navigation")
    h1.navbar-brand
      span.navbar-item 100BM
    .level.is-mobile.navbar-item
      .level-item.has-text-centered(v-if="data")
        div.has-text-white(:class="{'has-text-success': isFinish}")
          span Completed: {{ completeTotal }}/{{data.length}}
          span(v-if="isFinish" style="margin-left: 1rem") Finish!!
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["data"]),
    completeTotal() {
      return this.data.reduce((accu, obj) => accu + obj.completed, 0);
    },
    isFinish() {
      return this.completeTotal === this.data.length;
    }
  }
};
</script>

