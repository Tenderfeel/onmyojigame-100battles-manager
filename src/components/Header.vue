<template>
  <nav
    class="navbar is-dark is-fixed-top level is-mobile"
    role="navigation"
    aria-label="main navigation"
  >
    <h1 class="navbar-brand">
      <span class="navbar-item">100BM</span>
    </h1>
    <div class="level is-mobile navbar-item">
      <div
        class="level-item has-text-centered has-text-white"
        v-if="data"
        :class="{'has-text-success': isFinish}"
      >
        <b-icon icon="tasks"/>
        <span style="margin-left: .4rem;">{{ completeTotal }}/{{data.length}}</span>
        <span v-if="isFinish" style="margin-left: .4rem;">Finish!</span>
      </div>
      <b-button type="is-danger" outlined @click="hanleReset">Reset</b-button>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      selected: null
    };
  },
  computed: {
    ...mapState(["data"]),
    completeTotal() {
      return this.data.reduce((accu, obj) => accu + obj.completed, 0);
    },
    isFinish() {
      return this.completeTotal === this.data.length;
    }
  },
  methods: {
    hanleReset() {
      if (window.confirm("Are you sure?")) {
        this.$store.dispatch("reset");
        this.$buefy.toast.open({
          message: "Reset Success!",
          type: "is-success"
        });
      }
    }
  }
};
</script>

<style scoped>
</style>