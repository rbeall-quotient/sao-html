function addRow()
{
  // Get a reference to the table
  let tableRef = document.getElementById("rentRoomInput");

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  for (i = 0; i < 11; i++)
  {
    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(i);
    let input = null;
    // Append a text node to the cell
    if(i < 8)
    {
      input = document.createElement("input");
      input.setAttribute('type', 'text');

      if(i == 7)
      {
          input.setAttribute('type', "number");
          input.setAttribute('id', 'p' + (document.getElementById("rentRoomInput").rows.length - 2));
          input.setAttribute('onchange', "getPValues(" + (document.getElementById("rentRoomInput").rows.length - 2) + ")");
          input.setAttribute("value", 0);
      }

      console.log("adding an input text")
    }
    else
    {
      input = document.createTextNode("");

      if(i == 8)
      {
        newCell.setAttribute("id", 'ca' + (document.getElementById("rentRoomInput").rows.length - 2))
      }

      if(i == 9)
      {
        newCell.setAttribute("id", 'r' + (document.getElementById("rentRoomInput").rows.length - 2))
      }

      if(i == 10)
      {
        newCell.setAttribute("id", 'u' + (document.getElementById("rentRoomInput").rows.length - 2))
      }

      newCell.innerHTML = "0"

      console.log("adding a text node")
    }

    newCell.appendChild(input);
  }
}

function removeRow()
{
  // Get a reference to the table
  let tableRef = document.getElementById("rentRoomInput");

  // Insert a row at the end of the table
  if(tableRef.rows.length > 2)
  {
    let newRow = tableRef.deleteRow(-1);
  }
}

function addVendorRow()
{
  // Get a reference to the table
  let tableRef = document.getElementById("vendorInput");

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  for (i = 0; i < 16; i++)
  {
    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(i);
    let input = null;
    // Append a text node to the cell
    if(i > 11)
    {
      input = document.createElement("input");
      input.setAttribute('type', 'text');

      if(i == 11)
      {
          input.setAttribute('type', "number");
          input.setAttribute('id', 'p' + (document.getElementById("rentRoomInput").rows.length - 2));
          input.setAttribute('onchange', "getPValues(" + (document.getElementById("rentRoomInput").rows.length - 2) + ")");
          input.setAttribute("value", 0);
      }

      console.log("adding an input text")
    }
    else
    {
      input = document.createTextNode("");
    }

    newCell.appendChild(input);
  }
}

function removeVendorRow()
{
  // Get a reference to the table
  let tableRef = document.getElementById("vendorInput");

  // Insert a row at the end of the table
  if(tableRef.rows.length > 2)
  {
    let newRow = tableRef.deleteRow(-1);
  }
}
