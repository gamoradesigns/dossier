<template>
  <div class="outer-wrapper-standard">
    <div class="wrapper-standard">
      <!-- col - empty-->
      <div class="col-endcap">
        <div class="col-grid">
          <div class="topSection hideOverflow beautyBox">
            <div class="beautyText topLeftBeauty" v-scrollfadinganimation>
             dossier <br />

              <div class="spanbeautyText">
                &middot; <br />
                a minimalist collection
              </div>
            </div>
          </div>
          <div class="middleSection hideOverflow">
         
          </div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>
      <!-- col - photo -->

      <div class="col-photo">
        <div class="col-grid">
          <div class="topSection hideOverflow height100 "></div>
          <router-link
            class="linkClass"
            :to="{
              name: 'Beauty',
        
            }"
          >
            <div class="middleSection" style="height: 100%">
              <div class="hideOverflow" style="height: 100%">
                <div class="imgDiv3 hideOverflow height100">
                  <img
                  class='menuImg'
                  
                    v-scrollfadinganimation
                    src="../../assets/images/mag/beauty/beauty.jpg"
                    alt=""
                  />
                </div>
              </div>
              <transition name="fade" mode="out-in">  
                <div class="rightText" v-show="!showMenu1">
                  <div
                    class="doubleWide-look-div-1 hover-border-appear"
                 
                  >
                    <div class="paddedBox-1">
                      <div class="navLinkTitle" v-scrollanimation>
                        beauty
                      </div>
                      <div class="navLinkSubTitle" v-scrollanimation style="transition: all 1s .6s cubic-bezier(0.58, 0.37, 0.7, 1.48);">
                  Magazine Editorial · Brand Development · Grid Layout Developement · Branding Tone & Voice
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <transition name="fade" mode="out-in">
                <div class="popupMenuContainer"  v-show="showMenu1">
                  <div class="hideOverflow popupMenuDiv">
                    <router-link to="/brand">
                      <div class="divTwo div beautyText menuText">
                        &middot; branding &middot;
                      </div>
                    </router-link>
                    <router-link to="/logo">
                      <div class="divTwo div beautyText menuText">
                        &middot; logos &middot;
                      </div>
                    </router-link>
                    <router-link to="/packaging">
                      <div class="divTwo div beautyText menuText">
                        &middot; packaging &middot;
                      </div>
                    </router-link>
                    <router-link to="/magazine">
                      <div class="divTwo div beautyText menuText">
                        &middot; magazines &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; about &middot;
                      </div>
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>
          </router-link>

          <div
            class="bottomSection footer-text"
            v-scrollfadinganimation
            @click="viewMenu((val = 1))"
          >
            &middot; {{ showMenu1 ? "explore dossier" : "explore"}} &middot;
          </div>
        </div>
      </div>

      <!-- col - words-->

      <div class="col-words">
        <div class="col-grid">
          <div class="topSection"></div>

          <div class="bottomSection"></div>
        </div>
      </div>

      <!-- col - empty -->

      <div class="col-space">
        <div class="col-grid">
          <div class="topSection hideOverflow"></div>
          <div class="middleSection hideOverflow"></div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>

      <!-- col nav and photo-->

      <div class="col-photo">
        <div class="col-grid">
          <div class="topSection">
            <div class="menuText"></div>
          </div>
          <router-link
            class="linkClass"
            style="overflow: hidden"
            :to="{
              name: 'Logo',
             
            }"
          >
            <div class="middleSection height100">
              <transition name="fade">
                <div class="height100">
                  <div class="imgDiv3 height100">
                    <img
                    class=""
                      v-scrollfadinganimation
                      src="../../assets/images/resizeLONG/branding/station/station7.jpg"
                      alt=""
                    />
                  </div>
                  <div class="singleWide-look-div-1 hover-blurbg ">
                    <div
                      class="paddedBox-2 "
                     
                    >
                      <div class="navLinkTitle" v-scrollanimation>
                       ALTA Fin
                      </div>
                      <div class="navLinkSubTitle" v-scrollanimation style="transition: all 1s .6s cubic-bezier(0.58, 0.37, 0.7, 1.48);">
                        Logo Design &middot; Visual Elements
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <transition name="fade">
                <div class="popupMenuContainer2" v-show="showMenu2">
                    <div class="hideOverflow popupMenuDiv">
                    <router-link to="/brand">
                      <div class="divTwo div beautyText menuText">
                        &middot; branding &middot;
                      </div>
                    </router-link>
                    <router-link to="/logo">
                      <div class="divTwo div beautyText menuText">
                        &middot; logos &middot;
                      </div>
                    </router-link>
                    <router-link to="/packaging">
                      <div class="divTwo div beautyText menuText">
                        &middot; packaging &middot;
                      </div>
                    </router-link>
                    <router-link to="/magazine">
                      <div class="divTwo div beautyText menuText">
                        &middot; magazines &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; about &middot;
                      </div>
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>
          </router-link>
          <div
            class="bottomSection footer-text"
            v-scrollfadinganimation
            @click="viewMenu((val = 2))"
          >
            &middot; {{ showMenu2 ? "explore dossier" : "explore" }} &middot;
          </div>
        </div>
      </div>

      <!-- col -->

      <div class="col-space">
        <div class="col-grid">
          <div class="topSection hideOverflow"></div>
          <div class="middleSection hideOverflow"></div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>
      <!-- col - photo -->

      <div class="col-photo">
        <div class="col-grid">
          <div class="topSection"></div>
          <router-link
            class="linkClass"
            :to="{
              name: 'Packaging',
           
            }"
          >
            <div class="middleSection" style="height: 100%">
              <div class="hideOverflow" style="height: 100%">
                <div class="imgDiv3 height100">
                  <img
                    v-scrollfadinganimation
                    src="../../assets/images/resizeLONG/branding/pack/jar/pine5F.png"
                    alt=""
                  />
                </div>
              </div>
              <transition name="fade">
                <div class="rightText" v-show="!showMenu3">
                  <div
                    class="doubleWide-look-div-2 hover-border-appear"
                 
                  >
                    <div class="paddedBox-3">
                    
                      <div class="navLinkTitle" v-scrollanimation>
                        Packing Design
                      </div>
                      <div class="navLinkSubTitle" v-scrollanimation style="transition: all 1s .6s cubic-bezier(0.58, 0.37, 0.7, 1.48);">
                       Product Design &middot; Visual Communication
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <transition name="fade">
                <div class="popupMenuContainer" v-show="showMenu3">
                    <div class="hideOverflow popupMenuDiv">
                    <router-link to="/brand">
                      <div class="divTwo div beautyText menuText">
                        &middot; branding &middot;
                      </div>
                    </router-link>
                    <router-link to="/logo">
                      <div class="divTwo div beautyText menuText">
                        &middot; logos &middot;
                      </div>
                    </router-link>
                    <router-link to="/packaging">
                      <div class="divTwo div beautyText menuText">
                        &middot; packaging &middot;
                      </div>
                    </router-link>
                    <router-link to="/magazine">
                      <div class="divTwo div beautyText menuText">
                        &middot; magazines &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; about &middot;
                      </div>
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>
          </router-link>
          <div
            class="bottomSection footer-text"
            v-scrollfadinganimation
            @click="viewMenu((val = 3))"
          >
            &middot; {{ showMenu3 ? "explore dossier" : "explore" }} &middot;
          </div>
        </div>
      </div>
      <!-- col words -->

      <div class="col-words">
        <div class="col-grid">
          <div class="topSection hideOverflow"></div>
          <div class="middleSection hideOverflow"></div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>

      <!-- col empty -->

      <div class="col-space">
        <div class="col-grid">
          <div class="topSection hideOverflow"></div>
          <div class="middleSection hideOverflow"></div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>
      <!-- col photo -->

      <div class="col-photo">
        <div class="col-grid">
          <div class="topSection"></div>
          <router-link
            class="linkClass"
            style="overflow: hidden"
            :to="{
              name: 'Magazine',
             
            }"
          >
            <div class="middleSection height100">
              <transition name="fade">
                <div class="height100">
                  <div class="imgDiv3 height100">
                    <img
                      v-scrollfadinganimation
                     src="../../assets/images/resizeLONG/branding/mag/beauty/beauty.jpg"
                      alt=""
                    />
                  </div>
                  <div class="singleWide-look-div-2 hover-blurbg">
                    <div
                      class="paddedBox-4"
                    
                    >
                  
                      <div class="navLinkTitle" v-scrollanimation>
                       Magazine Viewing
                      </div>
                      <div class="navLinkSubTitle" v-scrollanimation style="transition: all 1s .6s cubic-bezier(0.58, 0.37, 0.7, 1.48);">
                       Layout Design &middot; Editoral
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <transition name="fade">
                <div class="popupMenuContainer4" v-show="showMenu4">
                    <div class="hideOverflow popupMenuDiv">
                    <router-link to="/brand">
                      <div class="divTwo div beautyText menuText">
                        &middot; branding &middot;
                      </div>
                    </router-link>
                    <router-link to="/logo">
                      <div class="divTwo div beautyText menuText">
                        &middot; logos &middot;
                      </div>
                    </router-link>
                    <router-link to="/packaging">
                      <div class="divTwo div beautyText menuText">
                        &middot; packaging &middot;
                      </div>
                    </router-link>
                    <router-link to="/magazine">
                      <div class="divTwo div beautyText menuText">
                        &middot; magazines &middot;
                      </div>
                    </router-link>
                    <router-link to="/">
                      <div class="divTwo div beautyText menuText">
                        &middot; about &middot;
                      </div>
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>
          </router-link>
          <div
            class="bottomSection footer-text"
            v-scrollfadinganimation
            @click="viewMenu((val = 4))"
          >
            &middot; {{ showMenu4 ? "explore dossier" : "explore" }} &middot;
          </div>

          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>
      <!-- col -->

      <!-- col -->

      <div class="col-endcap">
        <div class="col-grid">
          <div class="topSection hideOverflow beautyBox">
             <div class="beautyText topLeftBeauty" v-scrollfadinganimation>
             dossier <br />

              <div class="spanbeautyText">
                &middot; <br />
                a minimalist collection
              </div>
            </div>
          </div>
          <div class="middleSection hideOverflow"></div>
          <div class="bottomSection hideOverflow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomNumber: 5625,
      showMenu: false,
      showMenu1: false,
      showMenu2: false,
      showMenu3: false,
      showMenu4: false,
      val: 0,
    };
  },
  computed: {
  
  },
  methods: {
    viewMenu(val) {
      if (val == 1) {
        this.showMenu1 = !this.showMenu1;
      } else if (val == 2) {
        this.showMenu2 = !this.showMenu2;
      } else if (val == 3) {
        this.showMenu3 = !this.showMenu3;
      } else if (val == 4) {
        this.showMenu4 = !this.showMenu4;
      }
    },
  
  },
};
</script>
<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.before-enter {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s 0.5s cubic-bezier(0.58, 0.37, 0.7, 1.48);
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
 .before-enter-fade {
    opacity: 0;
    transition: all 1s .2s cubic-bezier(.58,.37,.7,1.48);
  }

  .enter-fade {
    opacity: 1
  }
</style>