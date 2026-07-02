export const req = async(cb) => {
    try{
        const data = await cb()
        return{ok:true,data}
    }catch(err){
        alert(err.response.data.message)
        return{ok:false,err}
    }
}