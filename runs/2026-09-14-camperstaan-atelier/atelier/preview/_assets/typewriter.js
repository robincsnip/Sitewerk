(function () {
  var els = document.querySelectorAll("[data-typewriter]");
  if (!els.length) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  for (var i = 0; i < els.length; i += 1) {
    var el = els[i];
    var text = el.getAttribute("data-typewriter") || el.textContent;
    if (reduce) {
      el.textContent = text;
      continue;
    }
    el.textContent = "";
    el.setAttribute("aria-label", text);
    (function (node, full) {
      var n = 0;
      function tick() {
        n += 1;
        node.textContent = full.slice(0, n);
        if (n < full.length) window.setTimeout(tick, 22);
        else node.classList.add("is-done");
      }
      tick();
    })(el, text);
  }
})();
