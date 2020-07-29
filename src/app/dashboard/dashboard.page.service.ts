import { Injectable } from '@angular/core';

@Injectable()
export class dataService {

    private currentToken = 26;
    private totalToken = 40;


    setcurrentToken(data) {
        this.currentToken = data;
    }

    getcurrentToken() {
        return this.currentToken;
    }

    settotalToken(data) {
        this.totalToken = data;
    }

    gettotalToken() {
        return this.totalToken;
    }

}