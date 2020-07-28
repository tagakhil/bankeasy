import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-taskselection',
    templateUrl: 'taskselection.page.html',
    styleUrls: ['taskselection.page.scss'],
})
export class TaskselectionPage {

    constructor(
        private navCtrl: NavController
    ) { }

    dashboard() {
        this.navCtrl.pop()
    }

    goback() {
        this.navCtrl.pop()
    }

}
