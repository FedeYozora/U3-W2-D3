import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivesComponent } from './actives/actives.component';
import { NotActivesComponent } from './not-actives/not-actives.component';
import { NavComponent } from './nav/nav.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'active', component: ActivesComponent },
  { path: 'inactive', component: NotActivesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivesComponent,
    NotActivesComponent,
    NavComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
