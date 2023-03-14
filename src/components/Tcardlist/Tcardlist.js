import React from "react";
import "./Tcardlist.css";
import Tcard from "../Tcard/Tcard";

function Tcardlist() {
  const tours = [
    {
      image:
        "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?cs=srgb&dl=pexels-ricardo-esquivel-1563256.jpg&fm=jpg",
      title: "Tour 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
      title: "Tour 2",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      title: "Tour 3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      title: "Tour 3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      title: "Tour 3",
    },
  ];

  return (
    <div className="cardlist">
      <div className="tcard_tr">
        {tours.map((tour, index) => (
          <Tcard key={index} image={tour.image} title={tour.title} />
        ))}
      </div>
    </div>
  );
}

export default Tcardlist;
