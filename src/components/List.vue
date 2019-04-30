<template lang="pug">
.section
  .container
    .level.is-mobile(grouped, group-multiline)
      .control.level-left
        .level-item(v-for="(rare, i) in Object.keys(showRares)", :key="i")
          b-switch(v-model="showRares[rare]") {{ rare }}
      .control.level-right
        .level-item
          b-button(type="is-danger" outlined @click="hanleReset") Reset
    .level.is-mobile
      .level-item.list(v-for="(rare, i) in Object.keys(showRares)",
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
.list {
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
}
.char + .char {
  margin-top: 0.5rem;
}
</style>
