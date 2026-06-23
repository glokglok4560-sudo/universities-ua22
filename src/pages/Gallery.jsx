const universities = [

{
name:"КНУ ім. Тараса Шевченка",
image:"https://images.unsplash.com/photo-1562774053-701939374585",
fact:"Головний корпус університету має знаменитий червоний колір."
},

{
name:"Львівська політехніка",
image:"https://abitly.org/_next/image?url=https%3A%2F%2Fabitly-prod-strapi-media.s3.eu-central-1.amazonaws.com%2Fmedia%2Fdb5ac8f639cca3c65dc75cb1fe64ab7e.jpg&w=3840&q=75",
fact:"Один із найстаріших технічних університетів Європи."
},

{
name:"Харківський університет ім. Каразіна",
image:"https://ukrainianpuzzles.com/cdn/shop/products/500_72dpi_9b4c807e-b9fe-497e-91d9-c07757edc434.jpg?v=1653567928&width=1080",
fact:"Працює ще з початку XIX століття."
},

{
name:"КПІ ім. Ігоря Сікорського",
image:"https://kpi.ua/files/images-story/k-1-summer.jpg",
fact:"Відомий сильною інженерною школою."
},

{
name:"Львівський університет ім. Франка",
image:"https://images.unsplash.com/photo-1568792923760-d70635a89fdc",
fact:"Є одним із найстаріших університетів країни."
},

{
name:"Одеський університет ім. Мечникова",
image:"https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
fact:"Має давню наукову традицію."
},

{
name:"Чернівецький університет",
image:"https://vidviday.ua/storage/uploads/editor/d3VOJESYks3mOhVybpPJVIi6EDErpCFIQ5zcqxFN.jpg",
fact:"Комплекс входить до спадщини ЮНЕСКО."
},

{
name:"Дніпровський університет ім. Гончара",
image:"https://dnipro.tv/wp-content/uploads/2022/01/brfinjpjr9a-e1609751182721-899x675.jpg",
fact:"Один із найбільших класичних університетів."
},

{
name:"Сумський державний університет",
image:"https://gimnazia.sumy.ua/wp-content/uploads/2025/12/universytety-sumshhyny-speczialnosti-ta-umovy-vstupu-2025-povnyj-gid-abituriyenta.jpg",
fact:"Часто потрапляє у міжнародні рейтинги."
},

{
name:"Полтавська політехніка ім. Юрія Кондратюка",
image:"https://i1.poltava.to/uploads/2025/02/11/nupp_poltava.jpg",
fact:"Найвідоміший університет у світі."
}

];

export default function Gallery(){

return(

<div className="page">

<h1 className="gallery-title">

Галерея університетів

</h1>

<p className="gallery-sub">

Добірка найпопулярніших закладів вищої освіти України

</p>

<div className="gallery-grid">

{

universities.map(

(item,index)=>(

<div
className="uni-card"
key={index}
>

<img
src={item.image}
alt={item.name}
/>

<div className="uni-info">

<h3>

{item.name}

</h3>

<p>

{item.fact}

</p>

</div>

</div>

)

)

}

</div>

</div>

);

}