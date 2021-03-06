import { Container, Form, Button, Col, Row, Card } from "react-bootstrap";
import styles from "../styles/SearchList.module.css";
import Search from "../components/Search";
import SearchList from "../components/SearchList";
import { useState } from "react";
const style = {
  display: "flex",
  float: "left",
  width: "100%",
  color: "white" 
};

function pattern(data) {
  const [list, setList] = useState([]);
  const saveSearch = (data,index) => {
    console.log("index",index);
    setList([data]);
  };
  console.log("list123", list);

  return (
   <div>
     
     <Search saveSearch={saveSearch} />
      {list[0] ? (
        <Container>
          <h3 style={style}>Search Results</h3>
          <SearchList list={list} />
        </Container>
      ) : null}
   </div> 
  )
}
export default pattern;
