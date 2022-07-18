import React, { Component } from "react";
import {
   Breadcrumb,
   BreadcrumbItem,
   Button,
   Card,
   CardBody,
   CardImg,
   CardImgOverlay,
   CardText,
   CardTitle,
} from "reactstrap";
import DishDetail from "./Dishdetail";
import { Link } from "react-router-dom";
import { useState } from "react";




function RenderStoreItem({ dish, onClick }) {
   const [quantity, setQuantity] = useState(0)

   return (
      // <Card onClick={() => onClick(dish)}>
      <Card className="shadow-sm h-100 mb-5">
         <Link to={`/store/${dish.id}`}>
            <CardImg src={dish.image} alt={dish.name} className="img-fluid" style={{width: "100%"}}/>
            
            <CardBody>
               <CardTitle className="d-flex justify-content-between align-items-baseline mb-4">
                  <span className="fs-2">{dish.name}</span>
                  <span className="fs-2 text-muted">{dish.price}$</span>
               </CardTitle>
               {/* <div className="mt-auto">
                  {quantity === 0 ? (
                     <Button className="w-100" onClick={() => setQuantity(quantity + 1)}>+ Add to cart</Button>
                  ): <div className="d-flex align-items-center flex-column" style= {{gap: ".5rem"}}>
                        <div className="d-flex align-items-center justify-content-center" style= {{gap: ".5rem"}}>
                           <Button className="ratio ratio-1x1" onClick={() => setQuantity(quantity - 1)}>-</Button>
                           <div>
                           <span className="fs-3"> {quantity}</span> in cart
                           </div>
                           <Button className="ratio ratio-1x1"  onClick={() => setQuantity(quantity + 1)}>+</Button>
                        </div>
                        <Button className="btn-danger"  onClick={() => setQuantity(quantity - quantity)}>Remove</Button>
                     </div>
                  }
               </div> */}
            </CardBody>
            </Link>
      </Card>
   );
}


class Store extends Component {
   render() {
      const store = this.props.dishes.map((dish) => {
         return (
            <div className="col-12 col-md-4 ">
               <div key={dish.id}>
                  <RenderStoreItem dish={dish} />
               </div>
            </div>
         );
      });
      return (
         <div className="container mb-4">
            <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem>
                     <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Store</BreadcrumbItem>
               </Breadcrumb>
               <div className="col-12">
                  <h3>Store</h3>
                  <hr />
               </div>
            </div>
            <div className="row">{store}</div>
         </div>
      );
   }
}
export default Store;
