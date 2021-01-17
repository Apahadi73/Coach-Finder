<template>
  <!-- supports normal text -->
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <!-- supports link -->
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #16c79a;
  border: 1px solid #16c79a;
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #007965;
  border-color: #007965;
}

.flat {
  background-color: transparent;
  color: #16c79a;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #007965;
  color: #007965;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
