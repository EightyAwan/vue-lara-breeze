import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue';
import { useAuthStore } from "../stores/auth";

const routes = [
    { 
        path: "/", 
        name: "Home",  
        component: Home 
    },
    { 
        path: "/login", 
        name: "Login", 
        component: () => import("../components/Login.vue") 
    },
    { 
        path: "/regiter", 
        name: "Register", 
        component: () => import("../components/Register.vue") 
    },
    { 
        path: "/forget-password", 
        name: "ForgotPassword", 
        component: () => import("../components/ForgotPassword.vue") 
    },
    { 
        path: "/password-reset/:token", 
        name: "PasswordReset",
        component: () => import("../components/ResetPassword.vue") 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
 
export default router;