import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] =
    useState<boolean>(false);
  const [multiple, setMultiple] = useState<number[]>([]);

  const handleSingleSelection = (selectedId: number) => {
    setSelected(selectedId === selected ? null : selectedId);
  };

  const handleMultiSelection = (getCurrentId: number) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  };

  return (
    <div className="main_wrapper">
      <button
        className="enable_button"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        {enableMultiSelection
          ? "Disable MultiSelection"
          : "Enable MultiSelection"}
      </button>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div
            key={dataItem.id}
            className="accordian_wrapper"
            onClick={
              enableMultiSelection
                ? () => handleMultiSelection(dataItem.id)
                : () => handleSingleSelection(dataItem.id)
            }
          >
            <div className="accordian_inner_wrapper">
              <div className="accordian_questions">
                <h3>{dataItem.question}</h3> <span className="expand">+</span>{" "}
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div>{dataItem.answer}</div>
                  )
                : selected === dataItem.id && <div>{dataItem.answer}</div>}
              {/* <div>
              {selected === dataItem.id ? <div>{dataItem.answer}</div> : null}{" "}
            </div> */}
            </div>
          </div>
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
};

export default Accordian;
