function editorcode() {
  const code = document.getElementById("editor-code").value;
  const output = document.getElementById("log");
  try {

    const logs = [];
    const originalLog = console.log;
    console.log = (...args) => logs.push(args.join(" "));
    
    eval(code);
    console.log = originalLog;

    output.innerHTML = logs.join("<br>");
  } catch (e) {
    output.innerHTML = "Error: " + e.message;
  }
}

editorcode();