
document.getElementById('btn-donate-first').addEventListener('click',function(){
    let donation = getDonatedValueById('input-first-amount');
    const availableTk = number('available-tk');
    // Validation start***************************************************************************
    if(donation <= 0 || isNaN(donation) ){
        alert('Invalid Donation Amount');
        return;
    }
    if(donation > availableTk){
        alert('Insufficient Balance')
        return;
    }
    // Validation end***************************************************************************

    const donationNumber = parseFloat(getDonatedValueById('input-first-amount'));

    const firstDonation = number('first-donated-tk');
    const newDonatedValue = firstDonation + donationNumber;
    document.getElementById('first-donated-tk').innerText = newDonatedValue;
    const remainTaka = availableTk - donationNumber;
    document.getElementById('available-tk').innerText = remainTaka;
    document.getElementById('my_modal_1').showModal();
    // history section
    document.getElementById('history-section').classList.add('hidden');
    const historyItem = document.createElement('div');
    historyItem.className = 'border rounded-lg p-6 mb-5';
    historyItem.innerHTML = `
    <p class="font-bold mb-5">${donationNumber} Taka is Donated for Flood Relief at Noakhali, Bangladesh</p>
    <p class="text-gray-500 text-xs">Date :${new Date()}</p>
    `;
    const historyContainer = document.getElementById('history-section');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
     
})


document.getElementById('btn-donate-second').addEventListener('click',function(){
    const donation = getDonatedValueById('input-second-amount');
    const availableTk = number('available-tk');
    // Validation start***************************************************************************
    if(donation <= 0 || isNaN(donation)){
        alert('Invalid Donation Amount');
        return;
    }
    if(donation > availableTk){
        alert('Insufficient Balance')
        return;
    }
    // Validation end***************************************************************************

    const donationNumber = parseFloat(getDonatedValueById('input-second-amount'));
    const firstDonation = number('second-donated-tk');
    const newDonatedValue = firstDonation + donationNumber;
    document.getElementById('second-donated-tk').innerText = newDonatedValue;
    const remainTaka = availableTk - donationNumber;
    document.getElementById('available-tk').innerText = remainTaka;
    document.getElementById('my_modal_2').showModal();
    // history section
    document.getElementById('history-section').classList.add('hidden');
    const historyItem = document.createElement('div');
    historyItem.className = 'border rounded-lg p-6 mb-5';
    historyItem.innerHTML = `
    <p class="font-bold mb-5">${donationNumber} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
    <p class="text-gray-500 text-xs">Date :${new Date()}</p>
    `;
    const historyContainer = document.getElementById('history-section');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})



document.getElementById('btn-donate-third').addEventListener('click',function(){
    const donation = getDonatedValueById('input-third-amount');
    const availableTk = number('available-tk');
    // Validation start***************************************************************************
    if(donation <= 0 || isNaN(donation)){
        alert('Invalid Donation Amount');
        return;
    }
    if(donation > availableTk){
        alert('Insufficient Balance')
        return;
    }
    // Validation end***************************************************************************

    const donationNumber = parseFloat(getDonatedValueById('input-third-amount'));
    const firstDonation = number('third-donated-tk');
    const newDonatedValue = firstDonation + donationNumber;
    document.getElementById('third-donated-tk').innerText = newDonatedValue;
    const remainTaka = availableTk - donationNumber;
    document.getElementById('available-tk').innerText = remainTaka; 
    document.getElementById('my_modal_3').showModal();
    // history section
    document.getElementById('history-section').classList.add('hidden');
    const historyItem = document.createElement('div');
    historyItem.className = 'border rounded-lg p-6 mb-5';
    historyItem.innerHTML = `
    <p class="font-bold mb-5">${donationNumber} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class="text-gray-500 text-xs">Date : ${new Date()}</p>
    `;

    const historyContainer = document.getElementById('history-section');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})


// donation & history button functionality

const historyBtn = document.getElementById('history-btn');
const donationBtn =  document.getElementById('donation-btn');
historyBtn.addEventListener('click',function(){
    historyBtn.classList.add('font-bold','bg-lime-300',);
    historyBtn.classList.remove('btn-outline','text-gray-500');


    donationBtn.classList.remove('bg-lime-300','font-bold');
    donationBtn.classList.add('btn-outline','text-gray-500');

    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');

    document.getElementById('footer').classList.add('hidden');

})

donationBtn.addEventListener('click',function(){
    donationBtn.classList.add('bg-lime-300','font-bold',);
    donationBtn.classList.remove('btn-outline','text-gray-500');


    historyBtn.classList.remove('font-bold','bg-lime-300');
    historyBtn.classList.add('btn-outline','text-gray-500');

    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById('footer').classList.remove('hidden');

})
