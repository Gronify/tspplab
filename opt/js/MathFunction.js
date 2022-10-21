export default class MathFunction {
  counter = 0;
  constructor(func) {
    this.func = func;
  }

  f(x) {
    // window.fcountn = window.fcountn + 1;
    this.counter = this.counter + 1;
    return eval(this.func);
  }

  f_n(x, y, s, ep) {
    let x1 = [];
    for (let i = 0; i < 3; i++) {
      x1[i] = x[i] + y * s[i] * ep[i];
    }
    return this.f(x1);
  }

  getCounter() {
    console.log(this.counter);
    return this.counter;
  }
}
