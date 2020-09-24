import React from "react";
import Grid from "../template/grid";
import IconButtom from "../template/iconButtom";

export default (props) => {
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  return (
    <div>
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Fill the task"
            onChange={props.handleChange}
            onKeyUp={keyHandler}
            value={props.description}
          ></input>
        </Grid>

        <Grid cols="12 3 2">
          <IconButtom
            style="primary"
            icon="plus"
            onClick={props.handleAdd}
          ></IconButtom>
          <IconButtom
            style="info"
            icon="search"
            onClick={props.handleSearch}
          ></IconButtom>
          <IconButtom
            style="default"
            icon="close"
            onClick={props.handleClear}
          ></IconButtom>
        </Grid>
      </div>
    </div>
  );
};
