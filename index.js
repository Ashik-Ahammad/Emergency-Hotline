//////////////////////////////////////////////////////////////////////////////////////////////
function heartCounter(id) {
  let heartCountElement = document.getElementById(id);
  let currentCount = parseInt(heartCountElement.innerText);
  heartCountElement.innerText = currentCount + 1;
}

// Heart-btn click events
document
  .getElementById("heart-button-emergency")
  .addEventListener("click", function () {
    heartCounter("heart-count");
  });
document
  .getElementById("heart-button-police")
  .addEventListener("click", function () {
    heartCounter("heart-count");
  });
document
  .getElementById("heart-button-fire")
  .addEventListener("click", function () {
    heartCounter("heart-count");
  });
document
  .getElementById("heart-button-ambulance")
  .addEventListener("click", function () {
    heartCounter("heart-count");
  });
document
  .getElementById("heart-button-electric")
  .addEventListener("click", function () {
    heartCounter("heart-count");
  });
document
  .getElementById("heart-button-rail")
  .addEventListener("click", function () {
    heartCounter("heart-count");
  });

//////////////////////////////////////////////////////////////////////////////////////////////
function callButtonAlerts(id1, id2, id3) {
  // **********************Alert*******************
  const cardDetail = document.getElementById(id1).innerText;
  const cardNumber = document.getElementById(id2).innerText;
  alert(`Calling ${cardDetail} ${cardNumber}`);

  // **********************Coin Deduction*******************
  let coinElement = document.getElementById("coin-initial-value");
  let coinInitialVal = parseInt(coinElement.innerText);

  if (coinInitialVal >= 20) {
    let deductVal = coinInitialVal - 20;
    coinElement.innerText = deductVal;
  } else {
    alert("Not enough coins to make this call!");
  }

  // **********************Call History*******************
  //-------***------get call history-------***-------
    const getCallTitle = document.getElementById(id3);
    let getCallTitleText = getCallTitle.innerText;

    const getCallTitleNum = document.getElementById(id2);
    let getCallTitleNumber = getCallTitleNum.innerText;

    //--------***-------set call history------***----------
    const callHistoryTitle = document.getElementById("call-history-type");
    callHistoryTitle.innerText = getCallTitleText;

    const callHistoryNumber = document.getElementById("call-history-number");
    callHistoryNumber.innerText = getCallTitleNumber;

    const callHistoryDate = document.getElementById("call-history-date");
    let now = new Date();
    let time = now.toLocaleTimeString();
    callHistoryDate.innerText = time;

}

// Calling-btn click events
document
  .getElementById("nEmergency-call-btn")
  .addEventListener("click", function () {
    callButtonAlerts("first-card-details", "first-card-num", "first-card-title");
  });

document
  .getElementById("police-call-btn")
  .addEventListener("click", function () {
    callButtonAlerts("second-card-details", "second-card-num", "second-card-title");
  });

document
  .getElementById("fireS-call-btn")
  .addEventListener("click", function () {
    callButtonAlerts("third-card-details", "third-card-num", "third-card-title");
  });

document
  .getElementById("ambulance-call-btn")
  .addEventListener("click", function () {
    callButtonAlerts("fourth-card-details", "fourth-card-num", "fourth-card-title");
  });

document
  .getElementById("electric-call-btn")
  .addEventListener("click", function () {
    callButtonAlerts("fifth-card-details", "fifth-card-num", "fifth-card-title");
  });

document
  .getElementById("rail-call-btn")
  .addEventListener("click", function () {
  callButtonAlerts("sixth-card-details", "sixth-card-num", "sixth-card-title");
});

//////////////////////////////////////////////////////////////
//-----------------=======Copy Button=====--------------------
document.getElementById("copy-btn-1").addEventListener("click", function () {
    const cardNumber = document.getElementById("first-card-num")
    navigator.clipboard.writeText(cardNumber.innerText)

    const copyCount = document.getElementById("copy-count")
    let currCopyCount = parseInt(copyCount.innerText)
    copyCount.innerText = currCopyCount + 1;
});
document.getElementById("copy-btn-2").addEventListener("click", function () {
    const cardNumber = document.getElementById("second-card-num")
    navigator.clipboard.writeText(cardNumber.innerText)

    const copyCount = document.getElementById("copy-count")
    let currCopyCount = parseInt(copyCount.innerText)
    copyCount.innerText = currCopyCount + 1;
});
document.getElementById("copy-btn-3").addEventListener("click", function () {
    const cardNumber = document.getElementById("third-card-num")
    navigator.clipboard.writeText(cardNumber.innerText)

    const copyCount = document.getElementById("copy-count")
    let currCopyCount = parseInt(copyCount.innerText)
    copyCount.innerText = currCopyCount + 1;
});
document.getElementById("copy-btn-4").addEventListener("click", function () {
    const cardNumber = document.getElementById("fourth-card-num")
    navigator.clipboard.writeText(cardNumber.innerText)

    const copyCount = document.getElementById("copy-count")
    let currCopyCount = parseInt(copyCount.innerText)
    copyCount.innerText = currCopyCount + 1;
});
document.getElementById("copy-btn-5").addEventListener("click", function () {
    const cardNumber = document.getElementById("fifth-card-num")
    navigator.clipboard.writeText(cardNumber.innerText)

    const copyCount = document.getElementById("copy-count")
    let currCopyCount = parseInt(copyCount.innerText)
    copyCount.innerText = currCopyCount + 1;
});
document.getElementById("copy-btn-6").addEventListener("click", function () {
    const cardNumber = document.getElementById("sixth-card-num")
    navigator.clipboard.writeText(cardNumber.innerText)

    const copyCount = document.getElementById("copy-count")
    let currCopyCount = parseInt(copyCount.innerText)
    copyCount.innerText = currCopyCount + 1;
});
