import { _decorator, Button, Component, Label, Node } from 'cc';
import { ScreenManager } from './ScreenManager';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property(Button)
    private menuButtons: Button[] = [];

    protected onLoad(): void {
        this.menuButtons.forEach((button) => {
            button.node.on(Button.EventType.CLICK, this.onButtonClick, this);
        });
    }

    private onButtonClick(button: Button): void {
        if (!button)
            return;

        const label = button.node.getComponentInChildren(Label);
        if (label) {
            ScreenManager.pushScreen("Display");
        }
    }
}


