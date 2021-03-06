
import { MaterialModule } from './../angular-material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewModelButtonsComponent } from './view-model-buttons/view-model-buttons.component';
import { ButtonRaisedComponent } from './components/buttons/primary/raised/button-raised/button-raised.component';
import { IconRaisedButtonComponent } from './components/buttons/primary/raised/icon-raised-button/icon-raised-button.component';
import { ButtonStrokedComponent } from './components/buttons/secundary/stroked/button-stroked/button-stroked.component';
import { IconStrokedButtonComponent } from './components/buttons/secundary/stroked/icon-stroked-button/icon-stroked-button.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewModelButtonsComponent,
    ButtonRaisedComponent,
    IconRaisedButtonComponent,
    ButtonStrokedComponent,
    IconStrokedButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
