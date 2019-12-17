import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] // If AccountsService not added as a provider here, it uses the same instance that provided in section9
})
export class NewAccountComponent implements OnInit {

  constructor(private accountService: AccountsService, private loggingService: LoggingService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('Status updated to ' + status)
    );
  }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
