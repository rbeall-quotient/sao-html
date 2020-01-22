getPValues(0); 

function getPValues(index)
{
  var percent = document.getElementById("p" + index).value;
  console.log("index: " + index)
  console.log("Percent value: " + percent);

  if(percent != "")
  {
    percent = parseInt(percent);
  }
  else
  {
    percent = 0;
  }

  //console.log("Percent Value: " + percent);

  deriveRent(index, percent);
  deriveUtilities(index, percent);
  deriveChargeArea(index, percent);
}

function deriveRent(index, percent)
{
  var element = document.getElementById("r" + index);
  var rawText = document.getElementById("rent").textContent;
  rawText = rawText.replace(",", "");

  console.log("Raw text for rent: " + rawText);

  var rent = 0;

  if(rawText != "")
  {
    rent = parseFloat(rawText);
  }

  console.log("Rent Value: " + rent);

  var prent = rent * (percent/100);
  element.innerHTML = prent;
}

function deriveUtilities(index, percent)
{
  var element = document.getElementById("u" + index);
  var rawText = document.getElementById("util").textContent;

  var util = 0;

  if(rawText != "")
  {
    util = parseFloat(rawText);
  }

  var putil = util * (percent/100);
  element.innerHTML = putil;
}

function deriveChargeArea(index, percent)
{
  var element = document.getElementById("ca" + index);
  var rawText = document.getElementById("net").textContent;

  var area = 0;

  if(rawText != "")
  {
    area = parseInt(rawText);
  }

  var parea = area * (percent/100);
  element.innerHTML = parea;
}
