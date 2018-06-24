import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom'
import Main from './views/Main';
import CategoryDetails from './views/CategoryDetails';
import PostDetails from './views/PostDetails';
import AddPost from './views/AddPost';
import EditPost from './views/EditPost';
import EditComment from './views/EditComment';
import NotFound from './views/NotFound';
import Search from './views/Search';

class SocialRestaurantApp extends Component {

    render() {

    return (
      <div className="App">
          <div className="preloader">
              <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" /> </svg>
          </div>
          <div id="main-wrapper">
              <Switch>
                  <Route exact path="/" component={Main}/>
                  <Route exact path="/post/add" component={AddPost}/>
                  <Route exact path="/not-found" component={NotFound}/>
                  <Route exact path="/search" component={Search}/>
                  <Route exact path="/:category" component={CategoryDetails}/>
                  <Route exact path="/:category/:id" component={PostDetails}/>
                  <Route exact path="/comment/:action/:id" component={EditComment}/>
                  <Route exact path="/post/:action/:id" component={EditPost}/>
                  <Route path="*" component={NotFound}/>
              </Switch>
          </div>
      </div>
    );
  }
}
export default SocialRestaurantApp;