
document.getElementById('injured-btn').addEventListener('click',function(){
    const inputValue =getInputByNumber('injured-Input-Fild');
    const carrentNumber = getCrrentInputBy('current-Value');
    const newTotleBlance = totleBlanceById('totleBlance');
    const modle =document.getElementById('my_modal_7')


    if (isNaN(inputValue) ||modle === undefined) {
        alert('Invalid Donation amount')
    }
    else if (!(inputValue >= 0)) {
        alert('Tanzida')
    }
    else {
        const totleBlance = inputValue + carrentNumber;
        if (newTotleBlance < totleBlance) {
            alert('ablble Thaka');
            return;
        }
        else {
            // alert(inputValue + " " + "Aid for Injured in the Quota Movement");
            modle.classList.remove('hidden')
            document.getElementById('current-Value').innerText = totleBlance;
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
                    <h1 class='text-sm lg:text-lg font-semibold'>${inputValue} Taka is Aid for Injured in the Quota Movement</h1>
                    <h1 class='mt-3 font-semibold text-sm lg:text-lg'>Date :${dateTime}</h1>
            </div>
            `
            document.getElementById('history-section').appendChild(div)

            return;

        }

    }


})