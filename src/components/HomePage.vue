<template>
  <div id="homepage">
    <!-- home that is the landing page -->
    <section id="home">
       <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <!-- <h3 class="text-center">
            {{ title }}
          </h3>
          <ul class="text-center list-unstyled list-inline">
            <li class="list-inline-item" v-for="(link, index) in links" :key="index">
              {{ link }}
            </li>
          </ul> -->
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Expedita cupiditate exercitationem laborum quidem blanditiis
            aut doloremque in ea voluptas! Fugiat, beatae ullam. Cupiditate,
            quae atque rerum totam perspiciatis aperiam?
          </p>
        </div>
      </div>
    </div>
    </section>

    <!-- about -->
    <section id="about" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h3 class="text-center">List Various Professionals Available</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident, necessitatibus hic quae accusantium amet fuga nostrum voluptates beatae.
            Ut aperiam repellendus exercitationem, odio ab vitae corporis vel obcaecati praesentium eius?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut eligendi, nemo eos,
            rerum, quos sint enim ratione ipsum quasi aliquid facilis eveniet maxime quisquam
            ad autem adipisci nisi blanditiis.

          </div>
        </div>
      </div>

    </section>


    <!-- appointments -->
    <section id="appointments" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <b-card
                    img-src="https://picsum.photos/600/300/?image=25">
              <h3 class="text-center"> Book A Professional</h3>

                <b-form class="p-5">
                  <b-form-group id="name" label="Your Name:" label-for="name" description="required">
                    <b-form-input id="name" type="text" v-model="form.name" required placeholder="Enter name"></b-form-input>
                  </b-form-group>
                  <b-form-group id="email" label="Email address:" label-for="email" description="required">
                    <b-form-input id="email" type="email" v-model="form.email" required placeholder="Enter email"></b-form-input>
                  </b-form-group>
                  <b-form-group id="phone" label="Phone Number:" label-for="phone" description="required">
                    <b-form-input id="phone" type="text" v-model="form.phone" required placeholder="0245889878"></b-form-input>
                  </b-form-group>
                  <b-form-group id="service" label="Professionals" label-for="service">
                    <b-form-select id="service" :options="options" required v-model="form.professionals"></b-form-select>
                  </b-form-group>

                  <b-button type="submit" variant="primary" class="btn-lg">Send</b-button>

                  </b-form>
            </b-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data () {
    return {
      form: { professionals: null },

      options: [
        { value: null, text: '--Select Professional You Want to Book---' },
        { value: 'Lawyer', text: 'Lawyer' },
        { value: 'Artisan', text: 'Artisan' },
        { value: 'Doctor', text: 'Doctor' },
        { value: 'Counsellor', text: 'Counsellor' },
        { value: 'Dentist', text: 'Dentist' }
      ]
    }
  },

  methods: {

  },

  computed: {

  },

  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
