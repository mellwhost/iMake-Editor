function save_file() {
  const codigo = document.getElementById("editor-code").value;
  const blob = new Blob([codigo], { type: "text/javascript" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "script.js";
  link.click();
  URL.revokeObjectURL(link.href);
}   