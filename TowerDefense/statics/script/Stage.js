import { Scene } from './Scene.js';

export class StageSelect extends Scene {
    // noinspection JSAnnotator
    constructor(game) {
        super(false);
        this.game = game;
        this.focused_stage_index = 0;
        var numofstars=0;
    }

    getValue() {
        var stage = this.game.stages[this.focused_stage_index];
        var value = {
            score : stage.score,
            x : stage.x,
            y : stage.y,
            first_reference_value : stage.first_reference_value,
            second_reference_value : stage.second_reference_value
        }
        return value;
    }

    rateStars() {
        if(score <= 0) numofstars = 0;
        if(0 < score <= first_reference_value) numofstars = 1;
        if(first_reference_value < score <= second_reference_value) numofstars = 2;
        if(second_reference_value < score <= 100) numofstars = 3;
    }

    render() {

    }
}