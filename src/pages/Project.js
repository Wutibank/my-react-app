import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div className="my-app">
      <h1 class="text-center"> Projects </h1>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1525286944502-268e726aece1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5072792ce04efef19c40a9b54cd3503&auto=format&fit=crop&w=1267&q=80" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1525286944502-268e726aece1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5072792ce04efef19c40a9b54cd3503&auto=format&fit=crop&w=1267&q=80" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1525286944502-268e726aece1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5072792ce04efef19c40a9b54cd3503&auto=format&fit=crop&w=1267&q=80" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>
    );
  }
}

export default Project;