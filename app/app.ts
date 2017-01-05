import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  pages: Array<{component: any, title: string, icon:string}>;
  rootPage: any = HomePage;

  constructor(platform: Platform, public menu: MenuController) {
    this.pages =[
      {component:HomePage, title:"Home Page", icon:"home"}
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  openPage(page){
    this.rootPage = page.component;
    this.menu.close();

  }
}

ionicBootstrap(MyApp);
