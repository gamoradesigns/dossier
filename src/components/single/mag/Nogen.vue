<template>
  <div class="articleContainer"  >
<!-- background img -->
    <img
      class="bgImg"
      src="./../../../assets/images/mag/nogen/NogenManual.jpg"
      alt=""
    />

    <!-- nav -->
    <div class="articleMenuContainer">
      <div class="beautyText beauty"  >beauty.</div>
      <div class="articleMenu">
        <router-link to="/"  >
          <div class="articleMenuText">home</div></router-link
        >
        <router-link to="/collectionMenu"  >
          <div class="articleMenuText">Collections</div></router-link
        >
        <router-link to="/articleMenu"  >
          <div class="articleMenuText">Articles</div></router-link
        >
        <router-link to="/closerLookMenu"  >
          <div class="articleMenuText">Closer Look</div></router-link
        >
      </div>
      <div class="articleMenuIcon"></div>
    </div>
    <!-- content div -->

    <div class="magContentContainer">
      <div class="magImgContainer">
        <!-- img div -->
        <div
          class="magImg"
           
           
        >
          <img
            v-if="itemSelected"
            :src="
              require(`./../../../assets/images/mag/nogen/${beautyAssets[pageNumber].imgName}`)
            "
            alt=""
          />
          <img
            v-if="!itemSelected"
            :src="
              require(`./../../../assets/images/mag/nogen/${beautyAssets[pageNumber].imgName}`)
            "
            alt=""
          />
        </div>
      </div>
      <!-- btm slider -->
      <div class="magBtmContainer" v-if="showAll">
        <!-- title side -->
        <div class="magTitleContainer">
          <div class="magTitleDiv">
            <div class="magTopTitle articleHeaderDivBrandingLG">nogen</div>
            <div class="magBtnTitle packageSubHeaderDiv">
              <br />
            </div>
          </div>
          <div class="packageSubHeaderContainer">
            <div
              class="packageSubHeaderDiv"
               
               
            >
              <span class="subHeaderText">magazine</span> &middot; layout design
            </div>
          </div>
        </div>
        <!-- slider side   -->
        <div class="magSliderContainer">
          <div class="outer-wrapper-content-small-mag">
            <div class="wrapper-content-small-mag-nogen">
              <div class="magMenuRow">
                <ul style="display: flex" class="ulMag">
                  <li
                    v-for="(image, index) in beautyAssets"
                    :key="index"
                    @click="nextImg(index, image)"
                    class="liMag"
                  >
                    <div class="nextViewMagDiv">
                      <div class="nextViewMagImgDiv">
                        <img
                          class="fullImg"
                          :src="
                            require(`./../../../assets/images/mag/nogen/${image.imgName}`)
                          "
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- control  btns -->
      <div class="magControlContainer">
        <div class="magControlDiv">
          <div class="magLeftBtn" @click="backwards()">
            <i class="fa fa-chevron-circle-left"></i>
          </div>

          <div class="magPopup" @click="showCollection"  >
            <i
              v-if="!hideMe"
              class="fa fa-eye-slash"
               
            ></i>
            <i v-if="hideMe" class="fa fa-eye"  ></i>
          </div>

          <div class="magRightBtn" @click="forwards()">
            <i class="fa fa-chevron-circle-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeautySingle",
  props: ["articleNumber", "athrName", "titleT"],
  components: {},
  data() {
    return {

      hideMe: false,
      showAll: true,
      pageNumber: 0,
      currentImg: "beauty.jpg",
      itemSelected: false,
      beautyAssets: [
        { imgName: "NogenManual.jpg", currentEdition: "zeta" },
        { imgName: "NogenManual2.jpg", currentEdition: "zeta" },
        { imgName: "NogenManual3.jpg", currentEdition: "Omega" },
        { imgName: "NogenManual4.jpg", currentEdition: "alpha" },
        { imgName: "NogenManual7.jpg", currentEdition: "gamma" },

        { imgName: "NogenManual9.jpg", currentEdition: "zeta" },

        { imgName: "NogenManual11.jpg", currentEdition: "zeta" },
          { imgName: "NogenManual16.jpg", currentEdition: "zeta" },
            { imgName: "NogenManual19.jpg", currentEdition: "zeta" },
              { imgName: "NogenManual20.jpg", currentEdition: "zeta" },

                  { imgName: "NogenManual33.jpg", currentEdition: "zeta" },
          
                      { imgName: "NogenManual35.jpg", currentEdition: "zeta" },
      ],


    
    };
  },

  methods: {
 
    nextImg(index, image) {
      console.log("page number- ", this.pageNumber, index, image);
      this.pageNumber = index;
      return
    },
    forwards() {
      if (this.pageNumber <= 10) {
        this.pageNumber += 1;
        return;
      } else {
        this.pageNumber = 0;
        return;
      }
    },
    backwards() {
      if (this.pageNumber >= 1) {
        this.pageNumber -= 1;
        return;
      } else {
        this.pageNumber = 11;
        return;
      }
    },
    showCollection() {
      this.showAll = !this.showAll;
      this.hideMe = !this.hideMe;
      return
    },
  },
};
</script>
<style scoped>

img.bgImg {
  position: absolute;
  top: -200px;
  left: -8px;
  z-index: -1;
  background: black;
  opacity: 0.89;
  height: auto;
  width: 102%;
  filter: blur(4px) brightness(0.9);
}

.articleContainer {
  height: 100vh;
  width: 100vw;
  background-size: cover;
}

@media (max-width: 1440px) {
  .closerImg {
    height: 76%;
    overflow: hidden;
    width: 450px;
    background-size: cover;
  }
}

@media (max-width: 1050px) {
  .closerContentContainer {
    left: 22%;
  }
  .closerImg {
    height: 70%;
    overflow: hidden;
    width: 420px;
    background-size: cover;
  }
}

@media (max-width: 800px) {
  .closerContentContainer[data-v-8bd0755e] {
    left: 14%;
  }
}
@media (max-width: 740px) {
  .closerContentContainer[data-v-8bd0755e] {
    left: 4%;
    top: 12%;
  }
}
</style>