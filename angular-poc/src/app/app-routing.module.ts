import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'hello', component: HelloWorldComponent },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
