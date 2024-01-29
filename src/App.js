import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollIndicator from './components/ScrollIndicator';
import RenkKartelasi from './components/RenkKartelasi';

import ScrollToTopRoute from './components/ScrollTopRoute';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';
import Services from './pages/Services';
import ServicesDetails from './pages/ServicesDetails';
import Team from './pages/Team';
import Admin from './pages/Admin';
import { UserProvider } from './lib/user';
import Blogs from './pages/Blogs';
import BlogDetails from './components/BlogDetails';
import MyPage from './components/AdminComp';
import BlogPage from './pages/blogpage';

function App() {

    return (
        <><UserProvider>
            <Router>
                <ScrollToTopRoute />
                <Switch>
                    <Route exact path="/home-2">
                        <Home2 />
                    </Route>
                    <Route exact path="/home-3">
                        <Home3 />
                    </Route>
                    <Route exact path="/hakkimizda">
                        <About />
                    </Route>
                    <Route exact path="/team">
                        <Team />
                    </Route>
                    <Route exact path="/faq">
                        <Faq />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/services">
                        <Services />
                    </Route>
                    <Route exact path="/hizmetler/:slug">
                        <ServicesDetails />
                    </Route>
                    <Route exact path="/project-details">
                        <ProjectDetails />
                    </Route>
                    <Route exact path="/news">
                        <News />
                    </Route>
                    <Route exact path="/news-details">
                        <NewsDetails />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/">
                    
                    <Home1 />
                    </Route>
                    <Route exact path="/blogs">
                    
                    <BlogPage/>
                    </Route>
                    <Route exact path="/blogs/:slug">
                    
                    <BlogDetails/>
                    </Route>
                    <Route exact path="/admin">
                    <MyPage/>                    </Route>
                </Switch>
            </Router>
            </UserProvider>

            <ScrollIndicator />

        </>
    );
}

export default App;
