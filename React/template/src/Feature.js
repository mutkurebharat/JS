import Button from './Button'

const Feature = () => {
    return (
      <div class="bg-success text-center">
        <p class="display-4 text-white p-4">Discover the amazing new app</p>
        <p class="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
        </p>
        <div class="row  p-4">
          <div class="col-6 text-right">
            <Button title="Play Store" />
          </div>
          <Button title="Apppppppp Store" />
          <div class="col-6 text-center"></div>
        </div>
      </div>
    );
}

export default Feature;