import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Person from "./components/Person";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";

import "./appStyles.css";

import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <ClickCounter />
      <HoverCounter />

      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* <PortalDemo /> */}

      {/* <FRParentInput /> */}

      {/* <FocusInput /> */}

      {/* <RefsDemo /> */}

      {/* <ParentComp /> */}

      {/* <Table /> */}

      {/* <FragmentDemo /> */}

      {/* <LifecycleA /> */}

      {/* <Form /> */}

      {/* <h1 className="error">Error</h1>

      <h1 className={styles.success}>Success</h1>

      <Inline /> */}

      {/* <Stylesheet primary={true} /> */}

      {/* <NameList /> */}

      {/* <UserGreeting /> */}

      {/* <ParentComponent /> */}

      {/* <FunctionClick />
      <ClassClick /> */}

      {/* <EventBind></EventBind> */}

      {/* <body>
        <div id="root"></div>
      </body> */}

      {/* <Counter></Counter>

      <Greet name="Dragana" surname="Savanovic">
        <p>This is children props</p>
      </Greet>

      <Welcome name="GaGa" surname="Savanovic">
        <button>Action</button>
      </Welcome> */}

      {/* <Message />

      <Greet name="Dragana" surname="Savanovic">
        <p>This is children props</p>
      </Greet>
      <Greet name="GaGa" surname="Savanovic">
        <button>Action</button>
      </Greet>
      <Greet surname="Savanovic" />

      <Welcome name="Dragana" surname="Savanovic">
        <p>This is children props</p>
      </Welcome>
      <Welcome name="GaGa" surname="Savanovic">
        <button>Action</button>
      </Welcome> */}
    </div>
  );
}

export default App;
