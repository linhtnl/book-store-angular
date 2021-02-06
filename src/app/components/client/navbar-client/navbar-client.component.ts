import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
