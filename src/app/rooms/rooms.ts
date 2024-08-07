export interface Room{
    availableRooms:number,
    bookedRooms:number,
    totalRooms:number,
    id?:number;

}

export interface RoomList{
   roomNumber: number,
   roomType: string,
   amenities: string,
   price: number,
   photos: string,
   checkinTime: Date,
   checkoutTime: Date

}