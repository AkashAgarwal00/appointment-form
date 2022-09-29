import { useState } from "react";
import DatePicker from "react-date-picker";

function App() {

  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [phone, setphone] = useState("");
  const [date, setdate] = useState(new Date());

  const submit = () => {
    console.log(name);
    console.log(mail);
    console.log(phone);
    console.log(date);
  }

  return (
    <div className="App container">
      <form>
        <div className="form-group my-3">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter name" required 
          value={name} onChange={(name) => setname(name.target.value)}/>
        </div>
        
        <div className="form-group my-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required
          value={mail} onChange={(mail) => setmail(mail.target.value)}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        
        <div className="form-group my-3">
          <label htmlFor="phoneno">Phone number</label>
          <input type="tel" className="form-control" id="phoneno" required
          value={phone} onChange={(phone) => setphone(phone.target.value)} />
        </div>
        
        <div className="form-group form-check my-3">
          <DatePicker value={date} onChange={(date) => setdate(date)}/>
        </div>
        
        <button className="btn btn-primary" onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
