import React from "react";
import Store from "./Store";
import Header from "./Header";
import Footer from "./Footer";
import { DISHES } from "../data/dishes";
import { COMMENTS } from "../data/comments";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import DishDetail from "./Dishdetail";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
   return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
   };
};
class Main extends React.Component {
   // constructor(props) {
   //    super(props);
   //    this.state = {
   //       selectedDish: null,
   //       dishes: DISHES,
   //       promotions: PROMOTIONS,
   //       leaders: LEADERS,
   //       comments: COMMENTS,
   //    };
   // }
   onDishSelect(dish) {
      this.setState({ selectedDish: dish });
   }
   render() {
      const HomePage = () => {
         return (
            <Home
               dish={this.props.dishes.filter((dish) => dish.featured)[0]}
               promotion={
                  this.props.promotions.filter((promo) => promo.featured)[0]
               }
               leader={
                  this.props.leaders.filter((leader) => leader.featured)[0]
               }
            />
         );
      };

      const DishWithId = ({ match }) => {
         return (
            <DishDetail
               dish={
                  this.props.dishes.filter(
                     (dish) => dish.id === parseInt(match.params.dishId, 10)
                  )[0]
               }
               comments={this.props.comments.filter(
                  (comment) =>
                     comment.dishId === parseInt(match.params.dishId, 10)
               )}
            />
         );
      };

      return (
         <div>
            <Header />
            <div>
               <Switch>
                  <Route path="/home" component={HomePage} />
                  <Route
                     exact
                     path="/aboutus"
                     component={() => <About leaders={this.props.leaders} />}
                  />

                  <Route
                     exact
                     path="/store"
                     component={() => <Store dishes={this.props.dishes} />}
                  />
                  <Route path="/store/:dishId" component={DishWithId} />
                  <Route exact path="/contactus" component={Contact} />
                  <Redirect to="/home" />
               </Switch>
            </div>
            <Footer />
         </div>
      );
   }
}

export default withRouter(connect(mapStateToProps)(Main));
