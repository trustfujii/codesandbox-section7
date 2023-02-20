import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickRestore } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <div className="list-row">
                <div className="list-title">{todo}</div>
                <button onClick={() => onClickRestore(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
