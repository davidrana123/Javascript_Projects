import React, { useRef, createContext, useState } from "react";
import Jsx from "../components/2_Jsx";
import Input from "../components/3_Get_Input_value";
import Toggle from "../components/4_Hide_Show";
import Form from "../components/5_ Handle Form";
import Validation from "../components/7_Form_Validation";
import Props from "../components/8_pass_props";
import Didmount from "../components/9_componentDidUpdate";
import UseEffect from "../components/10_UseEffect_hook";
import Nested from "../components/12_Nested_List_Array";
import Usememo from "../components/14_UseMemo";
import Ref from "../components/15_Ref";
import Hook from "../components/16_Hooks";
import Forword from "../components/17_forwardRef";
import HOC from "../components/18_HOC";
import Rou from "../router/route";
import Sobj from "../components/23_State_obj";
import Protype from "../components/25_ proptypes";
import Fragment from "../components/26_Fragment";
import ContextApi from "../components/24_Context_Api";
import Reducer from "../components/27_useReduceer";

export const GlobalInfo = createContext();

let Basics = () => {
  const [color, setColor] = useState("red");
  let fun = () => {
    alert("i am function props");
  };
  let innerRef = useRef(null);
  let updateInput = () => {
    innerRef.current.value = "2000";
    innerRef.current.style.color = "red";
    innerRef.current.focus();
  };
  return (
    <GlobalInfo.Provider value={{ appColor: color }}>
      <div>
        <Jsx />
        <Input />
        <Toggle />
        <Form />
        <Validation />
        <Props name="i am name props" myFun={fun} />
        <Didmount />
        <UseEffect />
        <Nested />
        <Usememo />
        <Ref />
        <Hook />
        <Forword ref={innerRef} />
        <button onClick={updateInput}>Update InputBox</button>
        <HOC />
        <Rou />
        <Sobj />
        <Protype age={23} name={"David"} />
        <Fragment />
        <ContextApi />
        <Reducer />
      </div>
    </GlobalInfo.Provider>
  );
};

export default Basics;
