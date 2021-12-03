import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        mainMenu: [{
                H1: "Branding",
                H2: "Menu",
                S1: "UX UI "
            },
            {
                H1: "Logo",
                H2: "Menu",
                S1: "Vectors "
            },
            {
                H1: "Mag",
                H2: "Menu",
                S1: "Editorials "
            },
            {
                H1: "Packaging",
                H2: "Menu",
                S1: "look but dont touch "

            }
        ],

        brandingMenu: [{
                H1: "Agile",
                H2: "Branding",
                S1: "UX UI ",
                pageContent: [{

                        coreWords: "fast easy safe trust limitless freedom",
                        subOne: "hello alta, goodbye cash",
                        desOne: "ALTA is a digital payment club for cash-intensive industries where businesses pay each other using digital tokens instead of cash. As a cash-intensive business, you deserve a partner that understands your unique needs and anticipates the protections you’ll need to operate your business. Alta enables you to receive and make payments 24/7, you can also sell your tokens for dollars which are then deposited into a bank account of your choice, thus empowering your business to reach new heights.",
                        subTwo: "sub texxt",
                        desTwo: "sub sub text"
                    },
                    {
                        colors: 'red',
                        type: 'typeface'
                    }
                ],






            },
            {
                H1: "Alta",
                H2: "Brading",
                S1: "Vectors "
            },
            {
                H1: "Mag",
                H2: "Menu",
                S1: "Editorials "
            },
            {
                H1: "Packaging",
                H2: "Menu",
                S1: "look but dont touch "

            }
        ]
    },
    getters: {

    },
    mutations: {},
    actions: {},
    modules: {}
})