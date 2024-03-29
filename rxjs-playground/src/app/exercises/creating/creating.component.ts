import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter, Subscriber, Observer } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    function myOf(values: string[]): Observable<string> {
      return new Observable<string>(sub => {
        values.forEach(v => {
          sub.next(v);
        });
        sub.complete();
      });
    }


    /*myOf(['A', 'B', 'C']).subscribe({
      next: value => this.log(value),
      complete: () => this.log('COMPLETE')
    });*/


    // of('A', 'B', 'C') // ABC|
    // from([1,2,3,4,5,6])
    // interval(1000)    // ---0---1---2---3---4---5 ...
    // timer(1000, 1000) // ---0---1---2---3---4---5 ...
    // timer(3000)    // ---------0|
    // timer(3000, 1000)    // ---------0---1---2---3---4---5 ...

    timer(0, 1000).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ).subscribe({
      next: value => this.log(value),
      complete: () => this.log('COMPLETE')
    });


    /******************************/

    // so KÖNNTE das Observable implementiert sein
    /*class MyObservable {
      constructor(private producer: any) {}

      subscribe(observer: any) {
        const subscriber = makeSubscriber(observer);
        this.producer(subscriber);
      }
    }*/

    /******************************/

    function producer(subscriber: Subscriber<number>) {
      const result = Math.random();
      subscriber.next(result);
      subscriber.next(5);
      subscriber.next(6);
      subscriber.next(7);
      setTimeout(() => subscriber.next(10), 2000)
      // setTimeout(() => sub.error(20), 4000)
      const timer = setTimeout(() => subscriber.complete(), 4000)

      // Teardown Logic
      return () => {
        clearTimeout(timer);
      };
    }

    const observer: Observer<number> = {
      next: (value: any) => console.log(value),
      error: (err: any) => console.error(err),
      complete: () => console.log('FERTIG!')
    }

    // producer(observer);
    // producer(observer);
    // producer(observer);
    // Finnische Notation$
    const myObservable$ = new Observable(producer);
    const sub = myObservable$.subscribe(observer);

    // beim unsubscribe() wird die Teardown Logic ausgeführt
    // sub.unsubscribe();


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
