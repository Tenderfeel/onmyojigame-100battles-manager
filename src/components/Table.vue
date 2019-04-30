<template lang="pug">
.section
  .container
    b-field(grouped, group-multiline)
      .control(v-for="(rare, i) in Object.keys(showRares)", :key="i")
        b-switch(v-model="showRares[rare]") {{ rare }}
    b-table(:data="filterdData",
    :mobile-cards="false",
    borderd, hoverable)
      template(slot-scope="props" slot="header")
        p {{ props.column.label }}
      template(slot-scope="props")
        b-table-column(field="rare" label="Rare" width="40" centered) {{ props.row.rare }}
        b-table-column(field="name" label="Name") {{ props.row.name }}
        b-table-column(label="" width="100")
          button.button Complete
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      columns: [
        {
          field: "rare",
          label: "Rare",
          width: "40",
          numeric: true
        },
        {
          field: "name",
          label: "Name"
        },
        {
          label: ""
        }
      ],
      showRares: Object.assign(
        ...this.$store.getters["rares"].map(key => ({ [key]: true }))
      )
    };
  },
  computed: {
    ...mapGetters(["data", "rares"]),
    filterdData() {
      return this.data.filter(dat => this.showRares[dat.rare]);
    }
  }
};
</script>
<style scoped>
.section {
  padding-top: 1rem;
}
</style>
