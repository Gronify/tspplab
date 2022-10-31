function compareLastId(lastid) {
  document.getElementById("historylistidlast").innerHTML =
    document.getElementById("historylistid").innerHTML;
  document.getElementById("historylistid").innerHTML = lastid;
  console.log("====================================");
  console.log(1);
  console.log("====================================");
}
