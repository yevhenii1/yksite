import React from 'react'
import './SideBar.scss'
import Nav from "./Nav/Nav";
import NewsContainer from "../News/NewsContainer";
import DetailNews from "../News/DetailNews";


const SideBar = (props) => {
    return (
        <div className="sidebar">
            <Nav />
            <div className="sidebar-test">
                <NewsContainer/>
            </div>
        </div>
    )
}

export default SideBar