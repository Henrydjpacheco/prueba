import { Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/categories',
        pathMatch: 'full'
    },
    {
        path: 'categories',
        component: NavComponent
    }
];
