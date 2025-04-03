document.getElementById("themeToggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".output-container").classList.toggle("dark-mode");
});

function updateOutput() {
    const htmlCode = document.getElementById("html-Input").value;
    const cssCode = `<style>${document.getElementById("CSS-Input").value}</style>`;
    const jsCode = `<script>${document.getElementById("JS-Input").value}<\/script>`;
    
    const iframe = document.getElementById("codeExecutionOutput").contentWindow.document;
    iframe.open();
    iframe.write(htmlCode + cssCode + jsCode);
    iframe.close();
}

// Update output when user types
document.getElementById("html-Input").addEventListener("keyup", updateOutput);
document.getElementById("CSS-Input").addEventListener("keyup", updateOutput);
document.getElementById("JS-Input").addEventListener("keyup", updateOutput);
