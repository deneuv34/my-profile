<template>
    <div class="card">
        <div class="profile">
                <photo></photo>
            <div class="contacts">
                <h2>Rangga Adhitya P.</h2>
                <p class="caption">
                    Software & System Engineer
                </p>
                <p><i class="fa fa-envelope" aria-hidden="true"></i> deneuv3.4@gmail.com</p>
                <p><i class="fa fa-phone" aria-hidden="true"></i> +6285-3145-55514</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Bandung, West Java, Indonesia</p>
            </div>
        </div>
    </div>
</template>

<script>
import { photo } from "~/components/profileCard/photo.vue";

export default {
  components: {
    photo
  }
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Mono|Kosugi+Maru');

h2 {
    color: #ffffff;
    font-size: 27px;
    font-family: 'Kosugi Maru', sans-serif;
    font-weight: bolder;
}
.fa {
    font-size: 14px;
}
.card {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #dddddd;
    background-color: #252525;
    height: 600px;
    width: 550px;
    padding: 25px;
    border-radius: 4px;
    display: flex;
    box-shadow: 0 3px 40px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

}

.profile {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.caption {
    color: #dddddd;
    font-weight: 500;
    margin-bottom: 15px;
}

.contacts {
    font-family: 'Fira Mono', monospace;
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 25px;
}
</style>
