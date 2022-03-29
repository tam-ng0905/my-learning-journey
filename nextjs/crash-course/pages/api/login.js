import {API_URL} from '@/config/index';
import cookie from 'cookie';


export default async (req, res) => {
    let contractorId;
    if(req.method === 'POST') {
        // const parsedObject = JSON.parse(req.body);
        // console.log("here")
        // console.log(parsedObject);
        // console.log(JSON.parse(req.body));
        const {email, password} = req.body;
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
                return response.json()
            })
            .then(response => {
                console.log(response);
                if (response['token']) {
                    // localStorage.setItem('contractorId', response['contractorId']);
                    contractorId = response['contractorId'];
                // } else {
                //     this.setState({ error: response })
                }
                // console.log(response);
                return response
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


        console.log(userData);
        console.log(userData["contractor"]);
        if(userData["contractor"]){
            res.setHeader('Set-Cookie', cookie.serialize(
                'token', contractorLogin["token"], {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    maxAge: 60 * 60 * 24 * 7,
                    sameSite: 'strict',
                    path: '/'
                }
            ))
            // console.log("here")
            if (typeof window !== 'undefined'){
                localStorage.setItem("contractorId", userData["contractor"]["_id"]);
                localStorage.setItem("company_name", userData["contractor"]["company_name"]);
                localStorage.setItem("contractorEmail", userData["contractor"]["email"]);
            }

            res.status(200).json({user: userData["contractor"]})
        } else {
            res.status(204).json({error: "User does not exist"})
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({message: `Method ${req.method} not allowed`});
    }
}
