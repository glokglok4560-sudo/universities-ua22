export default function Contacts() {

return (

<div className="page">

<h1>

Зв'язок з нами

</h1>

<div className="contact-card">

<h3>📧 Email</h3>

<p>

glokglok4560@gmail.com

</p>

<h3>📞 Телефон</h3>

<p>

+380 67 146 91 69

</p>

<h3>📍 Адреса</h3>

<p>

Nordkanalstraße 46

</p>

</div>

<div className="map">

<iframe
title="map"
width="100%"
height="450"
style={{
border:0
}}
loading="lazy"
allowFullScreen
src="https://maps.google.com/maps?q=Nordkanalstraße%2046&t=&z=15&ie=UTF8&iwloc=&output=embed"
>

</iframe>

</div>

</div>

);

}