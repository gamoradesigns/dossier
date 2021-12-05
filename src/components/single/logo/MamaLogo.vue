<template>
  <div class="articleContainer">
    <img
      v-if="itemSelected"
      class="bgImg"
        src="./../../../assets/images/img55.jpg"
      alt=""
    />
    <img
      v-if="!itemSelected"
      class="bgImg"
        src="./../../../assets/images/img55.jpg"
      alt=""
    />

    <!-- nav -->
    <div class="articleMenuContainer" >
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
    <div class="closerContentContainer">
      <!-- left  side -->

      <div class="closerContentDiv" >
        <ul>
          <li v-for="(value, index) in credit" :key="index"  >
            <div class="closerContentHeader">{{ credit[index].title }}</div>
            <div class="closerContentSubHeader" >{{ credit[index].value }}</div>
          </li>
        </ul>

        <!--               
        <div class="closerContentHeader">photography</div>
        <div class="closerContentSubHeader">{{ athrName }}</div> -->
        <!-- <div class="closerContentHeader">{{credits[1].credit[0].title}}</div>
        <div class="closerContentSubHeader">{{ credits[1].credit[1].value }}</div>
             <div class="closerContentHeader">{{credits[1].credit[2].title}}</div>
        <div class="closerContentSubHeader">{{ credits[1].credit[3].value }}</div>
             <div class="closerContentHeader">{{credits[1].credit[4].title}}</div>
        <div class="closerContentSubHeader">{{ credits[1].credit[5].value }}</div> -->
      </div>

      <!-- right side -->
      <div class="closerImg"    >
        <img
          v-if="itemSelected"
         
           src="./../../../assets/images/img55.jpg"
          alt=""
        />
        <img
          v-if="!itemSelected"
       
         src="./../../../assets/images/img55.jpg"
          alt=""
        />
      </div>
    </div>
    <!-- sidebar - hover -->
    <div class=""     >
      <div class="blocked">
        <div class="menu">
          <div class="title">Editions</div>
          <div class="">
            <div class="articleContentContainer">
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
                  v-for="(collection, index) in looksPhotoArray"
                  :key="index"
                  @click="nextImg(index, collection)"
                >
                  <div class="nextViewDiv">
                    <div class="nextViewImgDiv">
                      <img
                        class="nextViewImg"
                          src="./../../../assets/images/img55.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText">
                      {{ collection.editionName }}
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
  name: "ArticleSingle",
  props: ["articleNumber", "athrName", "titleT"],
  components: {},
  data() {
    return {
      isActive: false,
      editionName: "Alpha",
      collectionImg: "fashion15.jpg",
      itemSelected: false,
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
  computed: {
 
  },
  methods: {
    seeCollectionList() {
      console.log("learn more");
      this.isActive = !this.isActive;
    },
    nextImg(index, collection) {
      console.log("nextImg", index, collection);

      this.collectionImg = collection.collectionImg;
      this.editionName = collection.editionName;
      this.itemSelected = true;
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