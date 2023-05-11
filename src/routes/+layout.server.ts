import type { NavLinkType, NavItemType } from "$lib/components/Header/Nav";
import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";

const secondaryNavItems: NavLinkType[] = [
  { id: "0", name: "Grants and funding", link: "/news" },
  { id: "1", name: "Licensing and permits", link: "/documentation" },
];

const navItems: NavItemType[] = [
  {
    id: "0",
    name: "Animals",
    children: [
      { id: "0-0", name: "Licensing and permits" },
      { id: "0-1", name: "Animal health and safety" },
      { id: "0-2", name: "Cattle and livestock" },
      { id: "0-3", name: "Poultry and eggs" },
      { id: "0-4", name: "Milk and dairy" },
      { id: "0-5", name: "Feral swine" },
      { id: "0-6", name: "Bees" },
      { id: "0-7", name: "Feed and grain" },
      { id: "0-8", name: "Meat processing" },
    ],
  },
  {
    id: "1",
    name: "Plants and crops",
    children: [
      { id: "1-0", name: "Licensing and permits" },
      { id: "1-1", name: "Pesticides" },
      { id: "1-2", name: "Crop pests and invasive species" },
      { id: "1-3", name: "Fertilizer, soil, and water" },
      { id: "1-4", name: "Seeds and seedlings" },
      { id: "1-5", name: "Florists and nursuries" },
      { id: "1-6", name: "Trees, timber, and arborists" },
      { id: "1-7", name: "Hemp and marijuana" },
      { id: "1-8", name: "Landscaping" },
      { id: "1-9", name: "Farm management" },
    ],
  },
  {
    id: "2",
    name: "Food",
    children: [
      { id: "2-0", name: "Buying local" },
      { id: "2-1", name: "Selling food" },
      { id: "2-2", name: "Commercial feed and pet food" },
      { id: "2-3", name: "Food distribution" },
      { id: "2-4", name: "Nutrition and recipes" },
      { id: "2-5", name: "Food safety" },
    ],
  },
  {
    id: "3",
    name: "Forestry and conservation",
    children: [
      { id: "3-0", name: "Land management" },
      { id: "3-1", name: "Fire safety and prevention" },
      { id: "3-2", name: "Prescribed burning" },
      { id: "3-3", name: "Soil and water conservation" },
      { id: "3-4", name: "Foresters and consultants" },
      { id: "3-5", name: "Natural disasters" },
      { id: "3-6", name: "Indian Creek Recreation Area" },
    ],
  },
  {
    id: "4",
    name: "Business resources",
    children: [
      { id: "4-0", name: "Licenses and permits" },
      { id: "4-1", name: "Weights and measures" },
      { id: "4-2", name: "Grants and assistance" },
      { id: "4-3", name: "Inspections and lab services" },
      { id: "4-4", name: "Reports and reporting" },
      { id: "4-5", name: "Find a certified professional" },
      { id: "4-6", name: "Pest control" },
      { id: "4-7", name: "Market Bulletin" },
      { id: "4-8", name: "Distribution and trade" },
      { id: "4-9", name: "Certified Louisiana" },
    ],
  },
  {
    id: "5",
    name: "About",
    children: [
      { id: "5-0", name: "Commissioner Strain" },
      { id: "5-1", name: "Boards and Commissions" },
      { id: "5-2", name: "Programs and Divisions" },
      { id: "5-3", name: "Our organization" },
      { id: "5-4", name: "News and events" },
      { id: "5-5", name: "Market Bulletin" },
      { id: "5-6", name: "Jobs" },
      { id: "5-7", name: "Contact us" },
      { id: "5-8", name: "Initiatives" },
      { id: "5-9", name: "State laws and regulations" },
    ],
  },
];

// TODO: Replace navItems with content from CMS.
export const load = () => ({
  siteTitle: loadSiteTitle(),
  secondaryNavItems,
  navItems,
});
