import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-branchselection',
  templateUrl: 'branchselection.page.html',
  styleUrls: ['branchselection.page.scss'],
})
export class BranchselectionPage {
  bank = false;
  constructor(
    private navCtrl: NavController
  ) { }

  branchselected() {
    this.navCtrl.navigateForward("dashboard")
  }
  bankselected() {
    this.bank = true;
  }
}
