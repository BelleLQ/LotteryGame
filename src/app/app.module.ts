import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NumberSelectionComponent } from './components/number-selection/number-selection.component';
import { NumberSelectionItemComponent } from './components/number-selection-item/number-selection-item.component';
import { NumberSelectedListComponent } from './components/number-selected-list/number-selected-list.component';
import { NumberSelectedComponent } from './components/number-selected/number-selected.component';
import { BetMoneyListComponent } from './components/bet-money-list/bet-money-list.component';
import { BetMoneyOptionComponent } from './components/bet-money-option/bet-money-option.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NumberSelectionComponent,
    NumberSelectionItemComponent,
    NumberSelectedListComponent,
    NumberSelectedComponent,
    BetMoneyListComponent,
    BetMoneyOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
