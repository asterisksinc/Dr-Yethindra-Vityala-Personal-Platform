"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line
} from "react-simple-maps";
import { useState } from "react";

const geoUrl =
"https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function JourneyMap(){

const [active,setActive] = useState<{name:string;coords:[number,number];items:{title:string;org:string;year:string}[]}|null>(null);

const points = [
{
  name: "Rome, Italy",
  coords: [12.4964,41.9028],
  items: [
    {
      title:"Master in Public Health",
      org:"Guglielmo Marconi University",
      year:"2024–2026"
    }
  ]
},

{
  name: "Faridabad, India",
  coords: [77.3178,28.4089],
  items: [
    {
      title:"Master of Business Administration",
      org:"Manav Rachna University",
      year:"2023–2025"
    }
  ]
},

{
  name: "Bishkek, Kyrgyzstan",
  coords: [74.5698,42.8746],
  items: [
    {
      title:"MBBS",
      org:"International Higher School of Medicine",
      year:"2016–2021"
    },
    {
      title:"Doctor",
      org:"City Clinical Hospital No.1",
      year:"2021–Present"
    },
    {
      title:"Associate Professor",
      org:"Kyrgyz State Medical Academy",
      year:"2021–Present"
    },
    {
      title:"Associate Professor",
      org:"International Higher School of Medicine",
      year:"2021–Present"
    }
  ]
},

{
  name:"Warangal, India",
  coords:[79.5941,17.9689],
  items:[
    {
      title:"Intermediate (11th & 12th)",
      org:"S.R. Junior College",
      year:"2013–2015"
    },
    {
      title:"10th Standard",
      org:"Tejaswi Concept High School",
      year:"2012–2013"
    }
  ]
},

{
  name:"Hyderabad, India",
  coords:[78.4867,17.3850],
  items:[
    {
      title:"Founder & CEO",
      org:"Scivyt Research Technologies Pvt Ltd",
      year:"2024–Present"
    }
  ]
},

{
  name:"Mangalore, India",
  coords:[74.8560,12.9141],
  items:[
    {
      title:"Associate Professor",
      org:"AJ Institute of Medical Sciences",
      year:"2023–Present"
    }
  ]
}
];

return(

<div className="map-wrapper">

<ComposableMap
projection="geoMercator"
projectionConfig={{
  scale:150,
  center:[50,25]
}}
style={{width:"100%",height:"600px", overflow:"hidden"}}
>
<Geographies geography={geoUrl}>
{({geographies}) =>
geographies.map((geo)=>(
<Geography
  key={geo.rsmKey}
  geography={geo}
  fill="#0f172a"
  stroke="#1e293b"
  strokeWidth={0.5}
/>
))
}
</Geographies>

{/* animated journey route */}

<Line
from={[79.5941,17.9689]}
to={[74.5698,42.8746]}
stroke="#ff9800"
strokeWidth={2}
className="route-line"
/>

<Line
from={[74.5698,42.8746]}
to={[12.4964,41.9028]}
stroke="#ff9800"
strokeWidth={2}
className="route-line"
/>

{/* markers */}

{points.map((p,i)=>{

const padding = 20
const textWidth = p.name.length * 7
const boxWidth = textWidth + padding

return(

<Marker
key={i}
coordinates={p.coords as [number, number]}
onMouseEnter={()=>setActive({...p, coords: p.coords as [number, number]})}
onMouseLeave={()=>setActive(null)}
>

<circle
r={active?.name===p.name?8:5}
className="map-dot"
/>

<rect
x={-boxWidth/2}
y={-28}
width={boxWidth}
height="18"
rx="4"
fill="#00000080"
/>

<text
y={-15}
textAnchor="middle"
fill="white"
fontSize="10"
fontWeight="500"
>
{p.name}
</text>

</Marker>

)

})}

</ComposableMap>

{/* tooltip */}

{active && (

<div className="map-tooltip">

<h4>{active.name}</h4>

{active.items.map((item,i)=>(

<div key={i} className="tooltip-item">

<strong>{item.title}</strong>
<p>{item.org}</p>
<span>{item.year}</span>

</div>

))}

</div>

)}

</div>

)

}