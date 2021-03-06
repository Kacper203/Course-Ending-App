import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';


import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './auth.guard.ts/auth.guard';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        AuthFormComponent
    ],
  
    exports: [
        AuthFormComponent,
        
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders<any>{
        return {
            ngModule: SharedModule,
            providers:[
                AuthService,
                AuthGuard
            ]
        };
    }
}