import {createContext, useState, useEffect} from 'react';
import {API_URL, NEXT_URL} from "@/config/index";
const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => checkUserLoggedIn(), [])

    //Register User
    const register = async ({company_name, email, password, password2, address, city, state, zip, phone, mobile, employees_number, founded, doEmergency}) => {
        // console.log(company_name);
        // console.log(email);


        // const res = await fetch(`${NEXT_URL}/api/register`, {
        //     method: "POST",
        //     header: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: {company_name,
        //         email,
        //         password,
        //         password2,
        //         address,
        //         city,
        //         state,
        //         zip,
        //         phone,
        //         mobile,
        //         employees_number,
        //         founded,
        //         doEmergency
        //     },
        // })
        //
        // const data = await res.json()
        // console.log("log")
        // console.log(data);
        // if (res.ok) {
        //     console.log(data)
        // } else {
        //     setError(data.message)
        //     setError(null)
        // }

        const contractorRegistration = await fetch(`${API_URL}/auth/contractorsignup`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                company_name, email, password, password2, address, city, state, zip, phone, mobile, employees_number, founded, doEmergency
            })
        })
            .then(response => {
                // console.log(response)
                return response.json();
            })
            .catch(err => console.log(err))
        if(contractorRegistration){
            //@todo: Set Cookies

            console.log(contractorRegistration);
            // res.status(200).json({user: contractorRegistration})
        } else {
            // res.status(204).json({error: "Something went wrong"})
        }
    }

    //Login User
    const login = async (user) => {
        console.log(user);
        let contractorId;
        const email = user.email;
        const password = user.password;
        console.log(email);
        const contractorLogin = await fetch(`${API_URL}/auth/contractorlogin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(response => {
                return response.json();
            })
            .then(response => {
                if (response['token']) {
                    // localStorage.setItem('jwtToken', JSON.stringify(response['token']));
                    // localStorage.setItem('contractorId', response['contractorId']);
                    contractorId = response['contractorId'];
                    // } else {
                    //     this.setState({ error: response })
                }
                // console.log(response);
            })
            .catch(err => console.log(err))

        const userData = await fetch(`${API_URL}/api/contractor/${contractorId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        })
            .then(response => {
                const data = response.json();
                return data;
            })
            .catch(err => console.log(err))

        // const data = await contractorLogin.json()
        // console.log(data);

        if (userData) {
            console.log(userData)
            setUser(userData)
        } else {
            // setError(data.message)
            setError(null)
        }
        // if(userData["contractor"]){
        //     //@todo: Set Cookies
        //     res.status(200).json({user: userData["contractor"]})
        // } else {
        //     res.status(204).json({error: "User does not exist"})
        // }

    }

    //Logout User
    const logout = async () => {

    }

    //Check if user is logged in
    const checkUserLoggedIn = async (user) => {
        console.log("in auth")
        const res = await fetch(`${NEXT_URL}/api/user`)
            .then(response => {
                console.log(response)
                return response.json();
            })
        console.log(res.user)
        // const data = await res.json()

        if(res.user) {
            setUser(res.user)
        } else {
            setUser(null)
        }
    }

    return (
        <AuthContext.Provider value={{user, error, register, login, logout}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContext





