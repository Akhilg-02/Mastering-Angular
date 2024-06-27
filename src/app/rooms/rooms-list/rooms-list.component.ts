import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
import { log } from 'node:console';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  if(changes['title1']){
    this.title = changes['title'].currentValue.toUpperCase();
  }
   // throw new Error('Method not implemented.');
  }

  @Input() rooms: RoomList[] = [];
  @Input() title:string = "";


  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
