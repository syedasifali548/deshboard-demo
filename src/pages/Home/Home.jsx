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
import Chart from "../../components/Charts/Chart";
const Home = () => {
  return (
    <div>
      <Topbar />

      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebars />
          </Col>
          <Col md={8}>
            <DropDownData />
              <NumCard />
              </Col>
              <Col md={1}>
              <div className="iconImg">
                <img src={icon} alt="" className="img-fluid" />
              </div>
             
            </Col>  
               </Row>
        
              <Row>
              <Col md={3}></Col>
              <Col md={9}>
              <Cards/>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default Home;
