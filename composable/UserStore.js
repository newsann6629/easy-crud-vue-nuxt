import { jwtDecode } from "jwt-decode";
import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore",{
    state:() => ({
        token: null,
        id: null,
        user: null,
    }),
    actions: {
        SetUser(token){
            if(typeof window != 'undefined'){
                localStorage.setItem("token",token)
                this.token = localStorage.getItem("token")
                this.user = jwtDecode(this.token)
                this.id = this.user.id
            }
        },
        LoadUser() {
            if (typeof window === "undefined") return
                this.token = localStorage.getItem("token")
            if (!this.token) {
                return
            }
            this.user = jwtDecode(this.token)
            this.id = this.user.id
        },
        Logout(){
            if(typeof window != 'undefined'){
                localStorage.removeItem("token")
                this.token = "notoken"
                this.user = null
                this.id = null
            }
        }
    }
})