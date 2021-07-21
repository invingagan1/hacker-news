import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  links = [
    'Guidelines',
    'FAQ',
    'Lists',
    'API',
    'Security',
    'Legal',
    'Apply yo YC',
    'Contact',
  ];
  constructor() {}

  ngOnInit(): void {}
}
