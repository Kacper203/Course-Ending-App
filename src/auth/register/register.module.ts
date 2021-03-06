import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {RegisterComponent} from './containers/register/register.component'
import { SharedModule } from '../shared/shared.module';
export const ROUTES: Routes =[
    {path: 'register', component: RegisterComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule
        
    ],
    declarations: [
        RegisterComponent
    ],
    providers: []
})
export class RegisterModule {}