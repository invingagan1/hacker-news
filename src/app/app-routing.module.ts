import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { CustomPreloadStrategyService } from "./custom-preload-strategy.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    data: {
      preload: true,
    },
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "login",
    data: {
      preload: false,
    },
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "item",
    data: {
      preload: false,
    },
    loadChildren: () => import("./news/news.module").then((m) => m.ItemModule),
  },
  {
    path: "user",
    data: {
      preload: false,
    },
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  {
    path: "new",
    loadChildren: () => import("./new/new.module").then((m) => m.NewModule),
    data: {
      preload: false,
    },
  },
  {
    path: "**",
    loadChildren: () =>
      import("./page-not-found/page-not-found.module").then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
