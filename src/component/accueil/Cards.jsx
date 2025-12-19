export default function Cards() {
  const images = [
    "/img/donnees-ia.png",
    "/img/entreprise-innovation.png",
    "/img/systemes-cloud.png",
    "/img/web-design.png",
  ];

  return (
<div className="full-center has-background-info-light clip py-6">

    <div className="container py-6" >
      <div className="columns is-multiline margin-auto py-6">
        {images.map((src, i) => (
          <div className="column full-center" key={i}>
            <div className="card border-radius has-background-info-dark fixed-card is-square">
                <figure className="image  ">
                  <img src={src} alt={`card-${i}`} />
                </figure>
              </div>
          </div>
        ))}
      </div>
    </div>
    </div>


  );
}
