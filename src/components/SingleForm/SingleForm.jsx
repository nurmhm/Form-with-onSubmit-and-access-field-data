

const SingleForm = () => {
  
      const handleSubmit = e => {
         e.preventDefault(); /// Jano relode na nay oi jonno
         console.log(e.target.name.value); // kono input fleid ar value ar jonno 
         console.log(e.target.email.value);
         console.log(e.target.phone.value);
        console.log("form submit")
      }
   return (
      <div>
         <form onSubmit={handleSubmit}> 
            <input type="text" name="name" />
            <br />
            <input type="email" name="email" id="" />
            <br />
            <input type="text" name='phone' />
            <br />
            <button>Submit</button>
         </form>
      </div>
   );
};

export default SingleForm;