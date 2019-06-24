import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path : 'heroes', component : HeroesComponent },
    { path : 'dashboard', component : DashboardComponent},
    { path : '', redirectTo : '/dashboard', pathMatch :'full'}
];

@NgModule({
  // initialization of the router and making it listen for browser location changes (routes)
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 


}
