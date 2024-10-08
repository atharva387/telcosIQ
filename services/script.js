document.getElementById('download-btn').addEventListener('click', function() {
    const element = document.getElementById('pricing-page');
    const options = {
        margin: 1,
        filename: 'pricing-info.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf()
        .from(element)
        .set(options)
        .save();
});
