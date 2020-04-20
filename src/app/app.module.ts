import { StandardPlusIconComponent } from './components/buttons/primary/raised/standard-plus-icon/standard-plus-icon.component';
import { MaterialModule } from './../angular-material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButtonLargeComponent } from './components/buttons/primary/raised/large/custom-button-large.component';
import { ViewModelButtonsComponent } from './view-model-buttons/view-model-buttons.component';
import { CustomButtonLargePlusIconComponent } from './components/buttons/primary/raised/large-plus-icon/custom-button-large-plus-icon.component';
import { StandardComponent } from './components/buttons/primary/raised/standard/standard.component';
import { SmallComponent } from './components/buttons/primary/raised/small/small.component';
import { SmallPlusIconComponent } from './components/buttons/primary/raised/small-plus-icon/small-plus-icon.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomButtonLargeComponent,
    ViewModelButtonsComponent,
    CustomButtonLargePlusIconComponent,
    StandardComponent,
    StandardPlusIconComponent,
    SmallComponent,
    SmallPlusIconComponent
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
