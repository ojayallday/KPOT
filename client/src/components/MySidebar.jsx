import React from "react";
import { useState } from "react";
import {Sidebar,Menu, MenuItem, SubMenu} from "react-pro-sidebar"
import { Link } from 'react-router-dom';

const MySidebar = () => {
    
    return(
        <>
            <Sidebar>
                <Menu iconShape="square">
                    
                    <SubMenu title="Projects" label="Projects">
                        <MenuItem component={<Link to="./Projects" />}>New Project</MenuItem>
                        <MenuItem component={<Link to="./Projects" />}>Existing Projects</MenuItem>
                    </SubMenu>

                    <SubMenu title="Partners" label="Partners">
                        <MenuItem component={<Link to="./Partners" />}>New Partner</MenuItem>
                        <MenuItem component={<Link to="./Partners" />}>Manage Partners</MenuItem>
                    </SubMenu>

                    <SubMenu title="Engineers" label="Engineers">
                        <MenuItem component={<Link to="./Engineers" />}>New Engineer</MenuItem>
                        <MenuItem component={<Link to="./Engineers" />}>Manage Engineers</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </>
    )
        
    

}

export default MySidebar;