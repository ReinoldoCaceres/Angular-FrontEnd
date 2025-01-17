import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../../models/model.module";
import { PartialsModule } from '../partials/partials.module';
import { SignInComponent } from "./signin.component";
import { SignUpComponent } from "./signup.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, PartialsModule, RouterModule],
    declarations: [SignInComponent, SignUpComponent ],
    exports : [SignInComponent, SignUpComponent ]
})

export class AuthModule {}