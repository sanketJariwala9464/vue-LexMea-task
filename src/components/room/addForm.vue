<template>
    <a-modal v-model:open="isOpenForm" title="Add Room" @ok="handleOk">
        <a-form ref="roomForm" :model="roomParams" name="roomForm" autocomplete="off" layout="vertical" :rules="rules">
            <a-form-item label="Floor Number" name="floor_number">
                <a-input v-model:value="roomParams.floor_number" />
            </a-form-item>
            <a-form-item label="Room Number" name="room_number">
                <a-input v-model:value="roomParams.room_number" />
            </a-form-item>
            <a-form-item label="Capacity" name="capacity">
                <a-input v-model:value="roomParams.capacity" />
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script setup lang=ts>
import { useRoom } from '@/use/room';
import { ref } from 'vue';

const rules = ref({
    floor_number: [
        { required: true, message: 'Floor number is required', trigger: ['blur', 'change'] },
        { type: 'pattern', pattern: /^[0-9]+$/, message: 'Floor number must be a number', trigger: ['blur', 'change'] },
    ],
    room_number: [
        { required: true, message: 'Room number is required', trigger: ['blur', 'change'] },
        { type: 'pattern', pattern: /^[0-9]+$/, message: 'Room number must be a number', trigger: ['blur', 'change'] },
    ],
    capacity: [
        { required: true, message: 'Capacity is required', trigger: ['blur', 'change'] },
        { type: 'pattern', pattern: /^[0-9]+$/, message: 'Capacity must be a number', trigger: ['blur', 'change'] },
    ],
});

const { isOpenForm, roomParams, roomForm, handleOk } = useRoom();

</script>