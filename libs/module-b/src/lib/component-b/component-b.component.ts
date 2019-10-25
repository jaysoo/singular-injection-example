import { Component, OnInit, Inject } from '@angular/core';
import { BetslipService } from '../betslip.service';

@Component({
  selector: 'example-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  constructor(private service: BetslipService) {}

  ngOnInit() {}

  onClick() {
    this.service.createbet();
  }
}
