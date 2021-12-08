<template>
  <div class="outer-wrapper-standard">
    <div class="wrapper-standard">
      <!-- col - empty-->
      <div class="col-endcap">
        <div class="col-grid">
          <div class="topSection hideOverflow beautyBox">
            <div class="beautyText topLeftBeauty" v-firstIn >
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
              name: 'BrandingMenu',
        
            }"
          >
            <div class="middleSection" style="height: 100%"   >
              <div class="hideOverflow" style="height: 100%">
                <div class="imgDiv3 hideOverflow height100" v-fourthIn  >
                  <img
                  class='menuImg'
                  
                     
                    src="../assets/images/agile/agile2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <transition name="fade" mode="out-in" >  
                <div class="rightText" v-show="!showMenu1">
                  <div
                    class="doubleWide-look-div-1 hover-border-appear"
                 
                  >
                    <div class="paddedBox-1">
                      <div class="navLinkTitle" v-fallinganimation >
                        Brand Viewing
                      </div>
                      <div class="navLinkSubTitle"  v-fallinganimationsub >
                 UX  &middot; UI Brand Developement 
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
                    <router-link to="/about">
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
             
            @click="viewMenu((val = 1))"
           v-secondIn
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
              name: '',
             
            }"
          >
            <div class="middleSection height100" >
              <transition name="fade">
                <div class="height100">
                  <div class="imgDiv3 height100" v-thirdIn>
                    <img
                    class=""
                       
                      src="../assets/images/station/station7.jpg"
                      alt=""
                    />
                  </div>
                  <div class="singleWide-look-div-1 hover-blurbg ">
                    <div
                      class="paddedBox-2 "
                     
                    >
                      <div class="navLinkTitle"  v-fallinganimation >
                       Branded Bites
                      </div>
                      <div class="navLinkSubTitle"   v-fallinganimationsub>
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
                    <router-link to="/about">
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
             v-secondIn
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
              name: 'PackageMenu',
           
            }"
          >
            <div class="middleSection" style="height: 100%">
              <div class="hideOverflow" style="height: 100%">
                <div class="imgDiv3 height100" v-secondIn>
                  <img
                     
                    src="../assets/images/pack/jar/pine5F.png"
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
                    
                      <div class="navLinkTitle" v-fallinganimation >
                        Package Design
                      </div>
                      <div class="navLinkSubTitle"  v-fallinganimationsub >
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
                    <router-link to="/about">
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
             v-thirdIn
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
              name: 'MagMenu',
             
            }"
          >
            <div class="middleSection height100">
              <transition name="fade">
                <div class="height100">
                  <div class="imgDiv3 height100" v-secondIn>
                    <img
                       
                     src="../assets/images/mag/beauty/beauty.jpg"
                      alt=""
                    />
                  </div>
                  <div class="singleWide-look-div-2 hover-blurbg">
                    <div
                      class="paddedBox-4"
                    
                    >
                  
                      <div class="navLinkTitle" v-fallinganimation >
                       Magazine Viewing
                      </div>
                      <div class="navLinkSubTitle"   v-fallinganimationsub>
                 Magazine Editoral &middot; Layout Design
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
                    <router-link to="/about">
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
             v-thirdIn
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
          <div class="topSection hideOverflow beautyBox" v-firstIn>
             <div class="beautyText topLeftBeauty" >
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
      showMenu: false,
      showMenu1: false,
      showMenu2: false,
      showMenu3: false,
      showMenu4: false,
      val: 0,
    };
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
