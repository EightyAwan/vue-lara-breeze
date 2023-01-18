import { defineStore } from "pinia";
import axios  from "axios"; 

export const useAuthStore = defineStore("auth",{
    state: () => ({
        authUser: null,
        authErrors: null,
        authSuccess: null,
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        success: (state) => state.authSuccess,
    },
    actions: {
        async getToken(){
            await axios.get('/sanctum/csrf-cookie'); 
        },
        async getUser(){
            await this.getToken();
            const data = await axios.get('/api/user'); 
            this.authUser = data.data;
        },
        async handleLogin(data){
            this.authErrors = [];
            await this.getToken(); 
            try{
                await axios.post('/login',{
                    email: data.email,
                    password: data.password,
                }); 
                this.router.push('/');  
            }catch(errors){
                if(errors.response.status === 422){
                    this.authErrors = errors.response.data.errors;
                }
            } 
            
        },
        async handleRegister(data){
            this.authErrors = [];
            await this.getToken();   
            try{
                await axios.post('/register',{
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation, 
                }); 
                this.router.push('/');   
            }catch(errors){
                if(errors.response.status === 422){
                    this.authErrors = errors.response.data.errors;
                }
            } 


        },
        async handleLogout(){
            await this.getToken();
            await axios.post('/logout'); 
            this.authUser = null;
        },
        async handleForgotPassword(email){
            this.authErrors = [];
            this.authSuccess = [];
            await this.getToken(); 
            try{
                await axios.post("/forgot-password",{
                    email: email.email
                }); 
                this.authSuccess = "We have sent you reset password link on your email.";
            }catch(errors){
                if(errors.response.status === 422){
                    this.authErrors = errors.response.data.errors;
                }
            } 
 
        }
 
    },

});