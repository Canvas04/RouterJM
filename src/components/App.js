import React from "react";
import { Checkbox } from "antd";
import { pressAll } from "../action";
import { connect } from "react-redux";
import stateCheck from "../reducers/index";

const App = ({ stateCheck ,pressAll}) => {
   

    const value =stateCheck
    .filter((el) => el.id === 1)
    .map((el) => el.checked)[0]
     console.log(stateCheck,value);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Checkbox onChange={pressAll} Checked={stateCheck
          .filter((el) => el.id === 1)
          .map((el) => el.checked)[0]
          }>
        {stateCheck
          .filter((el) => el.id === 1)
          .map((el) => el.label)
          .join(" ")}
      </Checkbox>
      <Checkbox  onChange={() => {}} checked={stateCheck
          .filter((el) => el.id === 2)
          .map((el) => el.checked)[0]}>
        {stateCheck
          .filter((el) => el.id === 2)
          .map((el) => el.label)
          .join(" ")}
      </Checkbox>
      <Checkbox onChange={ () => {}} checked={stateCheck
          .filter((el) => el.id === 3)
          .map((el) => el.checked)[0]}>
        {stateCheck
          .filter((el) => el.id === 3)
          .map((el) => el.label)
          .join(" ")}
      </Checkbox>
      <Checkbox  onChange={() => {}} checked={stateCheck
          .filter((el) => el.id === 4)
          .map((el) => el.checked)[0]}>
        {stateCheck
          .filter((el) => el.id === 4)
          .map((el) => el.label)
          .join(" ")}
      </Checkbox>
      <Checkbox  onChange = {() => {}} checked={stateCheck
          .filter((el) => el.id === 5)
          .map((el) => el.checked)[0]}>
        {stateCheck
          .filter((el) => el.id === 5)
          .map((el) => el.label)
          .join(" ")}
      </Checkbox>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stateCheck: state.check.items,
  };
};
const mapDispatchToProps = (dispatch) => {
    return {
        pressAll: () => dispatch(pressAll())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
