<template>
  <!-- <TabNav tabs={[‘Home’, ‘Settings’, ‘Profile’]} selected={ selected }>…</TabNav> -->
  <div style="width: 30%">
    <ul class="nav nav-tabs">
      <li v-for="tab in tabs" :key="tab" class="nav-item">
        <a
          class="nav-link"
          :class="{ active: tab === selected }"
          @click="setTab(tab)"
          >{{ tab }}</a
        >
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tabnav",
  props: {
    /* Holds all of the tabs data */
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  methods: {
    setTab(tab) {
      this.$emit("selected", tab);
    },
  },
};
</script>
