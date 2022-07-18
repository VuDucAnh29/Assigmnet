import React from "react";
import {
   Breadcrumb,
   BreadcrumbItem,
   Card,
   CardBody,
   CardHeader,
   Media,
} from "reactstrap";
import { Link } from "react-router-dom";

function About(props) {
   const leaders = props.leaders.map((leader) => {
      return (
         <Media tag="li" key={leader.id}>
            <Media left middle className="mr-5">
               <Media src={leader.image} alt={leader.name} />
            </Media>
            <Media body className="ml-5 text-left">
               <Media heading>{leader.name}</Media>
               <p>{leader.designation}</p>
               <p>{leader.description}</p>
            </Media>
         </Media>
      );
   });

   return (
      <div className="container">
         <div className="row">
            <Breadcrumb>
               <BreadcrumbItem>
                  <Link to="/home">Home</Link>
               </BreadcrumbItem>
               <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
               <h3>About Us</h3>
               <hr />
            </div>
         </div>
         <div className="row row-content">
            <div className="col-12 col-md-6">
               <h2>Our History</h2>
               <p>
               Trusted since 1995, Perfume.com has millions of happy customers worldwide. We guarantee that all products are 100% original brand names. We never sell any knockoffs or imitations. We keep your information absolutely secure and never share your information with anyone. If you are not happy with your order, simply send it back to us for a refund.
               </p>
               <h4>Worldwide Shipping</h4>
               <p>
               Ships via Fedex, DHL, UPS, USPS, DPD and other local carriers 
Arrives in 4 - 12 business days with tracking.
Please note, most orders arrive duty free, however you may be subject to import duties and taxes once a shipment reaches your country. We are not responsible and have no control over these fees.
International orders must be shipped to the cardholders address.
               </p>
            </div>
            <div className="col-12 col-md-5">
               <Card>
                  <CardHeader className="bg-primary text-white">
                     Facts At a Glance
                  </CardHeader>
                  <CardBody>
                     <dl className="row p-1">
                        <dt className="col-6">Started</dt>
                        <dd className="col-6">1995</dd>
                        <dt className="col-6">First Shop location</dt>
                        <dd className="col-6">Viet Nam</dd>
                        <dt className="col-6">Last Year's total sale</dt>
                        <dd className="col-6">1,250,375</dd>
                        <dt className="col-6">Shop locations</dt>
                        <dd className="col-6">40</dd>
                     </dl>
                  </CardBody>
               </Card>
            </div>
            <div className="col-12">
               <Card>
                  <CardBody className="bg-faded">
                     <blockquote className="blockquote">
                        <p className="mb-0">
                        We guarantee that all products are 100% original brand names. We never sell any knockoffs or imitations.
                        </p>
                     </blockquote>
                  </CardBody>
               </Card>
            </div>
         </div>
      </div>
   );
}

export default About;
