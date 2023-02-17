import { useState } from 'react'
import { motion } from 'framer-motion'
import { validateEmail } from '../utils/helpers'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3
    },
  },
}

const item = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1
  }
}

type Props = {}

const Contact = (props: Props) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormState({ ...formState, [e.target.name]: e.target.value })

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Please enter a valid email address.');
      } else {
        if (!e.target.value.length) {
          setErrorMessage('Please enter an email address.');
        }
        setErrorMessage('');
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }
  }

  async function emailForm() {
    try {
      const res = await fetch("https://formsubmit.co/ajax/luis@lpineda.dev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMessage('Thanks for reaching out! I will get back to you as soon as possible.');
      }

    } catch (error) {
      console.log(error);
    }
      
  }

  function handleSubmit(e: any){
    e.preventDefault();
    emailForm();
    e.target.reset();
  }


  return (
    <div className='md:h-screen  snap-center snap-always bg-[#232425] pb-11 text-white justify-center mx-auto flex gap-6 flex-col items-center'>
      <form onSubmit={handleSubmit}>
        <motion.div
          className='flex flex-col gap-4 w-96 lg:w-[800px] text-lg'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        > 
          <input type="hidden" name="_captcha" value="false"/>
          <motion.input
            variants={item}
            type='text' name='name' defaultValue={name} onBlur={handleChange} placeholder='Name' className='bg-white  w-full border-white  p-3 text-gray-700 focus:outline-none rounded-lg' />
          <motion.input
            variants={item}
            type='email' name='email' defaultValue={email} onBlur={handleChange} placeholder='Email' className='bg-white  w-full border-white  p-3 text-gray-700 focus:outline-none rounded-lg' />
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: 'easeOut', duration: 0.5}}
              className=' text-red-200 px-2 py-0 relative' role='alert'>
              <span className='block sm:inline'>{errorMessage}</span>
            </motion.div>
          )}
          <motion.textarea
            variants={item}
            rows={5} name='message' defaultValue={message} onBlur={handleChange} placeholder='Message' className='bg-white  w-full border-white  p-3 text-gray-700 focus:outline-none rounded-lg' />
          

          <motion.button
            variants={item}
            className='bg-[#274A71] hover:bg-white text-white w-full hover:text-black p-2 rounded-lg transition-all duration-300 ease-in-out '>Send</motion.button>
        </motion.div>
      </form>
      {successMessage && (

        <motion.div
          variants={item}
          className=' text-white px-4 py-3 rounded-xl relative flex gap-3' role='alert'>
          
          <span className='block sm:inline text-center'>{successMessage}</span>
        </motion.div>
      )}
    </div>
  )
}

export default Contact