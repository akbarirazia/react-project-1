import React from "react"

function Contact() {
  return (
    <section>
      <h1>
        Contact <span>Me</span>
      </h1>
      <br />
      <div className="col-lg-4 d-flex flex-column  rounded col-sm-6">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Razia"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control "
            name=""
            id=""
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            name=""
            id=""
            rows="3"
            placeholder="Your message"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-warning text-white">
          Submit
        </button>
      </div>
    </section>
  )
}

export default Contact
