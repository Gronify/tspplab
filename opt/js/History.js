export default class History {
  key = "saves";

  read() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  save(data) {
    if (!localStorage.hasOwnProperty(this.key)) {
      localStorage.setItem(this.key, JSON.stringify([data]));
    } else {
      let history = JSON.parse(localStorage.getItem(this.key));
      history.push(data);
      localStorage.setItem(this.key, JSON.stringify(history));
    }
    return localStorage.getItem(this.key);
  }

  delete() {
    localStorage.removeItem(this.key);
  }

  #textFileUrl = null;
  saveToDevice(data) {
    let fileData = new Blob([data], { type: "application/json" });

    this.textFileUrl = window.URL.createObjectURL(fileData);
    return this.textFileUrl;
  }
}
