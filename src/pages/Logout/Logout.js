import React from "react";
import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel
} from '@reach/tabs';
import './Logout.css';

//components
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import About from "../../components/About/About";

const LogoutPage = () => {
    return(
        <div className='LoggedOut'>
            <About className='about' />
            <Tabs className='tabs'>
                <TabList>
                    <Tab className='login'>
                        Login
                    </Tab>
                    <Tab className='signUp'>
                        SignUp
                    </Tab>
                </TabList>

                <TabPanels className='tabPanels'>
                    <TabPanel>
                       <LoginForm/>
                    </TabPanel>
                    <TabPanel>
                        <SignUpForm/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            
        </div>
    )
};

export default LogoutPage;
