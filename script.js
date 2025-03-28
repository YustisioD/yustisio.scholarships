function showDescription(org) {
    const data = descriptions[org];
    if (!data) return;

    const descriptionElement = document.getElementById('description');
    descriptionElement.style.backgroundImage = `url(${data.background})`;

    let contentHTML = '<div class="description-content">';

    // Menampilkan semua teks terlebih dahulu
    if (data.text && data.text.length > 0) {
        data.text.forEach((paragraph) => {
            contentHTML += paragraph;
        });
    } else {
        contentHTML += '<p>No description available.</p>';
    }

    // Menampilkan semua gambar setelah teks
    if (data.images && data.images.length > 0) {
        data.images.forEach((image) => {
            contentHTML += `
                <figure>
                    <img src="${image.src}" alt="${image.caption}">
                    <figcaption>${image.caption}</figcaption>
                </figure>
            `;
        });
    }

    // Menambahkan tombol "Go to Link" jika ada link
    if (data.link) {
        contentHTML += `
            <div style="text-align: center; margin-top: 20px;">
                <a href="${data.link}" target="_blank" style="display: inline-block; padding: 10px 20px; background-color: #F77F00; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    Go to Link
                </a>
            </div>
        `;
    }

    contentHTML += '</div>';
    descriptionElement.innerHTML = contentHTML;
}
