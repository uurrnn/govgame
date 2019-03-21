import { h, render, Component } from "preact";

class CharacterCreation extends Component {
    render() {
        return (
            <div className="characterCreation">
                <h1>Character Creation</h1>
                <form>
                    <label>First Name:</label>
                    <input type="text" />
                    <label>Last Name:</label>
                    <input type="text" />
                </form>
            </div>
        );
    }
}

export default CharacterCreation;
