export interface RoomProps {
    id: number;
    floor_number: number;
    capacity: number;
    status: string;
    room_number: number;
}

export interface GuestCardProps {
    id: number;
    full_name: string;
    age: number;
    rooms: RoomProps[]
}   