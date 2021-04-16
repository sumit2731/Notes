import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames = ['Chris', 'Anna'];
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null, [Validators.required, Validators.email,Validators.minLength(5)], this.forbiddenEmails),
      }),
      'gender' : new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    // this.signupForm.statusChanges.subscribe((value) => {
    //   console.log(value);
    // });
    // this.signupForm.setValue({
    //   userData: {
    //     username: 'sumeet',
    //     email: 'sumitsood3127@gmail.com'
    //   },
    //   gender: 'male',
    //   hobbies: []
    // });
    this.signupForm.patchValue({
      userData: {
        username : 'Nihilent Technologies',
        email: 'sumeetsood3127@gmail.com'

      }
    });
  }
  onSubmit() {
        console.log(this.signupForm);
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
        return {'nameIsForbidden': true};
    }
    return null;
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            if (control.value === 'test@test.com') {
              resolve({'emailIsForbidden': true});
            }
            // tslint:disable-next-line:one-line
            else {
              resolve(null);
            }
          }, 2000);
        });
        return promise;
  }

  printForm() {
    console.log(this.signupForm);
  }

}
