import MathFunction from "./MathFunction.js";

export default class Optimizer {
  constructor(func) {
    {
      this.func = func;
    }
  }
  findAnswer(x10, x20, x30, e, h, amin, bmax, maxerr) {
    // maxerr Ресурс кількості невдалих кроків
    let m = 1;
    let x0 = [x10, x20, x30];
    let x1 = [];
    let x2 = [];
    let x3 = [];
    let x1ar = [x10];
    let x2ar = [x20];
    let x3ar = [x30];
    let b = bmax[0] - amin[0];
    for (let i = 0; i < 3; i++) {
      if (bmax[i] - amin[i] > b) {
        b = bmax[i] - amin[i];
      }
    }
    let s = [];
    for (let i = 0; i < 3; i++) {
      s[i] = (bmax[i] - amin[i]) / b;
    }
    let y = h;

    do {
      let merr = 0;
      let ms = 0;

      do {
        x1 = x0.slice(0);
        let ep = [];
        for (let j = 0; j < 3; j++) {
          ep[j] = Math.random() * 2 - 1;
        }

        if (this.func.f_n(x1, y, s, ep) < this.func.f(x1)) {
          for (let i = 0; i < 3; i++) {
            x2[i] = x1[i] + y * s[i] * ep[i];
          }
        } else {
          for (let i = 0; i < 3; i++) {
            x2[i] = x1[i];
          }
        }

        for (let i = 0; i < 3; i++) {
          if (x2[i] > bmax[i]) {
            x2[i] = bmax[i];
          } else if (x2[i] < amin[i]) {
            x2[i] = amin[i];
          }
        }

        if (merr > maxerr) {
          y = y / 2;
          merr = 0;
          ms++;
        }
        merr++;
      } while (this.func.f(x1) <= this.func.f(x2));

      x0 = x2.slice(0);

      console.log("i=" + m);
      console.log("x2=" + x2[0] + " " + x2[1] + " " + x2[2]);
      x1ar[m] = x2[0];
      x2ar[m] = x2[1];
      x3ar[m] = x2[2];
      console.log("y=" + y);

      m++;
      if (m > 1000) break;
    } while (y > e);

    return {
      count: m,
      x: x2,
      fmin: this.func.f(x2),
      fcount: this.func.getCounter(),
      x_arr: x1ar,
      y_arr: x2ar,
      z_arr: x3ar,
    };
  }
}
