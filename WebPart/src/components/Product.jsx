export default function Product({children,price}) {
  return (
    <>
      <div className="card card-bordered w-60 shadow-xl">
        <figure>
          <img
            src="/src/public/maillot-algerie-exterieur-2024-25.jpg"
            alt="Image"
          />
        </figure>

        <h2 className="card-title">{children}</h2>
        <p>{price}</p>
      </div>
    </>
  );
}
