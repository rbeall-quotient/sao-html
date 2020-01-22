function toggleSection(sectionId, switchId, toggleValue)
{
  console.log("toggleSection hit: (" + sectionId + ", " + switchId + ", " + toggleValue +")");
  var section = document.getElementById(sectionId);
  var switcher = document.getElementById(switchId);

  console.log("Switcher Value: " + switcher.value);
  
  if(switcher.value == toggleValue)
  {
    section.style.display = "block";
  }
  else
  {
    section.style.display = "none";
  }
}
