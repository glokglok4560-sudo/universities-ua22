import { useState, useEffect } from "react";

export default function Home() {

const slides=[

"https://programs.knu.ua/wp-content/uploads/2023/10/csm_Universitet_TGSH_005_cd4fbde3d1-1.webp",

"https://abitly.org/_next/image?url=https%3A%2F%2Fabitly-prod-strapi-media.s3.eu-central-1.amazonaws.com%2Fmedia%2Fdb5ac8f639cca3c65dc75cb1fe64ab7e.jpg&w=3840&q=75",

"https://i1.poltava.to/uploads/2025/02/11/nupp_poltava.jpg"

];

const news=[

{
title:"Вступна кампанія 2026 стартувала",
date:"23 червня 2026"
},

{
title:"Нові гранти для студентів",
date:"20 червня 2026"
},

{
title:"Оновлення НМТ 2026",
date:"18 червня 2026"
},

{
title:"Популярні університети України",
date:"15 червня 2026"
},

{
title:"Стипендії для студентів зросли",
date:"12 червня 2026"
},

{
title:"Нові IT-програми в університетах",
date:"10 червня 2026"
},

{
title:"Міжнародні обміни для студентів",
date:"8 червня 2026"
},

{
title:"Університети запускають курси зі штучного інтелекту",
date:"1 червня 2026"
}

];

const [current,setCurrent]=useState(0);

function next(){

setCurrent(
prev=>
prev===slides.length-1
?0
:prev+1
);

}

function prev(){

setCurrent(
prev=>
prev===0
?slides.length-1
:prev-1
);

}

useEffect(()=>{

const timer=

setInterval(()=>{

next();

},3000);

return()=>clearInterval(timer);

},[]);

return(

<section className="hero">

<h1>

Заклади вищої освіти України

</h1>

<p>

Освіта • Наука • Майбутнє

</p>

<div className="slider">

<button onClick={prev}>
❮
</button>

<img
src={slides[current]}
alt=""
/>

<button onClick={next}>
❯
</button>

</div>

<div className="dots">

{

slides.map(
(_,index)=>(

<span

key={index}

className={
current===index
?
"dot active-dot"
:
"dot"
}

onClick={()=>
setCurrent(index)
}

>

●

</span>

))

}

</div>

<div className="home-news">

<h2>

Останні новини

</h2>

{

news.map(
(item,index)=>(

<div
key={index}
className="home-card"
>

<h3>

📰 {item.title}

</h3>

<p>

📅 {item.date}

</p>

</div>

))

}

</div>

</section>

);

}
