import { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
const options = [
  { label: "3M", value: "3M" },
  { label: "Ability Dynamics", value: "Ability Dynamics" },
  { label: "Aircast", value: "Aircast" },
  { label: "Allard", value: "Allard" },
  { label: "Alps", value: "Alps" },
  {
    label: "American Prosthetic Components",
    value: "American Prosthetic Components",
  },
  { label: "APC", value: "APC" },
  { label: "Aryse", value: "Aryse" },
  { label: "ASAP", value: "ASAP" },
  { label: "Aspen", value: "Aspen" },
  { label: "Athletic", value: "Athletic" },
  { label: "Avalon", value: "Avalon" },
  { label: "Axtion", value: "Axtion" },
  { label: "Becker", value: "Becker" },
  { label: "BioQuest", value: "BioQuest" },
  { label: "BioSkin", value: "BioSkin" },
  { label: "Blatchford", value: "Blatchford" },
  { label: "BraceSox", value: "BraceSox" },
  { label: "Breg", value: "Breg" },
  { label: "Bulldog", value: "Bulldog" },
  { label: "Catech Inc", value: "Catech Inc" },
  { label: "Century Innovations", value: "Century Innovations" },
  { label: "College Park", value: "College Park" },
  { label: "Comfort Products", value: "Comfort Products" },
  { label: "Comfortland", value: "Comfortland" },
  { label: "CPI", value: "CPI" },
  { label: "Cypress Adaptive", value: "Cypress Adaptive " },
  { label: "DAW", value: "DAW" },
  { label: "DeRoyal", value: "DeRoyal" },
  { label: "DJO", value: "DJO" },
  { label: "Donjoy", value: "Donjoy" },
  { label: "Dr Comfort", value: "Dr Comfort" },
  { label: "Dr Scholls", value: "Dr Scholls" },
  { label: "Drive", value: "Drive" },
  { label: "Durasleeve", value: "Durasleeve" },
  { label: "Elan", value: "Elan" },
  { label: "Encore", value: "Encore" },
  { label: "Endolite", value: "Endolite" },
  { label: "ESP", value: "ESP" },
  { label: "Evolution Industries", value: "Evolution Industries" },
  { label: "Fabtech", value: "Fabtech" },
  { label: "Fillauer", value: "Fillauer" },
  { label: "Flex Foot", value: "Flex Foot" },
  { label: "Freedom Innovation", value: "Freedom Innovation" },
  { label: "Freeman", value: "Freeman" },
  { label: "GPF", value: "GPF" },
  { label: "Hanger", value: "Hanger" },
  { label: "Hely & Weber", value: "Hely %26 Weber" },
  { label: "Hosmer", value: "Hosmer" },
  { label: "IN Prosthetic Components", value: "In Prosthetic Components" },
  { label: "Jack Mart", value: "Jack Mart" },
  { label: "Juzo", value: "Juzo" },
  { label: "Kingsley", value: "Kingsley" },
  { label: "Kintera", value: "Kintera" },
  { label: "KISS", value: "KISS" },
  { label: "Knit-rite", value: "Knit-rite" },
  { label: "Leg Works", value: "Leg Works" },
  { label: "MAKstride", value: "MAKstride" },
  { label: "Mauch", value: "Mauch" },
  { label: "Maverick", value: "Maverick" },
  { label: "MedChoice", value: "MedChoice" },
  { label: "Medex", value: "Medex" },
  { label: "Medi", value: "Medi" },
  { label: "Merrell", value: "Merrell" },
  { label: "Mica", value: "Mica" },
  { label: "Molnlycke", value: "Molnlycke" },
  { label: "New Options Sports", value: "New Options Sports" },
  { label: "no Adapter", value: "no Adapter" },
  { label: "NY Rehab", value: "NY Rehab" },
  { label: "Operation Namaste", value: "Operation Namaste" },
  { label: "Optimus", value: "Optimus" },
  { label: "Orion", value: "Orion" },
  { label: "Ortho Europe LTD", value: "Ortho Europe LTD" },
  { label: "Orthomerica", value: "Orthomerica" },
  { label: "Ossur", value: "Ossur" },
  { label: "Ottobock", value: "Ottobock" },
  { label: "OWW", value: "OWW" },
  { label: "Paceline", value: "Paceline" },
  { label: "PMT", value: "PMT" },
  { label: "Procare", value: "Procare" },
  { label: "Progressive Orthotics", value: "Progressive Orthotics" },
  { label: "Promenade", value: "Promenade" },
  { label: "Promogran", value: "Promogran" },
  { label: "Proteor", value: "Proteor" },
  { label: "Rampro", value: "Rampro" },
  { label: "RCAI", value: "RCAI" },
  { label: "Rooke", value: "Rooke" },
  { label: "Royale Flush", value: "Royal Flush" },
  { label: "Royale Knit", value: "Royale Knit" },
  { label: "Saucony", value: "Saucony" },
  { label: "Silipos", value: "Silipos" },
  { label: "Sketchers", value: "Sketchers" },
  { label: "Spalding", value: "Spalding" },
  { label: "SPS", value: "SPS" },
  { label: "SRT P&O", value: "SRT P%26O" },
  { label: "ST&G", value: "ST%26G" },
  { label: "Streifeneder", value: "Streifeneder" },
  { label: "Swede-O", value: "Swede-O" },
  { label: "Syncor", value: "Syncor" },
  { label: "Teh Lin Pros. & Ortho.", value: "Teh Lin Pros. %26 Ortho." },
  { label: "Thuasne", value: "Thuasne" },
  { label: "TiMed", value: "TiMed" },
  { label: "Titan", value: "TItan" },
  { label: "Townsend", value: "Townsend" },
  { label: "Trail Blazer", value: "Trail Blazer" },
  { label: "Trulife", value: "Trulife" },
  { label: "TruVue", value: "TruVue" },
  { label: "Uni Roch.", value: "Uni Roch." },
  { label: "UNIPROX", value: "UNIPROX" },
  { label: "United Ortho", value: "United Ortho" },
  { label: "US Orthotics", value: "US Orthotics" },
  { label: "Various", value: "Various" },
  { label: "Willow Wood", value: "Willow Wood" },
  { label: "Win Walker", value: "Win Walker" },
  { label: "Wright & Filipps", value: "Wright %26 Filipps" },
];

const MultipleSelect = ({ selected, setSelected }) => {
  return (
    <>
      <div style={{ width: "80%", margin: "0 10px" }}>
        <h1>Select Manufacturer</h1>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
      </div>
      <div style={{ width: "80%", margin: "0 10px" }}>
        <h1>Select Manufacturer</h1>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
      </div>
    </>
  );
};

export default MultipleSelect;
