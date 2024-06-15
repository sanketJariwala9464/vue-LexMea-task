<template>
    <div class="container py-10">
        <div class="flex gap-3 items-center">
            <h1 class="text-5xl font-bold mb-0 text-white">Rooms</h1>
            <a-button class="btn !bg-red-900"  @click="isOpenForm = true">Add new Room</a-button>
        </div>
        <div class="py-10 grid grid-cols-6 gap-4">
            <RoomCard v-for="(room, rIndex) in rooms" :key="rIndex" :room="room"/>
        </div>
        <add-form />
        <GuestDropdown />
    </div>
</template>

<script setup lang=ts>
import { useRoom } from '@/use/room';
import { onMounted } from 'vue';

const { isOpenForm, getRooms, rooms } = useRoom();

onMounted(() => {
    getRooms();
});

</script>