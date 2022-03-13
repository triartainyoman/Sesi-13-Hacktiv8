import "./App.css";
// import styles from "./App.module.css";
// import divStyle from "./AppStyle";
import styled from "styled-components";

// Object Variable CSS
const divStyle2 = {
  backgroundColor: "#eeeeee",
  padding: "30px",
  fontFamily: "arial",
};

// Styled Component
const Div = styled.div`
  background-color: #eeeeee;
  padding: 30px;
  font-family: Arial;
`;

function App() {
  return (
    <Div>
      <h1>Hello World 2022</h1>
    </Div>
  );
}

export default App;
