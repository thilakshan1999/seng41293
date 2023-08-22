//import { importProvidersFrom } from '@angular/core';
import { Route } from '@angular/router';
//import {getAuth,provideAuth} from '@angular/fire/auth'

export const appRoutes: Route[] = [
    {
        path:'',
        loadComponent:() => 
        import('./pages/login/login.component')
        .then((c)=> c.LoginComponent),
        // providers:[
        //      importProvidersFrom(provideAuth(() => getAuth()))
        // ],
    },
    {
        path:'admin',
        loadComponent:() => 
        import('./pages/admin/admin.component')
        .then((c)=> c.AdminComponent),
    }
];
