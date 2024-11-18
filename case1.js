document.getElementById("caseFilterForm").addEventListener("change", function () {
    const selectedCase = document.getElementById("caseSelect").value;

    // Скрываем все секции
    const allCases = document.querySelectorAll(".case-details");
    allCases.forEach((caseSection) => {
        caseSection.style.display = "none";
    });

    // Показываем выбранную секцию
    const selectedCaseSection = document.getElementById(selectedCase + "Details");
    if (selectedCaseSection) {
        selectedCaseSection.style.display = "block";
    }
});
