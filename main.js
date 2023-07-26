document.addEventListener("click", function (e) {
  let clickEd = e.target;
  let expTable = document.querySelector(".exp-table");
  let eduTable = document.querySelector(".edu-table");

  if (clickEd.classList.contains("exp-header")) {
    console.log("exp");
    expTable.classList.remove("d-none");
    eduTable.classList.add("d-none");
  }
  if (clickEd.classList.contains("edu-header")) {
    console.log("edu");
    eduTable.classList.remove("d-none");
    expTable.classList.add("d-none");
  }
});
