export type ProductCategory = 'school' | 'office';

export type Product = {
  name: string;
  category: ProductCategory;
  description: string;
  tag: string;
};

export const products: Product[] = [
  { name: 'Exercise Books', category: 'school', description: 'Everyday ruled and exercise books for learners of all levels.', tag: 'School' },
  { name: 'Math Sets', category: 'school', description: 'Practical geometry sets for classroom work and examinations.', tag: 'School' },
  { name: 'Drawing & Art Supplies', category: 'school', description: 'Pencils, coloured pencils, rulers, glue and creative essentials.', tag: 'School' },
  { name: 'School Bags', category: 'school', description: 'Durable everyday bags for books, stationery and school gear.', tag: 'School' },
  { name: 'Ball Pens', category: 'office', description: 'Smooth-writing pens for reception desks, classrooms and offices.', tag: 'Office' },
  { name: 'Notebooks & Memo Pads', category: 'office', description: 'Neat note-taking essentials for meetings, desks and planning.', tag: 'Office' },
  { name: 'Files & Folders', category: 'office', description: 'Organise documents, records and paperwork with practical filing supplies.', tag: 'Office' },
  { name: 'Desk Accessories', category: 'office', description: 'Staplers, clips, scissors, rulers and other desk essentials.', tag: 'Office' },
  { name: 'Printing Paper', category: 'office', description: 'Everyday paper supplies for office printing and administration.', tag: 'Office' },
  { name: 'Markers & Highlighters', category: 'office', description: 'Bright, dependable marking tools for documents and presentations.', tag: 'Office' }
];
