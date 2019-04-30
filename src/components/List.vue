<template lang="pug">
.section
  .container
    .level.is-mobile(grouped, group-multiline)
      .control.level-left.rare-switch
        .level-item.is-narrow(v-for="(rare, i) in Object.keys(showRares)", :key="i")
          b-switch(v-model="showRares[rare]") {{ rare }}
      .control.level-right
        .level-item
          b-button(type="is-danger" outlined @click="hanleReset") Reset
    .level.is-mobile.list-container
      .level-item.is-narrow.list(v-for="(rare, i) in Object.keys(showRares)",
         :key="i",
         :class="`list-${rare}`"
        v-if="showRares[rare]")
        char-name(
          v-for="(char, i) in data.filter(dat => dat.rare === rare).sort((a, b) => a.completed - b.completed)",
          :char="char", :key="i", @click.native="handleClick(char)")
</template>
<script>
import { mapState, mapGetters } from "vuex";
import CharName from "@/components/CharName";

export default {
  components: { CharName },
  data() {
    return {
      showRares: Object.assign(
        ...this.$store.getters["rares"].map(key => ({ [key]: true }))
      )
    };
  },
  computed: {
    ...mapState(["data"]),
    ...mapGetters(["rares"])
  },
  methods: {
    handleClick(char) {
      char.completed = !char.completed;
      localStorage.setItem("data", JSON.stringify(this.data));
    },
    hanleReset() {
      if (window.confirm("Are you sure?")) {
        this.$store.commit("resetData");
        localStorage.setItem("data", JSON.stringify(this.data));
        this.$toast.open({
          message: "Reset Success!",
          type: "is-success"
        });
      }
    }
  }
};
</script>
<style scoped>
.section {
  padding-top: 1rem;
}
.rare-switch {
  flex-wrap: wrap;
  max-width: 80%;
}
.rare-switch > .level-item {
  margin-bottom: 0.5rem !important;
}
.list-R {
  background: #e1f3ff;
}
.list-N {
  background: #efefef;
}
.list-SR {
  background: #f3e9ff;
}
.list-SSR {
  background: #fdfae8;
}
.list-SP {
  background: #ffecf0;
}
.level {
  align-items: flex-start;
}
.list-container {
  flex-wrap: wrap;
}
.list {
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  max-width: 50%;
  flex-grow: 1;
  margin-bottom: 2rem !important;
}
@media (max-width: 375px) {
  .list:nth-child(2n) {
    margin-right: 0 !important;
  }
}
.char + .char {
  margin-top: 0.5rem;
}
</style>
