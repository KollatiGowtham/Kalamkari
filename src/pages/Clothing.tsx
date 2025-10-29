import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// ============================================
// 📸 HOW TO ADD YOUR OWN IMAGES:
// ============================================
// 1. Upload your image to src/assets/ folder
// 2. Import it here like this:
//    import myImage from "@/assets/your-image-name.jpg";
// 3. Use it in the clothingItems array below
// ============================================

import clothing1 from "@/assets/saree1.jpg";
import clothing2 from "@/assets/fab1.jpg";
import clothing3 from "@/assets/duppata1.jpg";
import clothing4 from "@/assets/dm1.jpg";
import clothing5 from "@/assets/pen1.jpg";
import clothing6 from "@/assets/kalamkari-suit-1.jpg";
import clothing7 from "@/assets/saree2.jpg";
import clothing8 from "@/assets/fab5.jpg";
import clothing9 from "@/assets/dm2.jpg";
import clothing10 from "@/assets/pen2.jpg";
import clothing11 from "@/assets/saree3.jpg";
import clothing12 from "@/assets/dm3.jpg";
import clothing13 from "@/assets/fab3.jpg";
import clothing14 from "@/assets/saree9.jpg";
import clothing15 from "@/assets/pen4.jpg";
import clothing16 from "@/assets/duppata3.jpg";
import clothing17 from "@/assets/saree4.jpg";
import clothing18 from "@/assets/fab6.jpg";
import clothing19 from "@/assets/duppata4.jpg";
import clothing20 from "@/assets/dm5.jpg";
import clothing21 from "@/assets/fab7.jpg";
import clothing22 from "@/assets/pen6.jpg";
import clothing23 from "@/assets/dm8.jpg";
import clothing24 from "@/assets/saree14.jpg";
import clothing25 from "@/assets/shrt.jpg";




interface ClothingItem {
  id: number;
  name: string;
  category: string;
  image: string;
}

// ============================================
// 👗 YOUR CLOTHING ITEMS
// ============================================
// To add a new item:
// 1. Import the image above
// 2. Copy one of the items below
// 3. Change: id, name, price, category, and image
// Categories: Sarees, Kurtas, Dupattas, Suits, Fabrics, Accessories
// ============================================

const clothingItems: ClothingItem[] = [
  {
    id: 1,
    name: "Kalamkari Saree",
    category: "Sarees",
    image: clothing1, // Change this to your imported image
  },

  {
    id: 2,
    name: "Fabric",
    category: "Kurtas",
    image: clothing2,
  },
  {
    id: 3,
    name: "Hand-Painted Dupatta",
    category: "Dupattas",
    image: clothing3,
  },
  {
    id: 4,
    name: "Kalamkari Dress Material",
    category: "Fabrics",
    image: clothing4,
  },
  {
    id: 5,
    name: "Tree of Life Kalamkari Stole",
    category: "Pen kalamkari",
    image: clothing5,
  },
  {
    id: 6,
    name: "Floral Kalamkari Salwar Suit",
    category: "Suits",
    image: clothing6,
  },
  {
    id: 7,
    name: "Floral Kalamkari Saree",
    category: "Sarees",
    image: clothing7,
  },
  {
    id: 8,
    name: "Fabric",
    category: "Fabrics",
    image: clothing8,
  },
  {
    id: 9,
    name: "Kalamkari Dress Material",
    category: "Fabrics",
    image: clothing9,
  },
  {
    id: 10,
    name: "Floral Pen Kalamkari",
    category: "Pen Kalamkari",
    image: clothing10,
  },
  {
    id: 11,
    name: "Kalamkari Saree",
    category: "Sarees",
    image: clothing11,
  },
  {
    id: 12,
    name: "Dress Material",
    category: "Fabrics",
    image: clothing12,
  },
  {
    id: 13,
    name: "Kalamkari Fabric",
    category: "Fabrics",
    image: clothing13,
  },
  {
    id: 14,
    name: "Kalamkari Saree",
    category: "Sarees",
    image: clothing14,
  },
  {
    id: 15,
    name: "Floral Pen Kalamkari",
    category: "Pen Kalamkari",
    image: clothing15,
  },
  {
    id: 16,
    name: "Kalamkari Dupattas",
    category: "Dupattas",
    image: clothing16,
  },
  {
    id: 17,
    name: "Floral Pen Saree",
    category: "Sarees",
    image: clothing17,
  },
  {
    id: 18,
    name: "Kalamkari Fabric",
    category: "Fabrics",
    image: clothing18,
  },
  {
    id: 19,
    name: "Pen Dupatta",
    category: "Dupattas",
    image: clothing19,
  },
  {
    id: 20,
    name: "Kalamkari Pen Dress Materials",
    category: "Kurtas",
    image: clothing20,
  },
  {
    id: 21,
    name: "Kalamkari Fabric",
    category: "Fabrics",
    image: clothing21,
  },
  {
    id: 22,
    name: "Pen Dupatta",
    category: "Pen Kalamkari",
    image: clothing22,
  },
  {
    id: 23,
    name: "Dess Materaial",
    category: "Kurtas",
    image: clothing23,
  },
  {
    id: 24,
    name: "Floral Pen Saree",
    category: "Sarees",
    image: clothing24,
  },
  {
    id: 25,
    name: "Kalamkari Shirt",
    category: "Suits",
    image: clothing25,
  },
  // 📝 TO ADD MORE ITEMS, COPY THE PATTERN ABOVE:
  // {
  //   id: 7,
  //   name: "Your Product Name",
  //   price: 2999,
  //   category: "Sarees",
  //   image: yourImageName,
  // },
];

const Clothing = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Sarees", "Kurtas", "Dupattas", "Suits", "Fabrics", "Pen Kalamkari"];

  const filteredItems =
    selectedCategory === "All"
      ? clothingItems
      : clothingItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-bounce-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Handloom Collection
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Authentic Kalamkari handlooms crafted with traditional techniques
              and natural dyes. Each piece is a testament to India&apos;s rich textile
              heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "hero" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300 hover-scale text-sm sm:text-base"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Clothing Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 animate-fade-in">
              <p className="text-lg text-muted-foreground">
                No items found in this category. Check back soon for new handlooms!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-card rounded-lg overflow-hidden shadow-md hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary/20">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary"></div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2">
                      Handcrafted • Natural Dyes • Eco-Friendly
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clothing;
