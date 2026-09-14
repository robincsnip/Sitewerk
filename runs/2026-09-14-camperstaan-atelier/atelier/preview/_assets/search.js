(function (global) {
  function fold(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function match(items, q) {
    const query = fold(q).trim();
    if (!query) return [];
    const words = query.split(/\s+/).filter(Boolean);
    return (items || []).filter((item) => {
      const hay = fold(
        []
          .concat(item.terms || [])
          .concat([item.title, item.meta])
          .join(" "),
      );
      return words.every((word) => hay.includes(word));
    });
  }

  function bind(root) {
    const form = (root || document).querySelector("[data-find]");
    if (!form) return;
    const indexEl = (root || document).querySelector("[data-find-index]");
    let items = [];
    if (indexEl) {
      try {
        items = JSON.parse(indexEl.textContent);
      } catch (_) {
        items = [];
      }
    }
    const input = form.querySelector("input[type='search']");
    const hits = form.querySelector("[data-find-hits]");
    const status = form.querySelector("[data-find-status]");
    if (!input || !hits || !status) return;

    function render(list, raw) {
      hits.replaceChildren();
      const q = String(raw || "").trim();
      if (!q) {
        status.textContent = "";
        status.hidden = true;
        return;
      }
      if (!list.length) {
        status.hidden = false;
        status.textContent = `Geen plekken in dit overzicht voor «${q}».`;
        return;
      }
      status.hidden = false;
      status.textContent = list.length === 1 ? "1 plek" : `${list.length} plekken`;
      for (const item of list) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.title;
        const span = document.createElement("span");
        span.textContent = item.meta || "";
        li.appendChild(a);
        li.appendChild(span);
        hits.appendChild(li);
      }
    }

    function run() {
      render(match(items, input.value), input.value);
    }

    input.addEventListener("input", run);
    form.addEventListener("submit", (event) => {
      const list = match(items, input.value);
      if (list.length === 1) {
        event.preventDefault();
        window.location.href = list[0].href;
      }
    });

    const params = new URLSearchParams(window.location.search);
    if (params.has("q")) input.value = params.get("q") || "";
    run();
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => bind(document));
    } else {
      bind(document);
    }
  }

  const api = { match, bind };
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
  global.AtelierFind = api;
})(typeof window !== "undefined" ? window : globalThis);
