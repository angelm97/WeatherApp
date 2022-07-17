import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

//background
import 'gl-ionic-background-video';

import { HomePageRoutingModule } from './home-routing.module';

import { DayPipe } from './../pipes/day.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, DayPipe],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
