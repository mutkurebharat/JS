import Card from './Card';

const Banner = () => (
  <section class="contact bg-success ">
    <div class="container ">
      <h2 class="text-white">We love new friends!</h2>
      <div class="row">
        <div class="col-4">
          <Card
            img="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Title 1"
            name="Button 1"
          />
        </div>
        <div class="col-4">
          <Card
            img="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Title 2"
            name="Button 2"
          />
        </div>
        <div class="col-4">
          <Card
            img="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Title 3"
            name="Button 3"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Banner;