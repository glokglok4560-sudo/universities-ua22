function About() {
  return (
    <div style={{
      padding: "40px",
      maxWidth: "900px",
      margin: "auto",
      fontFamily: "Arial, sans-serif",
      color: "#111"
    }}>

      <section style={{
        textAlign: "center",
        padding: "40px",
        background: "linear-gradient(135deg, #111, #333)",
        color: "white",
        borderRadius: "12px",
        marginBottom: "30px"
      }}>
        <h1>Про сайт UNIVERSITIES UA</h1>
        <p>
          Платформа для допомоги абітурієнтам у виборі університету.
        </p>
      </section>

      <section style={{
        background: "white",
        padding: "25px",
        marginBottom: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h2>🎓 Для чого потрібен університет?</h2>
        <p>
          Університет — це місце, де ти отримуєш знання, професію і будуєш своє майбутнє.
        </p>

        <ul>
          <li>Освіта та знання</li>
          <li>Професійні навички</li>
          <li>Кар’єрні можливості</li>
          <li>Особистий розвиток</li>
        </ul>
      </section>

      <section style={{
        background: "white",
        padding: "25px",
        marginBottom: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        borderLeft: "5px solid #111"
      }}>
        <h2>🔍 Як обрати університет?</h2>
        <ol>
          <li>Обери професію</li>
          <li>Перевір рейтинги</li>
          <li>Подивись викладачів</li>
          <li>Дізнайся про практику</li>
          <li>Оціни місто навчання</li>
        </ol>
      </section>

      <section style={{
        background: "white",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h2>💡 Мета сайту</h2>
        <p>
          Допомогти кожному студенту в Україні легко обрати свій університет.
        </p>
      </section>

    </div>
  );
}

export default About;