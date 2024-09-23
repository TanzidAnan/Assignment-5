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
            alert(niakhaliInputValue + ' ' + 'Donate for Flood at Noakhali');
            document.getElementById('niakhaliDonateBlance').innerText = totleBlance;
            document.getElementById('totleBlance').innerText = AllBlance - totleBlance;

            const div = document.createElement('div');
            // div.classList.add('');
            div.innerHTML = `
            <div class='bg-[#1111111A] px-10 py-5 rounded-md shadow-sm mb-4'>
                    <h1 class='text-lg'>${niakhaliInputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
                    <h1>Date :time</h1>
            </div>
            `
            document.getElementById('history-section').appendChild(div)

            return;
        }
    }
})