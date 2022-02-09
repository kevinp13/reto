import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonComponent } from './components/pokemon/pokemon.component';



@NgModule({
  declarations: [
    HomeComponent,
    InfiniteScrollComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LazyLoadImageModule,
    CoreModule,
    InfiniteScrollModule,
    NgbModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
