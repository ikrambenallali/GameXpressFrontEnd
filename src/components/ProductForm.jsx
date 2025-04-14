import React from 'react'

export default function ProductForm({ isEditing, onSubmit, onCancel }) {
  const [formData, setFormData] = React.useState({
    name: '',
    slug: '',
    price: '',
    stock: '',
    subcategory_id: '',
    remise: '',
    primary_image: null,
    images: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sendData = new FormData();
    sendData.append('name', formData.name);
    sendData.append('slug', formData.slug);
    sendData.append('price', formData.price);
    sendData.append('stock', formData.stock);
    sendData.append('subcategory_id', formData.subcategory_id);
    sendData.append('remise', formData.remise);

    if (formData.primary_image) {
      sendData.append('primary_image', formData.primary_image);
    }
    for (let i = 0; i < formData.images.length; i++) {
      sendData.append('images[]', formData.images[i]);
    }

    try {
      const response = await fetch('http://localhost:8000/api/v1/admin/products', {
        method: 'POST',
        body: sendData,
        headers: {
          'Authorization': 'Bearer 21|5j6r6haQj2IDDycQkRIfemMdTlPDB1VGLysTea5Raa9725c9'
        }
      });

      const data = await response.json();
      if (response.ok) {
        alert('Produit ajouté avec succès !');
        console.log(data);
        if (onSubmit) onSubmit(data);
      } else {
        alert('Erreur: ' + data.message);
        console.error(data);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'primary_image') {
      setFormData({ ...formData, primary_image: files[0] });
    } else if (name === 'images') {
      setFormData({ ...formData, images: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="text"
        name="name"
        placeholder="Nom du produit"
        value={formData.name}
        onChange={handleChange}
        required
      /><br /><br />

      <input
        type="text"
        name="slug"
        placeholder="Slug du produit"
        value={formData.slug}
        onChange={handleChange}
        required
      /><br /><br />

      <input
        type="number"
        name="price"
        placeholder="Prix"
        value={formData.price}
        onChange={handleChange}
        required
      /><br /><br />

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        required
      /><br /><br />

      <input
        type="number"
        name="subcategory_id"
        placeholder="ID de la sous-catégorie"
        value={formData.subcategory_id}
        onChange={handleChange}
        required
      /><br /><br />

      <input
        type="number"
        step="0.01"
        name="remise"
        placeholder="Remise (%)"
        value={formData.remise}
        onChange={handleChange}
        required
      /><br /><br />

      <label>Image principale :</label>
      <input
        type="file"
        name="primary_image"
        accept="image/*"
        onChange={handleChange}
      /><br /><br />

      <label>Autres images :</label>
      <input
        type="file"
        name="images"
        accept="image/*"
        multiple
        onChange={handleChange}
      /><br /><br />

      <button type="submit">{isEditing ? 'Mettre à jour le produit' : 'Ajouter le produit'}</button>
      {onCancel && <button type="button" onClick={onCancel}>Annuler</button>}
    </form>
  );
}
