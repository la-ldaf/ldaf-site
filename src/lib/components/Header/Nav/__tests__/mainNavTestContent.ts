const getChildID = (menuID: string, i: number) => `${menuID}-${i}`;
const getChildren = (menuID: string, childNames: string[]) =>
  childNames.map((name, i) => ({ id: getChildID(menuID, i), name, link: "/" }));

const mainNavTestContent = [
  {
    id: "0",
    name: "Animals",
    children: getChildren("0", [
      "Licensing and permits",
      "Animal health and safety",
      "Cattle and livestock",
      "Poultry and eggs",
      "Milk and dairy",
      "Feral swine",
      "Bees",
      "Feed and grain",
      "Meat processing",
    ]),
  },
  {
    id: "1",
    name: "Plants and crops",
    children: getChildren("1", [
      "Licensing and permits",
      "Pesticides",
      "Crop pests and invasive species",
      "Fertilizer, soil, and water",
      "Seeds and seedlings",
      "Florists and nursuries",
      "Trees, timber, and arborists",
      "Hemp and marijuana",
      "Landscaping",
      "Farm management",
    ]),
  },
  {
    id: "2",
    name: "Food",
    children: getChildren("2", [
      "Buying local",
      "Selling food",
      "Commercial feed and pet food",
      "Food distribution",
      "Nutrition and recipes",
      "Food safety",
    ]),
  },
  {
    id: "3",
    name: "Forestry and conservation",
    children: getChildren("3", [
      "Land management",
      "Fire safety and prevention",
      "Prescribed burning",
      "Soil and water conservation",
      "Foresters and consultants",
      "Natural disasters",
      "Indian Creek Recreation Area",
    ]),
  },
  {
    id: "4",
    name: "Business resources",
    children: getChildren("4", [
      "Licenses and permits",
      "Weights and measures",
      "Grants and assistance",
      "Inspections and lab services",
      "Reports and reporting",
      "Find a certified professional",
      "Pest control",
      "Market Bulletin",
      "Distribution and trade",
      "Certified Louisiana",
    ]),
  },
  {
    id: "5",
    name: "About",
    children: getChildren("5", [
      "Commissioner Strain",
      "Boards and Commissions",
      "Programs and Divisions",
      "Our organization",
      "News and events",
      "Market Bulletin",
      "Jobs",
      "Contact us",
      "Initiatives",
      "State laws and regulations",
    ]),
  },
];

export default mainNavTestContent;
