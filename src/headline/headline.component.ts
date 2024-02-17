import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'head-line',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent {
  @Input() header! : string;

  ngAfterViewInit() {
    console.log(this.header);
  }
}
