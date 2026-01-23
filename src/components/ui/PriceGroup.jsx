import PriceRow from './PriceRow'

function PriceGroup({ title, items }) {
    return (
        <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center bg-third-dark text-white p-2 rounded-lg font-prata">
                {title}
            </h3>
            <div className="flex flex-col gap-4">
                {items.map((item) => (
                    <PriceRow key={item.label} label={item.label} price={item.price} currency={item.currency} />
                ))}
            </div>
        </div>
    )
}

export default PriceGroup
