import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { RouteReuseStrategy } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';

// CGV: Para usar Angular Material se deben agregar los sguientes módulos

@NgModule({
  imports: [
      CommonModule
    , FormsModule
    , IonicModule
    , HomePageRoutingModule
    , MatDatepickerModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
