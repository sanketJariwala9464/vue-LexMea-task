import { api } from "@/api";

export default {
    get: async () => (await api.$get("/guests")),
    getSingle: async (id: number) => (await api.$get(`/guests/${id}`)),
    create: async (guest: any) => (await api.$post("/guests", guest)),
    update: async (guest: any, id: any) => (await api.$put(`/guests/${id}`, guest)),
    delete: async (id: number) => (await api.$delete(`/guests/${id}`)),
};