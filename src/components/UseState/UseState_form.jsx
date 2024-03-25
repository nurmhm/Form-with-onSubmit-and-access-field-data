import { useState } from "react";

const UseState_form = () => {
   const  [email, setEmail] = useState(null);
   const  [password, setPassword] = useState(null);
   const [error, setError] = useState('');
   const handleStateEmail = e =>{
      setEmail(e.target.value);
   }

   const heandlStatePassword = e=>{
      setPassword(e.target.value);
   }
   const handleSubmit = e=>{
      e.preventDefault();
      if(password.length<6){
         setError('password must be 6 charctar')
      }
      console.log(email,password);
   }
   return (
      <div>
            <form onSubmit={handleSubmit}> 
            <input type="text" name="name" />
            <br />
            <input onChange={handleStateEmail} type="email" name="email" id="" />
            <br />
            <input type="password" onChange={heandlStatePassword} name='password' />
            <br />
            <button>Submit</button>
         </form>
         {
            error && <p>{error}</p>
         }
      </div>
   );
};

export default UseState_form;