function PriceRow({ label, price, currency = 'rsd' }) {
    return (
        <div className="flex justify-between items-center border-b border-light-gray pb-2">
            <span className="text-sm md:text-base font-prata">{label}</span>
            <span className="text-prime font-semibold font-prata">
                {price} <span className="text-sm">{currency}</span>
            </span>
        </div>
    )
}

export default PriceRow
