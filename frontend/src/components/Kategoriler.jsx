const Kategoriler = ({ kategoriler }) => {
    return (
        <div className="col-12 col-md-3 mb-6 mt-2 " style={{cursor:"pointer"}} >
            <ul className="list-group">
                {kategoriler.map((kategori, index) => (
                    <li key={index} className="list-group-item">
                        {kategori}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Kategoriler;
