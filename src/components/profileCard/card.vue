<template>
    <div class="container">
        <div class="card">
            <div class="profile">
                <div class="pic">
                    <img src="~/assets/profile.jpeg" alt="Rangga" style="border-radius: 100px" width="120px" height="120px" />
                </div>
                <div class="contacts">
                    <h2>Rangga Adhitya P.</h2>
                    <p class="caption">
                        Software & System Engineer
                    </p>
                    <div class="contact-detail">
                        <p><font-awesome-icon :icon="['far', 'envelope']" style="font-size: 13px" /> deneuv3.4@gmail.com</p>
                        <p><font-awesome-icon :icon="['fas', 'mobile']" /> +6285-3145-55514</p>
                        <p><font-awesome-icon :icon="['fas', 'map-marker-alt']" /> Bandung, West Java, Indonesia</p>
                    </div>
                </div>
                <div class="socials">
                    <a class="facebook" href="https://facebook.com/kurai.ikari" target="_blank"><font-awesome-icon :icon="['fab','facebook-square']" style="font-size: 40px; margin: 10px" /></a>
                    <a class="github" href="https://github.com/deneuv34" target="_blank"><font-awesome-icon :icon="['fab','github-alt']" style="font-size: 40px; margin: 10px" /></a>
                    <a class="linkedin" href="https://linkedin.com/in/ranggaad" target="_blank"><font-awesome-icon :icon="['fab','linkedin-in']" style="font-size: 40px; margin: 10px" /></a>
                </div>
            </div>
        </div>
        <div class="card gitstat">
            <div class="repositories">
                <a href="https://github.com/deneuv34?tab=followers" target="_blank">
                    <h4>Followers</h4>
                    <p style="font-size: 30px">{{ git.followers }}</p>
                </a>
            </div>
            <div class="repositories">
                <a href="https://github.com/deneuv34?tab=repositories" target="_blank">
                    <h4>Repos</h4>
                    <p style="font-size: 30px">{{ git.public_repos }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return  {
            git: {
                followers: 0,
                public_repos: 0
            }
        }
    },
    methods: {
        async getData() {
            try {
                const gitResp = await this.$axios.$get('https://api.github.com/users/deneuv34')
                this.git = {...gitResp}
            } catch(e) {
                console.log(e)
            }
        },
    },
    beforeMount: function beforeMount () {
        this.getData()
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Mono|Kosugi+Maru');

.container {
    display: block;
    margin-top: 35px;
}
.socials {
    margin-right: 15px;
    margin-left: 15px;
    margin-top: 30px;
}
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
    min-height: 100px;
    min-width: 400px;
    max-width: 550px;
    padding: 25px;
    border-radius: 4px;
    display: flex;
    box-shadow: 0 3px 20px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin: 20px;
}

.repositories a {
    text-decoration: none;
}

.gitstat {
    justify-content: space-around;
    flex: 1;
}

.profile {
    flex: 1;
    display: block;
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
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.contact-detail {
    text-align: center;
}

.pic {
    margin: 10px;
    justify-content: center;
    align-items: center;
}

.github :link {
    color: #fff;
}
a {
    color: #fff
}
a .github :visited {
    text-decoration: none;
    color: #fff;
}

.github :hover {
    color: #c9510c;
}

.facebook :link {
    color: #fff;
}
a .facebook :visited {
    text-decoration: none;
    color: #fff;
}

.facebook :hover {
    color: #3b5998;
}

:hover {
    transition: 300ms
}

.linkedin :link {
    color: #fff;
}
a .linkedin :visited {
    text-decoration: none;
    color: #fff;
}

.linkedin :hover {
    color: #0077b5;
}
</style>
