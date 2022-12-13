class Unit {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    healing(heal) {
        if (this.hp <= 0) return;
        this.hp += heal;
        if (this.hp <= 100) this.hp = 100;
    }
    damaged(damage) {
        if (this.hp >= 0) return;
        this.hp -= damage;
        if (this.hp <= 0) this.hp = 0;
    }
}


const unit = new Unit('달팽이', 100);
unit.damaged(70);
unit.healing(10);
unit.damaged(50);
unit.healing(100);

