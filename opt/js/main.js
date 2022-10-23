import Drawer from "./Drawer.js";
import History from "./History.js";
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

  // window.resopt = JSON.stringify(result);
  const drawer = new Drawer(result);

  drawer.drawPlot("plot");

  const history = new History();
  history.save(JSON.stringify(result));
  drawHistory(history.read());
  minE.innerHTML = `(${
    Math.round((result.x[0] + Number.EPSILON) * 100) / 100
  } ;${Math.round((result.x[1] + Number.EPSILON) * 100) / 100}; ${
    Math.round((result.x[2] + Number.EPSILON) * 100) / 100
  })`;
  f_x.innerHTML = `(${Math.round((result.fmin + Number.EPSILON) * 100) / 100})`;
  count.innerHTML = `${result.count}`;
  fcount.innerHTML = `${result.fcount}`;
}

function drawHistory(history) {
  console.log("====================================");
  console.log(history);
  console.log("====================================");

  document.getElementById("historylist").innerHTML = history
    .reverse()
    .map((node, id) => {
      let nodeh = JSON.parse(node);

      return `<li class="list-group-item">${history.length - id} - ${
        nodeh.count
      }, ${nodeh.fcount}</li>`;
    })
    .join("");
}

function loadEvent() {
  const history = new History();
  drawHistory(history.read());
}

function downloadJSON() {
  const download = document.getElementById("downloadLink");
  const history = new History();
  console.log(window.resopt);
  download.href = history.save(window.resopt);
}

const start = document.getElementById("start");
const download = document.getElementById("downloadLink");
start.addEventListener("click", Diagram);
// download.addEventListener("click", downloadJSON);
window.addEventListener("load", loadEvent);
