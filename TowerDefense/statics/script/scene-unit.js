enum Unit_
{
  //Life
  Invalid = 0,
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
};

/*name, hp, att, att_type1, att_type2, def_type, spd, money_earn, money_spend,)*/ {
  // 이름, 공격력, 공격형태, 방어력, 방어형태, 이동속도, 잡으면 주는 돈, 생성비,
  // 공격형태 : 원거리, 근거리[1] && 일반형(100%), 폭발형(50/75/100%), 진동형(100/50/25%)[2]
  // 방어형태 : 소형, 중형, 대형
 // life는 무생성시 Invalid, 생성시 Live, 죽으면 Dead
class Unit {
  public : function Unit(information) {
    name_ = information.name;
      hp_ = information.hp;
    att_ = information.att;
      att_type1_ = information.att_type1; //원거리, 근거리
      att_type2_ = information.att_type2; // 일반형, 폭발형, 진동형
      def_type_ = information.def_type;
      spd_ = information.spd;
      money_earn_ = information.money_earn;
      money_spend_ = information.money_spend;
      x = 0;
      enemyindex = -1;
    }

  private : var name_, hp_, att_, att_type1_, att_type2_;
            var money_earn_, money_spd_, spd_, def_type_;
            var x, enemyindex;

}


class Scene {
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
      if (/*unit이 추가된 경우 */ 1) {
        Unit newUnit(information); // 새로운 unit 초기화 및 생성
        unitArr.push(newUnit); // unitArr에 newUnit 맨뒤에 넣음
        unitCnt++;
      }

      instance.unitArr.forEach(function(unit, index, object) {
        if (/*앞에 아무도 없어서 앞으로 갈 수 있을때(미정)*/ 0) {
          unit.x += 1;
        }

        if (UnitDie(unitArr[index])) /* 어느 정도 이상 가면 죽음 && hp 적어져서 죽음 : 1 죽음, 0 살음*/ {
            object.splice(index, 1);
            unitCnt--;
        }

        //공격이 가능한 경우 공격을 실행함
        if (unit.enemyindex >= 0 && unit.enemyindex < unitCnt) {
          attackCtrl(unitArr[unit.enemyindex], unit);
        }

      })
		}
	}

	start() {
		//scene load 시 실행될 부분
		this.render();
		if(this.hasLoop) {
			this.loop();
		}
	}
}

class GameStage extends Scene {

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
function attackCtrl(enemyObject, object) {
  if (object.att_type2_ == Unit_.Common) {
      enemyObject.hp_ -= object.att_;
    }
    else if (enemyObject.def_type_ == Unit_.Small && object.att_type2_ == Unit_.Bomb) {
      enemyObject.hp_ -= object.att_ * 0.5;
    }
    else if (enemyObject.def_type_ == Unit_.Middle && object.att_type2_ == Unit_.Bomb) {
      enemyObject.hp_ -= object.att_ * 0.75;
    }
    else if (enemyObject.def_type_ == Unit_.Big && object.att_type2_ == Unit_.Bomb) {
      enemyObject.hp_ -= object.att_;
    }
    else if (enemyObject.def_type_ == Unit_.Small && object.att_type2_ == Unit_.Vibration) {
      enemyObject.hp_ -= object.att_;
    }
    else if (enemyObject.def_type_ == Unit_.Middle && object.att_type2_ == Unit_.Vibration) {
      enemyObject.hp_ -= object.att_ * 0.5;
    }
    else if (enemyObject.def_type_ == Unit_.Big && object.att_type2_ == Unit_.Vibration) {
      enemyObject.hp_ -= object.att_ * 0.25;
    }

    if (enemyObject.hp_ <= 0) {
        enemyObject.life_ = Unit_.Dead;
      }

    return [enemyObject, object];
}

function UnitDie(information) {
	if (information.hp <= 0 || information.x >= 90) {
		return 1;
	}
	else
		return 0;
}
//hp가 0 이하거나 어느 수준 이상 가면 죽음