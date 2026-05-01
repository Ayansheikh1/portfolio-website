import { TypeAnimation } from 'react-type-animation';

const Speech = () => {
    return (
        <div className="bubbleContainer" >
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        1000,
                        "I build scalable web apps",
                        1500,
                        "Frontend + Backend Solutions",
                        1500,
                        "Clean UI • Fast APIs",
                        1500,
                        "Open to projects & internships",
                        1500,
                    ]}
                    wrapper="span"
                    speed={40}
                    deletionSpeed={60}
                    repeat={Infinity}
                />
            </div>
            <img src="/man.png" alt="" />
        </div>
    )
}

export default Speech