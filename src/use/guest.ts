import { ref } from "vue"
import repository from "@/repository";
import { message } from 'ant-design-vue';

const isOpenForm = ref(false)

const guestForm = ref();

const guestParams = ref({
    full_name: null,
    age: '',
})

const guests = ref([])

const guestId = ref(null)


export const useGuests = () => {

    const getAllGuests = async () => {
        try {
            const response = await repository.guests.get()
            if (response.status === 200) 
                guests.value = response.data.data
            else 
                message.error(response.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    const getSingleGuest = async (id: string) => {
        try {
            const response = await repository.guests.getSingle(id)
            if (response.status === 200) {
                guestParams.value.full_name = response.data.data.full_name
                guestParams.value.age = response.data.data.age
                guestId.value = response.data.data.id    
                isOpenForm.value = true
            }
            else 
                message.error(response.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    const clearForm = () => {
        guestParams.value.full_name = null
        guestParams.value.age = ''
        getAllGuests()
    }

    const handleOk = async () => { 
        try {
            const isValid = await guestForm.value.validate()
            const response = guestId.value ? await repository.guests.update(guestParams.value, guestId.value) : await repository.guests.create(guestParams.value)
            if (response.status === 201) {
                message.success(response.data.message)
                isOpenForm.value = false
                clearForm()
            } else 
                message.error(response.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteGuest = async (id: string) => {
        try {
            const response = await repository.guests.delete(id)
            if (response.status === 200) {
                message.success(response.data.message)
                getAllGuests()
            } else 
                message.error(response.data.message)
        } catch (error) {
            console.log(error)
        }
    
    }

    return {
        isOpenForm,
        guestParams,
        guestForm,
        handleOk,
        getAllGuests,
        guests,
        getSingleGuest,
        deleteGuest
    }
}