<template>
    <div>
        <h2>Welcome to user</h2>

        <input
            v-model="newMessage"
            placeholder="พิมพ์ข้อความ..."
        />

        <button @click="addMessage">
            Add
        </button>

        <hr>

        <div
            v-for="item in text"
            :key="item.id"
            style="margin-bottom:20px"
        >
            <textarea v-model="item.content" rows="3" cols="50" ></textarea>

            <br>

            <button @click="save(item)">
                Save
            </button>

            <button @click="remove(item.id)">
                Delete
            </button>
        </div>

        <button @click="logout">
            Logout
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useService } from "~/composable/Service"

const {
    getd,logout,getdata,createMessage,updateMessage,deleteMessage} = useService()

const text = ref([""])
const newMessage = ref("")

const loadData = async () => {
    const res = await getd()
    console.log(res)
    text.value = res
}

onMounted(loadData)

const addMessage = async () => {
    if (!newMessage.value.trim()) return

    const res = await createMessage(newMessage.value)

    if (res.ok) {
        newMessage.value = ""
        await loadData() // โหลดรายการใหม่
    }
}

const save = async (item) => {
    await updateMessage(item.id, item.content)
}

const remove = async (id) => {
    const res = await deleteMessage(id)

    if (res.ok) {
        text.value = text.value.filter(item => item.id !== id)
    }
}
</script>