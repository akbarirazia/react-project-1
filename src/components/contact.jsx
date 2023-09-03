import React from "react"

function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    let form = e.target
    let formData = new FormData(form)
    let data = Object.fromEntries(formData)
    console.log(data)
    let name = data.name
    alert("Thank you" + " " + name + " for submitting the form")
  }
  return (
    <section>
      <h1>
        Contact <span>Me</span>
      </h1>
      <br />
      <form
        className="col-lg-4 d-flex flex-column  rounded col-sm-6"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id=""
            aria-describedby="helpId"
            placeholder="Razia"
            required
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control "
            name="email"
            id=""
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            name="text"
            id=""
            rows="3"
            placeholder="Your message"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-warning text-white">
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact
