<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm
  },
  methods: {
    // gets the data from CoachForm component
    saveData(data) {
      // dispatches the register coach action
      this.$store.dispatch('coaches/registerCoach', data);
      // cannot go back since we are using replace instead of push
      this.$router.replace('/coaches');
    }
  }
};
</script>
