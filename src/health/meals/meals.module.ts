import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MealsComponent } from './containers/meals/meals.component';
import { RouterModule, Routes } from '@angular/router';
import { MealComponent } from './containers/meal/meal.component';
import { SharedModule } from '../shared/shared.module';
import { MealFormComponent } from './components/meal-form/meal-form.component';

export const ROUTES : Routes =[
    {
        path: '',
        component: MealsComponent
    },
    {
        path: 'new',
        component: MealComponent
    },
    {
        path: ':id',
        component: MealComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedModule

    ],
    declarations: [
        MealsComponent,
        MealComponent,
        MealFormComponent
    ],
    providers: []
})
export class MealsModule {}
