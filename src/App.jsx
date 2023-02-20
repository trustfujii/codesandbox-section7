import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // State
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // テキスト変更処理
  const onChangeTodoText = (e) => {
    return setTodoText(e.target.value);
  };

  // 追加ボタン処理
  const onClickAdd = () => {
    if (todoText === "") {
      return;
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン処理
  const onClickComplete = (index) => {
    const newInconpleteTodos = [...incompleteTodos];
    newInconpleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newInconpleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタン処理
  const onClickRestore = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInconpleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newInconpleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        ></input>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={index}>
                <div className="list-row">
                  <div className="list-title">{todo}</div>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>

        <ul>
          {completeTodos.map((todo, index) => {
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
    </>
  );
};
