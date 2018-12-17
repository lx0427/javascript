class Contra {
  constructor() {
    // 储存当前执行动作
    this._currentState = {}
  }

  // 添加执行动作
  changeState() {
    // 添加之前清空动作
    this._currentState = {}

    Object.keys(arguments).forEach(
      k => this._currentState[arguments[k]] = true
    )
    console.log(this._currentState)
    return this
  }

  // 执行动作
  contraGo() {
    Object.keys(this._currentState).forEach(v => {
      Actions[v] && Actions[v].apply(this)
    })
  }
}
let Actions = {
  up(step) {
    console.log('up', step);
  },
  down() {
    console.log('down');
  },
  forward() {
    console.log('forward');
  },
  backward() {
    console.log('backward');
  },
  shoot() {
    console.log('shoot');
  }
}

let xm = new Contra();
xm.changeState('shoot', 'up').contraGo()