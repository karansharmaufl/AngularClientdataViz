import { Component } from '@angular/core';


// Placeholder template

@Component({
    selector: 'app-nav',
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/">RtDataViz</button>
            <button mat-button routerLink="/dtvizmessages">DTMessages</button>
            <button mat-button routerLink="/register">Register</button>
        </mat-toolbar>
        
    `
})

export class NavComponent {
    constructor() {}
}
