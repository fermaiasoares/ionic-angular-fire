import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

interface IAuth {
    email: string;
    password: string;
}

@Component({
    selector: 'app-auth-signin',
    templateUrl: 'sign-in.page.html',
    styleUrls: ['sign-in.page.scss'],
})

export class SignInPage implements OnInit {
    public auth: IAuth = {
        email: '',
        password: ''
    };

    formData: FormGroup;

    constructor(
        private authService: AuthService,
        private alertCtrl: AlertController,
        private router: Router,
        private loadingCtrl: LoadingController
    ) {
        this.formData = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });

        this.formData.valueChanges.subscribe((values: IAuth) => this.auth = values);
    }

    ngOnInit() {

    }

    async onSubmit(e: SubmitEvent) {
        e.preventDefault();
        if (!this.formData.valid) {
            alert('Existem erros no formulário');
            console.log(this.formData.controls.email.errors);
            return;
        }

        await this.singIn();
    }

    async singIn() {
        try {
            const loading = await this.loadingCtrl.create();
            await loading.present();

            const user = await this.authService.signIn(this.auth);
            await loading.dismiss();

            if (user) {
                this.router.navigateByUrl('/home', { replaceUrl: true });
            } else {
                await this.showAlert('Falha na autenticação', 'Tente novamente!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    async showAlert(header: string, message: string) {
        const alert = await this.alertCtrl.create({
            header,
            message,
            buttons: ['OK']
        });

        await alert.present();
    }
}
