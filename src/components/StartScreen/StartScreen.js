import { h, render, Component } from "preact";

import WH from "../../assets/white-house.jpg";

class StartScreen extends Component {
    render() {
        return (
            <div class="startScreen">
                <img src={WH} />
                <h1>Seifu</h1>
                <menu>
                    <button class="newGame">New Game</button>
                    <button class="disabled">Continue</button>
                    <button>Settings</button>
                </menu>
            </div>
        );
    }
}

export default StartScreen;
