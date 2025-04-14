import { useState, useEffect } from "react";
import api from "../api/axios";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchCategories = async () => {
    try {
      const res = await api.get("/admin/categories");
      setCategories(res.data.categories);
    } catch (error) {
      console.error("Erreur lors du fetch des catégories", error);
    }
  };

  const addCategory = async (newCategory) => {
    try {
      const res = await api.post("/admin/categories", newCategory);
      setCategories([...categories, res.data.category]);
      setName(""); 
    } catch (error) {
      console.error("Erreur lors de l'ajout de la catégorie", error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await api.delete(`/admin/categories/${id}`);
      setCategories(categories.filter((cat) => cat.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression de la catégorie", error);
    }
  };

  const updateCategory = async (id, updatedCategory) => {
    try {
      const res = await api.put(`/admin/categories/${id}`, updatedCategory);
      setCategories(
        categories.map((cat) => (cat.id === id ? res.data.category : cat))
      );
      setEditingId(null);
      setName("");
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la catégorie", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleEdit = (cat) => {
    setEditingId(cat.id);
    setName(cat.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const slug = name.trim().toLowerCase().replace(/\s+/g, "-");
    if (editingId) {
      updateCategory(editingId, { name, slug });
    } else {
      addCategory({ name, slug });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Catégories</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom de la catégorie"
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editingId ? "Modifier" : "Ajouter"}
        </button>
      </form>

      <ul>
        {Array.isArray(categories) ? (
          categories.map((cat) => (
            <li key={cat.id} className="mb-2 flex items-center">
              <span className="flex-1">{cat.name}</span>
              <button
                onClick={() => handleEdit(cat)}
                className="bg-yellow-400 p-2 mr-2 rounded"
              >
                Modifier
              </button>
              <button
                onClick={() => deleteCategory(cat.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Supprimer
              </button>
            </li>
          ))
        ) : (
          <li>Chargement des catégories...</li>
        )}
      </ul>
    </div>
  );
};

export default CategoryPage;
