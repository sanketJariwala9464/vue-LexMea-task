<template>
    <div class="bg-white p-5 rounded-lg">
        <div class="flex flex-col justify-between gap-4">
            <div class="">
                <div>{{ props.guest.full_name }}</div>
            </div>
            <div v-if="props.guest.rooms.length > 0">
                Room : {{ props.guest.rooms.map(room => room.room_number).join(', ') }}
            </div>
            <div class="w-full flex justify-between gap-2">
                <a-button class="btn !bg-red-900 w-full" @click="handleEdit">Edit</a-button>
                <a-popconfirm
                    title="Are you sure delete this task?"
                    ok-text="Yes"
                    cancel-text="No"
                    @confirm="deleteGuest(props.guest.id)"
                >
                    <a-button class="btn !bg-red-900 w-full">Delete</a-button>
                </a-popconfirm>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface RoomProps {
    id: number;
    floor_number: number;
    capacity: number;
    status: string;
    room_number: number;
}

interface GuestCardProps {
    guest: {
        id: number;
        full_name: string;
        age: number;
        rooms: RoomProps[]
    }
}   

import { defineProps } from 'vue';
import { useGuests } from '@/use/guest';

const props = defineProps<GuestCardProps>();

const { getSingleGuest, deleteGuest } = useGuests();

const handleEdit = () => {
    getSingleGuest(props.guest.id);
}

</script>