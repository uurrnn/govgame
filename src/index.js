import { h, render } from "preact";

import Game from "./components/Game/Game";
import Welcome from "./components/Welcome/Welcome";

import "./app.scss";

let root;

const App = () => (
    <div>
        <Game />
        <Welcome />
    </div>
);

const init = () => {
    root = render(<App />, document.body, root);
};

// in development, set up HMR:
if (module.hot) {
    require("preact/devtools");
    module.hot.accept("./", () => requestAnimationFrame(init));
}

init();
