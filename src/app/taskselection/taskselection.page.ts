import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { dataService } from '../dashboard/dashboard.page.service';


@Component({
    selector: 'app-taskselection',
    templateUrl: 'taskselection.page.html',
    styleUrls: ['taskselection.page.scss'],
})
export class TaskselectionPage {
    formobj: any = {
        name: "",
        account: "",
        loannum: "",
        amount: ""
    }
    tokengenerated = false;
    currentToken = 26;
    totalToken = 40;

    constructor(
        private navCtrl: NavController,
        public toastController: ToastController,
        private dataServicee: dataService
    ) {
        this.currentToken = this.dataServicee.getcurrentToken()
        this.totalToken = this.dataServicee.gettotalToken()
    }

    dashboard() {
        this.navCtrl.pop();

    }

    goback() {
        this.navCtrl.pop()
    }

    async presentToast() {
        this.formobj = {
            name: "",
            account: "",
            loannum: "",
            amount: ""
        }
        const toast = await this.toastController.create({
            message: 'Your form has been submitted.',
            duration: 2000
        });
        toast.present();
    }

    async generateToken() {
        this.tokengenerated = true;
        const toast = await this.toastController.create({
            message: 'Token generated',
            duration: 2000
        });
        toast.present();
    }
}
