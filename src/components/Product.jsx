import { useState, useEffect } from "react";
import api from "../api/axios";
import ProductForm from "./ProductForm";

const ProductPage = () => {
    const [products, setProducts] = useState(null);
    const [name, setName] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [primaryImage, setPrimaryImage] = useState(null);
    const [secondaryImages, setSecondaryImages] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await api.get("/admin/products");
            setProducts(res.data.products);
        } catch (error) {
            console.error("Erreur lors du fetch des produits", error);
        }
    };
    const addProduct = async (newProduct) => {
        try {



        } catch (error) {
            console.error("Erreur lors de l'ajout du produit", error);
        }
    };


    useEffect(() => {
        fetchProducts();
    }, []);
    // useEffect(() => {
    //     if(products){
    //         console.log("image",products);
    //         console.log("image p",products.product_images);
    //         const primary= products.product_images.find((pro) => pro.is_primary)?.image_url;
    //         setPrimaryImage(primary);
    //     }

    // }, [products]);

    console.log(products);;

    return (
        <div className="p-4">
            <ProductForm  isEditing={null} onSubmit={null} onCancel={null}/>
            <h1 className="text-2xl font-bold mb-4">product</h1>

            <form className="mb-6">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom de la produit"
                    className="border p-2 mr-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    {editingId ? "Modifier" : "Ajouter"}
                </button>
            </form>

            <ul>
                {Array.isArray(products) && products.map((pro) => {
                    const primary = pro.product_images.find((prod) => prod.is_primary)?.image_url;

                    return (

                        <li key={pro.id} className="mb-4 flex items-center">
                            {primary && (


                            <img
                                src={`http://127.0.0.1:8000/storage/${primary}`}
                                alt={pro.name}
                                className="w-16 h-16 object-cover mr-4 rounded"
                            />
                            )}
                            <span className="flex-1">{pro.name}</span>

                            <button
                                onClick={() => handleEdit(pro)}
                                className="bg-yellow-400 p-2 mr-2 rounded"
                            >
                                Modifier
                            </button>
                            <button
                                onClick={() => deleteproegory(pro.id)}
                                className="bg-red-500 text-white p-2 rounded"
                            >
                                Supprimer
                            </button>
                        </li>
                        //     ))
                        // ) : (
                        //     <li>Chargement des produits...</li>
                        // )}
                    );
                })}
            </ul>
        </div>
    );
};

export default ProductPage;