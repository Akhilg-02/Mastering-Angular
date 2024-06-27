import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [CommonModule, RoomsListComponent, HeaderComponent]
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    
  }
 
  ngDoCheck(): void {
    //throw new Error('Method not implemented.');
  }

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;
  
  
  hotelName = "Morgan hotel";
  totalRooms = 20;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    availableRooms: 20,
    bookedRooms: 10,
    totalRooms:5,
    id: 0
  }

  title = 'Room List'
  roomList: RoomList[] = [];

//e: any;



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

}

ngAfterViewInit() {
  console.log(this.headerComponent);
  // console.log("Hed. Chtldren",this.headerChildrenComponent.last.title = "Last Title");
 this.headerComponent.title = "Rooms View"
 this.headerChildrenComponent.last.title = "Last Title 22"
 }

selectRoom(room:RoomList){
  console.log(room);
  this.selectedRoom = room
}

addRoom(){
  console.log("in room function")
  const room:RoomList={
    roomNumber:4,
    roomType: "Dleuxe Room 21",
    amenities: "AC, Wifi, Tv, Kitchen",
    price: 4500,
    photos: "https://plus.unsplash.com/premium_photo-1718204437243-a644894df78d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    checkinTime: new Date,
    checkoutTime: new Date,
  };

  // this.roomList.push(room);
  this.roomList = [...this.roomList,room];
}


  toggle():void{
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List 22"
  }

}
