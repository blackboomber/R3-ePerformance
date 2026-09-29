((nilai) => {

    const dasar = nilai <= 50
        ? "Yang bersangkutan tidak bertindak sesuai pernyataan nomor"
        : "Yang bersangkutan selalu bertindak sesuai pernyataan nomor";

    document.querySelectorAll('input[type="range"]').forEach((slider, i) => {

        slider.value = Math.min(nilai, +(slider.max || 100));

        slider.dispatchEvent(new Event('input', { bubbles: true }));
        slider.dispatchEvent(new Event('change', { bubbles: true }));

        let alasan =
            document.querySelector(`#${slider.id}_alasan`) ||
            slider.closest('tr,div')?.querySelector('input[type="text"]');

        if (alasan) {
            alasan.value = `${dasar} ${i + 1}`;

            alasan.dispatchEvent(new Event('input', { bubbles: true }));
            alasan.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });

    console.log(`✅ ${document.querySelectorAll('input[type="range"]').length} penilaian telah diisi.`);

    alert('AUTHORIZED BY R3');

})(93);
