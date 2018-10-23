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
                            <b-nav-item><font-awesome-icon icon="comment" /><router-link to="/professionals"> Professionals</router-link></b-nav-item>
                        </b-navbar-nav>

                    </b-collapse>
        </b-navbar>

<!-- navbar-1.vue -->
	<!-- <router-link to="/" class="navbar-brand hvr-underline-from-left">
			<img src="@/assets/logo.png" class="d-inline">
	</router-link>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#topNav" aria-controls="topNav" aria-expanded="true" aria-label="Toggle navigation">
		<span><i class="fas fa-2x fa-bars"></i></span>
	</button>
    <div class="collapse navbar-collapse justify-content-around" id="topNav">
        <ul class="navbar-nav float-right">	
            <li class="navbar-item active ml-md-5 pl-md-5"><a class="nav-link hvr-underline-from-left" href="#serv"><i class="fas fa-hospital"></i> Personnel</a></li>
            <li class="navbar-item px-md-5 mx-md-5"><router-link  class="nav-link hvr-underline-from-left" to="/quickmed/feedback"><i class="fas fa-comments"></i> Feedback</router-link></li>
            <li class="navbar-item mr-md-5 pr-md-5"><router-link  class="nav-link hvr-underline-from-left" to="/quickmed/register"><i class="fas fa-user-plus"></i> Register</router-link></li>
            <li class="navbar-item pl-md-5 ml-md-5"><router-link  class="nav-link hvr-underline-from-left" to="/quickmed/login"><i class="fas fa-user"></i> Log in</router-link></li>
        </ul>
    </div> -->
    </header>

    </div>
</template>


<script>
export default {
  name: 'Navigator',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
img{
    height: 2em;
}

</style>


