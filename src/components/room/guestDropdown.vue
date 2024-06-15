<template>
    <a-modal v-model:open="isOpenGuestDropdown" title="Add Room" @ok="handleOk">
        <a-form ref="assignForm" :model="assignGuestData" name="assignForm" autocomplete="off" layout="vertical" :rules="rules">
            <a-form-item label="Guest List" name="guest_id">
                <a-select ref="select" class="w-full" v-model:value="assignGuestData.guest_id">
                    <a-select-option v-for="(guest, gIndex) in guests" :key="gIndex" :value="guest.id">{{ guest.full_name }}</a-select-option>
                </a-select>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script setup lang=ts>
import { useRoom } from '@/use/room';
import { useGuests } from '@/use/guest';
import { ref } from 'vue';

const rules = ref({
    guest_id: [
        { required: true, message: 'Guest is required' },
    ],
});

const { guests } = useGuests();

const { isOpenGuestDropdown, assignGuestData, assignForm, handleAssign } = useRoom();

const handleOk = async () => {
    try {
        const isValid = await assignForm.value.validate();
        await handleAssign();
    } catch (error) {
        console.log(error);
    }
}

</script>