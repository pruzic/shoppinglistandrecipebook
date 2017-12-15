import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { RecipesModule } from './recipes/recipes.module';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
// import { DropdownDirective } from './shared/dropdown.directive';
import { DataStorageService } from './shared/data-storage.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RecipesModule,
    SharedModule,
    AuthModule,
    ShoppingListModule
],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  providers: [ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
