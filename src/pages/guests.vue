<template>
    <div class="container py-10">
        <div class="flex gap-3 items-center">
            <h1 class="text-5xl font-bold mb-0 text-white">Guests</h1>
            <a-button class="btn !bg-red-900" @click="isOpenForm = true">Add new guest</a-button>
        </div>
        <div class="py-10 grid grid-cols-6 gap-4">
            <GuestCard v-for="(guest, gIndex) in guests" :key="gIndex" :guest="guest"/>
        </div>
        <add-guest-form />
    </div>
</template>

<script setup lang=ts>
import { useGuests } from '@/use/guest';
import { onMounted } from 'vue';

const { isOpenForm, getAllGuests, guests } = useGuests();

onMounted   (() => {
    getAllGuests();
});

</script>