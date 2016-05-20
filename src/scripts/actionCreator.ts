import * as Bacon from "baconjs";
import {Dispatcher} from "./dispatcher";
import {Constant} from "./constant";

export class ActionCreator {
    constructor(private dispatcher: Dispatcher) { }

    public countUp(): void {
        this.dispatcher.push(Constant.COUNT_UP, undefined);
    }

    public createProperty(initialValue: number): Bacon.Property<any, any> {
        return this.dispatcher.stream(Constant.COUNT_UP).scan<number>(initialValue, (cur: number, _) => cur + 1);
    }
}