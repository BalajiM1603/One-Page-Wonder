import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() {
    
  }
  section = [
    {
      title :"For those about to rock...",
      description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.",
      img : "assets/img/01.jpg",
      style : "row align-items-center"    },
    {
      title :"We salute you!",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.",
      img : "assets/img/02.jpg",
      style : "row align-items-center reverse1"

    },
    {
      title :"Let there be rock!",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.",
      img : "assets/img/03.jpg",
      style : "row align-items-center"
    }
  ];
  ngOnInit() {
  }

}
