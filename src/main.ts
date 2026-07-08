/**
 * URL文字列からクエリパラメータ（searchParams）のみを削除する
 * @param {string} href - 対象のURL文字列（絶対パス・相対パス両対応）
 * @returns {string} パラメータが削除されたURL
 */
function removeSearchParams(href: string) {
    try {
        // 絶対URLの場合
        const url = new URL(href);
        url.search = "";
        return url.toString();
    } catch (_e) {
        // 相対パスの場合（ダミーのベースURLを設定してパース）
        const dummyBase = "https://example.com";
        const url = new URL(href, dummyBase);
        url.search = "";

        // ダミーのベースURLを除いた部分（パス + ハッシュ）を返す
        return url.pathname + url.hash;
    }
}

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
                navigator.clipboard
                    .writeText(removeSearchParams(link.href))
                    .then(() => {
                        const originalText = btn.textContent;
                        btn.textContent = "Copied!";
                        setTimeout(() => {
                            btn.textContent = originalText;
                        }, 1000);
                    })
                    .catch((err: unknown) => {
                        console.error("Failed to copy text: ", err);
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
