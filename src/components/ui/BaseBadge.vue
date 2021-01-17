<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #214151;
  color: white;
}

.backend {
  background-color: #11698e;
  color: white;
}

.career {
  background-color: #00af91;
  color: white;
}
</style>
