import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios"


const Contact = () => {
  // const [name, setName] = useState()
  // const [email, setEmail] = useState()
  // const [message, setMessage] = useState()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   axios.post('http://localhost:3001', { })
  //   .then( result => console.log(result))
  //   .catch( (error)=>{
  //     console.log(error);
  //   })

// }


const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "c90700bf-33a3-4148-80f4-d422ecf46fda");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    console.log("Success", res);
  }
}
return (
  <section id="contact" className="py-10 bg-gray-900 scroll-smooth"
    style={{ backgroundColor: `#150c1f` }}>
    <div className="lg:mx-16 md:mx-2 xl:gap-10 bg-gray-800 rounded-xl p-5">
      <div className="mb-10 text-center grid gap-2">
        <h1 className=" text-2xl sm:text-5xl font-semibold  font-raleway  ">Contact Me</h1>
        <p className=" font-normal  text-sm">Want to work with me together ? send me a message</p>
      </div>
      <div className="sm:px-16">
        <form action="#" onSubmit={onSubmit}>
          <div className="sm:flex justify-center gap-5 my-5">
            <div className="w-full">
              <Label htmlFor="name" className="mb-2 block text-white">
                Name
              </Label>
              <TextInput id="name" name="name" placeholder="Name" type="text" required
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="w-full">
              <Label htmlFor="email" className="mb-2 block text-white">
                Your email
              </Label>
              <TextInput id="email" name="email" placeholder="Email" type="email" required
                onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="message" className="mb-2 block text-white">
              Your message
            </Label>
            <Textarea id="message" name="message" placeholder="Your message..." rows={4} required
              onChange={(e) => setMessage(e.target.value)} />
          </div>
          <div className="mb-6">
            <Button type="submit" className="w-full">
              Send message
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
)
}

export default Contact