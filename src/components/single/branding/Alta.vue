<template>
  <div class="articleContainer">
    <!-- background images  -->

    <img
      class="bgImg"
      src="./../../../assets/images/agile/Icon.jpg"
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
    <div class="brandingContainer">
      <div
        class="brandingGridContainer2 positionInherit"
        style="margin: 10px 0px 0px 10px"
        v-if="!hideMe"
      >
        <div class="backdropContent_Collection">
          <div class="brandingTopMenuDiv">
            <div class="articleHeaderDivBrandingAlta">AltA <br /></div>
            <div class="articleHeaderDivBrandingLgAgile">Visiual Menu</div>
          </div>
          <div class="brandingBottomMenuContainer">
            <div class="brandingBottomMenuDiv">
              <div class="packageSubHeaderContainer">
                <div class="brandingSubHeaderDiv">
                  Meet the brand
                  <!-- &middot; <span class="subHeaderText">UX</span>  -->
                </div>
                <div class="brandingMenuRow">
                  <div class="nextViewMenuDiv">
                    <div
                      class="nextViewMenuImgDiv"
                      @click="showContainer(gridInput)"
                    >
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/alta3.png"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText">Alta</div>
                  </div>
                </div>
                <div class="brandingSubHeaderDiv">
                  <!-- <span class="subHeaderText"> UI</span> &middot;  -->
                  get to know
                </div>
                <div class="brandingMenuRow">
                  <div class="nextViewMenuDiv">
                    <div
                      class="nextViewMenuImgDiv"
                      @click="showContainer(logoInput)"
                    >
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/womantrust.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText">logo</div>
                  </div>
                  <div
                    class="nextViewMenuDiv"
                    @click="showContainer(colorInput)"
                  >
                    <div class="nextViewMenuImgDiv">
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/guywbag.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText">colors</div>
                  </div>
                </div>
                <div class="brandingMenuRow">
                  <div
                    class="nextViewMenuDiv"
                    @click="showContainer(typeInput)"
                  >
                    <div class="nextViewMenuImgDiv">
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/guywdog.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText">Typography</div>
                  </div>
          
                </div>

                <div class="brandingSubHeaderDiv">
                  <!-- <span class="subHeaderText"> Deliveriables</span> &middot;  -->
                  take a look
                </div>
                <div class="brandingMenuRow">
                       <div class="nextViewMenuDiv">
                    <div
                      class="nextViewMenuImgDiv"
                      @click="showContainer(manualInput)"
                    >
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/womanonmt.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText up40" >
                      Brand Manual
                    </div>
                  </div>
                  <div class="nextViewMenuDiv">
                    <div
                      class="nextViewMenuImgDiv"
                      @click="showContainer(socialInput)"
                    >
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/guyon.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText up40">
                      Social <br />
                      Media
                    </div>
                  </div>
             
                </div>
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
        class="brandingGridContainer positionInherit"
        style="margin: 10px 0px 0px 10px; overflow: hidden !important"
      >
        <div class="backdropContentBrandingGrid">
          <div class="container">
            <div class="agileBrand" v-if="grid">
              <div class="brandGridHomeDiv">
                <div class="articleHeaderDivBrandingMdAlta">Alta's Brand</div>
                <div class="articleHeaderDivBrandingsx">Development</div>

                <div class="brandGridHomeBOdy">
                
              Welcome and explore ALta's brand basics and visual elements. Explore the
                 brand core values, viual assets from the colors, typography, logos, customer demeographics, application design
                 and more. 
                </div>
              </div>
            </div>
            <div class="logo" v-if="logo">
              <div class="colors agileBg">
                <div class="color-pallette-content">
                  <div class="color-array ">
                    <transition>
                      <div class="colorTitle">The ALTA Logo</div>
                    </transition>
                    <div class="color-bar-agile"></div>
                    <div class="colorSubDiv">
                      <div class="colorSubDivLeft">
                        <div class="color-sup-text">Fun <br /></div>
                        <div class="color-sup-text">energtic</div>
                        <div class="color-sup-text">supportive</div>
                      </div>
                      <div class="colorSubDivRight">
                        <div class="color-array-intro-body">
                          <div class="color-array-intro-body-text">
                            Our Logo is the key building block of our identity,
                            the primary visual element that identifies us. The
                            signature is a combination of the the symbol itself
                            and our company name – they have a fixed
                            relationship that should never be changed in any
                            way.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small-logo">
                    <div class="wrapper-content-small-logo">
                      <div class="color-array nopadding">
                        <div class="logo-whole-container">
                          <div class="logo-containter">
                            <div class="logo-single-div ">
                             
                              <div class="logo-img">
                                <img
                                  src="./../../../assets/images/alta/altalogoog.png"
                                  alt=""
                                />
                              </div>
                              <div
                                class="logo-content-div "
                              >
                               <div class="logo-title mont-font">
                                the ALTA Logo
                              </div>
                                <div class="logo-body">
                                  Our Logo is the key building block of our
                                  identity, the primary visual element that
                                  identifies us. The signature is a combination
                                  of the the symbol itself and our company name
                                  – they have a fixed relationship that should
                                  never be changed in any way.
                                </div>
                              </div>
                            </div>
                            <div class="logo-single-div">
                              <div class="logo-img">
                                <img
                                  src="./../../../assets/images/alta/altalogowhite.png"
                                  alt=""
                                />
                              </div>
                              <div class="logo-content-div">
                                <div class="logo-title mont-font">
                                  Logo Spacing
                                </div>
                                <div class="logo-body">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Ullam molestias commodi
                                  suscipit obcaecati eligendi quis totam ipsam
                                  distinctio natu.
                                </div>
                              </div>
                            </div>
                            <div class="logo-single-div">
                              <div class="logo-img-icon">
                                <img
                                  src="./../../../assets/images/alta/monolinelogo.png"
                                  alt=""
                                />
                              </div>
                              <div class="logo-content-div">
                                <div class="logo-title mont-font">
                                  White Logo
                                </div>
                                <div class="logo-body">
                                  Will be used when the backround color is dark
                                </div>
                              </div>
                            </div>
                            <div class="logo-single-div">
                              <div class="logo-img-icon">
                                <img
                                  src="./../../../assets/images/alta/monolinelogoblack.png"
                                  alt=""
                                />
                              </div>
                              <div class="logo-content-div">
                                <div class="logo-title mont-font">
                                  Monoline Logo
                                </div>
                                <div class="logo-body">
                                  Will be used for an alternative to the full
                                  color single logo.
                                </div>
                              </div>
                            </div>
                            <div class="logo-single-div">
                              <div class="logo-img">
                                <img
                                  src="./../../../assets/images/alta/altabrandbible5.jpg"
                                  alt=""
                                />
                              </div>

                              <div class="logo-content-div">
                                <div class="logo-title mont-font">
                                  Black Monoline Logo
                                </div>
                                <div class="logo-body">
                                  Will be used for an alternative to the full
                                  color single logo.
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
            </div>
            <div class="type" v-if="type">
              <div class="colors agileBg">
                <div class="color-pallette-content">
                  <div class="color-array">
                    <transition>
                      <div class="colorTitle">Typography</div>
                    </transition>
                    <div class="color-bar-agile"></div>
                    <div class="colorSubDiv">
                      <div class="colorSubDivLeft">
                        <div class="color-sup-text">exciting <br /></div>
                        <div class="color-sup-text">Plesant</div>
                        <div class="color-sup-text">bold</div>
                      </div>
                      <div class="colorSubDivRight">
                        <div class="color-array-intro-body">
                          <div class="color-array-intro-body-text">
                            Give me life! Give me energy! Get me motivated!
                            <br />
                            Typography is the art and technique of arranging
                            type to make written language legible, readable and
                            appealing when displayed.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small">
                    <div class="wrapper-content-small-type">
                          <div class="type-div-first">
                                 <div class="type-container">
                        <div class="abText mont-font">AaBbCc</div>
                        <div class="aphlaText mont-font">
                          ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                          abcdefghijlmnopqrstvuwxyz <br />
                          `~!@#$%^?,./:"{}[]*()_+-=
                        </div>

                        <div class="type-info-title title-short mont-font">
                          MONTSERRAT 
                        </div>
                        <div class="type-span">
                          The old posters and signs in the traditional
                          neighborhood of Buenos Aires called Montserrat. The
                          goal is to rescue what is in Montserrat and set it
                          free.
                          <div class="type-span">
                              Used for standard corporate font.
                          </div>
                        </div>
                        <!-- <div class="type-info-div">
                        
                        </div>
                        <div class="text-example-div">
                    
                        </div> -->
                      </div>
                          </div>
                         
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="colors" v-if="color">
              <div class="colors agileBg">
                <div class="color-pallette-content">
                  <div class="color-array">
                    <transition>
                      <div class="colorTitle">Peacock Color Pallette</div>
                    </transition>
                    <div class="color-bar-agile"></div>
                    <div class="colorSubDiv">
                      <div class="colorSubDivLeft">
                        <div class="color-sup-text">corporate <br /></div>
                        <div class="color-sup-text">freedom</div>
                        <div class="color-sup-text">trust</div>
                      </div>
                      <div class="colorSubDivRight">
                        <div class="color-array-intro-body">
                          <div class="color-array-intro-body-text">
                            Banking with ALTA is banking with trust!
                            <br />
                            This color pallette has been designed to convey
                            the stablitiy of banking with ALTA. Choosing to stick with a tight blue and green color pallette,
                            we give you our Peacock Color Pallette

                       
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small-color">
                    <div class="wrapper-content-small-color">
                      <div class="color-array nopadding">
                        <div class="color-array-container">
                             <div class="color-array-div">
                            <div class="color-title">Always trust a man in blue</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : 071D49</div>
                                  <div class="">CMYK: 803946</div>
                                  <div class="">RGBA : 13 154 68</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="content-color-colors-1 hoverMeNote altablue"></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Lake Blue</div>

                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : 002352</div>
                                  <div class="">CMYK : 48.23 0 94.21 0</div>
                                  <div class="">RGBA :150 230 50</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div
                                  class="content-color-colors-1 blue1"
                                ></div>
                              </div>
                            </div>
                          </div>
                       
                          <div class="color-array-div">
                            <div class="color-title">Gem Green</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : 96E632</div>
                                  <div class="">CMYK : 100 91 37 37</div>
                                  <div class="">RGBA : 150 90 53 01</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div
                                  class="content-color-colors-1 altagreen"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Forest Green</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : 43B02B</div>
                                  <div class="">CMYK: 803946</div>
                                  <div class="">RGBA : 13 154 68</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div
                                  class="content-color-colors-1 green1"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Honest Orange</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : FF8F1C</div>
                                  <div class="">CMYK: 651983</div>
                                  <div class="">RGBA : 67 176 43</div>
                                </div>
                              </div>

                              <div class="content-color-right">
                                <div
                                  class="content-color-colors-1 orange"
                                ></div>
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
            <div class="socialmedia" v-if="social">
              <div class="colors agileBg">
                <div class="color-pallette-content">
                  <div class="color-array ">
                    <transition>
                      <div class="colorTitle">Social Media Ad</div>
                    </transition>
                    <div class="color-bar-agile"></div>
                    <div class="colorSubDiv">
                      <div class="colorSubDivLeft">
                        <div class="color-sup-text">corporate <br /></div>
                        <div class="color-sup-text">freedom</div>
                        <div class="color-sup-text">trust</div>
                      </div>
                      <div class="colorSubDivRight">
                        <div class="color-array-intro-body">
                          <div class="color-array-intro-body-text">
                            Keep track! Stay motivate! Stay connected!
                            <br />
                            This color pallette has been designed to excited the
                            senses, get you moving, and make you smile. The Spry
                            Color Pallette balances bright bubbly colors with
                            warm supportive tones.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small">
                    <div class="wrapper-content-small">
                      <div class="color-array nopadding">
                        <div class="grid-layout-small">
                          <div class="grid-item grid-item-1">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/alta/media2.jpg"
                              alt=""
                            />
                          </div>
                          <div class="grid-item span-2 grid-item-2">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/alta/thumbnail.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-2">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/alta/media1.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-4">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agile6.jpg"
                            />
                          </div>

                          <div class="grid-item grid-item-2">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agile6_1.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="colors" v-if="manual">
              <div class="colors agileBg">
                <div class="color-pallette-content">
                  <div class="color-array ">
                    <transition>
                      <div class="colorTitle">ALTA's Brand Manual</div>
                    </transition>
                    <div class="color-bar-alta"></div>
                    <div class="colorSubDiv">
                      <div class="colorSubDivLeft">
                        <div class="color-sup-text">sneak <br /></div>
                        <div class="color-sup-text">a</div>
                        <div class="color-sup-text">peak</div>
                      </div>
                      <div class="colorSubDivRight">
                        <div class="color-array-intro-body">
                          <div class="color-array-intro-body-text">
                            Take a look! <br />
                            This color pallette has been designed to excited the
                            senses, get you moving, and make you smile. The Spry
                            Color Pallette balances bright bubbly colors with
                            warm supportive tones.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small">
                    <div class="wrapper-content-small-manual">
                      <div class="color-array nopadding">
                        <div class="grid-layout-small-manual">
                          <div class="grid-item span-2 grid-item-2">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/alta/altabrandbible2.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-3">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/alta/altabrandbible66.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-4">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/alta/altabrandbible5.jpg"
                            />
                          </div>
                          <div class="grid-item span-2 grid-item-5">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/alta/altabrandbible7.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-6">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/alta/altabrandbible11.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-7">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/alta/altabrandbible12.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-1">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/alta/altabrandbible15.jpg"
                              alt=""
                            />
                          </div>
                          <div class="grid-item grid-item-1">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/alta/altabrandbible14.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="colors" v-if="station">
              <div class="colors">
                <div class="color-pallette-content">
                  <div class="color-array">
                    <transition>
                      <div
                        class="colorTitle"
                         
                        
                      >
                        Stationary
                      </div>
                    </transition>
                    <div
                      class="color-bar-agile"
                       
                       
                    ></div>
                    <div class="colorSubDiv">
                      <div class="colorSubDivLeft">
                        <div
                          class="color-sup-text"
                           
                           
                        >
                          print
                        </div>
                        <div
                          class="color-sup-text"
                           
                           
                        >
                          digial
                        </div>
                        <div
                          class="color-sup-text"
                           
                           
                        >
                          media
                        </div>
                      </div>
                      <div class="colorSubDivRight">
                        <div
                          class="color-array-intro-body"
                           
                           
                        >
                          <div class="color-array-intro-body-text">
                            Give me life! Give me energy! Get me motivated!
                            <br />
                            This color pallette has been designed to excited the
                            senses, get you moving, and make you smile. The Spry
                            Color Pallette balances bright bubbly colors with
                            warm supportive tones.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small">
                    <div class="wrapper-content-small">
                      <div class="color-array">
                        <div class="grid-layout-small">
                          <div class="grid-item grid-item-1">
                            <img
                              src="./../../../assets/images/agile/agile3.jpg"
                              alt=""
                            />
                          </div>
                          <div class="grid-item span-2 grid-item-2">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agile8.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-3">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agile6_1.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-4">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agile6.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-5">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agile7.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-6">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agileux32.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-7">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agile7.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
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
  name: "Alta",
  data() {
    return {
      stationInput: "station",
      station: false,
      manualInput: "manual",
      manual: false,
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
        this.manual = false;
        this.station = false;
        return;
      } else if (input == "logo") {
        console.log("= to logo");
        this.logo = true;
        this.type = false;
        this.color = false;
        this.social = false;
        this.grid = false;
        this.manual = false;
        this.station = false;
        return;
      } else if (input == "type") {
        this.type = true;
        this.logo = false;
        this.color = false;
        this.social = false;
        this.grid = false;
        this.manual = false;
        this.station = false;
        return;
      } else if (input == "color") {
        this.color = true;
        this.logo = false;
        this.type = false;
        this.social = false;
        this.grid = false;
        this.manual = false;
        this.station = false;
        return;
      } else if (input == "social") {
        this.social = true;
        this.logo = false;
        this.type = false;
        this.color = false;
        this.grid = false;
        this.manual = false;
        this.station = false;
        return;
      } else if (input == "manual") {
        this.manual = true;
        this.logo = false;
        this.type = false;
        this.color = false;
        this.grid = false;
        this.social = false;
        this.station = false;
        return;
      } else if (input == "station") {
        this.station = true;
        this.logo = false;
        this.type = false;
        this.color = false;
        this.grid = false;
        this.manual = false;
        this.social = false;
        return;
      } else {
        console.log("didnt work");
        return;
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

.grid-layout-small {
  display: grid;
  grid-template-columns: minmax(204px, 1fr) minmax(204px, 1fr) minmax(
      204px,
      1fr
    ) minmax(204px, 1fr);
  grid-gap: 4px;
  grid-auto-columns: minmax(100px, auto);
  grid-auto-flow: dense;
  padding: 1px;
  grid-template-rows: 25vh 25vh;
}
.grid-layout-small-manual {
  display: grid;
  grid-template-columns: minmax(204px, 1fr) minmax(204px, 1fr) minmax(
      204px,
      1fr
    ) minmax(204px, 1fr) minmax(204px, 1fr) minmax(204px, 1fr) minmax(
      204px,
      1fr
    );
  grid-gap: 4px;
  grid-auto-columns: minmax(100px, auto);
  grid-auto-flow: dense;
  padding: 1px;
  grid-template-rows: 25vh 25vh;
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
.span-1 {
  grid-column-end: span 2;
  grid-row-end: span 2;
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
  height: 100%;
  overflow: hidden;
  /* background: black; */
}
.backdropContentBrandingGrid {
  /* backdrop-filter: blur(0.5px) brightness(0.95); */

  height: 100%;
  overflow: scroll;
  /* background: black; */
}
.agileBg {
  height: inherit;
  backdrop-filter: blur(20px) brightness(0.97);
  padding: 0px 4.5%;
}
.colors,
.type,
.socialmedia,
.logo {
  height: inherit;
}
.container {
  height: 100%;
  padding: 0px 4%;
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