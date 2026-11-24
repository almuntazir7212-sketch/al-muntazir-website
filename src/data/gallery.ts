export interface GalleryItem {
  id: string;
  title: string;
  category: "Welding" | "Piping" | "Electrical" | "Workshop";
  imageUrl: string;
  description: string;
}

export const INITIAL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "TIG & Argon Welding Practice",
    category: "Welding",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    description: "Students performing precision high-frequency TIG welding on industrial alloy specimens.",
  },
  {
    id: "gal-2",
    title: "Pipe Joint Alignment & Fitting",
    category: "Piping",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "Hands-on pipe beveling, flange squaring, and bolting according to isometric blueprint plans.",
  },
  {
    id: "gal-3",
    title: "Industrial Electrical Control Panels",
    category: "Electrical",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    description: "Wiring 3-phase motor starters, relays, and industrial switchgear in the training lab.",
  },
  {
    id: "gal-4",
    title: "SMAW Heavy Arc Welding Bay",
    category: "Welding",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    description: "Structural welding bays equipped with industrial welding machines and safety ventilation.",
  },
  {
    id: "gal-5",
    title: "Pipe Spool Fabrication Training",
    category: "Piping",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=80",
    description: "Trainees calculating angles, cutting spools, and executing fit-ups for pressure testing.",
  },
  {
    id: "gal-6",
    title: "Workshop Safety & First-Aid Orientation",
    category: "Workshop",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    description: "Fire watcher training, PPE standards, and workplace hazard management sessions.",
  },
];
