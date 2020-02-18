import React from 'react';
import SideBar from "../SideBar/SideBar";
import DetailNews from "../News/DetailNews";

const Main = () => {
    return (
        <div className="main">
           <SideBar />
            <div className="right">
                <DetailNews />
            </div>
        </div>
    );
};

export default Main;
