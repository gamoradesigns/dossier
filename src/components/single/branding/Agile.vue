<template>
  <div class="articleContainer">
    <!-- background images  -->

    <img
      class="bgImg"
      src="./../../../assets/images/agile/agile2.jpg"
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
    <div class="brandingContainer largeScreen">
      <div
        class="brandingGridContainer positionInherit"
        style="margin: 10px 0px 0px 10px"
        v-if="!hideMe"
      >
        <div class="backdropContent_Collection">
          <div class="brandingTopMenuDiv">
            <div class="articleHeaderDivBrandingAgile">
              Agile Fitness <br />
            </div>
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
                        src="./../../../assets/images/agile/agile2.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText">Agile</div>
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
                        src="./../../../assets/images/agile/yoga.jpg"
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
                        src="./../../../assets/images/agile/kick.jpg"
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
                        src="./../../../assets/images/agile/oneleg.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText up40">
                      Typo <br />
                      graphy
                    </div>
                  </div>
                  <div
                    class="nextViewMenuDiv"
                    @click="showContainer(demoInput)"
                  >
                    <div class="nextViewMenuImgDiv">
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/jump.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText up40">Demo <br />graphies</div>
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
                      @click="showContainer(socialInput)"
                    >
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/agile7.1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText up40">
                      App <br />
                      Design
                    </div>
                  </div>
                  <div class="nextViewMenuDiv">
                    <div
                      class="nextViewMenuImgDiv"
                      @click="showContainer(manualInput)"
                    >
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/agile3.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText up40">
                      Brand <br />
                      Manual
                    </div>
                  </div>
                  <!-- <div class="nextViewMenuDiv">
                    <div
                      class="nextViewMenuImgDiv"
                      @click="showContainer(stationInput)"
                    >
                  
                    </div>
                    <div class="nextViewText" style="top: -40px !important">
                      Stationary Packet
                    </div>
                  </div> -->
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
                <div class="articleHeaderDivBrandingMd">Agile's Brand</div>
                <div class="articleHeaderDivBrandingsx">Development</div>

                <div class="brandGridHomeBOdy">
                  Welcome and explore Agile Fitness's brand basics and visual
                  elements. Explore the brand core values, visual assets from
                  the colors, typography, logos, customer demographics,
                  application design and more.
                </div>
              </div>
            </div>

            <div class="logo" v-if="logo">
              <div class="colors agileBg">
                <div class="color-pallette-content">
                  <div class="color-array">
                    <transition>
                      <div class="colorTitle">The Agile Logo</div>
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
                            signature is a combination of the symbol itself and
                            our company name – they have a fixed relationship
                            that should never be changed in any way.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small-logo">
                    <div class="wrapper-content-small-logo">
                      <div class="logo-whole-container">
                        <div class="logo-containter">
                          <div class="logo-single-div">
                            <div class="logo-img">
                              <img
                                src="./../../../assets/images/agile/agileWhiteLogo.png"
                                alt=""
                              />
                            </div>
                            <div class="logo-content-div">
                              <div class="logo-title covered-font">
                                Our Logo
                              </div>
                              <div class="logo-body">
                                The cornerstone of our brand, out logo. Notice
                                instead of an "A" there is Prism. The Prism
                                combined with the remaining letter together
                                create our logo.
                              </div>
                            </div>
                          </div>
                          <div class="logo-single-div">
                            <div class="logo-img">
                              <img
                                src="./../../../assets/images/agile/agileOutlineLogo.png"
                                alt=""
                              />
                            </div>
                            <div class="logo-content-div">
                              <div class="logo-title covered-font">
                                Outlined
                              </div>
                              <div class="logo-body">
                                The Outlined version of the logo is designed to
                                be used for branding events, posters, and any
                                other "swag" purposes.
                              </div>
                            </div>
                          </div>
                          <div class="logo-single-div">
                            <div class="logo-img">
                              <img
                                src="./../../../assets/images/agile/agileBlackLogo.png"
                                alt=""
                              />
                            </div>
                            <div class="logo-content-div">
                              <div class="logo-title covered-font">
                                Black Logo
                              </div>
                              <div class="logo-body">
                                The all black version be used when the
                                background color is light.
                              </div>
                            </div>
                          </div>
                          <div class="logo-single-div">
                            <div class="logo-img-icon">
                              <img
                                src="./../../../assets/images/agile/aif@3x.png"
                                alt=""
                              />
                            </div>
                            <div class="logo-content-div">
                              <div class="logo-title covered-font">
                                Social Media Brand Mark
                              </div>
                              <div class="logo-body">
                                Will be used for an alternative to the full
                                color single logo on version social media
                                platforms.
                              </div>
                            </div>
                          </div>
                          <div class="logo-single-div">
                            <div class="logo-img">
                              <img
                                src="./../../../assets/images/agile/agileBlackLogo.jpg"
                                alt=""
                              />
                            </div>

                            <div class="logo-content-div">
                              <div class="logo-title covered-font">
                                Logo Spacing
                              </div>
                              <div class="logo-body">
                                The spacing and prepositions are key when
                                depicting the logo. This guild can be used as
                                reference.
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
                          <div class="abText covered-font">AaBbCc</div>
                          <div class="aphlaText covered-font">
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                            abcdefghijlmnopqrstvuwxyz <br />
                            `~!@#$%^?,./:"{}[]*()_+-=
                          </div>
                          <div class="type-info-title title-short covered-font">
                            COVERED BY YOUR GRACE
                          </div>
                          <div class="type-span">
                            Covered By Your Grace is based on the adorable
                            handwriting of a very sweet teacher friend.
                            <div class="type-span-span">
                              Used for logo and / or as accent font for print
                              and digital media when appliciable.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="type-div">
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
                            goal is to rescue and set it free.
                            <div class="type-span-span">
                              Used for standard corporate font.
                            </div>
                          </div>
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
                      <div class="colorTitle">Spry Color Pallette</div>
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
                            Give me life! Give me energy! Get me motivated!
                            <br />
                            This color palette has been designed to excite the
                            senses, get you moving, and make you smile. The Spry
                            Color Palette balances bright bubbly colors with
                            warm supportive tones.
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
                            <div class="color-title">Courageous Cablt</div>

                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : 00617E</div>
                                  <div class="">CMYK : 49% 11% 0% 51%</div>
                                  <div class="">RGB : 0 97 126</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div
                                  class="
                                    content-color-colors-1
                                    hoverMeNote
                                    cobalt
                                  "
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Phoenix Red</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : 960935</div>
                                  <div class="">CMYK : 0% 55% 38% 41%</div>
                                  <div class="">RGB : 150 9 53</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div
                                  class="content-color-colors-1 cherry"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Noble Orange</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : F57F28</div>
                                  <div class="">CMYK: 0% 46% 80% 4%</div>
                                  <div class="">RGB : 245 127 40</div>
                                </div>
                              </div>

                              <div class="content-color-right">
                                <div
                                  class="content-color-colors-1 orange"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Recharge Yellow</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : FEEB92</div>
                                  <div class="">CMYK: 0% 7% 42% 0%</div>
                                  <div class="">RGB : 254 235 146</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div
                                  class="content-color-colors-1 yellow"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Hope Blue</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : AAEFFF</div>
                                  <div class="">CMYK: 933% 6% 0% 0%</div>
                                  <div class="">RGBA : 170 239 255</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="content-color-colors-1 lBlue"></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Slate White</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : F9FFFE</div>
                                  <div class="">CMYK : 2% 0% 0% 0%</div>
                                  <div class="">RGB : 249 255 254</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div
                                  class="content-color-colors-1 eShell"
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
                  <div class="color-array">
                    <transition>
                      <div class="colorTitle">Fitness Application Design</div>
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
                            Keep track! Stay motivate! Stay connected!
                            <br />
                            Our Fitness App has been design to keep track of
                            your tailored fitness journey. As well as, hundreds
                            of workout playlists to stay motivated and
                            entertained.
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
                              src="./../../../assets/images/agile/agile7.jpg"
                              alt=""
                            />
                          </div>
                          <div class="grid-item span-2 grid-item-2">
                            <img
                              src="./../../../assets/images/agile/agile6_1.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-3">
                            <img
                              src="./../../../assets/images/agile/agile8.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-4">
                            <img
                              src="./../../../assets/images/agile/agile6.jpg"
                            />
                          </div>

                          <div class="grid-item grid-item-2">
                            <img
                              src="./../../../assets/images/agile/agile6_1.jpg"
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
                  <div class="color-array">
                    <transition>
                      <div class="colorTitle">Agile's Brand Manual</div>
                    </transition>
                    <div class="color-bar-agile"></div>
                    <div class="colorSubDiv">
                      <div class="colorSubDivLeft">
                        <div class="color-sup-text">EXCITING</div>
                        <div class="color-sup-text">PLESANT</div>
                        <div class="color-sup-text">BOLD</div>
                      </div>
                      <div class="colorSubDivRight">
                        <div class="color-array-intro-body">
                          <div class="color-array-intro-body-text">
                            Take a look! <br />
                            Sneak a peak at our tailored guidelines. Agile's
                            Brand Manual lays out the brand and the approved
                            visual elements, colors, typography, as well as the
                            brand values, vision, and our brand promised.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small">
                    <div class="wrapper-content-small">
                      <div class="color-array nopadding">
                        <div class="grid-layout-small-manual">
                          <div class="grid-item span-2 grid-item-2">
                            <img
                              src="./../../../assets/images/agile/agileux5.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-3">
                            <img
                              src="./../../../assets/images/agile/agileux6.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-4">
                            <img
                              src="./../../../assets/images/agile/agileux7.jpg"
                            />
                          </div>
                          <div class="grid-item span-2 grid-item-5">
                            <img
                              src="./../../../assets/images/agile/agileux8.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-6">
                            <img
                              src="./../../../assets/images/agile/agileux9.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-7">
                            <img
                              src="./../../../assets/images/agile/agileux10.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-1">
                            <img
                              src="./../../../assets/images/agile/agileux14.jpg"
                              alt=""
                            />
                          </div>
                          <div class="grid-item grid-item-1">
                            <img
                              src="./../../../assets/images/agile/agileux32.jpg"
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

            <div class="colors" v-if="demo">
              <div class="colors agileBg">
                <div class="color-pallette-content">
                  <div class="color-array">
                    <transition>
                      <div class="colorTitle">Customer Demographies</div>
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
                            Agile Fitness is a tailor fitness journey for
                            everyone!
                            <br />

                            We don’t have a target market or demographic that we
                            cater to exclusively. Our mission is to build a
                            fitness plan and tailor it to the everyday desires
                            and demands. This infographic display the highest
                            percent of each group surveyed by the CDC.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small-demo">
                    <div class="wrapper-content-small-demo">
                      <div class="color-array nopadding">
                        <div class="demo-array-container">
                          <div class="demo-array-div">
                            <div class="demo-title">Education</div>

                            <div class="content-demo-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">> Graduate degree</div>

                                  <div class="">High School Graduate</div>
                                  <div class="">AA Degree</div>
                                  <div class="">BA or MA Degree</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="color-codes">
                                  <div class="">50.4%</div>
                                  <div class="">43.9%</div>
                                  <div class="">46%</div>
                                  <div class="">42%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="demo-ppl-array-div span-demo-2">
                            <div class="demo-title" style="text-align: center">
                              Joe & Jane
                            </div>
                            <div class="content-demo-ppl-div">
                              <img
                                src="./../../../assets/images/agile/demoppl.png"
                              />
                            </div>
                          </div>
                          <div class="demo-array-div">
                            <div class="demo-title">Age</div>
                            <div class="content-demo-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">25-44 years</div>
                                  <div class="">45-64 years</div>
                                  <div class="">65-74 years</div>
                                  <div class="">74+ years</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="color-codes">
                                  <div class="">50.4%</div>
                                  <div class="">43.9%</div>
                                  <div class="">46%</div>
                                  <div class="">42%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="demo-array-div">
                            <div class="demo-title">Race</div>
                            <div class="content-demo-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">Pacific Islander</div>
                                  <div class="">Black or AA</div>
                                  <div class="">White</div>
                                  <div class="">Latino</div>
                                </div>
                              </div>

                              <div class="content-color-right">
                                <div class="color-codes">
                                  <div class="">28.9%</div>
                                  <div class="">34.6%</div>
                                  <div class="">46%</div>
                                  <div class="">42%</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="demo-array-div">
                            <div class="demo-title">Geographic Region</div>
                            <div class="content-demo-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">Northeast</div>
                                  <div class="">Midwest</div>
                                  <div class="">South</div>
                                  <div class="">North</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="color-codes">
                                  <div class="">44.8%</div>
                                  <div class="">26.4%</div>
                                  <div class="">6%</div>
                                  <div class="">42%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="demo-array-div">
                            <div class="demo-title">Material Status</div>
                            <div class="content-demo-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">Never Married</div>
                                  <div class="">Widowed</div>
                                  <div class="">Cohabiting</div>
                                  <div class="">Divorced or Separated</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="color-codes">
                                  <div class="">45.8%</div>
                                  <div class="">37.5%</div>
                                  <div class="">46%</div>
                                  <div class="">42%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="demo-array-div">
                            <div class="demo-title">Poverty Status</div>
                            <div class="content-demo-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">$11,770 or less</div>
                                  <div class="">$11,770-$23,540</div>
                                  <div class="">$23,540-$47,080</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="color-codes">
                                  <div class="">32.4%</div>
                                  <div class="">34.9%</div>
                                  <div class="">4.34</div>
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
          </div>
        </div>
      </div>
    </div>

    <div class="smallScreenBranding">
      <div
        class="brandingGridContainer2 positionInherit"
        style="margin: 10px 0px 0px 10px"
      >
        <div class="backdropContent_Collection" v-if="hideMe">
          <div class="brandingTopMenuDiv">
            <div class="articleHeaderDivBrandingAgile">
              Agile Fitness <br />
            </div>
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
                        src="./../../../assets/images/agile/agile2.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText">Agile</div>
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
                        src="./../../../assets/images/agile/yoga.jpg"
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
                        src="./../../../assets/images/agile/kick.jpg"
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
                        src="./../../../assets/images/agile/oneleg.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText up40">
                      Typo <br />
                      graphy
                    </div>
                  </div>
                  <div
                    class="nextViewMenuDiv"
                    @click="showContainer(demoInput)"
                  >
                    <div class="nextViewMenuImgDiv">
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/jump.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText up40">Demo <br />graphies</div>
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
                      @click="showContainer(socialInput)"
                    >
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/agile7.1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText up40">
                      App <br />
                      Design
                    </div>
                  </div>
                  <div class="nextViewMenuDiv">
                    <div
                      class="nextViewMenuImgDiv"
                      @click="showContainer(manualInput)"
                    >
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/agile3.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText up40">
                      Brand <br />
                      Manual
                    </div>
                  </div>
                  <!-- <div class="nextViewMenuDiv">
                    <div
                      class="nextViewMenuImgDiv"
                      @click="showContainer(stationInput)"
                    >
                      <img
                        class="fullImg"
                        src="./../../../assets/images/agile/agile7.1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText" style="top: -40px !important">
                      Stationary Packet
                    </div>
                  </div> -->
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
        v-if="!hideMe"
        class="brandingGridContainerSmallScreen"
        style="margin: 10px 0px 0px 10px; overflow: hidden !important"
      >
        <div class="backdropContentBrandingGrid">
          <div class="container">
            <div class="agileBrand" v-if="grid">
              <div class="brandGridHomeDiv">
                <div class="articleHeaderDivBrandingMd">Agile's Brand</div>
                <div class="articleHeaderDivBrandingsx">Development</div>

                <div class="brandGridHomeBOdy">
                  Welcome and explore Agile Fitness's brand basics and visual
                  elements. Explore the brand core values, visual assets from
                  the colors, typography, logos, customer demographics,
                  application design and more.
                </div>
              </div>
            </div>

            <div class="logo" v-if="logo">
              <div class="colors agileBg">
                <div class="color-pallette-content">
                  <div class="color-array">
                    <transition>
                      <div class="colorTitle">The Agile Logo</div>
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
                            signature is a combination of the symbol itself and
                            our company name – they have a fixed relationship
                            that should never be changed in any way.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small-logo-smallscreen">
                    <div class="wrapper-content-small-logo-smallscreen">
                      <div class="logo-whole-container">
                        <div class="logo-containter">
                          <div class="logo-single-div">
                            <div class="logo-img">
                              <img
                                src="./../../../assets/images/agile/agileWhiteLogo.png"
                                alt=""
                              />
                            </div>
                            <div class="logo-content-div">
                              <div class="logo-title covered-font">
                                Our Logo
                              </div>
                              <div class="logo-body">
                                The cornerstone of our brand, out logo. Notice
                                instead of an "A" there is Prism. The Prism
                                combined with the remaining letter together
                                create our logo.
                              </div>
                            </div>
                          </div>
                          <div class="logo-single-div">
                            <div class="logo-img">
                              <img
                                src="./../../../assets/images/agile/agileOutlineLogo.png"
                                alt=""
                              />
                            </div>
                            <div class="logo-content-div">
                              <div class="logo-title covered-font">
                                Outlined
                              </div>
                              <div class="logo-body">
                                The Outlined version of the logo is designed to
                                be used for branding events, posters, and any
                                other "swag" purposes.
                              </div>
                            </div>
                          </div>
                          <div class="logo-single-div">
                            <div class="logo-img">
                              <img
                                src="./../../../assets/images/agile/agileBlackLogo.png"
                                alt=""
                              />
                            </div>
                            <div class="logo-content-div">
                              <div class="logo-title covered-font">
                                Black Logo
                              </div>
                              <div class="logo-body">
                                The all black version be used when the
                                background color is light.
                              </div>
                            </div>
                          </div>
                          <div class="logo-single-div">
                            <div class="logo-img-icon">
                              <img
                                src="./../../../assets/images/agile/aif@3x.png"
                                alt=""
                              />
                            </div>
                            <div class="logo-content-div">
                              <div class="logo-title covered-font">
                                Social Media Brand Mark
                              </div>
                              <div class="logo-body">
                                Will be used for an alternative to the full
                                color single logo on version social media
                                platforms.
                              </div>
                            </div>
                          </div>
                          <div class="logo-single-div">
                            <div class="logo-img">
                              <img
                                src="./../../../assets/images/agile/agileBlackLogo.jpg"
                                alt=""
                              />
                            </div>

                            <div class="logo-content-div">
                              <div class="logo-title covered-font">
                                Logo Spacing
                              </div>
                              <div class="logo-body">
                                The spacing and prepositions are key when
                                depicting the logo. This guild can be used as
                                reference.
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
                  <div class="outer-wrapper-content-small-smallscreen">
                    <div class="wrapper-content-small-type">
                      <div class="type-div-first">
                        <div class="type-container">
                          <div class="abText covered-font">AaBbCc</div>
                          <div class="aphlaText covered-font">
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                            abcdefghijlmnopqrstvuwxyz <br />
                            `~!@#$%^?,./:"{}[]*()_+-=
                          </div>
                          <div class="type-info-title title-short covered-font">
                            COVERED BY YOUR GRACE
                          </div>
                          <div class="type-span">
                            Covered By Your Grace is based on the adorable
                            handwriting of a very sweet teacher friend.
                            <div class="type-span-span">
                              Used for logo and / or as accent font for print
                              and digital media when appliciable.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="type-div">
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
                            goal is to rescue and set it free.
                            <div class="type-span-span">
                              Used for standard corporate font.
                            </div>
                          </div>
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
                      <div class="colorTitle">Spry Color Pallette</div>
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
                            Give me life! Give me energy! Get me motivated!
                            <br />
                            This color palette has been designed to excite the
                            senses, get you moving, and make you smile. The Spry
                            Color Palette balances bright bubbly colors with
                            warm supportive tones.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small-color-smallscreen">
                    <div class="wrapper-content-small-color-smallscreen">
                      <div class="color-array nopadding">
                        <div class="color-array-container">
                          <div class="color-array-div">
                            <div class="color-title">Courageous Cablt</div>

                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : 00617E</div>
                                  <div class="">CMYK : 49% 11% 0% 51%</div>
                                  <div class="">RGB : 0 97 126</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div
                                  class="
                                    content-color-colors-1
                                    hoverMeNote
                                    cobalt
                                  "
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Phoenix Red</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : 960935</div>
                                  <div class="">CMYK : 0% 55% 38% 41%</div>
                                  <div class="">RGB : 150 9 53</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div
                                  class="content-color-colors-1 cherry"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Noble Orange</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : F57F28</div>
                                  <div class="">CMYK: 0% 46% 80% 4%</div>
                                  <div class="">RGB : 245 127 40</div>
                                </div>
                              </div>

                              <div class="content-color-right">
                                <div
                                  class="content-color-colors-1 orange"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Recharge Yellow</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : FEEB92</div>
                                  <div class="">CMYK: 0% 7% 42% 0%</div>
                                  <div class="">RGB : 254 235 146</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div
                                  class="content-color-colors-1 yellow"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Hope Blue</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : AAEFFF</div>
                                  <div class="">CMYK: 933% 6% 0% 0%</div>
                                  <div class="">RGBA : 170 239 255</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="content-color-colors-1 lBlue"></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title">Slate White</div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">HEX : F9FFFE</div>
                                  <div class="">CMYK : 2% 0% 0% 0%</div>
                                  <div class="">RGB : 249 255 254</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div
                                  class="content-color-colors-1 eShell"
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
                  <div class="color-array">
                    <transition>
                      <div class="colorTitle">Fitness Application Design</div>
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
                            Keep track! Stay motivate! Stay connected!
                            <br />
                            Our Fitness App has been design to keep track of
                            your tailored fitness journey. As well as, hundreds
                            of workout playlists to stay motivated and
                            entertained.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small-smallscreen">
                    <div class="wrapper-content-small">
                      <div class="color-array nopadding">
                        <div class="grid-layout-small">
                          <div class="grid-item grid-item-1">
                            <img
                              src="./../../../assets/images/agile/agile7.jpg"
                              alt=""
                            />
                          </div>
                          <div class="grid-item span-2 grid-item-2">
                            <img
                              src="./../../../assets/images/agile/agile6_1.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-3">
                            <img
                              src="./../../../assets/images/agile/agile8.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-4">
                            <img
                              src="./../../../assets/images/agile/agile6.jpg"
                            />
                          </div>

                          <div class="grid-item grid-item-2">
                            <img
                              src="./../../../assets/images/agile/agile6_1.jpg"
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
                  <div class="color-array">
                    <transition>
                      <div class="colorTitle">Agile's Brand Manual</div>
                    </transition>
                    <div class="color-bar-agile"></div>
                    <div class="colorSubDiv">
                      <div class="colorSubDivLeft">
                        <div class="color-sup-text">EXCITING</div>
                        <div class="color-sup-text">PLESANT</div>
                        <div class="color-sup-text">BOLD</div>
                      </div>
                      <div class="colorSubDivRight">
                        <div class="color-array-intro-body">
                          <div class="color-array-intro-body-text">
                            Take a look! <br />
                            Sneak a peak at our tailored guidelines. Agile's
                            Brand Manual lays out the brand and the approved
                            visual elements, colors, typography, as well as the
                            brand values, vision, and our brand promised.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small-smallscreen">
                    <div class="wrapper-content-small">
                      <div class="color-array nopadding">
                        <div class="grid-layout-small-manual">
                          <div class="grid-item span-2 grid-item-2">
                            <img
                              src="./../../../assets/images/agile/agileux5.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-3">
                            <img
                              src="./../../../assets/images/agile/agileux6.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-4">
                            <img
                              src="./../../../assets/images/agile/agileux7.jpg"
                            />
                          </div>
                          <div class="grid-item span-2 grid-item-5">
                            <img
                              src="./../../../assets/images/agile/agileux8.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-6">
                            <img
                              src="./../../../assets/images/agile/agileux9.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-7">
                            <img
                              src="./../../../assets/images/agile/agileux10.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-1">
                            <img
                              src="./../../../assets/images/agile/agileux14.jpg"
                              alt=""
                            />
                          </div>
                          <div class="grid-item grid-item-1">
                            <img
                              src="./../../../assets/images/agile/agileux32.jpg"
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

            <div class="colors" v-if="demo">
              <div class="colors agileBg">
                <div class="color-pallette-content">
                  <div class="color-array">
                    <transition>
                      <div class="colorTitle">Customer Demographies</div>
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
                            Agile Fitness is a tailor fitness journey for
                            everyone!
                            <br />

                            We don’t have a target market or demographic that we
                            cater to exclusively. Our mission is to build a
                            fitness plan and tailor it to the everyday desires
                            and demands. This infographic display the highest
                            percent of each group surveyed by the CDC.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="outer-wrapper-content-small-demo">
                    <div class="wrapper-content-small-demo">
                      <div class="color-array nopadding">
                        <div class="demo-array-container">
                          <div class="demo-array-div">
                            <div class="demo-title">Education</div>

                            <div class="content-demo-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">> Graduate degree</div>

                                  <div class="">High School Graduate</div>
                                  <div class="">AA Degree</div>
                                  <div class="">BA or MA Degree</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="color-codes">
                                  <div class="">50.4%</div>
                                  <div class="">43.9%</div>
                                  <div class="">46%</div>
                                  <div class="">42%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="demo-ppl-array-div span-demo-2">
                            <div class="demo-title" style="text-align: center">
                              Joe & Jane
                            </div>
                            <div class="content-demo-ppl-div">
                              <img
                                src="./../../../assets/images/agile/demoppl.png"
                              />
                            </div>
                          </div>
                          <div class="demo-array-div">
                            <div class="demo-title">Age</div>
                            <div class="content-demo-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">25-44 years</div>
                                  <div class="">45-64 years</div>
                                  <div class="">65-74 years</div>
                                  <div class="">74+ years</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="color-codes">
                                  <div class="">50.4%</div>
                                  <div class="">43.9%</div>
                                  <div class="">46%</div>
                                  <div class="">42%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="demo-array-div">
                            <div class="demo-title">Race</div>
                            <div class="content-demo-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">Pacific Islander</div>
                                  <div class="">Black or AA</div>
                                  <div class="">White</div>
                                  <div class="">Latino</div>
                                </div>
                              </div>

                              <div class="content-color-right">
                                <div class="color-codes">
                                  <div class="">28.9%</div>
                                  <div class="">34.6%</div>
                                  <div class="">46%</div>
                                  <div class="">42%</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="demo-array-div">
                            <div class="demo-title">Geographic Region</div>
                            <div class="content-demo-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">Northeast</div>
                                  <div class="">Midwest</div>
                                  <div class="">South</div>
                                  <div class="">North</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="color-codes">
                                  <div class="">44.8%</div>
                                  <div class="">26.4%</div>
                                  <div class="">6%</div>
                                  <div class="">42%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="demo-array-div">
                            <div class="demo-title">Material Status</div>
                            <div class="content-demo-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">Never Married</div>
                                  <div class="">Widowed</div>
                                  <div class="">Cohabiting</div>
                                  <div class="">Divorced or Separated</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="color-codes">
                                  <div class="">45.8%</div>
                                  <div class="">37.5%</div>
                                  <div class="">46%</div>
                                  <div class="">42%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="demo-array-div">
                            <div class="demo-title">Poverty Status</div>
                            <div class="content-demo-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div class="">$11,770 or less</div>
                                  <div class="">$11,770-$23,540</div>
                                  <div class="">$23,540-$47,080</div>
                                </div>
                              </div>
                              <div class="content-color-right">
                                <div class="color-codes">
                                  <div class="">32.4%</div>
                                  <div class="">34.9%</div>
                                  <div class="">4.34</div>
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
  name: "Agile",
  data() {
    return {
      demoInput: "demo",
      demo: false,
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
        this.demo = false;
        this.hideMe = !this.hideMe;
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
        this.demo = false;
        this.hideMe = !this.hideMe;
        return;
      } else if (input == "type") {
        this.type = true;
        this.logo = false;
        this.color = false;
        this.social = false;
        this.grid = false;
        this.manual = false;
        this.station = false;
        this.demo = false;
        this.hideMe = !this.hideMe;
        return;
      } else if (input == "color") {
        this.color = true;
        this.logo = false;
        this.type = false;
        this.social = false;
        this.grid = false;
        this.manual = false;
        this.station = false;
        this.demo = false;
        this.hideMe = !this.hideMe;
        return;
      } else if (input == "social") {
        this.social = true;
        this.logo = false;
        this.type = false;
        this.color = false;
        this.grid = false;
        this.manual = false;
        this.station = false;
        this.demo = false;
        this.hideMe = !this.hideMe;
        return;
      } else if (input == "manual") {
        this.manual = true;
        this.logo = false;
        this.type = false;
        this.color = false;
        this.grid = false;
        this.social = false;
        this.station = false;
        this.demo = false;
        this.hideMe = !this.hideMe;
        return;
      } else if (input == "station") {
        this.station = true;
        this.logo = false;
        this.type = false;
        this.color = false;
        this.grid = false;
        this.manual = false;
        this.social = false;
        this.demo = false;
        this.hideMe = !this.hideMe;
        return;
      } else if (input == "demo") {
        this.demo = true;
        this.logo = false;
        this.type = false;
        this.color = false;
        this.grid = false;
        this.manual = false;
        this.social = false;
        this.station = false;
        this.hideMe = !this.hideMe;
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
  grid-template-columns:
    minmax(204px, 1fr) minmax(204px, 1fr) minmax(204px, 1fr)
    minmax(204px, 1fr);
  grid-gap: 4px;
  grid-auto-columns: minmax(100px, auto);
  grid-auto-flow: dense;
  padding: 1px;
  grid-template-rows: 25vh 25vh;
}
.grid-layout-small-manual {
  display: grid;
  grid-template-columns:
    minmax(204px, 1fr) minmax(204px, 1fr) minmax(204px, 1fr)
    minmax(204px, 1fr) minmax(204px, 1fr) minmax(204px, 1fr) minmax(204px, 1fr);
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