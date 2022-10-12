import { Component } from '@angular/core';
import { ReplaySubject, throwError, of, EMPTY, retry, catchError, timer, Observable } from 'rxjs';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-error-handling',
  templateUrl: './error-handling.component.html',
})
export class ErrorHandlingComponent {

  logStream$ = new ReplaySubject<unknown>();

  constructor(private es: ExerciseService) { }

  /**
   * Das Observable aus `this.es.randomError()` liefert mit hoher Wahrscheinlichkeit einen Fehler.
   * Probiere verschiedene Strategien aus, um den Fehler zu behandeln:
   * - wiederholen
   * - Fehler weiterwerfen
   * - Fehler umwandeln (in ein normales Element)
   * - Fehler verschlucken/ignorieren
   */

  start() {
    this.es.randomError().pipe(
      // retry({ count: 5, delay: () => timer(2000) })
      catchError(err => {
        console.error('FEHLER:', err);
        // ...

        /*switch (err.code) {
          case 500: return EMPTY;
          case 404: return of([]);
          case 401: throw 'Du bist nicht angemeldet!';
        }*/

        // Fehler weiterwerfen // eigenen Fehler werfen
        // return new Observable(sub => sub.error('FEHLER!!!!!'));
        // return throwError(() => 'Böser Fehler!');
        // throw 'Sehr schlechter Fehler!';

        // Fehler ersetzen
        // return of('no error happened', '☠️');

        // Fehler verschlucken
        // return of();
        // return new Observable(sub => sub.complete());
        return EMPTY;
      })
    ).subscribe({
      next: e => this.logStream$.next(e),
      error: err => this.logStream$.next('❌ ERROR: ' + err)
    });
  }
}
