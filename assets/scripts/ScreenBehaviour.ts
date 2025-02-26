import { _decorator, Component, Label, Node } from 'cc';
import { Screen } from './Screen';
const { ccclass, property } = _decorator;

@ccclass('ScreenBehaviour')
export class ScreenBehaviour extends Component {
    @property(Screen)
    protected screen?: Screen;

    protected onLoad(): void {
        if (!this.screen) {
            this.screen = this.getComponent(Screen);
        }
        if (this.screen){
            this.screen.OnShow = this.OnShow.bind(this);
            this.screen.OnHide = this.OnHide.bind(this);
        }
    }

    protected onDestroy(): void {
        if (this.screen){
            this.screen.OnShow = null;
            this.screen.OnHide = null;
        }
    }

    protected OnShow() : void {
        
    }

    protected OnHide() : void {
        
    }
}


