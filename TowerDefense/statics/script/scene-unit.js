const Unit_ = {
  //Life
  Invalid : 0,
  Life,
  Dead,

  // 원거리, 근거리
  Far,
  Short,

  //일반형(100%), 폭발형(50/75/100%), 진동형(100/50/25%)
  Common,
  Bomb,
  Vibration,

  // 방어형태 : 소형, 중형, 대형
  Small,
  Middle,
  Big,

  // 팀 : 아군 or 적군
  Our,
  Enemy
};

/*name, hp, att, att_type1, att_type2, def_type, spd, money_earn, money_spend,)*/
  // 이름, 공격력, 공격형태, 방어력, 방어형태, 이동속도, 잡으면 주는 돈, 생성비,
  // 공격형태 : 원거리, 근거리[1] && 일반형(100%), 폭발형(50/75/100%), 진동형(100/50/25%)[2]
  // 방어형태 : 소형, 중형, 대형
  // range는 범위, team 은 아군 or 적군, delay는 공격 시간차
 // life는 무생성시 Invalid, 생성시 Live, 죽으면 Dead
class Unit {
  constructor(name, hp, att, att_type1, att_type2, def_type, spd, money_earn, money_spend, range, team, delay) {
    this.name_ = name;
    this.hp_ = hp;
    this.att_ = att;
    this.att_type1_ = att_type1; //원거리, 근거리
    this.att_type2_ = att_type2; // 일반형, 폭발형, 진동형
    this.def_type_ = def_type;
    this.spd_ = spd;
    this.money_earn_ = money_earn;
    this.money_spend_ = money_spend;
    this.range_ = range;
    this.team_ = team;
    this.delay_ = delay;
    this.x = -1; // 생성시 0(아군) 또는 180(적군)으로 초기화
  }
}


class Scene {
	constructor(hasLoop) {
		this.hasLoop = hasLoop;
		//게임 루프가 필요없는 scene
		var ourUnit = new Array();
    var eneUnit = new Array();
		var oUnitCnt = 0;
    var eUnitCnt = 0;
    var unitCnt = 0;
	}

	render() {
		//view 팀
	}

	loop() {
      if (/*unit이 추가된 경우 */ 1) {
        var newUnit = new Unit(name, hp, att, att_type1, att_type2, def_type, spd, money_earn, money_spend, range, team, delay); // 새로운 unit 초기화 및 생성
        if (newUnit.team = Unit_.Our) {
          ourUnit.x = 0;
          ourUnit.push(newUnit);
          oUnitCnt++;
        }
        else if (newUnit.team = Unit_.Enemy) {
          eneUnit.x = 180;
          eneUnit.push(newUnit);  
          eUnitCnt++;
        }
        unitCnt++;
      }

      instance.ourUnit.forEach(function(unit, index, object) {
        var check = 0;
        for (var i = 0; i < oUnitCnt; i++) {
          if (unit.x <= ourUnit[i].x && ourUnit[i].x <= unit.x + 1)
            check++;
        }

        for (var j = 0; j <= eUnitCnt; j++) {
          if (unit.x <= eneUnit[j].x && eneUnit[j].x <= unit.x + 1)
            check++;
        }

        if (check == 0)
          unit.x += 1;

        // 어느 정도 이상 가면 죽음 && hp 적어져서 죽음 : 1 죽음, 0 살음
        if (UnitDie(ourUnit[index]).hp_) {
            object.splice(index, 1);
            unitCnt--;
            oUnitCnt--;
        }

        //아군의 적군 공격
        instance.eneUnit.forEach(function(eunit, eindex, eobject) {
          if (eunit.x <= unit.x + unit.range || unit.x - unit.range <= eunit.x) {
            attackCtrl(ourUnit[index], eneUnit[eindex]);
          }
        })
      })

      instance.eneUnit.forEach(function(unit, index, object) {
        var check = 0;
        for (var i = 0; i < oUnitCnt; i++) {
          if (ourUnit[i].x <= unit.x && unit.x - 1 <= ourUnit[i].x)
            check++;
        }

        for (var j = 0; j <= eUnitCnt; j++) {
          if (eneUnit[j].x <= unit.x && unit.x - 1 <= eneUnit[j].x)
            check++;
        }

        if (check == 0)
          unit.x -= 1;

        // 어느 정도 이상 가면 죽음 && hp 적어져서 죽음 : 1 죽음, 0 살음
        if (UnitDie(eneUnit[index].hp_)) {
            object.splice(index, 1);
            unitCnt--;
            eUnitCnt--;
        }

        //적군의 아군 공격
        instance.ourUnit.forEach(function(ounit, oindex, oobject) {
          if (ounit.x <= unit.x + unit.range || unit.x - unit.range <= ounit.x)
            attackCtrl(eneUnit[index], ourUnit[oindex]);
        })
      })
	}

	start() {
		//scene load 시 실행될 부분
		this.render();
		if(this.hasLoop) {
			this.loop();
		}
	}
}


// 맵의 범위는 180으로 지정, 아군 시작 지점은 0, 적군 시작 지저믄 180
class GameStage extends Scene {
    constructor(hasLoop) {
    this.hasLoop = hasLoop;
    //게임 루프가 필요없는 scene
    var unitArr = new Array();
    var unitCnt = 0;
  }

  render() {
    //view 팀
  }

  loop() {
      
  }

  start() {
    //scene load 시 실행될 부분
    this.render();
    if(this.hasLoop) {
      this.loop();
    }
  }
}

function loadScene() {

}

function popUp() {

}

/*
function Player(name, money, money_spd, tower_type) {
  // 이름, 돈, 돈버는 속도, 타워 타입
  this.name_ = name;
  this.money_ = money;
  this.money_spd_ = money_spd;
  this.tower_type_ = tower_type;
}*/

// 공격형태 : 원거리, 근거리[1] && 일반형(100%), 폭발형(50/75/100%), 진동형(100/50/25%)[2]
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

function UnitDie(hp) {
	if (hp <= 0 || information.x >= 180) {
		return 1;
	}
	else
		return 0;
}

//hp가 0 이하거나 어느 수준 이상 가면 죽음
