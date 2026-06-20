import "./portfolio.css"

const items = [
  
  {
    id: 1,
    img: "/p1.jpg",
    title: "AI Interview Preparation Platform",
    desc: "A full-stack MERN application powered by Google Gemini AI that generates personalized interview questions, identifies skill gaps, creates study plans, and tailors resumes to job descriptions with PDF export.",
    link: "https://github.com/Ayansheikh1/GEN-AI"
}
  ,{
    id: 2,
    img: "/p2.jpg",
    title: "Amazon Clone Website",
    desc: "A responsive e-commerce frontend built using HTML, CSS, and JavaScript with product listings, cart UI, and modern shopping interface.",
    link: "https://github.com/Ayansheikh1/javascript-amazon-project"
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "YouTube Frontend Clone",
    desc: "A YouTube-inspired frontend clone featuring responsive layouts, video cards, sidebar navigation, and clean modern UI design.",
    link: "https://github.com/Ayansheikh1/YouTubeClone"
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "StudySync Frontend",
    desc: "A modern educational landing page created using Tailwind CSS with responsive sections, smooth layouts, and clean user experience.",
    link: "https://github.com/Ayansheikh1/study-sync-web"
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "React Portfolio Website",
    desc: "An interactive developer portfolio built with React featuring animations, responsive design, and modern UI components.",
    link: "https://github.com/Ayansheikh1/portfolio-website"
  }
];

const ListItem = ({item}) =>{
  return(
    <div className="pItem">
      <div className="pImg">
        <img src={item.img} alt="" />
      </div>
      <div className="pText">
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <a href={item.link}>
          <button>View Project</button>
        </a>
      </div>
    </div>
  );
}

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="pList">
        {items.map((item)=>(
       
       <ListItem item={item} key={item.id}/>
        ))}
      </div>
      <section/> 
      <section/>
      <section/>
       

    </div>
  )
}

export default Portfolio