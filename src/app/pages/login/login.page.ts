import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastController, NavController } from '@ionic/angular';
import { Cookie } from '../../tool/cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data = {
    nick: '',
    pass: '',
    disabled: true,
    loading: false
  };

  constructor(
    private usersServ: UserService,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  txtKeyUp() {
    if (this.data.nick.length < 5) {
      this.data.disabled = true;
      return;
    }

    if (this.data.pass.length < 5) {
      this.data.disabled = true;
      return;
    }

    this.data.disabled = false;
  }

  async btnLoginClick() {
    try {
      this.data.loading = true;
      const res = await this.usersServ.login(
        this.data.nick,
        this.data.pass
      );

      if (res == null) {
        // Instanciar la tostada
        const toast = await this.toastCtrl.create({
          header: 'ERROR',
          message: 'Usuario/Contraseña no existe, reintente...',
          position: 'bottom',
          buttons: [
            {
              text: 'cerrar',
              role: 'cancel'
            }
          ]
        });

        // Mostrar la Tostada esa
        toast.present();
        setTimeout(() => {
          toast.dismiss();
        }, 2500);
      } else {
        // Redirigir al Home
        const galleta = new Cookie('userData', res, 30);
        // location.href = '/home';
        this.navCtrl.navigateForward('home');
      }
    } catch (fail) {
      // Instanciar la tostada
      const toast = await this.toastCtrl.create({
        header: 'ERROR',
        message: 'Imposible conectar con el servidor. Por favor revise su conexión e inténtelo de nuevo...',
        position: 'bottom',
        buttons: [
          {
            text: 'cerrar',
            role: 'cancel'
          }
        ]
      });

      // Mostrar la Tostada esa
      toast.present();
    } finally {
      // RESET
      this.data.nick = '';
      this.data.pass = '';

      this.data.loading = false;
    }
  }
}
