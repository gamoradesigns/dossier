<template>
  <div class="articleContainer" v-scrollfadinganimation>
    <!-- background images  -->

    <img
      v-scrollfadinganimation
      v-if="itemSelected"
      class="bgImg"
      :src="
        require(`./../../../assets/images/resizeLONG/branding/pack/jar/${packageImg}`)
      "
      alt=""
    />
    <img
      v-scrollfadinganimation
      v-if="!itemSelected"
      class="bgImg"
      :src="
        require(`./../../../assets/images/resizeLONG/branding/pack/jar/${firstImg}`)
      "
      alt=""
    />
    <!-- nav -->
    <div class="articleMenuContainer">
      <div class="beauty beautyText" v-scrollfadinganimation>beauty.</div>
      <div class="articleMenu">
        <router-link to="/main" v-scrollfadinganimation>
          <div class="articleMenuText">home</div></router-link
        >
        <router-link to="/logoMenu" v-scrollfadinganimation>
          <div class="articleMenuText">logos</div></router-link
        >
        <router-link to="/packageMenu" v-scrollfadinganimation>
          <div class="articleMenuText">packaging</div></router-link
        >
        <router-link to="/magMenu" v-scrollfadinganimation>
          <div class="articleMenuText">magazines</div></router-link
        >
      </div>
      <div class="articleMenuIcon"></div>
    </div>
    <!-- content div -->
    <div class="brandingContainer">
      <div
        class="brandindGripContainer positionInherit"
        style="margin: 10px 0px 0px 10px"
        v-if="!hideMe"
        v-scrollfadinganimation
      >
        <div class="backdropContent_Collection" v-scrollfadinganimation>
          <div
            class="articleHeaderDiv"
            v-scrollfadinganimation
            style="transition-delay: 1.5s !important"
          >
            5545 <br />
          </div>
          <div
            class="articleHeaderDiv2"
            v-scrollfadinganimation
            style="transition-delay: 1s !important"
          >
            Visiual Menu
          </div>
          <div class="packageSubHeaderContainer">
            <div
              class="brandingSubHeaderDiv"
              v-scrollfadinganimation
              style="transition-delay: 1.2s !important"
            >
              Meet the brand 
               <!-- &middot; <span class="subHeaderText">UX</span>  -->
            </div>
            <div class="brandingMenuRow">
              <div class="nextViewMenuDiv">
                <div class="nextViewMenuImgDiv" @click="showContainer(gridInput)">
                  <img
                    class="fullImg"
                    src="./../../../assets/images/resizeLONG/branding/manual/agile/agile2.jpg"
                    alt=""
                  />
                </div>
                <div class="nextViewText">Agile</div>
              </div>
             
            </div>
            <div
              class="brandingSubHeaderDiv"
              v-scrollfadinganimation
              style="transition-delay: 1.4s !important"
            >
              <!-- <span class="subHeaderText"> UI</span> &middot;  -->
              get to
              know
            </div>
            <div class="brandingMenuRow">
              <div class="nextViewMenuDiv" >
                <div class="nextViewMenuImgDiv" @click="showContainer(logoInput)">
                  <img
                    class="fullImg"
                    src="./../../../assets/images/resizeLONG/branding/manual/agile/yoga.jpg"
                    alt=""
                  />
                </div>
                <div class="nextViewText">logo</div>
              </div>
              <div class="nextViewMenuDiv" @click="showContainer(colorInput)">
                <div class="nextViewMenuImgDiv">
                  <img
                    class="fullImg"
                    src="./../../../assets/images/resizeLONG/branding/manual/agile/kick.jpg"
                    alt=""
                  />
                </div>
                <div class="nextViewText">colors</div>
              </div>
              <div class="nextViewMenuDiv" @click="showContainer(typeInput)">
                <div class="nextViewMenuImgDiv">
                  <img
                    class="fullImg"
                    src="./../../../assets/images/resizeLONG/branding/manual/agile/oneleg.jpg"
                    alt=""
                  />
                </div>
                <div class="nextViewText">Typography</div>
              </div>
            </div>

            <div
              class="brandingSubHeaderDiv"
              v-scrollfadinganimation
              style="transition-delay: 1.4s !important"
            >
              <!-- <span class="subHeaderText"> Deliveriables</span> &middot;  -->
              take a look
            </div>
             <div class="brandingMenuRow">
              <div class="nextViewMenuDiv">
                <div class="nextViewMenuImgDiv" @click="showContainer(socialInput)">
                  <img
                    class="fullImg"
                    src="./../../../assets/images/resizeLONG/branding/manual/agile/agile7.1.jpg"
                    alt=""
                  />
                </div>
                <div class="nextViewText">Social Media Kit</div>
              </div>
              <div class="nextViewMenuDiv">
                <div class="nextViewMenuImgDiv">
                  <img
                    class="fullImg"
                    src="./../../../assets/images/resizeLONG/branding/manual/agile/agile7.1.jpg"
                    alt=""
                  />
                </div>
                <div class="nextViewText">Stationary Packet</div>
              </div>
            </div>
          </div>
          <!-- <div class="articleContentDiv fullWidth">
        {{ collectionText }}
      </div> -->

          <!-- photo gallery-->
     




        </div>
      </div>

      <div
        class="brandindGripContainer positionInherit"
        style="margin: 10px 0px 0px 10px; overflow: scroll !important"
        v-if="!hideMe"
        v-scrollfadinganimation
      >
        <div class="backdropContentBrandin" v-scrollfadinganimation>

              <div class="container">
  <div class="agileBrand" v-if="grid" >

     <div class="grid-layout">
            <div class="grid-item grid-item-1">
              <img src="./../../../assets/images/agile/agile3.jpg" alt="">
            </div>
            <div class="grid-item grid-item-2"> <img src="./../../../assets/images/resizeLONG/branding/manual/agile/agile8.jpg"></div>
            <div class="grid-item span-3 grid-item-3">  
              <img src="./../../../assets/images/resizeLONG/branding/manual/agile/agile6_1.jpg">
            </div>
            <div class="grid-item grid-item-4">
               <img src="./../../../assets/images/resizeLONG/branding/manual/agile/agile6.jpg">
            </div>
            <div class="grid-item span-2 grid-item-5">
               <img src="./../../../assets/images/resizeLONG/branding/manual/agile/agile7.jpg">
            </div>
            <div class="grid-item grid-item-6">
               <img src="./../../../assets/images/resizeLONG/branding/manual/agile/agileux32.jpg">
            </div>
            <div class="grid-item grid-item-7">
               <img src="./../../../assets/images/resizeLONG/branding/manual/agile/agile7.jpg">
            </div>
          </div>
  </div>
<div class="logo" v-if="logo">logo</div>
<div class="type" v-if="type">typo</div>
<div class="colors" v-if="color">
       <div class="colors">
            <div class="color-pallette-content">
              <div class="outer-wrapper-content">
                <div class="wrapper-content">
                  <div class="color-array-intro">
                    <div class="color-array-intro-content">
                      <transition>
                        <div
                          class="color-array-intro-title mont-font"
                          v-scrollfadinganimation
                          style="transition-delay: 0.3s !important "
                        >
                          Spry Color Pallette
                        </div>
                      </transition>
                      <div
                        class="color-bar-agile"
                        v-scrollfadinganimation
                        style="transition-delay: 0.8s !important "
                      ></div>
                      <div
                        class="color-sup-text"
                        v-scrollfadinganimation
                        style="transition-delay: 1s !important "
                      >
                        Fun <br />
                      </div>
                      <div
                        class="color-sup-text"
                        v-scrollfadinganimation
                        style="transition-delay: 1.2s !important "
                      >
                        energtic
                      </div>
                      <div
                        class="color-sup-text"
                        v-scrollfadinganimation
                        style="transition-delay: 1.4s !important "
                      >
                        supportive
                      </div>
                      <div
                        class="color-array-intro-body"
                        v-scrollfadinganimation
                        style="transition-delay: 1.6s !important "
                      >
                        <div class="color-array-intro-body-text">
                          Lorem ipsum dolor sit doloremque, neque deserunt quam
                          quos aliquam reiciendis pariatur eos facere excepturi
                          modi in recusandae ea velit enim?
                        </div>
                        <div class="color-array-intro-body-arrow"></div>
                      </div>
                    </div>

                    <div class="color-array-container">
                      <div class="color-array-div">
                        <div
                          class="color-title"
                          v-scrollfadinganimation
                          style="transition-delay: 2s !important "
                        >
                          Cablt
                        </div>

                        <div class="content-color-div">
                          <div class="content-color-left">
                            <div class="color-codes">
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 2.2s !important "
                              >
                                HEX : 96E632
                              </div>
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 2.4s !important "
                              >
                                CMYK : 48.23 0 94.21 0
                              </div>
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 2.6s !important "
                              >
                                RGBA :150 230 50
                              </div>
                            </div>
                          </div>
                          <div
                            class="content-color-right"
                            v-scrollfadinganimation
                            style="transition-delay: 1s !important "
                          >
                            <div class="content-color-colors-1 cobalt"></div>
                          </div>
                        </div>
                      </div>
                      <div class="color-array-div">
                        <div class="color-title" v-scrollfadinganimation>
                          Cherry
                        </div>
                        <div class="content-color-div">
                          <div class="content-color-left">
                            <div class="color-codes">
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 0.8s !important "
                              >
                                HEX : 002352
                              </div>
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 1s !important "
                              >
                                CMYK : 100 91 37 37
                              </div>
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 1.2s !important "
                              >
                                RGBA : 150 90 53 01
                              </div>
                            </div>
                          </div>
                          <div
                            class="content-color-right"
                            v-scrollfadinganimation
                            style="transition-delay: 0.5s !important "
                          >
                            <div class="content-color-colors-1 cherry"></div>
                          </div>
                        </div>
                      </div>
                      <div class="color-array-div">
                        <div
                          class="color-title"
                          v-scrollfadinganimation
                          style="transition-delay: 3s !important "
                        >
                          Orange
                        </div>
                        <div class="content-color-div">
                          <div class="content-color-left">
                            <div class="color-codes">
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 3.2s !important "
                              >
                                HEX : 43B02B
                              </div>
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 3.4s !important "
                              >
                                CMYK: 651983
                              </div>
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 3.5s !important "
                              >
                                RGBA : 67 176 43
                              </div>
                            </div>
                          </div>

                          <div
                            class="content-color-right"
                            v-scrollfadinganimation
                            style="transition-delay: 1.4s !important "
                          >
                            <div class="content-color-colors-1 orange"></div>
                          </div>
                        </div>
                      </div>
                      <div class="color-array-div">
                        <div
                          class="color-title"
                          v-scrollfadinganimation
                          style="transition-delay: 1.4s !important "
                        >
                          Yellow
                        </div>
                        <div class="content-color-div">
                          <div class="content-color-left">
                            <div class="color-codes">
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 1.6s !important "
                              >
                                HEX : 099A44
                              </div>
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 1.8s !important "
                              >
                                CMYK: 803946
                              </div>
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 2s !important "
                              >
                                RGBA : 13 154 68
                              </div>
                            </div>
                          </div>
                          <div
                            class="content-color-right"
                            v-scrollfadinganimation
                            style="transition-delay: 1.5s !important "
                          >
                            <div class="content-color-colors-1 yellow"></div>
                          </div>
                        </div>
                      </div>
                      <div class="color-array-div">
                        <div
                          class="color-title"
                          v-scrollfadinganimation
                          style="transition-delay: 4s !important "
                        >
                          Light Blue
                        </div>
                        <div class="content-color-div">
                          <div class="content-color-left">
                            <div class="color-codes">
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 4.2s !important "
                              >
                                HEX : 071D49
                              </div>
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 4.4s !important "
                              >
                                CMYK: 94 81 18 45
                              </div>
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 4.6s !important "
                              >
                                RGBA : 7 28 73
                              </div>
                            </div>
                          </div>
                          <div
                            class="content-color-right"
                            v-scrollfadinganimation
                            style="transition-delay: 2s !important "
                          >
                            <div class="content-color-colors-1 lBlue"></div>
                          </div>
                        </div>
                      </div>
                      <div class="color-array-div">
                        <div
                          class="color-title"
                          v-scrollfadinganimation
                          style="transition-delay: 2.4s !important "
                        >
                          Egg Shell
                        </div>
                        <div class="content-color-div">
                          <div class="content-color-left">
                            <div class="color-codes">
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 2.6s !important "
                              >
                                HEX : FF8F1C
                              </div>
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 2.8s !important "
                              >
                                CMYK : 0 48 84 0
                              </div>
                              <div
                                class=""
                                v-scrollfadinganimation
                                style="transition-delay: 3s !important "
                              >
                                RGB : 255 143 28
                              </div>
                            </div>
                          </div>
                          <div
                            class="content-color-right"
                            v-scrollfadinganimation
                            style="transition-delay: 2s !important "
                          >
                            <div class="content-color-colors-1 eShell"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</div>
<div class="socialmedia" v-if="social">socialmedia</div>
<div class="">stationery packet</div>
</div>
         
     

        </div>
      </div>
    </div>

    <div class="hideContentsDiv" @click="hideContents" v-scrollfadinganimation>
      <i v-if="!hideMe" class="fa fa-eye-slash" v-scrollfadinganimation></i>
      <i v-if="hideMe" class="fa fa-eye" v-scrollfadinganimation></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Agile",
  data() {
    return {
      gridInput: "grid",
      grid: true,
      logoInput: "logo",
      logo: false,
      colorInput: "color",
      color: false,
      typeInput: "type",
      type: false,
      socialInput: "social",
      social: false,
      input: "here",
      colors: true,
      isActive: false,
      hideMe: false,
      editionName: "Alpha",
      articleNumber: "5692",
      firstImg: "jar1.jpg",
      collectionText:
        "Uipsum&middot; dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus Modi, quibusdam! Neque animi perferendis.Uipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ducimus! Modi, quibusdam! Neque animi perferendis.",
      packageImg: "fashion15.jpg",
      itemSelected: false,
      jarImgAssets2: ["jar1.jpg", "pine.jpg", "pine4F.jpg", "pine5F.png"],
      jarImgAssets: [
        { imgName: "jar1.jpg", currentEdition: "alpha" },
        { imgName: "pine.jpg", currentEdition: "Omega" },
        { imgName: "pine4F.jpg", currentEdition: "gamma" },
        { imgName: "pine5F.png", currentEdition: "zeta" },
      ],
    };
  },

  methods: {
    hideContents() {
      console.log("hiding");
      this.hideMe = !this.hideMe;
    },
    seeCollectionList() {
      console.log("learn more");
      this.isActive = !this.isActive;
    },

    nextImg(index, image) {
      console.log("nextImg", index, image);
      //   (this.collectionText = collection.collectionText),
      this.packageImg = image.imgName;
      this.editionName = image.currentEdition;
      this.itemSelected = true;
    },
    showContainer(input) {
   console.log("showContainer", input);
    if (input == "grid") {
       console.log("= to grid");
       this.grid = true;
       this.type = false;
       this.color = false;
       this.social = false;
       this.logo = false;
       return
   } else if (input == "logo") {
       console.log("= to logo");
       this.logo = true;
       this.type = false;
       this.color = false;
       this.social = false;
       this.grid = false;
       return
   } else if (input == "type") {
 this.type = true;
       this.logo = false;
       this.color = false;
       this.social = false;
       this.grid = false;
   } else if (input == "color") {
 this.color = true;
       this.logo = false;
       this.type = false;
       this.social = false;
       this.grid = false;
   } else if (input == "social") {
 this.social = true;
       this.logo = false;
       this.type = false;
       this.color = false;
       this.grid = false;
   }
   
   
   else {
     console.log("didnt work");
     return
   }
      
    
    },
  },
};
</script>
<style scoped>
.articleContentContainer {
  /* border: 6px solid brown; */
  height: 73vh;
  width: 73vw;
  margin: 100px 0px 0px 150px;
  text-align: left;
  color: white;
  overflow: hidden;
  position: relative;
  /* left: -600px; */
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 4px;
  grid-auto-rows: minmax(180px, auto);
  grid-auto-flow: dense;
  padding: 1px;
}

.grid-item {

  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  background-color: #ccc;

  /* &:nth-child(odd) {
        background-color: #ccc;
    } */
}

.span-2 {
  grid-column-end: span 2;
  grid-row-end: span 2;
}

.span-3 {
  grid-column-end: span 3;
  grid-row-end: span 3;
}
.fullWidth {
  width: 100% !important;
}
.backdropContentBrandin {
  backdrop-filter: blur(0.5px) brightness(0.95);
  padding: 20px;
      height: 90%;
    overflow: scroll;
  /* background: black; */
}
img.fullImg {
  background-size: cover;
  width: 100%;
  height: 100%;
}
ul {
  position: relative;
  display: flex;
  list-style: none;
}
li {
  padding: 2px;
  opacity: 0.8;
  transition: all 0.2s;
}
li:hover {
  opacity: 1;
}
</style>