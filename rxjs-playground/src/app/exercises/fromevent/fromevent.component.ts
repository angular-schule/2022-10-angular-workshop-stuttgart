import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime, of, tap } from 'rxjs';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent {

  currentWidth?: number;

  constructor() {
    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    const width$ = fromEvent(window, 'resize').pipe(
      debounceTime(1000),
      // tap(e => console.log(e)),
      map(e => window.innerWidth), // e.currentTarget.innerWidth
      startWith(window.innerWidth),
    );

    ////////////////

    width$.subscribe(e => {
      this.currentWidth = e;
    });

    /******************************/
  }

}
