import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer-client',
  templateUrl: './footer-client.component.html',
  styleUrls: ['./footer-client.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
