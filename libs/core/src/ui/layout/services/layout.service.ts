import { Injectable } from '@angular/core';
import { LayoutSettings } from 'libs/core/src/models/configs';
import { LayoutDIR, LayoutType, Projects } from 'libs/core/src/models/enums';
import { NavigationItem } from 'libs/core/src/models/layout';
import { Observable, ReplaySubject, Subject, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    constructor() { }

    // theme menu sidebar show and hide
    dashBoardMenuState = new Subject();

    // theme component page menu sidebar show and hide
    componentMenuState = new Subject();

    // theme sidebar direction change in rtl mode
    directionChange: Subject<LayoutDIR> = new Subject();

    // color change
    color = new ReplaySubject<string>(10);

    // layout change
    layout = new ReplaySubject<LayoutType>(3);

    drawerOpen = false;
    componentDrawerOpen = false;

    /**
     * Toggle Dashboard vertical menu
     */
    toggleSideDrawer() {
        this.dashBoardMenuState.next(!this.drawerOpen);
    }

    /**
     * Toggle Component vertical menu
     */
    toggleMenuSide() {
        this.componentMenuState.next(!this.componentDrawerOpen);
    }

    getLayoutSettings(): LayoutSettings {
        let settings = new LayoutSettings();
        //or read from db
        return settings;
    }

    getMenuList(sender: Projects): NavigationItem[] {
        //read from db based on sender
        const menus: NavigationItem[] = [];
        return menus;
    }
}
