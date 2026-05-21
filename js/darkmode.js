(function () {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    if (isDark) document.documentElement.classList.add("dark");
    if (!saved) localStorage.setItem("theme", isDark ? "dark" : "light");
})();
