import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-section9',
  templateUrl: './section9.component.html',
  styleUrls: ['./section9.component.css'],
  // providers: [AccountsService] added to app.module to can be used anywhere in this project.
})
export class Section9Component implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
