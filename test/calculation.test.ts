import { Dispatcher } from "../src/scripts/dispatcher";
import { ActionCreator } from "../src/scripts/actionCreator";

describe("Calculations", () => {
    describe("ActionCreator", () => {
        let dispatcher: Dispatcher;
        let action: ActionCreator;

        beforeEach(() => {
            dispatcher = new Dispatcher();
            action = new ActionCreator(dispatcher);
        });

        describe("CountUp", () => {
            it("should push `countUp` event", () => {
                let count: number = 0;
                const expectedCount: number = 50;

                action.createProperty(0).onValue((state: number) => {
                    count = state;
                });

                for (let i = 0; i < expectedCount; i++) {
                    action.countUp();
                }
                chai.assert.strictEqual(count, expectedCount);
            });
        });
    });
});
