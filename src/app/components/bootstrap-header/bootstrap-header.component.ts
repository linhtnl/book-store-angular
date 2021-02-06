import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bootstrap-header',
  templateUrl: './bootstrap-header.component.html',
  styleUrls: ['./bootstrap-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BootstrapHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
