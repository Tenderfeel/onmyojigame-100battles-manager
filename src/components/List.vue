<template>
  <div class="section">
    <div class="container">
      <div class="level is-mobile" grouped="grouped" group-multiline="group-multiline">
        
        <div class="control level-left rare-switch">
          <div class="level-item is-narrow" v-for="(rare, i) in Object.keys(showRares)" :key="i">
            <b-switch v-model="showRares[rare]">{{ rare }}</b-switch>
          </div>
        </div>
        
      </div>
      <div class="level is-mobile list-container">
        <div
          class="level-item is-narrow list"
          v-for="(rare, i) in Object.keys(showRares).filter(rare => showRares[rare])"
          :key="i"
          :class="`list-${rare}`"
        >
          <char-name
            v-for="(char, i) in data.filter(dat =&gt; dat.rare === rare).sort((a, b) =&gt; a.completed - b.completed)"
            :char="char"
            :key="i"
            @click.native="handleClick(char)"
          ></char-name>
        </div>
      </div>
    </div>
  </div>
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
      ),
      rare: 'N'
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
  margin-top: 0.5rem;
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
