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
  { key:"studio", label:"Studio Apartment", icon:"🏠" },
  { key:"bedroom", label:"Small Bedroom", icon:"🛏️" },
  { key:"living", label:"Living Room", icon:"🛋️" },
  { key:"dorm", label:"Dorm Room", icon:"🎓" },
  { key:"balcony", label:"Balcony / Patio", icon:"🌿" },
  { key:"kitchen", label:"Kitchen", icon:"🍳" },
  { key:"bathroom", label:"Bathroom", icon:"🚿" },
  { key:"entryway", label:"Entryway", icon:"🚪" }
];

var PLANNER_PRIORITIES = [
  { key:"storage", label:"More storage", icon:"📦" },
  { key:"seating", label:"Seating", icon:"🪑" },
  { key:"sleeping", label:"A place to sleep", icon:"🛌" },
  { key:"office", label:"Home office", icon:"💻" },
  { key:"lighting", label:"Better lighting", icon:"💡" },
  { key:"dining", label:"Dining space", icon:"🍽️" },
  { key:"decor", label:"Visual / decor upgrade", icon:"🪞" }
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
