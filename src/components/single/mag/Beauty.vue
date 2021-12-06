<template>
  <div class="articleContainer">
    <!-- background img -->
    <img
      v-if="itemSelected"
      class="bgImg"
      :src="
        require(`./../../../assets/images/mag/beauty/${beautyAssets[pageNumber].imgName}`)
      "
      alt=""
    />
    <img
      v-if="!itemSelected"
      class="bgImg"
      src="./../../../assets/images/mag/beauty/beauty.jpg"
      alt=""
    />

    <!-- nav -->
    <div class="articleMenuContainer">
      <div class="beautyText beauty">beauty.</div>
      <div class="articleMenu">
        <router-link to="/about">
          <div class="articleMenuText">home</div></router-link
        >
        <router-link to="/collectionMenu">
          <div class="articleMenuText">Collections</div></router-link
        >
        <router-link to="/articleMenu">
          <div class="articleMenuText">Articles</div></router-link
        >
        <router-link to="/closerLookMenu">
          <div class="articleMenuText">Closer Look</div></router-link
        >
      </div>
      <div class="articleMenuIcon"></div>
    </div>
    <!-- content div -->

    <div class="magContentContainer">
      <div class="magImgContainer">
        <!-- img div -->
        <div class="magImg" v-pageFadeIn>
          <img
            v-if="itemSelected"
            :src="
              require(`./../../../assets/images/mag/beauty/${beautyAssets[pageNumber].imgName}`)
            "
            alt=""
          />
          <img
            v-if="!itemSelected"
            :src="
              require(`./../../../assets/images/mag/beauty/${beautyAssets[pageNumber].imgName}`)
            "
            alt=""
          />
        </div>
      </div>
      <!-- btm slider -->
      <div class="magBtmContainer" v-if="showAll" v-fadeInOut>
        <!-- title side -->
        <div class="magTitleContainer">
          <div class="magTitleDiv">
            <div class="magTopTitle articleHeaderDivBrandingLG">beauty</div>
            <div class="magBtnTitle packageSubHeaderDiv">
              <br />
            </div>
          </div>
          <div class="packageSubHeaderContainer">
            <div class="packageSubHeaderDiv">
              <span class="subHeaderText">magazine</span> &middot; layout design
            </div>
          </div>
        </div>
        <!-- slider side   -->
        <div class="magSliderContainer">
          <div class="outer-wrapper-content-small-mag">
            <div class="wrapper-content-small-mag">
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
                            require(`./../../../assets/images/mag/beauty/${image.imgName}`)
                          "
                          alt=""
                        />
                        <!-- <div class="nextViewText">
                      {{ image.currentEdition }}
                    </div> -->
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="magControlContainer">
        <!-- control  btns -->
        <div class="magControlDiv">
          <div class="magLeftBtn" @click="backwards()">
            <i class="fa fa-chevron-circle-left"></i>
          </div>

          <div class="magPopup" @click="showCollection">
            <i v-if="!hideMe" class="fa fa-eye-slash"></i>
            <i v-if="hideMe" class="fa fa-eye"></i>
          </div>

          <div class="magRightBtn" @click="forwards()">
            <i class="fa fa-chevron-circle-right"></i>
          </div>
        </div>
      </div>

      <!-- left  side -->

      <!-- <div class="closerContentDiv"> -->
      <!-- <ul>
          <li v-for="(value, index) in credit" :key="index"  >
            <div class="closerContentHeader">{{ credit[index].title }}</div>
            <div class="closerContentSubHeader" >{{ credit[index].value }}</div>
          </li>
        </ul> -->

      <!--               
        <div class="closerContentHeader">photography</div>
        <div class="closerContentSubHeader">{{ athrName }}</div> -->
      <!-- <div class="closerContentHeader">{{credits[1].credit[0].title}}</div>
        <div class="closerContentSubHeader">{{ credits[1].credit[1].value }}</div>
             <div class="closerContentHeader">{{credits[1].credit[2].title}}</div>
        <div class="closerContentSubHeader">{{ credits[1].credit[3].value }}</div>
             <div class="closerContentHeader">{{credits[1].credit[4].title}}</div>
        <div class="closerContentSubHeader">{{ credits[1].credit[5].value }}</div> -->
      <!-- </div> -->
    </div>
    <!-- sidebar - hover -->
    <div v-if="showAll" class="">
      <div class="">
        <div class="menuClick">
          <!-- <div class="title">Editions</div> -->
          <div class="">
            <div class="magContentContainer2">
              <!-- header section -->
              <div class="articleHeaderDiv">{{ articleNumber }} <br /></div>
              <div class="articleHeaderDiv2">{{ titleT }}</div>
              <div class="articleSubHeaderContainer">
                <div class="articleSubHeaderDiv">
                  <span class="subHeaderText">Edition</span> &middot;
                  {{ editionName }}
                </div>
              </div>
              <!-- photos - grid -->
              <ul class="photoGridContainer">
                <li
                  class="photoGridDiv"
                  v-for="(image, index) in beautyAssets"
                  :key="index"
                  @click="nextImg(index, image)"
                >
                  <div class="nextViewDiv">
                    <div class="nextViewImgDiv">
                      <img
                        class="nextViewImg"
                        :src="
                          require(`./../../../assets/images/mag/beauty/${image.imgName}`)
                        "
                        alt=""
                      />
                    </div>
                    <div class="nextViewText">
                      {{ image.currentEdition }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
      isActive: false,
      hideMe: false,
      showAll: true,
      pageNumber: 0,
      editionName: "Alpha",
      beautyImgs: "beauty.jpg",
      currentImg: "beauty.jpg",
      itemSelected: false,
      beautyAssets: [
        { imgName: "beauty.jpg", currentEdition: "I" },
        { imgName: "beauty2.jpg", currentEdition: "II" },
        { imgName: "beauty3.jpg", currentEdition: "III" },
        { imgName: "beauty4.jpg", currentEdition: "IV" },
        { imgName: "beauty5.jpg", currentEdition: "V" },
        { imgName: "beauty6.jpg", currentEdition: "VI" },
        { imgName: "beauty7.jpg", currentEdition: "VII" },
        { imgName: "beauty8.jpg", currentEdition: "VIII" },
        { imgName: "beauty9.jpg", currentEdition: "IX" },
      ],

      credit: [
        { title: "production", value: "SPACE KRTVE" },
        { title: "in frame", value: "SAUTI SOL" },
        { title: "makeup", value: "SINITTA AKELLO" },
        { title: "outfits", value: "BANKOLE THOMAS" },
        { title: "styling", value: "BRIAN BABU" },
        { title: "publisher", value: "Arthur Keef" },
      ],
      looksPhotoArray: [
        {
          collectionHeaderText: "hello 0",
          collectionImg: "img21.jpg",
          editionName: "Alpha",
        },
        {
          collectionHeaderText: "hello 0",
          collectionImg: "img22.jpg",
          editionName: "Beta",
        },
        {
          collectionHeaderText: "hello 1",
          collectionImg: "img23.jpg",
          editionName: "Delta",
        },

        {
          collectionHeaderText: "hello 3",
          collectionImg: "img25.jpg",
          editionName: "Omega",
        },
        {
          collectionHeaderText: "hello 4",
          collectionImg: "img26.jpg",
          editionName: "Zeta",
        },
      ],
    };
  },
  computed: {},
  methods: {
    seeCollectionList() {
      console.log("learn more");
      this.isActive = !this.isActive;
    },
    nextImg(index, image) {
      console.log("page number- ", this.pageNumber, index, image);
      //   (this.collectionText = collection.collectionText),
      this.pageNumber = index;
      // this.beautyImgs = image.imgName;
      // this.editionName = image.currentEdition;
      // this.showAll = false
      // this.itemSelected = true;
    },
    forwards() {
      if (this.pageNumber <= 7) {
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
        this.pageNumber = 8;
        return;
      }
    },
    showCollection() {
      this.showAll = !this.showAll;
      this.hideMe = !this.hideMe;
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