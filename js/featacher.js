document.getElementById('donat-btn').addEventListener('click', function () {
    showScetionById('donate-section')
    document.getElementById('donat-btn').classList.add('bg-[#B4F461]')
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]')
})

document.getElementById('history-btn').addEventListener('click', function () {
    showScetionById('history-section');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');
    document.getElementById('donat-btn').classList.remove('bg-[#B4F461]')
})