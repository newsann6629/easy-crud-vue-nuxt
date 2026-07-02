export const req = async(cb) => {
    try{
        const data = await cb()
        return{ok:true,data}
    }catch(err){
        console.log(err)
        return{ok:false,err}
    }
}