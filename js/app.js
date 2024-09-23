document.getElementById('blog-section').addEventListener('click', function () {
    window.location.href = '/blog.html'
})

const niakhaliDonateBlance = document.getElementById('niakhaliDonateBlance');
const totleBlanceEl = document.getElementById('totleBlance').innerText;


document.getElementById('niakhali-Donate-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const niakaliInputFild = document.getElementById('niakhaliInput').value;
    const niakhaliBlance = document.getElementById('niakhaliDonateBlance').innerText;


    const niakhaliInputValue = parseFloat(niakaliInputFild);
    const newNiakhaliBlance = parseFloat(niakhaliBlance);
    const AllBlance = parseFloat(totleBlanceEl);



    if (isNaN(niakhaliInputValue)) {
        alert('Plice Enter Your Number')
        return;
    }
    else {
        const totleBlance = niakhaliInputValue + newNiakhaliBlance;
        if (AllBlance < totleBlance) {
            alert('Abable Blance');
            return;
        }
        else {
            alert(totleBlance + ' ' + 'Donate for Flood at Noakhali');
            document.getElementById('niakhaliDonateBlance').innerText = totleBlance;
            document.getElementById('totleBlance').innerText = AllBlance - totleBlance;
            return;
        }
    }
})