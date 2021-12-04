<template>
  <div class="articleContainer " v-scrollfadinganimation>
    <!-- background images  -->

    <img v-scrollfadinganimation
      v-if="itemSelected"
      class="bgImg"
     :src="require(`./../../../assets/images/resizeLONG/branding/pack/jar/${packageImg}`)"
      alt=""
    />
    <img v-scrollfadinganimation
      v-if="!itemSelected"
      class="bgImg"
      :src="require(`./../../../assets/images/resizeLONG/branding/pack/jar/${firstImg}`)"
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
    <div class="articleContentContainer positionInherit" v-if="!hideMe" v-scrollfadinganimation>
      <div class="backdropContent_Collection" v-scrollfadinganimation >
     <div class="articleHeaderDiv" v-scrollfadinganimation style="transition-delay: 1.5s !important"  >5545 <br /></div>
      <div class="articleHeaderDiv2" v-scrollfadinganimation style="transition-delay: 1s !important"  >
        In the Weeds <br />
        Packaging Design  
      </div>
      <div class="packageSubHeaderContainer">
        <div class="packageSubHeaderDiv" v-scrollfadinganimation style="transition-delay: 1.2s !important" >
          <span class="subHeaderText">Edition</span> &middot; {{ editionName }}
        </div>
        <div class="packageSubHeaderDiv" v-scrollfadinganimation style="transition-delay: 1.4s !important" >
          <span class="subHeaderText">Type</span> &middot;  Product Package Design
        </div>
         <div class="packageSubHeaderDiv" v-scrollfadinganimation style="transition-delay: 1.6s !important" >
          <span class="subHeaderText">uses</span> &middot; Branding label
        </div>
        <div class="packageSubHeaderDiv" v-scrollfadinganimation style="transition-delay: 1.8s !important" >
          <span class="subHeaderText">Templates</span> &middot; duplicatable & customisable
        </div>
          
      </div>
   <!-- <div class="articleContentDiv fullWidth">
        {{ collectionText }}
      </div> -->

  <!-- photo gallery-->
      <div class="">
        <div class="">
      
          <ul v-scrollfadinganimation style="transition-delay: 2s !important"  >
            <li
              v-for="(image, index) in jarImgAssets"
              :key="index"
              @click="nextImg(index, image)"
              
            >
              <div class="nextViewDiv">
                <div class="nextViewImgDiv" >
                  <img class="fullImg"
                  :src="require(`./../../../assets/images/resizeLONG/branding/pack/jar/${image.imgName}`)"
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

    <div class="hideContentsDiv" @click="hideContents" v-scrollfadinganimation> 
      <i v-if="!hideMe"  class="fa fa-eye-slash" v-scrollfadinganimation ></i> 
      <i v-if="hideMe" class="fa fa-eye" v-scrollfadinganimation></i> 
      </div>
  </div>
</template>

<script>
export default {
  name: "MamaPackageSingle",
  data() {
    return {
      isActive: false,
      hideMe: false,
      editionName: "Alpha",
      articleNumber: "5692",
      firstImg:  "jar1.jpg",
      collectionText:
        "Uipsum&middot; dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus Modi, quibusdam! Neque animi perferendis.Uipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ducimus! Modi, quibusdam! Neque animi perferendis.",
      packageImg: "fashion15.jpg",
      itemSelected: false,
      jarImgAssets2: [
          "jar1.jpg", "pine.jpg", "pine4F.jpg", "pine5F.png"
      ],
      jarImgAssets: [
        {imgName : "jar1.jpg", currentEdition: "alpha"},
        {imgName : "pine.jpg", currentEdition: "Omega"},
        {imgName : "pine4F.jpg", currentEdition: "gamma"},
        {imgName : "pine5F.png", currentEdition: "zeta"},
          
      ],
    
    
    };
  },

  methods: {
    hideContents(){
       console.log("hiding");
       this.hideMe = !this.hideMe
    },
    seeCollectionList() {
      console.log("learn more");
      this.isActive = !this.isActive;
    },

    nextImg(index, image) {
      console.log("nextImg", index, image);
    //   (this.collectionText = collection.collectionText),
        (this.packageImg = image.imgName);
      this.editionName = image.currentEdition;
      this.itemSelected = true;
    },
  },
};
</script>
<style scoped>
.fullWidth {
  width: 100%  !important;
}
.backdropContent_Collection {
       backdrop-filter: blur(.5px) brightness(0.95);
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