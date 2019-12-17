import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [
    // AccountsService,
    LoggingService
  ]
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
