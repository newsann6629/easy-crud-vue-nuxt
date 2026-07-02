<template>
    <div>
        <!-- คำเตือนห้ามใช้ value กับ vmodel ใน tag เดียวกันมัน error -->
        <input type="text" v-model="username" placeholder="username"> <br>
        <input type="text" v-model="password" placeholder="password"> <br>
        <button type="submit" @click="example(username,password)">Example</button> <br>
        <button type="submit" @click="loginbasic(username,password)">Login Fr</button> <br>
        <button type="submit" @click="loginadvance(username,password)">Login a</button> <br>
        <nuxt-link to="register">register</nuxt-link>
    </div>
</template>

<script setup>
import { useService } from '~/composable/Service';    

const {example,loginbasic,loginadvance} = useService()



const username = ref("")
const password = ref("")
// ประกาศตัวแปลแบบstring

const arrayex = ref(["new","ten","pee"])
// ประกาศตัวแปลแบบarray



onMounted(() => {
    // ใช้โหลดข้อมูล เช่น เรียก API เมื่อเปิดหน้านี้
    // ง่ายๆใช้โหลดข้อมูล
})
</script>

<style lang="scss" scoped>

</style>