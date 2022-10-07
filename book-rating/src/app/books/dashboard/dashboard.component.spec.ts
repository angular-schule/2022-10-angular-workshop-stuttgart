import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    // Ersatz für den BookRatingService
    const ratingMock: Partial<BookRatingService> = {
      rateUp: (b: Book) => {
        return b;
      },
      rateDown: (b: Book) => {
        return b;
      }
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        // BRS ersetzen: Immer wenn jemand BRS anfordert,
        // wird stattdessen das Objekt ratingMock ausgeliefert
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    // Instanz der TS-Klasse
    component = fixture.componentInstance;
    // DOM-Element:
    // fixture.nativeElement.querySelector('p')


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for doRateUp()', () => {
    // BRS anfordern, in Wahrheit ist das aber der ratingMock
    const service = TestBed.inject(BookRatingService);

    // Mock überwachen
    // spyOn(service, 'rateUp').and.returnValue({ isbn: '' } as Book);
    // spyOn(service, 'rateUp').and.callFake(b => b);

    // Methode ersetzen, aber originale Implementierung weiter verwenden
    spyOn(service, 'rateUp').and.callThrough();

    // Buch
    const book = { isbn: '123' } as Book; // Type Assertion – bitte nicht produktiv verwenden

    // Act
    // Methode auf Dashboard aufrufen
    component.doRateUp(book);

    // Assert
    // prüfen, ob Serviemethode aufgerufen wurde
    expect(service.rateUp).toHaveBeenCalled();
    expect(service.rateUp).toHaveBeenCalledOnceWith(book);
  });
});
