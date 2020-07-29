import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { dataService } from './dashboard.page.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {
    currentToken = 26;
    totalToken = 40;

    constructor(
        private navCtrl: NavController,
        private dataServicee: dataService
    ) {
        setInterval(() => {
            this.currentToken += 1;
            this.totalToken += 1;
            this.dataServicee.setcurrentToken(this.currentToken)
            this.dataServicee.settotalToken(this.totalToken)

        }, 10000);
    }

    taskselected() {
        this.navCtrl.navigateForward("taskselection")
    }

    goback() {
        this.navCtrl.pop()
    }

}
