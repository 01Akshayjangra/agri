import Card from "./Card";

export default function Commodity() {
    return (
        <>
            <div className="container">
                <div className="top-com">
                    <div>
                        <h3>Find Sellers</h3>
                        <p>View sell requirements posted by users looking for immediate selling</p>
                    </div>
                </div>
                <div className="filter">
                    <div className="filter-container">
                        <select className="form-control">
                            <option value>Select Commodity</option>
                            <option value="wheat">wheat</option>
                            <option value="Paddy">Paddy</option>
                            <option value="Maize">Maize</option>
                            <option value="Bajra">Bajra</option>
                            <option value="Black Gram">Black-Gram</option>
                            <option value="Soyabean">Soyabean</option>
                            <option value="Ajwain">Ajwain</option>
                            <option value="Alsi">Alsi</option>
                            <option value="Barley">Barley</option>
                            <option value="Begal gram">Bengal gram</option>
                        </select>
                        <select className="form-control">
                            <option value>Select State</option>
                            <option value="1">Assam</option>
                            <option value="2">Andra Pradesh</option>
                            <option value="3">Punjab</option>
                        </select>
                        <select className="form-control">
                            <option value="3">Select City</option>
                            <option value="4">Ludhiana</option>
                            <option value="5">Pathankot</option>
                            <option value="6">Jalandhar</option>
                            <option value="7">Amritsar</option>
                        </select>
                        <button type="button" className="btn-search">Search</button>
                    </div>
                </div>
                <div className="card-container">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}
