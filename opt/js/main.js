import Drawer from "./Drawer.js";
import MathFunction from "./MathFunction.js";
import Optimizer from "./Optimizer.js";
import Recognizer from "./Recognizer.js";

function Diagram() {
  const minE = document.getElementById("min");
  const count = document.getElementById("count");
  const f_x = document.getElementById("f_x");
  const fcount = document.getElementById("fcount");
  // window.fcountn = 0;
  const recognizer = new Recognizer();
  const startPoint = recognizer.recognizePoint(
    document.getElementById("startPoint").value
  );
  const e = recognizer.recognizeErr(document.getElementById("eRR").value);
  const h = recognizer.recognizeStep(document.getElementById("step").value);
  const min = recognizer.recognizeEdgeMin(
    document.getElementById("amin").value
  );
  const max = recognizer.recognizeEdgeMax(
    document.getElementById("amax").value
  );
  const mmax = recognizer.recognizeStepCount(
    document.getElementById("mmax").value
  );
  const func = new MathFunction(document.getElementById("func").value);

  const optimizer = new Optimizer(func);
  console.log(startPoint);
  const result = optimizer.findAnswer(
    startPoint[0],
    startPoint[1],
    startPoint[2],
    e,
    h,
    min,
    max,
    mmax
  );

  const drawer = new Drawer(result);

  drawer.drawPlot("plot");

  minE.innerHTML = `(${
    Math.round((result.x[0] + Number.EPSILON) * 100) / 100
  } ;${Math.round((result.x[1] + Number.EPSILON) * 100) / 100}; ${
    Math.round((result.x[2] + Number.EPSILON) * 100) / 100
  })`;
  f_x.innerHTML = `(${Math.round((result.fmin + Number.EPSILON) * 100) / 100})`;
  count.innerHTML = `${result.count}`;
  fcount.innerHTML = `${result.fcount}`;
}

const start = document.getElementById("start");
start.addEventListener("click", Diagram);

// window.addEventListener("load", Diagram);
