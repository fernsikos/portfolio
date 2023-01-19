

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('message') message!: ElementRef;

  isDisabled: boolean = false;
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    message: new FormControl('', Validators.required)
  });




  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.contactForm;
  }

  keyDownFunction(event) {
    if (event.keyCode === 13 && this.contactForm.valid) {
      event.preventDefault();
      this.sendMail();
    }
  }

  async sendMail() {
    this.isDisabled = true;
    let fd = new FormData();
    fd.append('name', this.contactForm.value.name as string);
    fd.append('email', this.contactForm.value.email as string);
    fd.append('message', this.contactForm.value.message as string);
    const response = await fetch(
      "https://tobias-fernkorn.com/e-mail-client/send_mail.php",
      {
        method: 'POST',
        body: fd,
      }
    );
    if (!response.ok) {
      throw new Error('Response not ok');
      this.isDisabled = false;
    } else (window.location.href = 'https://tobias-fernkorn.com/success')
  }

}


