
function Categories() {

    const category = [
        {
            id: "0",
            name:"bed",
            category_name: "Beds",
            category_image: './images/beds.webp',

        },
        {
            id: "1",
            name:"sofa",
            category_name: "Sofas",
            category_image: './images/sofas.webp',
            
        },
        {
            id: "2",
            name:"bed",
            category_name: "Dinning Sets",
            category_image: './images/dinningsets.webp'
        },
        {
            id: "3",
            name:"bed",
            category_name: "Study Tables",
            category_image: './images/studytables.webp'
        },
        {
            id: "4",
            name:"bed",
            category_name: "Center Tables",
            category_image: './images/centertables.webp'
        },
        {
            id: "5",
            name:"bed",
            category_name: "Mattresses",
            category_image: './images/mattresses.webp'
        }

    ]


    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"></link>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <link rel="stylesheet" href="index.css"></link>

            <div>
                <img src='./images/addhome.webp' className='mw-100'></img>
            </div>
            <div class="py-3 py-md-5 bg-light" >
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="mb-4 text-center text-warning-emphasis">Shop By Categories</h4>
                        </div>


                        {category.map((categorydata, id) => {
                            return (
                                <div class="col-6 col-md-4 col-lg-2"key={id} >
                                    <div class="category-card" >
                                        <a href={`/productlist?id=${categorydata?.id}&name=${categorydata?.name}`}>
                                            <div class="category-card-img">
                                                <img src={categorydata.category_image} class="w-100" alt="Laptop" />
                                            </div>
                                            <div class="category-card-body">
                                                <h5>{categorydata.category_name}</h5>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div >
                <img src="./images/addoffer.webp" className="mw-100 p-3"></img>
            </div>
        </>
    )
}

export default Categories;