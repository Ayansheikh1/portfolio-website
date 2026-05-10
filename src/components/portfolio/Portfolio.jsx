import "./portfolio.css"

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Amazon Clone Website",
    desc: "A responsive e-commerce frontend built using HTML, CSS, and JavaScript with product listings, cart UI, and modern shopping interface.",
    link: "/"
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "YouTube Frontend Clone",
    desc: "A YouTube-inspired frontend clone featuring responsive layouts, video cards, sidebar navigation, and clean modern UI design.",
    link: "/"
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "StudySync Frontend",
    desc: "A modern educational landing page created using Tailwind CSS with responsive sections, smooth layouts, and clean user experience.",
    link: "/"
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "React Portfolio Website",
    desc: "An interactive developer portfolio built with React featuring animations, responsive design, and modern UI components.",
    link: "/"
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