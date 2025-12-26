import React, { useState } from "react";
import axios from "axios";

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.post("http://localhost:8080/api/auth/login", {
                username,
                password
            });
            console.log(response.data);
        }
        catch(error){
            console.error("Login error:", error);
            setError("Login failed");
        }
    }


    return (
        <div className="flex flex-col mt-24 h-full items-center justify-center">
            <form onSubmit={handleLogin} className="flex flex-col gap-10 h-full text-center justify-center items-center border-[5px] border-gray-300 w-[500px] py-10 rounded-lg">
                <div className="flex flex-col gap-2">
                    <label htmlFor="username">Username</label>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" placeholder="Username" className="bg-white border" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Password" className="bg-white border" />
                </div>
                <button type="submit" className="bg-blue-700 rounded-md w-[100px] text-white font-montserrat font-[500]">Sign Up</button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
        </div>
    );
}