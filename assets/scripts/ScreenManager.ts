import { _decorator } from 'cc';
import { Screen } from './Screen';

export class ScreenManager {
    // Current screen showing
    public static CurrentScreen?: Screen;
    // All the screens that existed and ready to be called by this
    public static ScreenList: Map<string, Screen> = new Map();
    // The stack of screens that are currently showing
    public static ScreenStack: Screen[] = [];

    public static getScreen(screenName: string): Screen | null {
        return this.ScreenList.get(screenName) ?? null;
    }

    public static pushScreen(screenName: string): Screen | null {
        const screen = this.getScreen(screenName);
        if (!screen) {
            console.error(`Screen: Cannot find ${screenName}`);
            return null;
        }

        this.ScreenStack.push(screen);
        this.CurrentScreen = screen;
        screen.show();
        return screen;
    }

    public static popScreen(screenName: string): void {
        const screen = this.getScreen(screenName);
        if (!screen) {
            console.error(`Screen: Cannot find ${screenName}`);
            return;
        }

        this.CurrentScreen.hide();
        this.ScreenStack.pop();

        // Set the previous screen as active, if any
        if (this.ScreenStack.length > 0) {
            this.CurrentScreen = this.ScreenStack[this.ScreenStack.length - 1];
        } else {
            this.CurrentScreen = null;
        }
    }
}


