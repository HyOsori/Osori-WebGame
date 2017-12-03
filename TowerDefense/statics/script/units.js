


function Player(name, money, money_spd, tower_type) {
  // 이름, 돈, 돈버는 속도, 타워 타입
  this.name_ = name;
  this.money_ = money;
  this.money_spd_ = money_spd;
  this.tower_type_ = tower_type;

}

enum Unit
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

function Unit(name, hp, att, att_type1, att_type2, def_type, spd, money_earn, money_spend,) {
  // 이름, 공격력, 공격형태, 방어력, 방어형태, 이동속도, 잡으면 주는 돈, 생성비,
  // 공격형태 : 원거리, 근거리[1] && 일반형(100%), 폭발형(50/75/100%), 진동형(100/50/25%)[2]
  // 방어형태 : 소형, 중형, 대형
  this.name_ = name;
  this.hp_ = hp;
  this.att_ = att;
  this.att_type1_ = att_type1; //원거리, 근거리
  this.att_type2_ = att_type2; // 일반형, 폭발형, 진동형
  this.def_type_ = def_type;
  this.spd_ = spd;
  this.money_earn = money_earn;
  this.money_spend = money_spend;
  // life는 무생성시 Invalid, 생성시 Live, 죽으면 Dead
  this.life_ = Unit.Invalid;

  //공격함수
  this.attacks = function(&Enemy) {
    if (this.att_type2_ == Unit.Common) {
      Enemy.hp_ -= this.att_;
      if (Enemy.hp_ <= 0) {
        Enemy.life_ = Unit.Dead;
      }
    }
    else if (Enemy.def_type_ == Unit.Small && this.att_type2_ == Unit.Bomb) {
      Enemy.hp_ -= this.att_ * 0.5;
      if (Enemy.hp_ <= 0) {
        Enemy.life_ = Unit.Dead;
      }
    }
    else if (Enemy.def_type_ == Unit.Middle && this.att_type2_ == Unit.Bomb) {
      Enemy.hp_ -= this.att_ * 0.75;
      if (Enemy.hp_ <= 0) {
        Enemy.life_ = Unit.Dead;
      }
    }
    else if (Enemy.def_type_ == Unit.Big && this.att_type2_ == Unit.Bomb) {
      Enemy.hp_ -= this.att_;
      if (Enemy.hp_ <= 0) {
        Enemy.life_ = Unit.Dead;
      }
    }
    else if (Enemy.def_type_ == Unit.Small && this.att_type2_ == Unit.Vibration) {
      Enemy.hp_ -= this.att_;
      if (Enemy.hp_ <= 0) {
        Enemy.life_ = Unit.Dead;
      }
    }
    else if (Enemy.def_type_ == Unit.Middle && this.att_type2_ == Unit.Vibration) {
      Enemy.hp_ -= this.att_ * 0.5;
      if (Enemy.hp_ <= 0) {
        Enemy.life_ = Unit.Dead;
      }
    }
    else if (Enemy.def_type_ == Unit.Big && this.att_type2_ == Unit.Vibration) {
      Enemy.hp_ -= this.att_ * 0.25;
      if (Enemy.hp_ <= 0) {
        Enemy.life_ = Unit.Dead;
      }
    }
  }
}
