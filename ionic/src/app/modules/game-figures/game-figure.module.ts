import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/modules/account/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        data: {
            auth: [{ view: 'game_figures' }]
        },
        loadChildren: () => import('./index/index.module').then(mod => mod.IndexPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'create',
        data: {
            auth: [{ create: 'game_figures' }],
        },
        canActivate: [AuthGuard],
        loadChildren: () => import('./create/create.module').then(mod => mod.CreatePageModule),
    },
    {
        path: ':id',
        data: {
            auth: [{ update: 'game_figures' }],
        },
        canActivate: [AuthGuard],
        loadChildren: () => import('./create/create.module').then(mod => mod.CreatePageModule),
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GameFigureModule { }
