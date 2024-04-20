import React from "react";
import NavigationBar from "../component/NavigationBar";

const HomepageLayout = (passedProps) => {
    const {children} = passedProps;
    return (
        <div className="w-screen h-screen flex">
            <NavigationBar/>
            {children}
        </div>

    );
}


export default HomepageLayout;