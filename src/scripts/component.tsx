import * as React from "react";
import * as ReactDOM from "react-dom";
import {ActionCreator} from "./actionCreator";
import {Dispatcher} from "./dispatcher";

export class Component extends React.Component<any, { count: number }> {
    private dispatcher: Dispatcher;
    private action: ActionCreator;

    constructor() {
        super();

        this.dispatcher = new Dispatcher();
        this.action = new ActionCreator(this.dispatcher);

        this.state = { count: 0 };
    }

    public componentDidMount(): void {
        this.action.createProperty(0).onValue((state: number) => {
            this.setState({ count: state });
        });
    }

    private tick(): void {
        this.action.countUp();
    }

    public render(): JSX.Element {
        return <div>
            <button onClick={this.tick.bind(this) }>Count Up</button>
            <p>
                Count: {this.state.count }
            </p>
        </div>;
    }
}