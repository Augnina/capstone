function showTab(tabId) {
    // Remove active class from all tabs and tab contents
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Add active class to the clicked tab and corresponding tab content
    document.querySelector(`.tab[onclick=\"showTab('${tabId}')\"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
