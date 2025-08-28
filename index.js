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
  // **********************Coin Deduction*******************
  let coinElement = document.getElementById("coin-initial-value");
  let coinInitialVal = parseInt(coinElement.innerText);

  if (coinInitialVal < 20) {
    alert("Not enough coins to make this call!");
    return;
  }

  // Deduct coins
  coinElement.innerText = coinInitialVal - 20;

  // **********************Alert*******************
  const cardDetail = document.getElementById(id1).innerText;
  const cardNumber = document.getElementById(id2).innerText;
  alert(`Calling ${cardDetail} ${cardNumber}`);

  // ************--------**********+++++Call History++++***********-------------*******
  const getCallTitle = document.getElementById(id3).innerText;
  const getCallTitleNum = document.getElementById(id2).innerText;

  // Create new li
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="bg-[#FAFAFA] p-3 sm:p-4 rounded-lg shadow-md">
      <div class="flex justify-between items-start mb-1">
        <h2 class="text-base sm:text-lg font-medium text-gray-800">
          ${getCallTitle}
        </h2>
        <span class="text-xs sm:text-sm text-gray-500">${new Date().toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          }
        )}</span>
      </div>
      <p class="text-lg sm:text-xl font-bold text-gray-600">${getCallTitleNum}</p>
    </div>
  `;

  // Append to history list
  document.getElementById("call-history-list").prepend(li);
}


// Calling-btn click events
document
  .getElementById("nEmergency-call-btn")
  .addEventListener("click", function () {
    callButtonAlerts(
      "first-card-details",
      "first-card-num",
      "first-card-title"
    );
  });

document
  .getElementById("police-call-btn")
  .addEventListener("click", function () {
    callButtonAlerts(
      "second-card-details",
      "second-card-num",
      "second-card-title"
    );
  });

document
  .getElementById("fireS-call-btn")
  .addEventListener("click", function () {
    callButtonAlerts(
      "third-card-details",
      "third-card-num",
      "third-card-title"
    );
  });

document
  .getElementById("ambulance-call-btn")
  .addEventListener("click", function () {
    callButtonAlerts(
      "fourth-card-details",
      "fourth-card-num",
      "fourth-card-title"
    );
  });

document
  .getElementById("electric-call-btn")
  .addEventListener("click", function () {
    callButtonAlerts(
      "fifth-card-details",
      "fifth-card-num",
      "fifth-card-title"
    );
  });

document.getElementById("rail-call-btn").addEventListener("click", function () {
  callButtonAlerts("sixth-card-details", "sixth-card-num", "sixth-card-title");
});

//////////////////////////////////////////////////////////////
//-----------------=======Copy Button=====--------------------
function copyNumber(cardNumId, countId = "copy-count") {
  const cardNumber = document.getElementById(cardNumId).innerText;
  navigator.clipboard.writeText(cardNumber);
  alert("Emergency number copied to clipboard");

  const copyCount = document.getElementById(countId);
  let currCopyCount = parseInt(copyCount.innerText);
  copyCount.innerText = currCopyCount + 1;
}

// Copy btn click events
document.getElementById("copy-btn-1").addEventListener("click", function () {
  copyNumber("first-card-num");
});

document.getElementById("copy-btn-2").addEventListener("click", function () {
  copyNumber("second-card-num");
});

document.getElementById("copy-btn-3").addEventListener("click", function () {
  copyNumber("third-card-num");
});

document.getElementById("copy-btn-4").addEventListener("click", function () {
  copyNumber("fourth-card-num");
});

document.getElementById("copy-btn-5").addEventListener("click", function () {
  copyNumber("fifth-card-num");
});

document.getElementById("copy-btn-6").addEventListener("click", function () {
  copyNumber("sixth-card-num");
});

//////////////////////////////////////////////////////////////
//-------------------+++++Clear Button+++++-------------------

document.getElementById("clear-btn").addEventListener("click", function () {
  const callHistoryList = document.getElementById("call-history-list");

  if (callHistoryList.children.length === 0) {
    alert("Call history is already empty!");
    return;
  }

  if (confirm("Are you sure you want to delete all call history?")) {
    callHistoryList.innerHTML = "";
  }
});
