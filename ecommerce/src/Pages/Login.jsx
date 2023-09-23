import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login(){
   const[username, setUsername] = useState('');
   const[password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleUsernameChange =(e)=>{
    setUsername(e.target.value);
   };

   const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
   };

   async function handleSubmit(e){
    e.preventDefault();
    try {
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
                if(data.token){
                    console.log('Login successful');
                    navigate('/authenticated')
                }else{
                    console.log('Invalid username or password');
                    window.alert('Invalid username or password');
                }
            })
    } catch (error) {
        console.log(error);
    }
   }
    
    
    return(
        <form onSubmit={handleSubmit}>
            <label>
            Username:
            <input 
            type="text" 
            value={username} 
            onChange={handleUsernameChange}
            />
            </label>
            <br />
            <label>
            Password:
            <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
}