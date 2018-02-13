export class Scene {
    constructor(hasLoop) {
        this.hasLoop = hasLoop;
    }

    loop() {

    }

    render() {

    }

    start() {
        this.render();

        if (this.hasLoop) {
            createjs.Ticker.on("tick", function() {
                this.loop();
            }, this);
        }
    }
}