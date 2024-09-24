document.getElementById('blog-section').addEventListener('click', function () {
    window.location.href = '/blog.html'
})

const niakhaliDonateBlance = document.getElementById('niakhaliDonateBlance');
const totleBlanceEl = document.getElementById('totleBlance').innerText;
const modle =document.getElementById('my_modal_5');
console.log(modle)

document.getElementById('niakhali-Donate-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const niakaliInputFild = document.getElementById('niakhaliInput').value;
    const niakhaliBlance = document.getElementById('niakhaliDonateBlance').innerText;


    const niakhaliInputValue = parseFloat(niakaliInputFild);
    const newNiakhaliBlance = parseFloat(niakhaliBlance);
    const AllBlance = parseFloat(totleBlanceEl);


    if (isNaN(niakhaliInputValue)) {
        alert('Invalid Donation amount')
        return;
    }
    else if(!(niakhaliInputValue >=0)){
        alert('Tanzida')
    }
    else {
        const totleBlance = niakhaliInputValue;
        if (AllBlance < totleBlance) {
            alert('Abable Blance');
            return;
        }
        else {
            // alert(niakhaliInputValue + ' ' + 'Donate for Flood at Noakhali');
            modle.classList.remove('hidden')
            document.getElementById('niakhaliDonateBlance').innerText = totleBlance + newNiakhaliBlance;
            document.getElementById('totleBlance').innerText = AllBlance - totleBlance;
            const time = {
                weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit',
                timeZone: 'Asia/Dhaka', timeZoneName: 'long'
            };
            const dateTime = new Date().toLocaleString('en-US', time);

            const div = document.createElement('div');
            // div.classList.add('');
            div.innerHTML = `
            <div class='bg-[#1111111A] px-10 py-5 rounded-md shadow-sm mb-4'>
                    <h1 class='text-sm lg:text-lg font-semibold'>${niakhaliInputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
                    <h1 class='mt-3 font-semibold text-sm lg:text-lg'>Date :${dateTime}</h1>
            </div>
            `
            document.getElementById('history-section').appendChild(div)

            return;
        }
    }
})