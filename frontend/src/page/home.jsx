import Card from "./Card"
import "./Card.css"
import"./home.css"
import { Routes, Route } from "react-router-dom"
import Details from './Details';

export default function Home() {
    return (
        <>
        <div className="home-containner p-4 bg-slate-950 min-h-screen">
         <div className="card-container flex flex-wrap justify-center gap-4">
            <Card/>
        </div>
 

        </div>

        </>
        
    )
}