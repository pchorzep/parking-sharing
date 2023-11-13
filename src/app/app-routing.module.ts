import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router} from "@angular/router";
import { RequestsComponent } from "./requests/requests.component";
import { NewRequestComponent } from "./new-request/new-request.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'list', component: RequestsComponent},
    {path: 'new', component: NewRequestComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}