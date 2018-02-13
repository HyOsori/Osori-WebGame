import { Scene } from './Scene.js';
import { Unit, Unit_, Player } from './Unit.js';

// 맵의 범위는 180으로 지정, 아군 시작 지점은 0, 적군 시작 지저믄 180
export class GameStage extends Scene {
    constructor() {
        super(true);

        //게임 루프가 필요없는 scene
        this.ourUnit = new Array();
        this.eneUnit = new Array();
        this.oUnitCnt = 0;
        this.eUnitCnt = 0;
        this.unitCnt = 0;
    }

    loop() {
        /*
        if (unit이 추가된 경우 1) {
            var newUnit = new Unit(name, hp, att, att_type1, att_type2, def_type, spd, money_earn, money_spend, range, team, delay); // 새로운 unit 초기화 및 생성
            if (newUnit.team == Unit_.Our) {
                newUnit.x = 0;
                this.ourUnit.push(newUnit);
                this.oUnitCnt++;
            }
            else if (newUnit.team == Unit_.Enemy) {
                newUnit.x = 180;
                this.eneUnit.push(newUnit);
                this.eUnitCnt++;
            }
            this.unitCnt++;
        }

        this.ourUnit.forEach(function(unit, index, object) {
            var check = 0;
            for (var i = 0; i < this.oUnitCnt; i++) {
                if (unit.x <= this.ourUnit[i].x && this.ourUnit[i].x <= unit.x + 1)
                    check++;
            }

            for (var j = 0; j <= this.eUnitCnt; j++) {
                if (unit.x <= this.eneUnit[j].x && this.eneUnit[j].x <= unit.x + 1)
                    check++;
            }

            if (check == 0)
                unit.x += 1;

            // 어느 정도 이상 가면 죽음 && hp 적어져서 죽음 : 1 죽음, 0 살음
            if (UnitDie(this.ourUnit[index]).hp_) {
                object.splice(index, 1);
                this.unitCnt--;
                this.oUnitCnt--;
            }

            //아군의 적군 공격
            this.eneUnit.forEach(function(eunit, eindex, eobject) {
                if (eunit.x <= unit.x + unit.range || unit.x - unit.range <= eunit.x) {
                    attackCtrl(this.ourUnit[index], this.eneUnit[eindex]);
                }
            })
        });

        this.eneUnit.forEach(function(unit, index, object) {
            var check = 0;
            for (var i = 0; i < this.oUnitCnt; i++) {
                if (this.ourUnit[i].x <= unit.x && unit.x - 1 <= this.ourUnit[i].x)
                    check++;
            }

            for (var j = 0; j <= this.eUnitCnt; j++) {
                if (this.eneUnit[j].x <= unit.x && unit.x - 1 <= this.eneUnit[j].x)
                    check++;
            }

            if (check == 0)
                unit.x -= 1;

            // 어느 정도 이상 가면 죽음 && hp 적어져서 죽음 : 1 죽음, 0 살음
            if (UnitDie(this.eneUnit[index].hp_)) {
                object.splice(index, 1);
                this.unitCnt--;
                this.eUnitCnt--;
            }

            //적군의 아군 공격
            this.ourUnit.forEach(function(ounit, oindex, oobject) {
                if (ounit.x <= unit.x + unit.range || unit.x - unit.range <= ounit.x)
                    attackCtrl(this.eneUnit[index], this.ourUnit[oindex]);
            })
        })
        */
    }

    render() {

    }
}

// 공격형태 : 원거리, 근거리[1] && 일반형(100%), 폭발형(50/75/100%), 진동형(100/50/25%)[2]
/*
function attackCtrl(attacker, defender) {
  if (defender.att_type2_ == Unit_.Common) {
      attacker.hp_ -= defender.att_;
    }
    else if (attacker.def_type_ == Unit_.Small && defender.att_type2_ == Unit_.Bomb) {
      attacker.hp_ -= defender.att_ * 0.5;
    }
    else if (attacker.def_type_ == Unit_.Middle && defender.att_type2_ == Unit_.Bomb) {
      attacker.hp_ -= defender.att_ * 0.75;
    }
    else if (attacker.def_type_ == Unit_.Big && defender.att_type2_ == Unit_.Bomb) {
      attacker.hp_ -= defender.att_;
    }
    else if (attacker.def_type_ == Unit_.Small && defender.att_type2_ == Unit_.Vibration) {
      attacker.hp_ -= defender.att_;
    }
    else if (attacker.def_type_ == Unit_.Middle && defender.att_type2_ == Unit_.Vibration) {
      attacker.hp_ -= defender.att_ * 0.5;
    }
    else if (attacker.def_type_ == Unit_.Big && defender.att_type2_ == Unit_.Vibration) {
      attacker.hp_ -= defender.att_ * 0.25;
    }

    if (attacker.hp_ <= 0) {
        attacker.life_ = Unit_.Dead;
      }

    return [attacker, defender];
}
*/
/*
function UnitDie(hp) {
	if (hp <= 0 || information.x >= 180) {
		return 1;
	}
	else
		return 0;
}
*/
//hp가 0 이하거나 어느 수준 이상 가면 죽음
