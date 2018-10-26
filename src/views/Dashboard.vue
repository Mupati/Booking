<template>
   <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <p>A nice Dashboard for the Professionals</p>
          <b-link></b-link>
          <b-button variant='info' size='lg' @click="logout">Log out</b-button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

  data () {
    return {

    }
  },

  methods: {

    logout: function () {
      alert('Logout Successful')
      this.$store.commit('setloginStatus')
      this.$router.push('/')
    }
  },

  computed: {

  },

  mounted () {
    // this.$store.dispatch('setloginStatus')
  }

}
</script>

<style scoped>

</style>
