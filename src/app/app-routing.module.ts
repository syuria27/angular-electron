import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ListSiswaComponent } from './components/list-siswa/list-siswa.component';
import { CreateSiswaComponent } from './components/create-siswa/create-siswa.component';
import { EditSiswaComponent } from './components/edit-siswa/edit-siswa.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'siswa/list', component: ListSiswaComponent },
    { path: 'siswa/create', component: CreateSiswaComponent },
    { path: 'siswa/edit/:nis', component: EditSiswaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
