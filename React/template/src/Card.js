const Card = ({img, title, name}) => (
  <div class="card" style={{ width: "18rem" }}>
    <img
      src={img}
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-success">
        {name}
      </a>
    </div>
  </div>
);

export default Card;