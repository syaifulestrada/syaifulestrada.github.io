let translations = {};
let currentLang = localStorage.getItem("lang") || "id";

fetch("asset/translation.json")
    .then((res) => res.json())
    .then((data) => {
        translations = data;
        applyLang(currentLang); // panggil setelah data siap
    })
    .catch((err) => console.error("Gagal load translations:", err));

function applyLang(lang) {
    const t = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.getElementById("lang-label").textContent =
        lang === "id" ? "EN" : "ID";
    document.documentElement.lang = lang === "id" ? "id" : "en";
    localStorage.setItem("lang", lang);
    currentLang = lang;

    downloadCv = document.querySelector(".download-cv");
    downloadCv.setAttribute(
        "href",
        lang === "id"
            ? "asset/cv-id-muhammad-syaifulloh.pdf"
            : "asset/cv-en-muhammad-syaifulloh.pdf",
    );
}

document.getElementById("lang-toggle").addEventListener("click", () => {
    applyLang(currentLang === "id" ? "en" : "id");
});
