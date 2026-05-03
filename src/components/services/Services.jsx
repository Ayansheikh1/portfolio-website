import ComputerModelContainer from "./computer/ComputerModelContainer"
import RobotModelContainer from "./robot/RobotModelContainer"
import ServerModelContainer from "./server/ServerModelContainer"
import "./services.css"

const services =[

   {
    id: 1,
    img: "/frontend.png",
    title: "Frontend Development",
    counter: 20,
  },
  {
    id: 2,
    img: "/backend.png",
    title: "Backend Development",
    counter: 15,
  },
  {
    id: 3,
    img: "/fullstack.png",
    title: "Full Stack Projects",
    counter: 10,
  },
];


const Services = () => {
  return (
    <div className='Services'>
      <div className="sSection left">
          <h1 className="sTitle">What I Build</h1>
          <div className="serviceList">
                {services.map((service)=>(
                  <div className="service" key={service.id}>
                    <div className="serviceIcon">
                      <img src={service.img} alt="" />
                    </div>

                    <div className="serviceInfo">
                      <h2>{service.title}</h2>
                      <h3>{service.counter} Projects</h3>
                    </div>
                  </div>
                )

                )}
           
          </div>
      </div>
      <div className="sSection right"> 
        {/* <ComputerModelContainer/> */}
        {/* <ServerModelContainer /> */}
        {/* <RobotModelContainer/> */}
      </div>
    </div>
  )
}

export default Services