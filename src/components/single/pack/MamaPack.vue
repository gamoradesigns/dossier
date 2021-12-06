<template>
  <div class="articleContainer">
    <!-- background images  -->

    <img
      v-if="itemSelected"
      class="bgImg"
      :src="
        require(`./../../../assets/images/resizeLONG/branding/pack/mama/${packageImg}`)
      "
      alt=""
    />
    <img
      v-if="!itemSelected"
      class="bgImg"
      :src="
        require(`./../../../assets/images/resizeLONG/branding/pack/mama/${firstImg}`)
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
      <div class="backdropContent_Collection">
        <div class="articleHeaderDiv">PJ3247 <br /></div>
        <div class="articleHeaderDiv2">
          Mama Ethels<br />
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
        <div class="">
          <div class="">
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
                        require(`./../../../assets/images/resizeLONG/branding/pack/mama/${image.imgName}`)
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
  name: "MamaPack",
  data() {
    return {
      isActive: false,
      hideMe: false,
      editionName: "Alpha",
      articleNumber: "5692",
      firstImg: "mama1.jpg",
      collectionText:
        "Uipsum&middot; dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus Modi, quibusdam! Neque animi perferendis.Uipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ducimus! Modi, quibusdam! Neque animi perferendis.",
      packageImg: "fashion15.jpg",
      itemSelected: false,
      jarImgAssets2: ["mama1.jpg", "mama2.jpg", "mama3.jpg"],

      jarImgAssets: [
        { imgName: "mama1.jpg", currentEdition: "alpha" },
        { imgName: "mama2.jpg", currentEdition: "Omega" },
        { imgName: "mama3.jpg", currentEdition: "gamma" },
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
.backdropContent_Collection {
  backdrop-filter: blur(0.5px) brightness(0.95);
  padding: 20px;
  /* background: black; */
  width: 50%;
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