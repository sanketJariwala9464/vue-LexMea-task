import { ref } from "vue"
import repository from "@/repository";
import { message } from 'ant-design-vue';

const isOpenForm = ref(false)
const isOpenGuestDropdown = ref(false)

const roomForm = ref();
const assignForm = ref();

const roomParams = ref({
    floor_number: '',
    room_number: '',
    capacity: '',
})

const assignGuestData = ref({
    roomId: '',
    guest_id: ''
})

const rooms = ref([])


export const useRoom = () => {

    const clearForm = () => {
        roomParams.value.floor_number = ''
        roomParams.value.room_number = ''
        roomParams.value.capacity = ''
        getRooms()
    }

    const getRooms = async () => {
        try {
            const response = await repository.rooms.get()
            if (response.status === 200) 
                rooms.value = response.data.data
            else 
                message.error(response.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    const handleOk = async () => { 
        try {
            const isValid = await roomForm.value.validate()
            const response = await repository.rooms.create(roomParams.value)
            if (response.status === 201) {
                message.success(response.data.message)
                isOpenForm.value = false
                clearForm()
            } else 
                message.error(response.data.message)
        } catch (error: any) {
            message.error(error.response.data.message)
        }
    }

    const handleAssign = async () => {
        try {
            const response = await repository.rooms.assignRoom(assignGuestData.value.roomId, assignGuestData.value.guest_id)
            if (response.status === 200) {
                message.success(response.data.message)
                if (isOpenGuestDropdown.value) {
                    isOpenGuestDropdown.value = false
                    assignGuestData.value.roomId = ''
                    assignGuestData.value.guest_id = ''
                }
                getRooms()
            } else 
                message.error(response.data.message)
        } catch (error: any) {
            message.error(error.response.data.message)
        }
    }

    return {
        isOpenForm,
        roomParams,
        roomForm,
        handleOk,
        rooms,
        getRooms,
        handleAssign,
        assignForm,
        isOpenGuestDropdown,
        assignGuestData
    }
}