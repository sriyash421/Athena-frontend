import React from 'react';
import { Table } from 'semantic-ui-react';
import { Badge } from 'react-bootstrap';


const DrawTable = ({delete_fn}) => (
<div className="table_container" id="timetable_div">
  <Table className="timetable"  >
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Time Table</Table.HeaderCell>
        <Table.HeaderCell>0800</Table.HeaderCell>
        <Table.HeaderCell>0900</Table.HeaderCell>
        <Table.HeaderCell>1000</Table.HeaderCell>
        <Table.HeaderCell>1100</Table.HeaderCell>
        <Table.HeaderCell>1200</Table.HeaderCell>
        <Table.HeaderCell>1300</Table.HeaderCell>
        <Table.HeaderCell>1400</Table.HeaderCell>
        <Table.HeaderCell>1500</Table.HeaderCell>
        <Table.HeaderCell>1600</Table.HeaderCell>
        <Table.HeaderCell>1700</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Mon</Table.Cell>
        <Table.Cell id="00" onClick={()=> delete_fn("00")}></Table.Cell>
        <Table.Cell id="01" onClick={()=> delete_fn("01")}></Table.Cell>
        <Table.Cell id="02" onClick={()=> delete_fn("02")}></Table.Cell>
        <Table.Cell id="03" onClick={()=> delete_fn("03")}></Table.Cell>
        <Table.Cell id="04" onClick={()=> delete_fn("04")}></Table.Cell>
        <Table.Cell id="05" onClick={()=> delete_fn("05")}></Table.Cell>
        <Table.Cell id="06" onClick={()=> delete_fn("06")}></Table.Cell>
        <Table.Cell id="07" onClick={()=> delete_fn("07")}></Table.Cell>
        <Table.Cell id="08" onClick={()=> delete_fn("08")}></Table.Cell>
        <Table.Cell id="09" onClick={()=> delete_fn("09")}></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Tues</Table.Cell>
        <Table.Cell id="10" onClick={()=> delete_fn("10")}></Table.Cell>
        <Table.Cell id="11" onClick={()=> delete_fn("11")}></Table.Cell>
        <Table.Cell id="12" onClick={()=> delete_fn("12")}></Table.Cell>
        <Table.Cell id="13" onClick={()=> delete_fn("13")}></Table.Cell>
        <Table.Cell id="14" onClick={()=> delete_fn("14")}></Table.Cell>
        <Table.Cell id="15" onClick={()=> delete_fn("15")}></Table.Cell>
        <Table.Cell id="16" onClick={()=> delete_fn("16")}></Table.Cell>
        <Table.Cell id="17" onClick={()=> delete_fn("17")}></Table.Cell>
        <Table.Cell id="18" onClick={()=> delete_fn("18")}></Table.Cell>
        <Table.Cell id="19" onClick={()=> delete_fn("19")}></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Wed</Table.Cell>
        <Table.Cell id="20" onClick={()=> delete_fn("20")}></Table.Cell>
        <Table.Cell id="21" onClick={()=> delete_fn("21")}></Table.Cell>
        <Table.Cell id="22" onClick={()=> delete_fn("22")}></Table.Cell>
        <Table.Cell id="23" onClick={()=> delete_fn("23")}></Table.Cell>
        <Table.Cell id="24" onClick={()=> delete_fn("24")}></Table.Cell>
        <Table.Cell id="25" onClick={()=> delete_fn("25")}></Table.Cell>
        <Table.Cell id="26" onClick={()=> delete_fn("26")}></Table.Cell>
        <Table.Cell id="27" onClick={()=> delete_fn("27")}></Table.Cell>
        <Table.Cell id="28" onClick={()=> delete_fn("28")}></Table.Cell>
        <Table.Cell id="29" onClick={()=> delete_fn("29")}></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Thurs</Table.Cell>
        <Table.Cell id="30" onClick={()=> delete_fn("30")}></Table.Cell>
        <Table.Cell id="31" onClick={()=> delete_fn("31")}></Table.Cell>
        <Table.Cell id="32" onClick={()=> delete_fn("32")}></Table.Cell>
        <Table.Cell id="33" onClick={()=> delete_fn("33")}></Table.Cell>
        <Table.Cell id="34" onClick={()=> delete_fn("34")}></Table.Cell>
        <Table.Cell id="35" onClick={()=> delete_fn("35")}></Table.Cell>
        <Table.Cell id="36" onClick={()=> delete_fn("36")}></Table.Cell>
        <Table.Cell id="37" onClick={()=> delete_fn("37")}></Table.Cell>
        <Table.Cell id="38" onClick={()=> delete_fn("38")}></Table.Cell>
        <Table.Cell id="39" onClick={()=> delete_fn("39")}></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Fri</Table.Cell>
        <Table.Cell id="40" onClick={()=> delete_fn("40")}></Table.Cell>
        <Table.Cell id="41" onClick={()=> delete_fn("41")}></Table.Cell>
        <Table.Cell id="42" onClick={()=> delete_fn("42")}></Table.Cell>
        <Table.Cell id="43" onClick={()=> delete_fn("43")}></Table.Cell>
        <Table.Cell id="44" onClick={()=> delete_fn("44")}></Table.Cell>
        <Table.Cell id="45" onClick={()=> delete_fn("45")}></Table.Cell>
        <Table.Cell id="46" onClick={()=> delete_fn("46")}></Table.Cell>
        <Table.Cell id="47" onClick={()=> delete_fn("47")}></Table.Cell>
        <Table.Cell id="48" onClick={()=> delete_fn("48")}></Table.Cell>
        <Table.Cell id="49" onClick={()=> delete_fn("49")}></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </div>
)

export default DrawTable;