import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <p>This is Welcome page.</p>
      <Route path="/welcome/new">
        <p>Welcome to the new page.</p>
      </Route>
    </section>
  );
};

export default Welcome;
