import React from "react";
import { useState } from "react";
import {Sidebar,Menu, MenuItem, SubMenu} from "react-pro-sidebar"
import { Link } from 'react-router-dom';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import AddIcon from '@mui/icons-material/Add';

const MySidebar = () => {
    
    return(
        <>
            <Sidebar>
                <Menu iconShape="square">
                    
                    <SubMenu title="Projects" label="Projects" icon={<AccountTreeOutlinedIcon/>}>
                        <MenuItem component={<Link to="/Projects" />} icon={<AddIcon/>}>New Project</MenuItem>
                        <MenuItem component={<Link to="/Projects" />} icon={<BuildOutlinedIcon/>} >Existing Projects</MenuItem>
                    </SubMenu>

                    <SubMenu title="Partners" label="Partners" icon={<HandshakeOutlinedIcon/>}>
                        <MenuItem component={<Link to="/Partners" />} icon={<AddIcon/>}>New Partner</MenuItem>
                        <MenuItem component={<Link to="/Partners"  />} icon={<BuildOutlinedIcon/>} >Manage Partners</MenuItem>
                    </SubMenu>

                    <SubMenu title="Engineers" label="Engineers" icon={<EngineeringIcon/>}>
                        <MenuItem component={<Link to="/Engineers" />} icon={<AddIcon/>}>New Engineer</MenuItem>
                        <MenuItem component={<Link to="/Engineers" />} icon={<BuildOutlinedIcon/>}>Manage Engineers</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </>
    )
        
    

}

export default MySidebar;