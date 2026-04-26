function init() {
    const taskStatement = document.getElementById("task-statement");
    if (!taskStatement) return;

    const links = taskStatement.querySelectorAll("a");
    for (const link of links) {
        const url = new URL(link.href, window.location.href);
        if (url.pathname.toLowerCase().endsWith(".zip")) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.textContent = "Copy";
            btn.className = "btn btn-default btn-sm";
            btn.style.marginLeft = "0.5em";
            btn.style.verticalAlign = "middle";

            btn.addEventListener("click", (e) => {
                e.preventDefault();
                navigator.clipboard.writeText(link.href).then(() => {
                    const originalText = btn.textContent;
                    btn.textContent = "Copied!";
                    setTimeout(() => {
                        btn.textContent = originalText;
                    }, 1000);
                });
            });

            // Insert button after the link
            link.parentNode?.insertBefore(btn, link.nextSibling);
        }
    }
}

// AtCoder often loads content dynamically or has multiple tabs.
// Running it once should be enough for standard problem pages.
init();
