'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"

export function SignUpForm(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const {signUp} = useAuth()

    const handleSignUp = async(e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try{
          await signUp(email,password)
          router.push('/auth/signin')
        } catch(err){
            setError(err instanceof Error ? err.message:'Sign Up Failed')
        }finally{
            setLoading(false)
        }
    }

    return(
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6">Create Account</h1>
                {error && (
                    <div className="block text-sm font-medium mb-2">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? 'Creating......' : 'Sign Up'}
                    </button>
                </form>

                <p className="mt-4 text-center text-sm">
                    Already have an account?{' '}
                     <a href="/auth/signin" className="text-blue-600 hover:underline">
                     Sign In
                     </a>
                </p>
            </div>
        </div>
    )
}