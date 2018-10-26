<template>
    <div id="header">
    <header id="mainNav">
        <b-navbar toggleable="md" type="dark" variant="success" class="py-3">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-navbar-brand class="ml-md-4"><router-link to="/"><img src="@/assets/logo.png" class="d-inline"></router-link></b-navbar-brand>
                    <b-collapse is-nav right id="nav_collapse" class="justify-content-around">
                        <b-navbar-nav>
                            <b-nav-item><router-link to="/"><font-awesome-icon icon="home" /> Home</router-link></b-nav-item>
                            <b-nav-item class="px-md-5 mx-md-5 mx-sm-auto px-sm-1"><router-link to="/about"><font-awesome-icon icon="user" /> About</router-link></b-nav-item>
                            <b-nav-item class="mr-md-5 pr-md-5 mx-sm-auto px-sm-1"><router-link to="/appointments"><font-awesome-icon icon="calendar-check" /> Appointments</router-link></b-nav-item>
                            <b-nav-item class="mr-md-5 pr-md-5 mx-sm-auto px-sm-1"><router-link to="/professionals"><font-awesome-icon icon="calendar-check" /> Professionals</router-link></b-nav-item>
                            <b-nav-item v-if="authStatus"><router-link to="/account"><font-awesome-icon icon="sign-in-alt" /> Welcome Kofi</router-link></b-nav-item>
                            <b-nav-item v-else><router-link to="/account"><font-awesome-icon icon="sign-in-alt" /> Log in</router-link></b-nav-item>

                        </b-navbar-nav>

                    </b-collapse>
        </b-navbar>
    </header>

    </div>
</template>


<script>
export default {
  name: 'Navigator',
  data () {
    return {

    }
  },

  methods: {

  },

  computed: {
    authStatus: function () {
      return this.$store.state.loggedIn
    }
  },

  mounted () {
    console.log(this.$store.state.loggedIn)
  }
}
</script>

<style scoped>
img{
    height: 2em;
}

</style>


