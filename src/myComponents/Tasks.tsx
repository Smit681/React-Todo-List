import React from "react";
import Task from "./Task.tsx";

export default function Tasks(props: {
  TempTask: any[];
  onDelete: (arg0: any) => void;
}) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Tasks List</h2>

      <div style={container}>
        {props.TempTask.length === 0 ? (
          <h4 style={{ textAlign: "center" }}>
            All Tasks Completed, Add a new Task
          </h4>
        ) : (
          props.TempTask.map((item, index) => {
            return <Task key={item.id} task={item} onDelete={props.onDelete} />;
          })
        )}
      </div>
    </>
  );
}

const container: {} = {
  display: "flex",
  flexWrap: "wrap", // Ensures responsiveness
  gap: "16px", // Adds space between tasks
  justifyContent: "center", // Aligns items in a row
  padding: "0 0 70px 0",
};
