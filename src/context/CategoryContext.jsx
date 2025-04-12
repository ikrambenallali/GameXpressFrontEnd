import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("/api/v1/admin/categories"); 
      setCategories(res.data);
    } catch (error) {
      console.error("Erreur lors du fetch des catégories", error);
    }
  };

 

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories}}>
      {children}
    </CategoryContext.Provider>
  );
};
