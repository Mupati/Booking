<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-5" v-for="profession in services.profession" :key="profession.id">
                    <b-card :img-src="profession.img">
                        <b-list-group flush class="mb-2">
                            <b-list-group-item>Name: {{profession.name}}</b-list-group-item>
                            <b-list-group-item>Profession: {{profession.designation}}</b-list-group-item>
                            <b-list-group-item>Prices: <strong>{{profession.charge}}</strong> (GHS/hour)</b-list-group-item>
                            <!-- <b-list-group-item>Available On: {{profession.charge}}}(GHS/hour)</b-list-group-item> -->
                        </b-list-group>
                        <b-button :to="'/professionals/'+ profession.slug" variant="primary" @click="bookNow">Book Now</b-button>
                    </b-card>
                        <!-- <div v-for="profession in services.profession" :key="profession.name"  v-bind:to="'/post/'+ post.id>
                            <p class="text-center">{{ profession.name }}</p>
                        </div> -->
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'Professionals',
  data () {
    return {
      services: {
        profession: [
          {
            id: 1,
            slug: 'jacob-oliver',
            name: 'Jacob Oliver',
            designation: 'Doctor',
            charge: 100,
            available_on: ['Monday', 'Wednesday', 'Friday'],
            available_status: true,
            img: 'https://picsum.photos/600/300/?image=25'
          },
          {
            id: 2,
            slug: 'desmond-tutu',
            name: 'Desmond Tutu',
            designation: 'Doctor',
            charge: 100,
            available_on: ['Monday', 'Wednesday', 'Friday'],
            available_status: true,
            img: 'https://picsum.photos/600/300/?image=25'
          },
          {
            id: 3,
            slug: 'andrew-anderson',
            name: 'Andrew Anderson',
            designation: 'Doctor',
            charge: 100,
            available_on: ['Monday', 'Wednesday', 'Friday'],
            available_status: true,
            img: 'https://picsum.photos/600/300/?image=25'
          },
          {
            id: 4,
            slug: 'john-lennox',
            name: 'John Lennox',
            designation: 'Doctor',
            charge: 100,
            available_on: ['Monday', 'Wednesday', 'Friday'],
            available_status: true,
            img: 'https://picsum.photos/600/300/?image=25'
          },
          {
            id: 5,
            slug: 'nigel-nkrumah',
            name: 'Nigel Nkrumah',
            designation: 'Doctor',
            charge: 100,
            available_on: ['Monday', 'Wednesday', 'Friday'],
            available_status: true,
            img: 'https://picsum.photos/600/300/?image=25'
          },
          {
            id: 6,
            slug: 'thomas-ntow',
            name: 'Thomas Ntow',
            designation: 'Doctor',
            charge: 100,
            available_on: ['Monday', 'Wednesday', 'Friday'],
            available_status: true,
            img: 'https://picsum.photos/600/300/?image=25'
          }
        ]
      }
    }
  },

  methods: {
    bookNow () {
      alert('God is good')
    }
  }
}
</script>

<style scoped>


</style>


