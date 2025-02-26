import { _decorator, Component, Node } from 'cc';
import { ScreenManager } from './ScreenManager';
const { ccclass, property } = _decorator;

@ccclass('Screen')
export class Screen extends Component {

    public OnShow?: () => void;
    public OnHide?: () => void;

    start() {
        if (!ScreenManager.ScreenList.has(this.node.name))
            ScreenManager.ScreenList.set(this.node.name, this);
        
        this.node.active = false;
    }

    protected onDestroy(): void {
        ScreenManager.ScreenList.delete(this.node.name);
    }
    
    public show() {
        // Can enhance this with tween animation
        this.node.active = true;
        this.OnShow?.();
    }

    public hide() {
        // Can enhance this with tween animation
        this.node.active = false;
        this.OnHide?.();
    }
}