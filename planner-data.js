/* CozySmallSpace — Smart Space Planner
   Category data + matching engine. Pure client-side, no server, no dependencies. */

var PLANNER_CATEGORIES = [
  { slug:"mirrors-for-small-rooms", title:"Mirrors for Small Rooms", group:"Storage & Organization", tag:"storage",
    renter:true, rooms:["bedroom","living","studio","entryway"], priority:["decor"], price:[25,90],
    img:"mirrors-for-small-rooms.jpg" },
  { slug:"space-saving-beds-with-storage", title:"Space-Saving Beds with Storage", group:"Multi-functional Furniture", tag:"furniture",
    renter:true, rooms:["bedroom","studio"], priority:["sleeping","storage"], price:[150,450],
    img:"space-saving-beds-with-storage.jpg" },
  { slug:"murphy-wall-beds-small-bedrooms", title:"Murphy Beds & Wall Beds", group:"Multi-functional Furniture", tag:"furniture",
    renter:false, rooms:["bedroom","studio"], priority:["sleeping","storage"], price:[400,1200],
    img:"murphy-wall-beds-small-bedrooms.jpg" },
  { slug:"no-wiring-lighting-ideas", title:"No-Wiring Lighting Ideas", group:"Lighting", tag:"lighting",
    renter:true, rooms:["any"], priority:["lighting"], price:[15,60],
    img:"no-wiring-lighting-ideas.jpg" },
  { slug:"compact-wardrobes-closet-systems", title:"Compact Wardrobes & Closet Systems", group:"Storage & Organization", tag:"storage",
    renter:true, rooms:["bedroom","studio","dorm"], priority:["storage"], price:[60,200],
    img:"compact-wardrobes-closet-systems.jpg" },
  { slug:"no-drill-wall-shelves", title:"No-Drill Wall Shelves", group:"Renter-Friendly", tag:"renter",
    renter:true, rooms:["any"], priority:["storage","decor"], price:[20,70],
    img:"no-drill-wall-shelves.jpg" },
  { slug:"command-hooks-adhesive-wall-organizers", title:"Command Hooks & Adhesive Organizers", group:"Renter-Friendly", tag:"renter",
    renter:true, rooms:["any"], priority:["storage"], price:[10,35],
    img:"command-hooks-adhesive-wall-organizers.jpg" },
  { slug:"no-drill-curtain-rods-tension-rods", title:"No-Drill Curtain & Tension Rods", group:"Renter-Friendly", tag:"renter",
    renter:true, rooms:["bedroom","living","studio","bathroom"], priority:["decor","lighting"], price:[15,45],
    img:"no-drill-curtain-rods-tension-rods.jpg" },
  { slug:"under-sink-storage-organizers", title:"Under-Sink Storage & Organizers", group:"Storage & Organization", tag:"storage",
    renter:true, rooms:["kitchen","bathroom"], priority:["storage"], price:[20,65],
    img:"under-sink-storage-organizers.jpg" },
  { slug:"modular-convertible-sofas-small-living-rooms", title:"Modular & Convertible Sofas", group:"Multi-functional Furniture", tag:"furniture",
    renter:true, rooms:["living","studio"], priority:["seating","sleeping"], price:[300,900],
    img:"modular-convertible-sofas.jpg" },
  { slug:"compact-sectional-sofas-small-living-rooms", title:"Compact Sectional Sofas", group:"Multi-functional Furniture", tag:"furniture",
    renter:true, rooms:["living","studio"], priority:["seating"], price:[250,700],
    img:"compact-sectional-sofas-small-living-rooms.jpg" },
  { slug:"multifunctional-furniture-studio", title:"Multi-Functional Furniture for Studios", group:"Multi-functional Furniture", tag:"furniture",
    renter:true, rooms:["studio"], priority:["storage","seating","office"], price:[100,350],
    img:"multifunctional-furniture-studio.jpg" },
  { slug:"small-space-home-office-desks", title:"Small-Space Home Office Desks", group:"Multi-functional Furniture", tag:"furniture",
    renter:true, rooms:["bedroom","studio","living","dorm"], priority:["office"], price:[60,220],
    img:"small-space-home-office-desks.jpg" },
  { slug:"small-bedroom-storage-ideas", title:"Small Bedroom Storage Ideas", group:"Storage & Organization", tag:"storage",
    renter:true, rooms:["bedroom"], priority:["storage"], price:[25,120],
    img:"small-bedroom-storage-ideas.jpg" },
  { slug:"dorm-room-storage-organization-ideas", title:"Dorm Room Storage Ideas", group:"Storage & Organization", tag:"storage",
    renter:true, rooms:["dorm"], priority:["storage"], price:[15,70],
    img:"dorm-room-storage-organization-ideas.jpg" },
  { slug:"balcony-small-patio-furniture", title:"Balcony & Small Patio Furniture", group:"Multi-functional Furniture", tag:"furniture",
    renter:true, rooms:["balcony"], priority:["seating","dining"], price:[70,250],
    img:"balcony-small-patio-furniture.jpg" },
  { slug:"kitchen-storage-small-apartments", title:"Space-Saving Kitchen Storage", group:"Storage & Organization", tag:"storage",
    renter:true, rooms:["kitchen"], priority:["storage"], price:[20,90],
    img:"kitchen-storage-small-apartments.jpg" },
  { slug:"space-saving-dining-sets", title:"Space-Saving Dining Sets", group:"Multi-functional Furniture", tag:"furniture",
    renter:true, rooms:["studio","kitchen","living"], priority:["dining"], price:[150,450],
    img:"space-saving-dining-sets.jpg" },
  { slug:"room-dividers-studio-apartments", title:"Room Dividers for Studios", group:"Multi-functional Furniture", tag:"furniture",
    renter:true, rooms:["studio"], priority:["storage","decor"], price:[50,200],
    img:"room-dividers-studio-apartments.jpg" },
  { slug:"bedroom-furniture-sets-small-apartments", title:"Bedroom Furniture Sets", group:"Multi-functional Furniture", tag:"furniture",
    renter:true, rooms:["bedroom"], priority:["sleeping","storage"], price:[200,600],
    img:"bedroom-furniture-sets-small-apartments.jpg" },
  { slug:"entryway-storage-benches", title:"Entryway Storage Benches", group:"Storage & Organization", tag:"storage",
    renter:true, rooms:["entryway"], priority:["storage","seating"], price:[60,180],
    img:"entryway-storage-benches.jpg" },
  { slug:"small-bathroom-storage-ideas", title:"Small Bathroom Storage Ideas", group:"Storage & Organization", tag:"storage",
    renter:true, rooms:["bathroom"], priority:["storage"], price:[20,80],
    img:"small-bathroom-storage-ideas.jpg" },
  { slug:"tv-stands-media-consoles", title:"TV Stands & Media Consoles", group:"Storage & Organization", tag:"storage",
    renter:true, rooms:["living","studio","bedroom"], priority:["storage","decor"], price:[80,250],
    img:"tv-stands-media-consoles.jpg" },
  { slug:"electric-fireplace-tv-stands", title:"Electric Fireplace TV Stands", group:"Multi-functional Furniture", tag:"furniture",
    renter:true, rooms:["living","studio"], priority:["storage","decor","lighting"], price:[150,400],
    img:"electric-fireplace-tv-stands.jpg" }
];

var PLANNER_ROOMS = [
  { key:"studio", label:"Studio Apartment", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M12 10h.01" /> <path d="M12 14h.01" /> <path d="M12 6h.01" /> <path d="M16 10h.01" /> <path d="M16 14h.01" /> <path d="M16 6h.01" /> <path d="M8 10h.01" /> <path d="M8 14h.01" /> <path d="M8 6h.01" /> <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" /> <rect x="4" y="2" rx="2" /> </svg>' },
  { key:"bedroom", label:"Small Bedroom", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M2 4v16" /> <path d="M2 8h18a2 2 0 0 1 2 2v10" /> <path d="M2 17h20" /> <path d="M6 8v9" /> </svg>' },
  { key:"living", label:"Living Room", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" /> <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" /> <path d="M4 18v2" /> <path d="M20 18v2" /> <path d="M12 4v9" /> </svg>' },
  { key:"dorm", label:"Dorm Room", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /> <path d="M22 10v6" /> <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /> </svg>' },
  { key:"balcony", label:"Balcony / Patio", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20" /> <path d="M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13" /> </svg>' },
  { key:"kitchen", label:"Kitchen", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M2 12h20" /> <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" /> <path d="m4 8 16-4" /> <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" /> </svg>' },
  { key:"bathroom", label:"Bathroom", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m4 4 2.5 2.5" /> <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" /> <path d="M15 5 5 15" /> <path d="M14 17v.01" /> <path d="M10 16v.01" /> <path d="M13 13v.01" /> <path d="M16 10v.01" /> <path d="M11 20v.01" /> <path d="M17 14v.01" /> <path d="M20 11v.01" /> </svg>' },
  { key:"entryway", label:"Entryway", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M10 21H2" /> <path d="M10 3H7a2 2 0 00-2 2v16" /> <path d="M14 12h.01" /> <path d="M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z" /> <path d="M22 21h-3" /> </svg>' }
];

var PLANNER_PRIORITIES = [
  { key:"storage", label:"More storage", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" /> <path d="M12 22V12" /> <polyline points="3.29 7 12 12 20.71 7" /> <path d="m7.5 4.27 9 5.15" /> </svg>' },
  { key:"seating", label:"Seating", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" /> <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" /> <path d="M5 18v2" /> <path d="M19 18v2" /> </svg>' },
  { key:"sleeping", label:"A place to sleep", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" /> <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /> <path d="M12 4v6" /> <path d="M2 18h20" /> </svg>' },
  { key:"office", label:"Home office", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" /> <path d="M20.054 15.987H3.946" /> </svg>' },
  { key:"lighting", label:"Better lighting", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /> <path d="M9 18h6" /> <path d="M10 22h4" /> </svg>' },
  { key:"dining", label:"Dining space", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" /> <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" /> <path d="m2.1 21.8 6.4-6.3" /> <path d="m19 5-7 7" /> </svg>' },
  { key:"decor", label:"Visual / decor upgrade", icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M11 6 8 9" /> <path d="m16 7-8 8" /> <rect x="4" y="2" rx="2" /> </svg>' }
];

var PLANNER_ROOM_LABEL = {};
PLANNER_ROOMS.forEach(function(r){ PLANNER_ROOM_LABEL[r.key] = r.label; });
var PLANNER_PRIORITY_LABEL = {};
PLANNER_PRIORITIES.forEach(function(p){ PLANNER_PRIORITY_LABEL[p.key] = p.label; });

/* ---- Matching engine ---- */
function plannerBuildPlan(state){
  var room = state.room, renter = state.renter, priorities = state.priorities || [], budget = state.budget || 500;

  var pool = PLANNER_CATEGORIES.filter(function(c){ return !renter || c.renter; });

  pool = pool.map(function(c){
    var score = 0;
    var matchedRoom = false, matchedPriorities = [];
    if (c.rooms.indexOf(room) !== -1) { score += 3; matchedRoom = true; }
    else if (c.rooms.indexOf("any") !== -1) { score += 1.2; matchedRoom = true; }
    priorities.forEach(function(p){
      if (c.priority.indexOf(p) !== -1) { score += 4; matchedPriorities.push(p); }
    });
    var perItemBudget = budget / Math.max(priorities.length, 1);
    var budgetFit = "ok";
    if (c.price[0] <= perItemBudget * 1.6) { score += 1.5; }
    else if (c.price[0] > budget) { score -= 3; budgetFit = "tight"; }
    return {
      cat:c, score:score, matchedRoom:matchedRoom, matchedPriorities:matchedPriorities, budgetFit:budgetFit
    };
  }).filter(function(x){ return x.score > 0; })
    .sort(function(a,b){ return b.score - a.score; });

  var picks = [], used = {};
  priorities.forEach(function(p){
    for (var i=0;i<pool.length;i++){
      var x = pool[i];
      if (!used[x.cat.slug] && x.matchedPriorities.indexOf(p) !== -1){
        picks.push(x); used[x.cat.slug] = true; break;
      }
    }
  });
  for (var i=0;i<pool.length && picks.length < 6;i++){
    var x = pool[i];
    if (!used[x.cat.slug]){ picks.push(x); used[x.cat.slug] = true; }
  }
  picks = picks.slice(0,6);

  /* Fallback: nothing matched at all (extreme combination) */
  if (picks.length === 0){
    var fallback = PLANNER_CATEGORIES.filter(function(c){ return !renter || c.renter; }).slice(0,4);
    picks = fallback.map(function(c){ return {cat:c, score:0, matchedRoom:false, matchedPriorities:[], budgetFit:"ok", fallback:true}; });
  }

  /* Budget allocation across picks, proportional to price midpoint */
  var mids = picks.map(function(x){ return (x.cat.price[0]+x.cat.price[1])/2; });
  var total = mids.reduce(function(a,b){ return a+b; }, 0) || 1;
  picks.forEach(function(x, i){
    x.alloc = Math.round(budget * mids[i] / total);
  });

  return picks;
}

function plannerReasonChips(x, state){
  var chips = [];
  if (x.fallback){ chips.push("Popular pick for your setup"); return chips; }
  if (x.matchedRoom) chips.push("Fits a " + (PLANNER_ROOM_LABEL[state.room] || "small space").toLowerCase());
  if (state.renter && x.cat.renter) chips.push("No drilling needed");
  x.matchedPriorities.forEach(function(p){ chips.push("Matches: " + PLANNER_PRIORITY_LABEL[p]); });
  if (x.budgetFit === "ok" && chips.length < 3) chips.push("Fits your budget");
  return chips.slice(0,3);
}
