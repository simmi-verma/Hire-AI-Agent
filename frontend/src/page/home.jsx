import Card from "./Card"
import "./Card.css"
import"./home.css"
import { Routes, Route } from "react-router-dom"
import Details from './Details';

export default function Home() {
    return (
        <>
        <div>
            <h1 className="text-3xl font-bold underline bg-">
                Hello world!
            </h1>
        </div>


        <div className="container">
            <Card 
            image="https://img.freepik.com/free-vector/isometric-business-concept-man-thinking-crm-system-artificial-intelligence-robot-ai_39422-771.jpg?t=st=1770985516~exp=1770989116~hmac=a78cf564bc56d8293b4e7805118b51ec591448a4378a904ab4777d9bc3281ae8"
            title="I am memo"
            description="this is me "
            link ="/Details"/>
              <Card 
            image="https://img.freepik.com/free-vector/isometric-business-concept-man-thinking-crm-system-artificial-intelligence-robot-ai_39422-771.jpg?t=st=1770985516~exp=1770989116~hmac=a78cf564bc56d8293b4e7805118b51ec591448a4378a904ab4777d9bc3281ae8"
            title="I am memo"
            description="this is me "
            link ="/Details"/>
             <Card 
            image="https://img.freepik.com/free-vector/isometric-business-concept-man-thinking-crm-system-artificial-intelligence-robot-ai_39422-771.jpg?t=st=1770985516~exp=1770989116~hmac=a78cf564bc56d8293b4e7805118b51ec591448a4378a904ab4777d9bc3281ae8"
            title="I am memo"
            description="this is me "
            link ="/Details"/>
            




        </div>


        </>
        
    )
}