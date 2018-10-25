<template>
    <div id="header">
    <header id="mainNav">
        <b-navbar toggleable="md" type="dark" variant="success" class="py-3">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-navbar-brand class="ml-md-4"><router-link to="/"><img src="@/assets/logo.png" class="d-inline"></router-link></b-navbar-brand>
                    <b-collapse is-nav right id="nav_collapse" class="justify-content-around">
                        <b-navbar-nav>
                            <b-nav-item><font-awesome-icon icon="home" /><router-link to="/"> Home</router-link></b-nav-item>
                            <b-nav-item class="px-md-5 mx-md-5 mx-sm-auto px-sm-1"><font-awesome-icon icon="user" /><router-link to="/about"> About</router-link></b-nav-item>
                            <b-nav-item class="mr-md-5 pr-md-5 mx-sm-auto px-sm-1"><font-awesome-icon icon="calendar-check" /><router-link to="/appointments"> Appointments</router-link></b-nav-item>
                            <b-nav-item class="mr-md-5 pr-md-5 mx-sm-auto px-sm-1"><font-awesome-icon icon="calendar-check" /><router-link to="/professionals"> Professionals</router-link></b-nav-item>
                            <b-nav-item v-if="showLogin"><font-awesome-icon icon="sign-in-alt" /><router-link to="/account"> Log in</router-link></b-nav-item>
                            <b-nav-item v-if="!showLogin"><font-awesome-icon icon="sign-in-alt" /><router-link to="/account"> Welcome Kofi</router-link></b-nav-item>
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
      showLogin: this.$store.state.showLogin
    }
  }
}
</script>

<style scoped>
img{
    height: 2em;
}

</style>


