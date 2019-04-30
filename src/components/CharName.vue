<template lang="pug">
  b-button.char(:class="completedClass") {{char.name}}
</template>
<script>
export default {
  props: {
    char: {
      type: Object
    }
  },

  computed: {
    completedClass() {
      if (!this.char.completed) return "is-white";
      switch (this.char.rare) {
        case "R":
          return "is-info";
        case "SR":
          return "is-primary";
        case "SSR":
          return "is-warning";
        case "SP":
          return "is-danger";
        default:
          return "is-dark";
      }
    }
  }
};
</script>

