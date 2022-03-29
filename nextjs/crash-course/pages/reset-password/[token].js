import { useRouter } from 'next/router'

export default function ResetPassword() {
    // const [password, setPasword] = useState("")
    const router = useRouter();
    let password = "";
    const {token} = router.query;

    const setPasword = (newPassword) => {
        password = newPassword;
    }
    const resetPassword = () => {
        fetch(`${process.env.REACT_APP_API_URL}/auth/reset-password/`, {
            method: "PUT",
            headers: {
                // Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password,
                token
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    //   M.toast({html: data.error,classes:"#c62828 red darken-3"})
                    console.log(data.error)
                }
                else {

                    //    M.toast({html:data.message,classes:"#43a047 green darken-1"})
                    history.push('/login')
                }
            }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="mycard">
            <div className="mt-10 pt-16 pb-40 px-8">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <h2 className="mt-6 text-3xl text-center font-extrabold text-gray-900">Reset Your Password</h2>

                    <form className="space-y-6">
                        <div className="form-group mt-8">
                            <input
                                type="password"
                                className="appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter a new password"
                                name="password"
                                value={password}
                                onChange={(e) => setPasword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            onClick={() => resetPassword()}
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
