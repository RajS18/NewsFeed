import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import News from "./components/News.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {

  apiKeyLocal=process.env.NEWS_FEED_API_KEY;
  state={
    progress:0
  }
  setProgress=(p)=>{
    this.setState({
      progress:p
    })
  }


  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress} height={3}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress} 
                  key="general"
                  pageSize={9}
                  country="in"
                  category="general"
                  titleEdit="General"
                  apiKey={this.apiKeyLocal}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} 
                  key="business"
                  pageSize={9}
                  country="in"
                  category="business"
                  titleEdit="Business"
                  apiKey={this.apiKeyLocal}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} 
                  key="entertainment"
                  pageSize={9}
                  country="in"
                  category="entertainment"
                  titleEdit="Entertainment"
                  apiKey={this.apiKeyLocal}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} 
                  key="sports"
                  pageSize={9}
                  country="in"
                  category="sports"
                  titleEdit="Sports"
                  apiKey={this.apiKeyLocal}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress} 
                  key="science"
                  pageSize={9}
                  country="in"
                  category="science"
                  titleEdit="Science"
                  apiKey={this.apiKeyLocal}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} 
                  key="technology"
                  pageSize={9}
                  country="in"
                  category="technology"
                  titleEdit="Technology"
                  apiKey={this.apiKeyLocal}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} 
                  key="health"
                  pageSize={9}
                  country="in"
                  category="health"
                  titleEdit="Health"
                  apiKey={this.apiKeyLocal}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
