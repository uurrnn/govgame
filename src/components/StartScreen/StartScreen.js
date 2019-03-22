import { h, render, Component } from "preact";

class StartScreen extends Component {
    render() {
        return (
            <div class="startScreen">
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
