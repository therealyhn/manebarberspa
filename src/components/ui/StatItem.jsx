function StatItem({ value, label }) {
    return (
        <div>
            <h3 className="text-3xl font-bold text-second font-prata">{value}</h3>
            <p className="text-second font-lato">{label}</p>
        </div>
    )
}

export default StatItem
