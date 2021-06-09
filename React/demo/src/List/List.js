import {data} from './data'

const List = () => {
    const person = ["person1", "person2", "person3", "person4", "person5", "person6", "person7"];
    const elements = person.map((value) => {
          return <h4>{value}</h4>;
        })

    const info = data.map((value,index) => {
        return (
          <div key={index}>
            <h4>Name: {value.name}</h4>
            <h4>Email: {value.email}</h4>
            <h4>
              Address: {value.address.street} {value.address.suite}
              {value.address.city} {value.address.zipcode}
            </h4>
            <h4>Company: {value.company.name}</h4>
            <hr />
          </div>
        );
    })
    return (
      <div>
        {/* {person.map((value) => {
          return <h4>{value}</h4>;
        })} */}
        {/* {elements} */}
        {info}
      </div>
    );
}

export default List;