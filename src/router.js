import { createRouter,createWebHistory } from "vue-router";

import ListsCoaches from './pages/coaches/ListsCoaches.vue';
import DetailsCoach from './pages/coaches/DetailsCoach.vue';
import ContactCoach from './pages/coaches/ContactCoach.vue';
import Register from'./pages/Requests/Register.vue';
import Requests from './pages/Requests/Requests.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from "./pages/users/UserAuth.vue"
import store from "./store/index";

const router =createRouter({
    history:createWebHistory(),
    routes:[
        { path:'/',component: ListsCoaches},
        { path:'/coaches',component:ListsCoaches},

        { path:'/coaches/:id', props: true , component: DetailsCoach ,children:[     //coaches/c1
                { path:'contact',component: ContactCoach }      //coaches/c1/contact
            ]},
        
        
        { path:'/register',component:Register , meta:{requiredAuth:true} },
        { path:'/requests',component:Requests , meta:{requiredAuth:true}},
        {path:'/auth',component:UserAuth , meta:{requiredUnAuth:true} },
        { path:'/:notFound(.*)',component:NotFound},
    ]

});

router.beforeEach(function(to,_,next){
    if(to.meta.requiredAuth && !store.getters.isLoggedIn){
        next("./auth");
    }
    else if(to.meta.requiredUnAuth && store.getters.isLoggedIn){
        next("./coaches");
    }
    else{
        next();
    }
})

export default router;