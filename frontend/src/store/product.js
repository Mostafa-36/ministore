import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],

  setProduct: (products) => set({ products }),

  getProducts: async () => {
    const res = await fetch("api/products/");
    const data = await res.json();
    set({ products: data.data });
  },

  createProduct: async (newProduct) => {
    const res = await fetch("api/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const response = await res.json();

    if (!response.success) return { success: false, message: response.message };

    set((state) => ({
      products: [...state.products, response.data],
    }));

    return { success: true, message: "Product created successfully" };
  },

  updateProduct: async (id, body) => {
    const res = await fetch(`api/products/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    });

    const response = await res.json();

    if (!response.success) return { success: false, message: response.message };

    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? response.data : response.data
      ),
    }));

    return { success: true, message: "updated successfully!" };
  },

  deleteProduct: async (id) => {
    const res = await fetch(`api/products/${id}`, {
      method: "DELETE",
    });

    if (!res.ok)
      return { success: false, message: "Deleted operation has been fail!" };

    set((state) => ({
      products: state.products.filter((product) => product._id !== id),
    }));

    return { success: true, message: "Deleted successfully!" };
  },
}));

export default useProductStore;
