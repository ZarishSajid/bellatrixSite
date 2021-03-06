// import React from 'react';
// // import '../../App.css';
// import '../../index.css'
// import CardItem from '../CardItem';

// export default function Services() {
//   return (
//     <div class="text-center text-xl-left" >
//    <h1 class="sans-bold color__black wow slideInLeft" data-wow-delay="0.1s">Jenis Layanan</h1>
//    <div className='cards'>
//       <h1>Check out these EPIC Destinations!</h1>

//     </div>
//  </ div>

// );
// }

import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Container, Row, Col, Card, CardBody, CardImg ,CardTitle} from "shards-react";
import "../components/Service.css";

export default function CardBodyExample() {
  return (
    <Container>
 <h3 style={{marginRight:"0px",marginTop:"20px"}}>Jenis Layanan</h3>
 <p style={{
              
              border: "0.5px solid #ff5367",
              borderRadius: "10px",
              marginRight: "860px",
              marginLeft: "0px",
            }}></p>
{/* 
      <Row>
        <Col>
          <Card className="card-1"
            style={{
             
            }}
          >
            <CardImg style={{height:"15%",width:"20%",marginLeft:"20px"}}  src="/images/Groupdot.png" />
            <CardBody>
              <p style={{ color: "#ff5367", fontSize: "25px",marginLeft:"0px" }}>Design</p>
              <br />
              <p style={{ color: "#A29E9F",fontStyle:"normal",marginLeft:"20px" }}>
                Kami menyediakan beberapa jenis deisgnsepeti feed instagram,
                UIUX, dsb.
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row> */}

      <Row>
          <Col>
            <Card className="mb-3 card-1">
            <CardImg style={{height:"20%",width:"20%",marginLeft:"20px"}}  src="/images/Groupdot.png" />

              <CardBody >
                <br />
               
                  {" "}
                  <CardTitle style={{color: "#ff5367"}}>Design</CardTitle>
              
                <p style={{ color: "#A29E9F",fontFamily:"fantasy"}}>
                Kami menyediakan beberapa jenis deisgnsepeti feed instagram,
                UIUX, dsb.
              </p>
              </CardBody>
            </Card>
          </Col>
          <Col>
          <Card className="mb-3 card-2">
            <CardImg style={{height:"20%",width:"20%",marginLeft:"20px"}}  src="/images/servicesCardTwo.png" />

              <CardBody >
                <br />
               
                  {" "}
                  <CardTitle style={{color: "#E6B921"}}>Development</CardTitle>
              
                <p style={{ color: "#A29E9F",fontFamily:"fantasy" }}>
                Bangun webiste atau aplikasi untuk menunjang bisnis anda bersama kami
              </p>
              </CardBody>
            </Card>
          </Col>
          <Col>
          <Card className="mb-3 card-3">
            <CardImg style={{height:"20%",width:"20%",marginLeft:"20px"}}  src="/images/branding.png" />

              <CardBody >
                <br />
               
                  {" "}
                  <CardTitle style={{color: "#000"}}>Branding</CardTitle>
              
                <p style={{ color: "#A29E9F",fontFamily:"fantasy" }}>
                Kami akan membantu anda dalam mengelola branding bisnis anda.
              </p>
              </CardBody>
            </Card>
          </Col>
          <Col>
          <Card className="mb-3 card-4">
            <CardImg style={{height:"20%",width:"20%",marginLeft:"20px"}}  src="/images/photography.png" />

              <CardBody >
                <br />
               
                  {" "}
                  <CardTitle style={{color: "#ff5367"}}>Photography</CardTitle>
              
                <p style={{ color: "#A29E9F",fontFamily:"fantasy" }}>
                Jika anda memiliki produk fisik, kami akan membantu membuat foto terbaik untuk produk anda
              </p>
              </CardBody>
            </Card>
          </Col>
          <br />
        </Row>
    </Container>
  );
}
