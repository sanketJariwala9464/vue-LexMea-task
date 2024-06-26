import { api } from '@/api';

export default {
    get: async () => (await api.$get('/rooms')),
    create: async (room: any) => (await api.$post('/rooms', room)),
    assignRoom: async (roomId: number, userId: number) => (await api.$post(`/rooms/${roomId}/assign`, { 
        guest_id: userId
     })),
}