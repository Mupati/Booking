<template>
  <div>
    	<div class="container">
				<div class="row">
					<!-- <div class="col-sm-12 col-md-10 offset-md-1"> -->
						<div class="col-sm-12 col-md-6 offset-md-3">
              <b-card no-body>
                <b-tabs card class="nav-fill">
                  <!-- Sign in tab -->
                  <b-tab title="Sign in" active>
                    <h3 class="card-title text-center">Login Here</h3>
                    <form class="dv-signin px-sm-0 px-md-4 py-3">
                      <div class="form-group">
                        <label for="email">Email Address</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                          <span class="input-group-text" id="emailPrepend"><font-awesome-icon icon="envelope" /></span>
                          </div>
                          <input type="email" class="form-control" id="email" placeholder="example@gmail.com" aria-describedby="emailPrepend" v-model="credentials.email" required>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                          <span class="input-group-text" id="passwordPrepend"><font-awesome-icon icon="unlock-alt"/></span>
                          </div>
                          <input type="password" class="form-control" id="password" aria-describedby="passwordPrepend" v-model="credentials.pwd" required>
                        </div>
                      </div>
                      <div class="d-flex justify-content-center mt-3 py-2 px-5">
                        <button type="submit" class="btn btn-outline-primary"   @click.prevent="login">Log in <font-awesome-icon icon="user" /></button>
                      </div>
                    </form>
								 <!-- End of Sign in tab -->
                  </b-tab>
                  <!-- Sign up  tab-->
                  <b-tab title="Sign up">
                    <h3 class="card-title text-center">Create Account Here</h3>
										<form>
											<div class="form-group">
												<label for="firstname">Full Name</label>
												<input type="text" class="form-control" name="firstname" aria-describedby="firstnameHelp" required>
											</div>
											<div class="form-group">
												<label for="userEmail">Email address</label>
												<input type="email" class="form-control" name="email" aria-describedby="emailHelp">
											</div>
                      <div class="form-group">
												<label for="profession">Profession</label>
												<input type="text" class="form-control" name="profession" aria-describedby="professionalHelp" required>
											</div>
											<div class="form-group">
												<label for="phonenumber">Phone Number</label>
												<input type="text" class="form-control" name="phonenumber" aria-describedby="phonenumberHelp" required>
											</div>
											<div class="form-group">
												<label for="password">Password</label>
												<input type="password" class="form-control" name="password"  aria-describedby="passwordHelp" required>
											</div>
											<div class="d-flex justify-content-center mt-3 py-2 px-5">
												<button type="submit" class="btn btn-outline-success text-center" @click.prevent="register">Sign up <font-awesome-icon icon="user-plus" /></button>
											</div>
											</form>
                  </b-tab>
                  <!-- End of Sign in tab -->
                </b-tabs>
              </b-card>
					</div>
				</div>
		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      credentials: {}

    }
  },

  methods: {
    login: function () {
      // let that = this
      alert('Login Successfull')
      this.$store.commit('setloginStatus')
      this.$router.push({ path: '/dashboard' })
    },

    register: function () {
      alert('Signup Successfull')
      this.$router.push({ path: '/dashboard' })
    }
  }
}
</script>


<style scoped>

</style>


