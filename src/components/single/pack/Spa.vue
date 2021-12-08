<template>
  <div class="articleContainer">
    <!-- background images  -->

    <img
      v-if="itemSelected"
      class="bgImg"
      :src="
        require(`./../../../assets/images/pack/spa/${packageImg}`)
      "
      alt=""
    />
    <img
      v-if="!itemSelected"
      class="bgImg"
      :src="
        require(`./../../../assets/images/pack/spa/${firstImg}`)
      "
      alt=""
    />
    <!-- nav -->
    <div class="articleMenuContainer">
      <div class="beauty beautyText">dossier</div>
      <div class="articleMenu">
        <router-link to="/main">
          <div class="articleMenuText">home</div></router-link
        >
        <router-link to="/logoMenu">
          <div class="articleMenuText">logos</div></router-link
        >
        <router-link to="/packageMenu">
          <div class="articleMenuText">packaging</div></router-link
        >
        <router-link to="/magMenu">
          <div class="articleMenuText">magazines</div></router-link
        >
      </div>
      <div class="articleMenuIcon"></div>
    </div>
    <!-- content div -->
    <div
      class="articleContentContainer positionInherit"
      v-if="!hideMe"
      v-fadeInOut
    >
      <div class="backdropContent_CollectionSpa">
        <div class="articleHeaderDiv">PJ5545 <br /></div>
        <div class="articleHeaderDiv2">
          Cosmetic Essential <br />
          Packaging Design
        </div>
        <div class="packageSubHeaderContainer">
          <div class="packageSubHeaderDiv">
            <span class="subHeaderText">Edition</span> &middot;
            {{ editionName }}
          </div>
          <div class="packageSubHeaderDiv">
            <span class="subHeaderText">Type</span> &middot; Product Package
            Design
          </div>
          <div class="packageSubHeaderDiv">
            <span class="subHeaderText">uses</span> &middot; Branding label
          </div>
          <div class="packageSubHeaderDiv">
            <span class="subHeaderText">Templates</span> &middot; duplicatable &
            customisable
          </div>
        </div>
        <!-- <div class="articleContentDiv fullWidth">
        {{ collectionText }}
      </div> -->

        <!-- photo gallery-->
      
                  <div class="outer-wrapper-content-small-spa">
                    <div class="wrapper-content-small-spa">
            <ul v-thirdIn>
              <li
                v-for="(image, index) in jarImgAssets"
                :key="index"
                @click="nextImg(index, image)"
              >
                <div class="nextViewDiv">
                  <div class="nextViewImgDiv">
                    <img
                      class="fullImg"
                      :src="
                        require(`./../../../assets/images/pack/spa/${image.imgName}`)
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

    <div class="hideContentsDiv" @click="hideContents">
      <i v-if="!hideMe" class="fa fa-eye-slash"></i>
      <i v-if="hideMe" class="fa fa-eye"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "JarPackageSingle",
  data() {
    return {
      isActive: false,
      hideMe: false,
      editionName: "Alpha",
      articleNumber: "5692",
      firstImg: "spa1.jpg",
      collectionText:
        "Uipsum&middot; dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus Modi, quibusdam! Neque animi perferendis.Uipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ducimus! Modi, quibusdam! Neque animi perferendis.",
      packageImg: "fashion15.jpg",
      itemSelected: false,
      jarImgAssets2: ["spa1.jpg", "spa2.jpg", "spa3.jpg", "spa4.jpg"],
      jarImgAssets: [
        { imgName: "spa1.jpg", currentEdition: "alpha" },
        { imgName: "spa2.jpg", currentEdition: "Omega" },
        { imgName: "spa3.jpg", currentEdition: "gamma" },
        { imgName: "spa4.jpg", currentEdition: "zeta" },
        { imgName: "standing-back.jpg", currentEdition: "zeta" },
        { imgName: "standing-front.jpg", currentEdition: "zeta" },
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
  },
};
</script>
<style scoped>
.fullWidth {
  width: 100% !important;
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