import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

@Component({
    selector: 'app-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [CommonModule, RoomsListComponent]
})
export class RoomsComponent implements OnInit {
  ngOnInit(): void {

    this.roomList = [
      {
        roomNumber:1,
        roomType: "Dleuxe Room",
        amenities: "AC, Wifi, Tv, Kitchen",
        price: 2500,
        photos: "https://plus.unsplash.com/premium_photo-1718204437243-a644894df78d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
        checkinTime: new Date,
        checkoutTime: new Date("25/06/24"),
  
      },
      {
        roomNumber:2,
        roomType: "Dleuxe Room 2",
        amenities: "AC, Wifi, Tv, Kitchen",
        price: 1500,
        photos: "https://plus.unsplash.com/premium_photo-1718204437243-a644894df78d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
        checkinTime: new Date("24/06/24"),
        checkoutTime: new Date("25/06/24"),
  
      },
      {
        roomNumber:3,
        roomType: "Normal Room",
        amenities: "AC, Wifi, Tv, Kitchen",
        price: 2500,
        photos: "https://plus.unsplash.com/premium_photo-1718204437243-a644894df78d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
        checkinTime: new Date("24/06/24"),
        checkoutTime: new Date("25/06/24"),
  
      }
    ]
    

    throw new Error('Method not implemented.');
  }

  hotelName = "Hello hotel";
  totalRooms = "20";

  hideRooms = false;

  rooms: Room = {
    availableRooms: 20,
    bookedRooms: 10,
    totalRooms:5,
    id: 0
  }


  roomList: RoomList[] = [];

e: any;


  toggle():void{
    this.hideRooms = !this.hideRooms;
  }

}
