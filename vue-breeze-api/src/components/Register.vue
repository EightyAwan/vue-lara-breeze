<script setup>
import { ref } from "vue"; 
import { useAuthStore } from "../stores/auth";

const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
});
const authStore = useAuthStore(); 
authStore.authSuccess=null; 
</script>
<template> 

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up to your account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
      </p>
    </div>
    <form class="mt-8 space-y-6" @submit.prevent="authStore.handleRegister(form)">
      <input type="hidden" name="remember" value="true">
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email-address" class="sr-only">Name</label>
          <input id="name" v-model="form.name" name="name" type="text" autocomplete="name" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Name">
          <div v-if="authStore.errors?.name" class="flex">
             <span class="text-red-400 text-sm m-2 p-2">
              {{ authStore.errors.name[0] }}
            </span>
          </div>
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" v-model="form.email" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address">
          <div v-if="authStore.errors?.email" class="flex">
             <span class="text-red-400 text-sm m-2 p-2">
              {{ authStore.errors.email[0] }}
            </span>
          </div>
        </div> 
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" v-model="form.password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password">
          <div v-if="authStore.errors?.password" class="flex">
             <span class="text-red-400 text-sm m-2 p-2">
              {{ authStore.errors.password[0] }}
            </span>
          </div>
        </div>
        <div>
          <label for="password" class="sr-only">Password Confirmation</label>
          <input id="password"
          v-model="form.password_confirmation" 
          name="password" 
          type="password" 
          autocomplete="current-password" 
          required 
          class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
          placeholder="Password Confirmation">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">
          <router-link :to="{name: 'Login'}" class="font-medium text-indigo-600 hover:text-indigo-500">Already have an account ?</router-link>
        </div>
      </div>
      <div class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md" v-if="authStore.success?.status"> 
              {{ authStore.success.status }} 
      </div> 
      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <!-- Heroicon name: mini/lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign up
        </button>
      </div>
    </form>
  </div>
</div>
</template>