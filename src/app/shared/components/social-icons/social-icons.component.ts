import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {
  @Input('color') color: string; 

  constructor() { }

  ngOnInit() {
    console.log(this.color);
  }

}
