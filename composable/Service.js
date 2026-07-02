import axios from "axios"
import { api } from "./api"
import { req } from "./request"
import { useUserStore } from "./UserStore"



export const useService = () => {

    const http = api()
    const store = useUserStore()
    const go = useRouter()

    const example = async(u,p)=>{
        if(u == "" || p == ""){
            console.log("ค่าว่าง")
            return
        }
        try{
            console.log(u,p)
        }catch(err){
            console.log(err)
        }
    }

    const loginbasic = async(u,p)=>{
        try{
            const res = await axios.post("http://localhost:5000/api/auth/login",{
            identity:u,
            password:p,
        })
            store.SetUser(res.data.data.token)
            alert("login success")
            go.push("/user")
        }catch(err){
            alert(err)
        }
    }

    const loginadvance = (u,p) => req(async() => {
        const res = await http.post("auth/login",{
            identity:u,
            password:p,
        })
        store.SetUser(res.data.data.token)
        go.push("/user")
    })

    const register = (u,p,e) => req(async() =>{
        const res = await http.post("auth/register",{
            username:u,
            password:p,
            email:e,
        })
        console.log(res)
    })

    const getdata = () => req(async() =>{
        const res = await http.get("messages")
        return(res.data.data)
    })

    const logout = () =>{
        store.Logout
        go.push("/")
    }

    const updateMessage = (id, content) => req(async () => {
    const res = await http.put(`messages/${id}`, {
        content
    })
    return res.data
    })

    const deleteMessage = (id) => req(async () => {
    const res = await http.delete(`messages/${id}`)
    return res.data
    })

    const createMessage = (content) => req(async () => {
    const res = await http.post("messages", {
        content
    })

    return res.data
    })

    return {
        createMessage,
        updateMessage,
        deleteMessage,
        getdata,
        register,
        logout,
        example,
        loginbasic,
        loginadvance
    }
}