import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToasterConfig, ToasterService } from 'angular2-toaster';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: `<router-outlet></router-outlet> 
      <ngx-spinner
    bdOpacity = 0.9
    size = "medium"
    color = "#17a2b8"
    type = "line-scale-pulse-out"
    [fullScreen] = "true"
    >
    </ngx-spinner>
    <toaster-container [toasterconfig]="config"></toaster-container>`
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
    private spinner: NgxSpinnerService,
    private toasterService: ToasterService

  ) { }

  //#region loader
  Display_Loader(value: boolean) {
    value ?
      document.querySelector('body').classList.add('noscroll') :
      document.querySelector('body').classList.remove('noscroll');
    value ? this.spinner.show() : this.spinner.hide();
  };
  //#endregion

  // #region Toaster
  config: ToasterConfig = new ToasterConfig({
    showCloseButton: true, tapToDismiss: false,
    timeout: 3000, animation: 'flyRight',
    limit: 5, preventDuplicates: false,
    newestOnTop: true, positionClass: 'toast-top-right'
  });
  popToast(Type?, Title?, Message?) {
    this.toasterService.pop(Type, Title, Message);
  };
  // #endregion

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
