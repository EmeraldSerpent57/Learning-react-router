import { Route } from "react-router-dom";

const Welcome = () => {
    return (
      <section>
        <h1>The Welcome Page</h1>
        <Route path='/welcome/new-user'>
            Welcome to our store! Thanks for being a new user!
        </Route>
      </section>
    );
};

export default Welcome;

//This page will be the welcome/home page