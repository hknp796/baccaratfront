import Search from "../components/Search";
import SearchList from "../components/SearchList";
import Buttons from "../components/Buttons";
import { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { Container } from "react-bootstrap";

const Index = () => {
  const [list, setList] = useState([]);
  const saveSearch = (data) => {
    setList(data);
  };
  console.log("list123", list[0]);

  return (
    <div>
      {/* <Search saveSearch={saveSearch} />
      {list[0] ? (
        <Container>
          <h3 style={{ color: "white" }}>Search Results</h3>
          <SearchList list={list} />
        </Container>
      ) : null} */}
      <Dashboard />
    </div>
  );
};

export default Index;
