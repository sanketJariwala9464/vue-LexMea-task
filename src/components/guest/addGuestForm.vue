<template>
    <a-modal v-model:open="isOpenForm" title="Add Guest" @ok="handleOk">
        {{ guestParams   }}
        <a-form ref="guestForm" :model="guestParams" name="guestForm" autocomplete="off" layout="vertical" :rules="rules">
            <a-form-item label="Full name" name="full_name">
                <a-input v-model:value="guestParams.full_name" />
            </a-form-item>
            <a-form-item label="Age" name="age">
                <a-input v-model:value="guestParams.age" />
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script setup lang=ts>
import { useGuests } from '@/use/guest';
import { ref } from 'vue';

const rules = ref({
    full_name: [
        { required: true, message: 'Full name is required', trigger: ['blur', 'change'] },
    ],
    age: [
        { required: true, message: 'Age is required', trigger: ['blur', 'change'] },
        { type: 'pattern', pattern: /^[0-9]+$/, message: 'Age must be a number', trigger: ['blur', 'change'] },
    ],
});

const { isOpenForm, guestParams, guestForm, handleOk } = useGuests();

</script>