import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/usuario';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'Ticket-Show';
  public user: Usuario;
  public identity: boolean;
  public token;

  constructor( private _userService: UserService) {
    this.user = new Usuario('' , '' , '' , '');
    console.log(this.identity);
  }

  ngOnInit() {
    //var texto =  this._userService.signup();
    //console.log(texto);
  
    this.identity=this._userService.getIdentity();
    console.log(this.identity);
  }

  public onSubmit() {
    console.log(this.user);
    this._userService.signup(this.user).subscribe(
      response => {
        console.log(response);
        if (true) {
          this.identity = true;
          localStorage.setItem('identity', "true" );
        }
        window.location.reload()
      },
      error => {
        var errorMessage = <any>error;

        if (errorMessage != null) {
          console.log(error);
        }
      }
    );
  }
  public LogOut() {
    this.identity = false;
    localStorage.setItem('identity', "false");
    window.location.reload()
  }
}
