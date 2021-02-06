import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
