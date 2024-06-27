import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RoomsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit , OnInit {
 

  title = 'hotelinventory-app';

  role = 'User';

  @ViewChild('name',{static:true}) name!:ElementRef;

  ngOnInit(): void {
    let temp1 = this.name.nativeElement.innerText = "Hi form Morgan hotel"
    let temp2 = this.name.nativeElement.innerHTML = `<h1>Hi form Morgan hotel</h1>`
    console.log(this.name);
    
   // this.name.
  }


  // @ViewChild('user',{read:ViewContainerRef}) vcr! : ViewContainerRef
  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.totalRooms = 25
    
  }
}
