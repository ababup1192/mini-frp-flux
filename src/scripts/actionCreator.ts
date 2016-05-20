import * as Bacon from "baconjs";
import {Dispatcher} from "./dispatcher";
import {Constant} from "./constant";

export class ActionCreator {
    private d: Dispatcher;

    constructor(dispatcher: Dispatcher) {
        this.d = dispatcher;
    }

    public countUp(): void {
        this.d.push(Constant.COUNT_UP, undefined);
    }

    public countDown(): void {
        this.d.push(Constant.COUNT_DOWN, undefined);
    }

    public createProperty(initialValue: number): Bacon.Property<any, any> {
        const countUpStream: Bacon.EventStream<number, number> =
            this.d.stream(Constant.COUNT_UP).map((_: any) => +1);
        const countDownStream: Bacon.EventStream<number, number> =
            this.d.stream(Constant.COUNT_DOWN).map((_: any) => -1);

        return countUpStream.merge(countDownStream).
            scan<number>(initialValue, (acc: number, next: number) => acc + next);
    }
}
