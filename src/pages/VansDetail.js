import React from "react";
import { useParams } from "react-router-dom";

export default function VansDetail() {
  const params = useParams();
  const [van, setvan] = React.useState("");

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setvan(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      <img src={van.imageUrl} />
      <div className="van-detail-description">
        <i>{van.type}</i>
        <h2>{van.name}</h2>
        <h4>{van.price}$/day</h4>
        <p>{van.description}</p>
        <button>rent this van</button>
      </div>
    </div>
  );
}
