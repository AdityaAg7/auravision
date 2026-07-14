'use client'
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage(){
    const {user, loading, signOut} = useAuth()
    const router = useRouter()

    useEffect(()=>{
        if (!loading && !user){
            router.push("/auth/signin")
        }
    }, [ user,loading,router])

    if (loading){
        return <div className="flex items-center justify-center h-screen"> Loding...</div>
    }

    if(!user){
        return null
    }

    return(
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between item-center mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <button
                    onClick={signOut}
                    className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700">
                        Sign Out
                    </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-gray-600 mb-4">Welcome, {user.email}</p>
                    <h2 className="text-xl font-bold mb-4">My Products</h2>

                    <div className="border-2 border-dashed border-gray-300 rounded p-8 text-center">
                        <p className="text-gray-500">OOPs.....No Products Yet</p>
                        <p className="text-sm text-gray-400 mt-2">Upload your first furniture product, to get started</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
