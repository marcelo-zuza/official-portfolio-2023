import { React, useState } from 'react'
import emailjs from '@emailjs/browser';

const PtContact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);


  const handleSubmit = (e) => {
      e.preventDefault();

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs.send(
        'service_cegsocm',
        'template_g2bm0dd',
        templateParams,
        'FIhMyg4lvF_eK2p7d'
      )
      .then((response) => {
        console.log('Email enviado com sucesso!', response);
        setIsSuccess(true);
      })
      .catch((error) => {
        console.error('Erro ao enviar o email:', error);
      });
      
      setName('');
      setEmail('');
      setMessage('');
    };

  return (
    <div id="contact">
        <div className="bg-green-500 h-12 md:h-114"></div>
        <div className="bg-black text-white md:-mt-20 md:-mb-20 font-BebasNeue tracking-widest">
            <div className="px-10 py-14 mx-0 md:m-20 md:px-6 md:py-14rounded-xl ">
                <div className="text-4xl bg-green-200 text-black border rounded-2xl px-6 py-12">
                    <h1 className="py-4">Contato</h1>
                    <p className="px-6 md:px-8 text-xl">Entre em contato comigo para conhecer melhor meus serviços e faça seu orçamento</p>


                  <form onSubmit={handleSubmit}>
                      <div className="py-3">
                        <div className="grid grid-cols-1 py-1">
                          <input className="text-base form-input rounded-xl" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Insira seu nome" />
                        </div>
                        <div className="grid grid-cols-1 py-1">
                        <input className="text-base form-input rounded-xl" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Insira seu email" />
                        </div>

                      </div>
                      <div className="grid grid-cols-1">
                        <textarea className="bg-green-100 text-base form-textarea rounded-xl" name="message" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="mensagem"></textarea>
                      </div>
                      {isSuccess && <p style={{ color: 'green', fontSize: '26px' }}>Email enviado com sucesso!</p>}
                      <div className="flex justify-center pt-4">
                        <button className="bg-green-500 text-white text-2xl px-8 py-4 rounded-full hover:bg-white hover:text-green-500 duration-700 hover:px-14" type="submit">Enviar</button>
                      </div>
                </form>
                </div>

            </div>
        </div>
        <div className="bg-green-500 h-12 md:h-114"></div>

    </div>
  )
}

export default PtContact