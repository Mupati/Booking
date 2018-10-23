<template>
    <div>
        <div class="containter">
            <div class="row">
                <div class="col-md-3 text-center">
                        <p>This is a Single Professional Portfolio</p>
                        <b-card>
                            <img src="@/assets/logo.png" class="img-fluid" alt="Dr. Kofi Ocran">
                            <b-card-body>
                            <p>
                                <ul class="list-unstyled">
                                    <li><b-link><font-awesome-icon :icon="[ 'fab', 'facebook' ]"/></b-link></li>
                                    <li><b-link><font-awesome-icon :icon="[ 'fab', 'linkedin' ]"/></b-link></li>
                                    <li><b-link><font-awesome-icon :icon="[ 'fab', 'twitter' ]"/></b-link></li>
                                </ul>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit ipsam dolorem neque, 
                                unde tempore nesciunt labore sit, nisi consequuntur aliquid harum. Veniam tenetur mollitia p
                                erspiciatis exercitationem nihil vitae sunt.
                            </p>
                            </b-card-body>
                        </b-card>
                </div>
                <div class="col-md-9">
                    <h3>Profile And Detailed Description of the Professional</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias labore v
                        oluptatum assumenda unde iste fuga sequi a
                        d officia nesciunt provident? Incidunt, sequi pariatur.
                         In totam esse illo repudiandae ipsum eos?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Sequi alias quaerat id molestiae consectetur reiciendis corrupti officia consequuntur cum 
                     laudantium quo, aliquid asperiores temporibus recusandae ipsa ducimus fugiat. Nam, ut.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias eaque bl
                    anditiis, non ullam tenetur reiciendis. Nam dolore quae consectetur modi possimus? 
                    Dolore blanditiis sint esse voluptatibus dolores provident recusandae?
                    </p>
                </div>

            </div>

            <div class="row">
                <div class="col-md-12">
                    <h3 class="text-center">Integrate Payment Stuffs Over Here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias labore v
                        oluptatum assumenda unde iste fuga sequi a
                        d officia nesciunt provident? Incidunt, sequi pariatur.
                         In totam esse illo repudiandae ipsum eos?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Sequi alias quaerat id molestiae consectetur reiciendis corrupti officia consequuntur cum 
                     laudantium quo, aliquid asperiores temporibus recusandae ipsa ducimus fugiat. Nam, ut.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias eaque bl
                    anditiis, non ullam tenetur reiciendis. Nam dolore quae consectetur modi possimus? 
                    Dolore blanditiis sint esse voluptatibus dolores provident recusandae?
                    </p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'SingleProfessional',
  data () {
    return {
      id: this.$route.params.id,
      slug: this.$route.params.slug

    }
  }
}
</script>

<style scoped>

</style>


