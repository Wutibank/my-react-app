import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="my-app">
      <h1 class="text-center"> About </h1>
        <div class="card mycard mt-4">
            <img class="card-img-top" src="https://images.unsplash.com/photo-1525286944502-268e726aece1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5072792ce04efef19c40a9b54cd3503&auto=format&fit=crop&w=1267&q=80" alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    );
  }
}

export default About;