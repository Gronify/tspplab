export default class Recognizer {
  #fun;
  #e;
  #h;
  #m;
  #amin;
  #amax;
  #point;

  recognizePoint(pointSTR) {
    try {
      this.#point = pointSTR
        .slice(1, -1)
        .split(",")
        .map(function (item) {
          return parseFloat(item);
        });
      return this.#point;
    } catch (error) {
      return new Error();
    }
  }

  recognizeErr(eSTR) {
    try {
      this.#e = parseFloat(eSTR);
      return this.#e;
    } catch (error) {
      return new Error();
    }
  }

  recognizeStep(hSTR) {
    try {
      this.#h = parseFloat(hSTR);
      return this.#h;
    } catch (error) {
      return new Error();
    }
  }

  recognizeStepCount(mSTR) {
    try {
      this.#m = parseFloat(mSTR);
      return this.#m;
    } catch (error) {
      return new Error();
    }
  }

  recognizeEdgeMin(edgeSTR) {
    try {
      this.#amin = edgeSTR
        .slice(1, -1)
        .split(",")
        .map(function (item) {
          return parseFloat(item);
        });
      return this.#amin;
    } catch (error) {
      return new Error();
    }
  }

  recognizeEdgeMax(edgeSTR) {
    try {
      this.#amax = edgeSTR
        .slice(1, -1)
        .split(",")
        .map(function (item) {
          return parseFloat(item);
        });
      return this.#amax;
    } catch (error) {
      return new Error();
    }
  }
}
