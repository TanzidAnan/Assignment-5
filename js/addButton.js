
document.getElementById('relief-btn').addEventListener('click', function () {
    const inputvalue = getInputByNumber('relief-input');
    const carrentNumber = getCrrentInputBy('current-number');
    const newTotleBlance = totleBlanceById('totleBlance')
    const modle = document.getElementById('my_modal_6');

    if (isNaN(inputvalue)) {
        alert('Invalid Donation amount')
    }
    else if (!(inputvalue >= 0)) {
        alert('Tanzida')
    }
    else {
        const totleBlance = inputvalue + carrentNumber;
        if (newTotleBlance < totleBlance) {
            alert('ablble Thaka');
            return;
        }
        else {
            // alert(inputvalue + " " + "Donate for Flood Relief in Feni,Bangladesh");
            modle.classList.remove('hidden')
            document.getElementById('current-number').innerText = totleBlance;
            document.getElementById('totleBlance').innerText = newTotleBlance - totleBlance;

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
                    <h1 class='text-sm lg:text-lg font-semibold'>${inputvalue} Taka is Donate for Flood Relief in Feni,Bangladesh</h1>
                    <h1 class='mt-3 font-semibold text-sm lg:text-lg'>Date :${dateTime}</h1>
            </div>
            `
            document.getElementById('history-section').appendChild(div)

            return;

        }

    }
})