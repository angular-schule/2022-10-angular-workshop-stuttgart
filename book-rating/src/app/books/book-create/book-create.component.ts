import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const isbnLength = Validators.compose([
  Validators.minLength(10),
  Validators.maxLength(13)
])!;

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        isbnLength,
        Validators.pattern(/^[0-9]*$/)
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(128)
      ]
    }),
    description: new FormControl('', {
      nonNullable: true
    }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [
        Validators.min(0)
      ]
    }),
    rating: new FormControl(1, {
      nonNullable: true,
      validators: [
        Validators.min(1),
        Validators.max(5)
      ]
    })
  });

  constructor() {}

  ngOnInit(): void {
  }

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    return !!control && control.invalid && control.touched;


    // return (control?.invalid && control?.touched) ?? false;

    /*if (control && control.touched) {
      return control.invalid;
    }
    return false;*/

  }

  hasError(controlName: string, errorCode: string): boolean {
    const control = this.bookForm.get(controlName);
    return !!control && control.hasError(errorCode) && control.touched;
    // return !!control && !!control.getError(errorCode) && control.touched;
    // return !!control && !!control.errors?.[errorCode] && control.touched;
  }


  submitForm() {
    
  }
}


/*

TODO:
- Fehlermeldungen anzeigen
  - "Die ISBN ist ungültig."
  - "Die ISBN ist zu kurz."

- Button
- Button deaktivieren
- Buch erzeugen
- HTTP
  - bei Erfolg, Varianten:
    - Meldung anzeigen
    - navigieren
    - zurücksetzen
*/
