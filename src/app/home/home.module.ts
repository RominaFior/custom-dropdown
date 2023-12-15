import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../card/card.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { DropdownService } from '../dropdown/services/dropdown.component.service';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [HomePage, CardComponent, DropdownComponent],
  providers: [DropdownService],
})
export class HomePageModule {}
