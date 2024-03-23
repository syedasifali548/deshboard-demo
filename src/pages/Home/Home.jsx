import Topbar from "./../../components/topbar/Topbar";
import Sidebars from "./../../components/sidebar/Sidebars";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropDownData from "../../components/dropdown/DropDownData";
import icon from "../../assets/images/icon.png";
import "./home.css";
import NumCard from "../../components/NumCard/NumCard";
import Cards from "../../components/Cards/Cards";
const Home = () => {
  return (
    <div>
      <Topbar />

      <Container fluid className="gx-0">
        <Row>
          <Col md={3}>
            <Sidebars />
          </Col>
          <Col md={8}>
            <DropDownData />
              <NumCard />
              <Cards/>
          </Col>
          <Col md={1}>
            <div className="iconImg">
              <img src={icon} alt="" />
            </div>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
