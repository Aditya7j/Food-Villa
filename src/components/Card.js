export const ResturantCard = ({ restaurants }) => {
    return (
        <>
            {restaurants?.map((item, i) => (
                <div className="card-wrapper" key={i}>
                    <img src={item.image} alt={item.name} loading="lazy" />
                    <h2>{item.name}</h2>
                    <h3>{item.ingredients}</h3>
                    <h4>{item.cuisine}</h4>
                    <span>{item.rating}⭐</span>
                </div>
            ))}
        </>
    )
}