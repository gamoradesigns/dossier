<template>
  <div class="articleContainer"  >
    <!-- background images  -->

    <img
       
      class="bgImg"
      src="./../../../assets/images/resizeLONG/branding/manual/agile/agile8.jpg"
      alt=""
    />
    <!-- nav -->
    <div class="articleMenuContainer">
      <div class="beauty beautyText"  >beauty.</div>
      <div class="articleMenu">
        <router-link to="/main"  >
          <div class="articleMenuText">home</div></router-link
        >
        <router-link to="/logoMenu"  >
          <div class="articleMenuText">logos</div></router-link
        >
        <router-link to="/packageMenu"  >
          <div class="articleMenuText">packaging</div></router-link
        >
        <router-link to="/magMenu"  >
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
        <div class="backdropContent_Collection"  >
          <div class="brandingTopMenuDiv">
            <div
              class="articleHeaderDivBrandingAgile"
               
           
            >
              Agile Fitness <br />
            </div>
            <div
              class="articleHeaderDivBrandingLgAgile"
               
            
            >
              Visiual Menu
            </div>
          </div>
          <div class="brandingBottomMenuContainer">
            <div class="brandingBottomMenuDiv">
              <div class="packageSubHeaderContainer">
                <div
                  class="brandingSubHeaderDiv"
                   
               
                >
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
                        src="./../../../assets/images/resizeLONG/branding/manual/agile/agile2.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText">Agile</div>
                  </div>
                </div>
                <div
                  class="brandingSubHeaderDiv"
                   
     
                >
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
                        src="./../../../assets/images/resizeLONG/branding/manual/agile/yoga.jpg"
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
                        src="./../../../assets/images/resizeLONG/branding/manual/agile/kick.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText">colors</div>
                  </div>
                
                </div>
                  <div class="brandingMenuRow">
               
                  <div
                    class="nextViewMenuDiv"
                    @click="showContainer(colorInput)"
                  >
                    <div class="nextViewMenuImgDiv">
                      <img
                        class="fullImg"
                        src="./../../../assets/images/resizeLONG/branding/manual/agile/kick.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText">colors</div>
                  </div>
                  <div
                    class="nextViewMenuDiv"
                    @click="showContainer(typeInput)"
                  >
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
                   
                
                >
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
                        src="./../../../assets/images/resizeLONG/branding/manual/agile/agile7.1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText" style="top: -40px !important">
                      App Design
                    </div>
                  </div>
                  <div class="nextViewMenuDiv">
                    <div
                      class="nextViewMenuImgDiv"
                      @click="showContainer(manualInput)"
                    >
                      <img
                        class="fullImg"
                        src="./../../../assets/images/resizeLONG/branding/manual/agile/pplwtire.jpg"
                        alt=""
                      />
                    </div>
                    <div class="nextViewText" style="top: -40px !important">
                      Brand Manual
                    </div>
                  </div>
                  <!-- <div class="nextViewMenuDiv">
                    <div
                      class="nextViewMenuImgDiv"
                      @click="showContainer(stationInput)"
                    >
                      <img
                        class="fullImg"
                        src="./../../../assets/images/resizeLONG/branding/manual/agile/agile7.1.jpg"
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
        class="brandingGridContainer positionInherit"
        style="margin: 10px 0px 0px 10px; overflow: hidden !important"
      >
        <div class="backdropContentBrandingGrid">
             <div class="container">
              <div class="agileBrand" v-if="grid">
           <div class="brandGridHomeDiv">
             <div class="articleHeaderDivBrandingMd">
              Agile Brand 
             </div>
             <div class="articleHeaderDivBrandingsx">
               Development
             </div>

             <div class="brandGridHomeBOdy">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
               Itaque pariatur fugiat eum ipsa porro possimus quo qui consequatur aut! Inventore 
               hic ducimus numquam, quis ullam voluptate voluptatum exercitationem architecto assumenda?</div>
           </div>
            </div>
     
        
            <div class="logo" v-if="logo">
                
              <div class="colors agileBg">
                <div class="color-pallette-content">
                  <div class="color-array">
                    <transition>
                      <div
                        class="colorTitle"
                          
            
                      >
                        The Agile Logo
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
                          Fun <br />
                        </div>
                        <div
                          class="color-sup-text"
                           
                 
                        >
                          energtic
                        </div>
                        <div
                          class="color-sup-text"
                           
                    
                        >
                          supportive
                        </div>
                      </div>
                      <div class="colorSubDivRight">
                        <div
                          class="color-array-intro-body"
                            
                
                        >
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
                  <div class="outer-wrapper-content-small">
                    <div class="wrapper-content-small">
                      <div class="color-array">
                        <div class="logo-whole-container">
                          <div class="logo-containter">
                            <div class="logo-single-div logo-first-single"   
                       >
                              <div
                                class="logo-title mont-font"
                              
                              >
                                the Agile Logo
                              </div>
                              <div
                                class="logo-img"
                    
                              >
                                <img
                                  src="./../../../assets/images/agile/agileBlackLogo.png"
                                  alt=""
                                />
                              </div>
                              <div
                                class="logo-content-div logo-content-div-first"
                              >
                                <div
                                  class="logo-body"
                          
                                >
                                  Our Logo is the key building block of our
                                  identity, the primary visual element that
                                  identifies us. The signature is a combination
                                  of the the symbol itself and our company name
                                  – they have a fixed relationship that should
                                  never be changed in any way.
                                </div>
                              </div>
                            </div>
                            <div class="logo-single-div"   
                      >
                              <div
                                class="logo-img"
                      
                              >
                                <img
                                  src="./../../../assets/images/agile/agileOutlineLogo.png"
                                  alt=""
                                />
                              </div>
                              <div class="logo-content-div">
                                <div
                                  class="logo-title mont-font"
                               
                                >
                                  Logo Spacing
                                </div>
                                <div
                                  class="logo-body"
                       
                                >
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Ullam molestias commodi
                                  suscipit obcaecati eligendi quis totam ipsam
                                  distinctio natu.
                                </div>
                              </div>
                            </div>
                            <div class="logo-single-div"   
            >
                              <div
                                class="logo-img"
                             
                              >
                                <img
                                  src="./../../../assets/images/agile/agileWhiteLogo.png"
                                  alt=""
                                />
                              </div>
                              <div class="logo-content-div">
                                <div
                                  class="logo-title mont-font"
                              
                                >
                                  White Logo
                                </div>
                                <div
                                  class="logo-body"
                        
                                >
                                  Will be used when the backround color is dark
                                </div>
                              </div>
                            </div>
                            <div class="logo-single-div"   
                    >
                              <div
                                class="logo-img"
                      
                              >
                                <img
                                  src="./../../../assets/images/agile/aif@3x.png"
                                  alt=""
                                />
                              </div>
                              <div class="logo-content-div">
                                <div
                                  class="logo-title mont-font"
                          
                                >
                                  Monoline Logo
                                </div>
                                <div
                                  class="logo-body"
                     
                                >
                                  Will be used for an alternative to the full
                                  color single logo.
                                </div>
                              </div>
                            </div>
                            <div class="logo-single-div"   
                    >
                              <div
                                class="logo-img"
                     
                              >
                                <img
                                  src="./../../../assets/images/agile/agileBlackLogo.jpg"
                                  alt=""
                                />
                              </div>

                              <div class="logo-content-div">
                                <div
                                  class="logo-title mont-font"
                    
                                >
                                  Black Monoline Logo
                                </div>
                                <div
                                  class="logo-body"
                                   
                            
                                >
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
            <div class="type " v-if="type">
              <div class="colors agileBg">
                <div class="color-pallette-content">
                  <div class="color-array">
                    <transition>
                      <div
                        class="colorTitle"
                         
                
                      >
                        Typography
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
                          exciting <br />
                        </div>
                        <div
                          class="color-sup-text"
                           
                        >
                          Plesant
                        </div>
                        <div
                          class="color-sup-text"
                           
                  
                        >
                          bold
                        </div>
                      </div>
                      <div class="colorSubDivRight">
                        <div
                          class="color-array-intro-body"
                           
           
                        >
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
                    <div class="wrapper-content-small-type"   
                      >
                      <div
                        class="type-container"
                       
                      >
                        <div class="type-info-div">
                          <div class="type-info-title title-short covered-font">
                            COVERED BY YOUR GRACE
                          </div>
                          <div class="type-span">
                            Covered By Your Grace is based on the adorable
                            handwriting of a very sweet teacher friend. The
                            whimsical curves and extensions are wonderful.
                            <div class="type-span">
                              Used for logo and / or as accent font for print
                              and digital media when appliciable.
                            </div>
                          </div>
                        </div>
                        <div class="text-example-div">
                          <div class="abText covered-font">AaBbCc</div>
                          <div class="aphlaText covered-font">
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                            abcdefghijlmnopqrstvuwxyz <br />
                            `~!@#$%^?,./:"{}[]*()_+-=
                          </div>
                        </div>
                      </div>
                      <div
                        class="type-container"
                    
                      >
                        <div class="type-info-div">
                          <div class="type-info-title title-short mont-font">
                            MONTSERRAT
                          </div>
                          <div class="type-span">
                            The old posters and signs in the traditional
                            neighborhood of Buenos Aires called Montserrat. The
                            goal is to rescue what is in Montserrat and set it
                            free, under a free, libre and open source license,
                            the SIL Open Font License
                            <div class="type-span">
                              Used for corporate font, body copy, press
                              releases, print and digital media when
                              appliciable.
                            </div>
                          </div>
                        </div>
                        <div class="text-example-div">
                          <div class="abText mont-font">AaBbCc</div>
                          <div class="aphlaText mont-font">
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                            abcdefghijlmnopqrstvuwxyz <br />
                            `~!@#$%^?,./:"{}[]*()_+-=
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
                      <div
                        class="colorTitle"
                         
                 
                      >
                        Spry Color Pallette
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
                          Fun <br />
                        </div>
                        <div
                          class="color-sup-text"
                           
                
                        >
                          energtic
                        </div>
                        <div
                          class="color-sup-text"
                           
                        >
                          supportive
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
                        <div class="color-array-container">
                          <div class="color-array-div">
                            <div
                              class="color-title"
                               
                            >
                             Coragous Cablt
                            </div>

                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div
                                    class=""
                                     
                                  >
                                    HEX : 00617E
                                  </div>
                                  <div
                                    class=""
                                     
                                  >
                                    CMYK : 49% 11% 0% 51%
                                  </div>
                                  <div
                                    class=""
                                  >
                                    RGB : 0 97 126
                                  </div>
                                </div>
                              </div>
                              <div
                                class="content-color-right"
                                 
                              >
                                <div
                                  class="content-color-colors-1 cobalt"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div class="color-title"  >
                              Phoenix Red
                            </div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div
                                    class=""
                                     
                                  >
                                    HEX : 960935
                                  </div>
                                  <div
                                    class=""
                                  >
                                    CMYK :  0% 55% 38% 41%
                                  </div>
                                  <div
                                    class=""
                                     
                                  >
                                    RGB : 150 9 53  
                                  </div>
                                </div>
                              </div>
                              <div
                                class="content-color-right"
                                 
                              >
                                <div
                                  class="content-color-colors-1 cherry"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div
                              class="color-title"
                               
                            >
                              Noble Orange
                            </div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div
                                    class=""
                                     
                                  >
                                    HEX : F57F28
                                  </div>
                                  <div
                                    class=""
                                     
                                  >
                                    CMYK: 0% 46% 80% 4%
                                  </div>
                                  <div
                                    class=""
                                     
                                  >
                                    RGB : 245 127 40 
                                  </div>
                                </div>
                              </div>

                              <div
                                class="content-color-right"
                                 
                              >
                                <div
                                  class="content-color-colors-1 orange"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div
                              class="color-title"
                               
                            >
                              Recharge Yellow
                            </div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div
                                    class=""
                                     
                                  >
                                    HEX : FEEB92
                                  </div>
                                  <div
                                    class=""
                                  >
                                    CMYK:  0% 7% 42% 0%
                                  </div>
                                  <div
                                    class=""
                                  >
                                    RGB : 254 235  146 
                                  </div>
                                </div>
                              </div>
                              <div
                                class="content-color-right"
                                 
                              >
                                <div
                                  class="content-color-colors-1 yellow"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div
                              class="color-title"
                            >
                              Hop Blue
                            </div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div
                                    class=""
                                  >
                                    HEX : AAEFFF
                                  </div>
                                  <div
                                    class=""
                                     
                                  >
                                    CMYK: 933% 6% 0% 0%
                                  </div>
                                  <div
                                    class=""
                                     
                                  >
                                    RGBA : 170 239 255
                                  </div>
                                </div>
                              </div>
                              <div
                                class="content-color-right"
           
                              >
                                <div class="content-color-colors-1 lBlue"></div>
                              </div>
                            </div>
                          </div>
                          <div class="color-array-div">
                            <div
                              class="color-title"
                               
                            >
                              Slate White
                            </div>
                            <div class="content-color-div">
                              <div class="content-color-left">
                                <div class="color-codes">
                                  <div
                                    class=""
                                     
                                  >
                                    HEX : F9FFFE
                                  </div>
                                  <div
                                    class=""
                                     
                                  >
                                    CMYK : 2% 0% 0% 0%
                                  </div>
                                  <div
                                    class=""
                                     
                                  >
                                    RGB : 249 255 254  
                                  </div>
                                </div>
                              </div>
                              <div
                                class="content-color-right"
                                 
                              >
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
                      <div
                        class="colorTitle"
                         
                      >
                       Fitness Application Design
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
                          Fun <br />
                        </div>
                        <div
                          class="color-sup-text"
                           
                        >
                          energtic
                        </div>
                        <div
                          class="color-sup-text"
                           
                        >
                          supportive
                        </div>
                      </div>
                      <div class="colorSubDivRight">
                        <div
                          class="color-array-intro-body"
                           
                        >
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
                      <div class="color-array">
                        <div class="grid-layout-small">
                          <div class="grid-item grid-item-1">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agile7.jpg"
                              alt=""
                            />
                          </div>
                          <div class="grid-item span-2 grid-item-2">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agile6_1.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-3">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agile8.jpg"
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
                  <div class="color-array">
                    <transition>
                      <div
                        class="colorTitle"
                         
                      >
                        Agile's Brand Manual
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
                          sneak <br />
                        </div>
                        <div
                          class="color-sup-text"
                           
                        >
                          a
                        </div>
                        <div
                          class="color-sup-text"
                           
                        >
                          peak
                        </div>
                      </div>
                      <div class="colorSubDivRight">
                        <div
                          class="color-array-intro-body"
                           
                        >
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
                    <div class="wrapper-content-small-manual" >
                      <div class="color-array">
                        <div class="grid-layout-small-manual">
                        
                          <div class="grid-item span-2 grid-item-2">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agileux5.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-3">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agileux6.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-4">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agileux7.jpg"
                            />
                          </div>
                          <div class="grid-item span-2 grid-item-5" >
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agileux8.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-6">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agileux9.jpg"
                            />
                          </div>
                          <div class="grid-item grid-item-7">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agileux10.jpg"
                            />
                          </div>
                            <div class="grid-item grid-item-1">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agileux14.jpg"
                              alt=""
                            />
                          </div>
                            <div class="grid-item grid-item-1">
                            <img
                              src="./../../../assets/images/resizeLONG/branding/manual/agile/agileux32.jpg"
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


  </div>
</template>

<script>
export default {
  name: "Agile",
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
  grid-template-columns: minmax(204px, 1fr) minmax(204px, 1fr) minmax(204px, 1fr) minmax(204px, 1fr);
  grid-gap: 4px;
  grid-auto-columns: minmax(100px, auto);
  grid-auto-flow: dense;
  padding: 1px;
  grid-template-rows: 25vh 25vh;
}
.grid-layout-small-manual {
 display: grid;
    grid-template-columns: minmax(204px, 1fr) minmax(204px, 1fr) minmax(204px, 1fr) minmax(204px, 1fr) minmax(204px, 1fr) minmax(204px, 1fr) minmax(204px, 1fr);
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
    backdrop-filter: blur(10px) brightness(0.95);
     padding: 0px 3%;
}
.colors, .type, .socialmedia, .logo {
  height: inherit;
}
.container {
    height: 100vh;
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