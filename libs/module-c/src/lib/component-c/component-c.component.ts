import { Component, OnInit } from '@angular/core';
import { BetslipService } from '../betslip.service';

@Component({
  selector: 'example-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css']
})
export class ComponentCComponent implements OnInit {
  constructor(private service: BetslipService) {}

  ngOnInit() {}

  onClick() {
    this.service.createbet();
  }
}
