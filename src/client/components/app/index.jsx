import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TalentNavbar from '../talentNavbar/index.jsx';
import NotFound from '../notFound/index.jsx';
import SkillsSearch from '../../containers/skillsSearch/index.jsx';
import ScrollToTop from '../scrollToTop/index.jsx';
import ProfilePage from '../../containers/profile/index.jsx';
import LearnerGallery from '../../containers/learnerGallery/index.jsx';
import ErrorBoundary from '../errorBoundary/index.jsx';
import SplashRNG from '../../containers/splashRNG/index.jsx';
import Loading from '../../containers/loading/index.jsx';
import Footer from '../footer/index.jsx';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <TalentNavbar />
          <Loading>
            <Switch>
              <Route exact path="/" component={SplashRNG} />
              <Route exact path="/current" render={(props) => <LearnerGallery type="current" />} />
              <Route exact path="/learners" render={(props) => <LearnerGallery type="all" />} />
              <Route exact path="/skillsresults/:searchSkill" component={LearnerGallery} />
              <Route exact path="/skills" component={SkillsSearch} />
              <Route exact path="/learners/:githubHandle" component={ProfilePage} />
              <Route exact path="/alumni" render={(props) => <LearnerGallery type="alumni" />} />
              <Route component={NotFound} />
            </Switch>
          </Loading>
          <ScrollToTop />
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}
