<template>
    <div>
        <input type="text" v-model="username" placeholder="username"> <br>
        <input type="text" v-model="email" placeholder="email"> <br>
        <input type="text" v-model="password" placeholder="password"> <br>
        <button type="submit" @click="register(username,password,email)">submit</button> <br>
        <nuxt-link to="/">login</nuxt-link>
    </div>
</template>

<script setup>
import { useService } from '~/composable/Service';

const {register} = useService()

const username = ref("")
const email = ref("")
const password = ref("")

</script>

<style lang="scss" scoped>

</style>