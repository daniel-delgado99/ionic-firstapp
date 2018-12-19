import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit{
  loginForm: FormGroup;

  constructor(public navCtrl: NavController, private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Please wait..."
    });
    loader.present();
    const value = this.loginForm.value;
    this.authService.signup(value.email, value.password)
    .then((data) => {
      loader.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Success',
        message: 'User created successfully',
        buttons: ["Ok"]
      });
      alert.present();
    })
    .catch((error) => {
      loader.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Failed',
        message: error.message,
        buttons: ["Ok"]
      });
      alert.present();
    });
  }

  onClickAction() {
    this.navCtrl.setRoot(LoginPage);
  }
}
