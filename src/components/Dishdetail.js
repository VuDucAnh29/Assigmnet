import React from "react";
import {
   Breadcrumb,
   BreadcrumbItem,
   Card,
   CardImg,
   CardBody,
   CardText,
   CardTitle,
} from "reactstrap";

import { Link } from "react-router-dom";

function RenderDish({ dish }) {
   return (
      <div className="">
         <Card>
            <div className="row">
            <CardImg src={dish.image} alt={dish.name} className="col-12 col-md-5" />
            <CardBody  className="col-12 col-md-7">
               <h2>{dish.name}</h2>
               <CardText className="text-left">{dish.description}</CardText>
               <CardText className="text-left"><strong>Launched:</strong> {dish.launched}</CardText>
               <CardText className="text-left"><strong>Price:</strong> {dish.price}$</CardText>
               <CardText className="text-left"><strong>Top Note:</strong> {dish.topnote}</CardText>
               <CardText className="text-left"><strong>Middle Note:</strong> {dish.middlenote}</CardText>
               <CardText className="text-left"><strong>Base  Note:</strong> {dish.basenote}</CardText>
            </CardBody>
            </div>
         </Card>
      </div>
   );
}

export function RenderComments({ comments }) {
   const comment = comments.map((item) => {
      return (
         <Card key={item.id}>
            <CardBody>
            <div className="d-flex justify-content-between mb-4">
               <CardTitle>{item.author}</CardTitle>
               <span className="text-muted ms-auto">{item.date}</span>
            </div>
            <p>{item.comment}</p>
            </CardBody>
         </Card>
      );
   });
   return (
      <div className="">
         <h2>Comments</h2>
         {comment}
      </div>
   );
}

class DishDetail extends React.Component {
   render() {
      if (this.props.dish != null) {
         const dish = this.props.dish;
         const comments = this.props.comments;
         return (
            <div className="container">
               <div className="row">
                  <Breadcrumb>
                     <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                     </BreadcrumbItem>
                     <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                     <h3>{dish.name}</h3>
                     <hr />
                  </div>
               </div>
               <div className="">
                  <div className="mb-4  d-flex justify-content-center col-12 ">
                     <RenderDish dish={dish} />
                  </div>
                  <div className="mb-4 col-12 w-75">
                     <RenderComments comments={comments} />
                  </div>
               </div>
            </div>
         );
      } else {
         return <div></div>;
      }
   }
}

export default DishDetail;
