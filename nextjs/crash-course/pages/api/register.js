import {API_URL} from '@/config/index';


export default async (req, res) => {
    if(req.method === 'POST') {
        const {company_name, email, password, password2, address, city, state, zip, phone, mobile, employees_number, founded, doEmergency} = req.body;
        console.log(req.body);
        console.log(typeof req.body);
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
                console.log("here")
                // console.log(response)
                return response.json();
            })
            .catch(err => console.log(err))
        console.log(contractorRegistration);
        if(contractorRegistration){
            //@todo: Set Cookies
            res.status(200).json({user: contractorRegistration})
        } else {
            res.status(204).json({error: "Something went wrong"})
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({message: `Method ${req.method} not allowed`});
    }
}
