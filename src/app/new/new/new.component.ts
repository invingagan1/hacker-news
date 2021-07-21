import { Component, OnInit } from '@angular/core';
import { NewSandboxService } from '../new-sandbox.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(public sandbox: NewSandboxService) { 
    
  }
  ngOnInit(): void {
    this.sandbox.getNewItems();
  }

}
