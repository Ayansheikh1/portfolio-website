import "./contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <div className="cSection">
        <form>
          <h1 className="cTitle">Let's keep in touch</h1>
          <div className="formItem">
            <label>Name</label>
            <input type="text" placeholder="John doe"/>
          </div>
          <div className="formItem">
            <label>Email</label>
            <input type="email" placeholder="John@gmail.com"/>
          </div>
          <div className="formItem">
            <label>Message</label>
            <textarea rows={10} placeholder="write your message..."></textarea>
          </div>

          <button className="formButton">Send</button>
          

        </form>
      </div>
      <div className="cSection">SVG</div>
    </div>
  )
}

export default Contact