import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDetailsComponent } from './components/data-details/data-details.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { AddDataComponent } from './components/add-data/add-data.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'add-data', component: AddDataComponent },
  { path: 'tutorials/:id', component: DataDetailsComponent },
  { path: 'tutorials', component: DataListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
