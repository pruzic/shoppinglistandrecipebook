import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from './../auth/auth.service';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) {}

    onSaveRecipes() {
        this.dataStorageService.saveRecipes()
        .subscribe((response: Response) => console.log(response));
    }

    onFetchRecipes() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logoutUser();
    }
}
