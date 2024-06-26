import { Component, Input, OnInit, input } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit{
roomList: any;
  ngOnInit(): void {
    
    throw new Error('Method not implemented.');
  }
   @Input() rooms: RoomList[] = [];

}
