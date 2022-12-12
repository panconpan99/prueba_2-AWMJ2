function listProducts({ data, label = "description" }) {
    return (
        <ul>
            {
                data.map(function (item, index) {
                    return (
                        <li key={index}>{item[label]}</li>
                    )
                })
            }
        </ul>
    )
}

export default listProducts;