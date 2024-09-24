// const donationNumberOne = parseFloat(getDonatedValueById('input-first-amount'));
//     if(donationNumberOne < 0 || isNaN(donationNumberOne)){
//         return alert('invalid input');   
//     }

//     const availableTk = number('available-tk');
//     if(availableTk < donationNumberOne){
//         return alert('Insufficient balance');
//     }



document.getElementById('btn-donate-first').addEventListener('click',function(){
    

    const donationNumberOne = parseFloat(getDonatedValueById('input-first-amount'));
    if(donationNumberOne < 0 || isNaN(donationNumberOne)){
                alert('invalid input');   
                return;
            }
    else{
        const firstDonation = number('first-donated-tk');

    const newDonatedValue = firstDonation + donationNumberOne;

    document.getElementById('first-donated-tk').innerText = newDonatedValue;

    const availableTk = number('available-tk');
    if(availableTk < donationNumberOne){
                return alert('Insufficient balance');
            }

    const remainTaka = availableTk - donationNumberOne;

    document.getElementById('available-tk').innerText = remainTaka;

    // history section
    document.getElementById('history-section').classList.add('hidden');
    const historyItem = document.createElement('div');
    historyItem.className = 'border rounded-lg p-6 mb-5';
    historyItem.innerHTML = `
    <p class="font-bold mb-5">${donationNumberOne} Taka is Donated for Flood Relief at Noakhali, Bangladesh</p>
    <p class="text-gray-500 text-xs">Date :${new Date()}</p>
    `;

    const historyContainer = document.getElementById('history-section');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    }

    
})



document.getElementById('btn-donate-second').addEventListener('click',function(){

    const donationNumberTwo = parseFloat(getDonatedValueById('input-second-amount'));
    if(donationNumberTwo < 0 || isNaN(donationNumberTwo)){
        return alert('invalid input');   
    }
    const firstDonation = number('second-donated-tk');

    const newDonatedValue = firstDonation + donationNumberTwo;

    document.getElementById('second-donated-tk').innerText = newDonatedValue;

    const availableTk = number('available-tk');
    if(availableTk < donationNumberTwo){
        return alert('Insufficient balance');
    }
    const remainTaka = availableTk - donationNumberTwo;

    document.getElementById('available-tk').innerText = remainTaka;
    
    // history section
    document.getElementById('history-section').classList.add('hidden');
    const historyItem = document.createElement('div');
    historyItem.className = 'border rounded-lg p-6 mb-5';
    historyItem.innerHTML = `
    <p class="font-bold mb-5">${donationNumberTwo} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
    <p class="text-gray-500 text-xs">Date :${new Date()}</p>
    `;

    const historyContainer = document.getElementById('history-section');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})



document.getElementById('btn-donate-third').addEventListener('click',function(){

    const donationNumberThree = parseFloat(getDonatedValueById('input-third-amount'));
    if(donationNumberThree < 0 || isNaN(donationNumberThree)){
        return alert('invalid input');   
    }
    const firstDonation = number('third-donated-tk');

    const newDonatedValue = firstDonation + donationNumberThree;

    document.getElementById('third-donated-tk').innerText = newDonatedValue;

    const availableTk = number('available-tk');
    if(availableTk < donationNumberThree){
        return alert('Insufficient balance');
    }
    const remainTaka = availableTk - donationNumberThree;

    document.getElementById('available-tk').innerText = remainTaka;
    
    // history section
    document.getElementById('history-section').classList.add('hidden');
    const historyItem = document.createElement('div');
    historyItem.className = 'border rounded-lg p-6 mb-5';
    historyItem.innerHTML = `
    <p class="font-bold mb-5">${donationNumberThree} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
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

    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')

    document.getElementById('footer').classList.add('hidden')

})

donationBtn.addEventListener('click',function(){
    donationBtn.classList.add('bg-lime-300','font-bold',);
    donationBtn.classList.remove('btn-outline','text-gray-500');


    historyBtn.classList.remove('font-bold','bg-lime-300');
    historyBtn.classList.add('btn-outline','text-gray-500');

    document.getElementById('donation-section').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')

})
