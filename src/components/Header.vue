<template>
  <nav
    class="navbar is-dark is-fixed-top level is-mobile"
    role="navigation"
    aria-label="main navigation"
  >
    <h1 class="navbar-brand">
      <span class="navbar-item">100BM</span>
    </h1>
    <div class="navbar-item">
      <ais-instant-search :search-client="searchClient" index-name="characters">
        <ais-autocomplete :class-names="{'ais-Autocomplete': 'control has-icons-left'}">
          <template slot-scope="{ currentRefinement, indices, refine }">
            <input
              class="input"
              type="search"
              :value="currentRefinement"
              placeholder="Input name..."
              autocomplete="off"
              @input="refine($event.currentTarget.value)"
            >
            <span class="icon is-small is-left">
              <b-icon icon="search" size="is-small"></b-icon>
            </span>
          </template>
        </ais-autocomplete>
      </ais-instant-search>
    </div>
    <div class="level is-mobile navbar-item">
      <div class="level-item has-text-centered" v-if="data">
        <div class="has-text-white" :class="{'has-text-success': isFinish}">
          <span>
            Completed: {{ completeTotal }}/{{data.length}}
            <span
              v-if="isFinish"
              style="margin-left: 1rem;"
            >Finish!!</span>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import algoliasearch from "algoliasearch/lite";
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchResults: [],
      selected: null,
      searchClient: algoliasearch(
        "KFZDNJLM1A",
        "da33181b4c2cd6cc8dd868273b4359d3"
      )
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
  }
};
</script>

<style scoped>
input[type="search"] {
  --webkit-ime-mode: inactive;
  ime-mode: inactive;
}
</style>