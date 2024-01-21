import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './components/owner/owner-home/owner-home.component';
import { OwnerCreateListingComponent } from './components/owner/owner-create-listing/owner-create-listing.component';
import { HomeComponent } from './components/app/home/home.component';
import { PageNotFoundComponent } from './components/app/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'owner', component: OwnerHomeComponent },
  { path: 'owner/createListing', component: OwnerCreateListingComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
