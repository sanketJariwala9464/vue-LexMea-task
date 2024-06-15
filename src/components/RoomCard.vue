<template>
    <div class="bg-white p-5 rounded-lg">
        <div class="flex flex-col justify-between gap-4">
            <h1 class="text-3xl">Room # {{ props.room.room_number }}</h1>
            <div class="">
                <div>Capacity : {{ props.room.capacity }}</div>
                <div>Status : {{ props.room.status }}</div>
            </div>
            <div v-if="props.room.guests.length > 0">
                Guests : {{ props.room.guests[0].full_name }}
            </div>
            <div class="w-full">
                <a-button class="btn w-full" @click="assignRoom">
                    <template v-if="props.room.status === 'READY'">
                        Assign Room
                    </template>
                    <template v-else-if="props.room.status === 'TAKEN'">
                        Room Empty
                    </template>
                    <template v-else>
                        Set as Ready
                    </template>
                </a-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface GuestProps {
    id: number;
    full_name: string;
    age: number;
}

interface RoomCardProps {
    room: {
        id: number;
        floor_number: number;
        capacity: number;
        status: string;
        room_number: number;
        guests: GuestProps[]
    }
}
import { defineProps } from 'vue';
import { useGuests } from '@/use/guest';
import { useRoom } from '@/use/room';

const props = defineProps<RoomCardProps>();

const { getAllGuests } = useGuests();
const { assignGuestData, isOpenGuestDropdown, handleAssign } = useRoom();

const assignRoom = async () => {
    assignGuestData.value.roomId = props.room.id
    if (props.room.status === 'READY') {
        await getAllGuests();
        isOpenGuestDropdown.value = true;
    } else if (props.room.status === 'TAKEN') {
        assignGuestData.value.guest_id = props.room.guests[0].id;
        await handleAssign();
    } else {
        await handleAssign();
    }
}
</script>