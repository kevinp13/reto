import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    NavbarComponent
  ],
})
export class CoreModule {}
