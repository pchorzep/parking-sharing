import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router} from "@angular/router";
import { RequestsComponent } from "./requests/requests.component";
import { NewRequestComponent } from "./new-request/new-request.component";

const routes: Routes = [
    {path: '', component: RequestsComponent},
    {path: 'new', component: NewRequestComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}