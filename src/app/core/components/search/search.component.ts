import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable, OperatorFunction, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pokemonsAll = [];

  model: any;

  constructor(private pokeApi: PokeapiService, private router: Router) { }

  ngOnInit(): void {
    this.pokemonsAll= this.pokeApi.getPokemonsAll();
  }

  search($event:string) {
    if($event.trim()){
      this.router.navigate([`home/pokemon/${$event}`]);
    }
  }

  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search2: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;
    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.pokemonsAll.map(v=>v.name)
        : this.pokemonsAll.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).map(v=>v.name)).slice(0, 10)),
      tap(res=>console.log(res))
    );
  }
}
