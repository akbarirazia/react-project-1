import React from "react"

function Contact() {
  return (
    <section>
      <h1>
        Contact <span>Me</span>
      </h1>
      <br />
      <div className="col-lg-4 d-flex flex-column  rounded col-sm-6">
        <div class="mb-3">
          <label for="" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Razia"
          />
        </div>
        <div class="mb-3 ">
          <label for="" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control "
            name=""
            id=""
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Message
          </label>
          <textarea
            class="form-control"
            name=""
            id=""
            rows="3"
            placeholder="Your message"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-warning text-white">
          Submit
        </button>
      </div>
    </section>
  )
}

export default Contact
