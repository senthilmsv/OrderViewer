import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UniversalModule } from "angular2-universal";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./components/app/app.component";
import { NavMenuComponent } from "./components/navmenu/navmenu.component";
import { HomeComponent } from "./components/home/home.component";
import { OrderListComponent } from "./components/sales/order-list.component";
import { OrderDetailComponent } from "./components/sales/order-detail.component";
import { SalesService } from "./services/sales.service";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        OrderListComponent,
        OrderDetailComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule,
        FormsModule,
        RouterModule.forRoot([
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", component: HomeComponent },
            { path: "order", component: OrderListComponent },
            { path: "order-detail/:id", component: OrderDetailComponent },
            { path: "**", redirectTo: "home" }
        ])
    ],
    providers: [
        SalesService
    ]
})
export class AppModule {
}
