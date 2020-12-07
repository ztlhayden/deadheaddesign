import React, {useState} from 'react'
import {navigate} from 'gatsby'

import {Form, Label, Input, TextArea, Button} from './atoms/FormElements'

const ContactForm = () => {
  const [formState, setFormState] = useState({
    bot: '',
    name: '',
    company: '',
    website: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  const encode = data => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute('name'),
        ...formState,
      })
    }).then(() => navigate('/thank-you/')).catch(error => alert(error))
  }

  return (
    <Form method="POST" onSubmit={handleSubmit} action="/thank-you/" name="Contact" data-netlify="True" data-netlify-honeypot='bot-feild'>
      <Label hidden htmlFor='form-name' className='bot'>
        Humans- Don't Change This!
        <Input name='form-name' className='bot' id='form-name' type='hidden' value='Contact'/>
      </Label>
      
      <Label hidden htmlFor='bot-feild' className='bot'>
        Humans- Don't Change This!
        <Input name='bot-feild' id='bot-feild' className='bot' type='text' hidden onChange={handleChange} value={formState.bot}/>
      </Label>
      
      <Label htmlFor='name'>
        Name*
        <Input placeholder="Your Name" name='Name' id='name' type='text' required onChange={handleChange} value={formState.name}/>
      </Label>

      <Label htmlFor='company'>
        Company
        <Input placeholder="Your Company" name='Company' id='company' type='text' onChange={handleChange} value={formState.company}/>
      </Label>

      <Label htmlFor='website'>
        Your Website
        <Input placeholder="https://www.website.com" name='Webite' id='website' type='url' onChange={handleChange} value={formState.website}/>
      </Label>

      <Label htmlFor='email'>
        Email*
        <Input placeholder="you@email.com" name='Email' id='email' type='email' required onChange={handleChange} value={formState.name}/>
      </Label>

      <Label htmlFor='phone'>
        Phone Number
        <Input placeholder="(555) 555-5555" name='Phone' id='phone' type='tel' onChange={handleChange} value={formState.name}/>
      </Label>

      <Label htmlFor='message'>
        Message
        <TextArea placeholder="What can we do?" name='Message' id='message' onChange={handleChange} value={formState.message}/>
      </Label>

      <Button>Submit</Button>
    </Form>
  )
}

export default ContactForm