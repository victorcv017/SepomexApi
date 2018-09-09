import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { FunctionalRoutingModule } from './functional-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, 
    FunctionalRoutingModule,
    SharedModule
  ],
  exports:[
    FunctionalRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, ContentComponent]
})
export class FunctionalModule { }
