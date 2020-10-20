import React from "react";
import { Checkbox } from "antd";
import { pressAll } from "../action";
import { connect } from "react-redux";
import { pressOne } from "../action";

const App = ({ stateCheck, pressAll ,pressOne}) => {
  console.log(stateCheck);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Checkbox
        onChange={() => {pressAll();}}
        checked={
          stateCheck.filter((el) => el.id === 1).map((el) => el.checked)[0]
        }
      >
        {stateCheck
          .filter((el) => el.id === 1)
          .map((el) => el.label)
          .join(" ")}
      </Checkbox>
      <Checkbox
        onChange={() => pressOne( stateCheck.filter((el) => el.id === 2).map((el) => el.id)[0])}
        checked={
          stateCheck.filter((el) => el.id === 2).map((el) => el.checked)[0]
        }
      >
        {stateCheck
          .filter((el) => el.id === 2)
          .map((el) => el.label)
          .join(" ")}
      </Checkbox>
      <Checkbox
        onChange={() => pressOne( stateCheck.filter((el) => el.id === 3).map((el) => el.id)[0])}
        checked={
          stateCheck.filter((el) => el.id === 3).map((el) => el.checked)[0]
        }
      >
        {stateCheck
          .filter((el) => el.id === 3)
          .map((el) => el.label)
          .join(" ")}
      </Checkbox>
      <Checkbox
        onChange={() => pressOne( stateCheck.filter((el) => el.id === 4).map((el) => el.id)[0])}
        checked={
          stateCheck.filter((el) => el.id === 4).map((el) => el.checked)[0]
        }
      >
        {stateCheck
          .filter((el) => el.id === 4)
          .map((el) => el.label)
          .join(" ")}
      </Checkbox>
      <Checkbox
        onChange={() => pressOne( stateCheck.filter((el) => el.id === 5).map((el) => el.id)[0])}
        checked={
          stateCheck.filter((el) => el.id === 5).map((el) => el.checked)[0]
        }
      >
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
    pressAll: () => dispatch(pressAll()),
    pressOne: (id) => dispatch(pressOne(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
