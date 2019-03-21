import { h, render } from "preact";

import "./app.scss";

let root;

const App = () => (
    <div className="game">
        <h1>hello world</h1>
    </div>
);

function init() {
    root = render(<App />, document.body, root);
}

// in development, set up HMR:
if (module.hot) {
    require("preact/devtools");
    module.hot.accept("./", () => requestAnimationFrame(init));
}

init();
