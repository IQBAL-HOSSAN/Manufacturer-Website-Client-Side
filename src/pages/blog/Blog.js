import React from "react";

const Blog = () => {
  return (
    <main>
      <section className="py-20 mx-auto lg:px-32 ">
        <div className="lg:w-2/3 mx-auto">
          {/* blog-1 */}
          <div
            tabIndex="0"
            className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5"
          >
            <div className="collapse-title text-xl font-medium">
              How will you improve the performance of a React Application?{" "}
            </div>
            <div className="collapse-content">
              <p className=" font-semibold text-gray-500">
                There are lot of ways to improve the performance of a React
                Application. Here I listed 10 Ways to Optimize React App’s
                Performance
              </p>
              <ul>
                <li>1. useMemo()</li>
                <li>2. Virtualize long lists</li>
                <li>3. React.PureComponent</li>
                <li>4. Caching functions</li>
                <li>5. Using reselect selectors</li>
                <li>6. Web worker</li>
                <li>7. Lazy loading</li>
                <li>8. React.memo()</li>
                <li>9. useCallback()</li>
                <li>10. shouldComponentUpdate()</li>
              </ul>
            </div>
          </div>
          {/* blog-2 */}
          <div
            tabIndex="0"
            className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5"
          >
            <div className="collapse-title text-xl font-medium">
              What are the different ways to manage a state in a React
              application?
            </div>
            <div className="collapse-content">
              <p className=" font-semibold text-gray-500">
                The Four Kinds of React State to Manage When we talk about state
                in our applications, it’s important to be clear about what types
                of state actually matter. <br />
                There are four main types of state you need to properly manage
                in your React apps:
              </p>
              <ul>
                <li>1. Local state</li>
                <li>2. Global state</li>
                <li>3. Server state</li>
                <li>4. URL state</li>
              </ul>
            </div>
          </div>
          {/* blog-3 */}
          <div
            tabIndex="0"
            className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5"
          >
            <div className="collapse-title text-xl font-medium">
              How does prototypical inheritance work?
            </div>
            <div className="collapse-content">
              <p className=" font-semibold text-gray-500 mb-5">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object.getPrototypeOf and
                Object.setPrototypeOf. Nowadays, in modern language, it is being
                set using __proto__.
              </p>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png"
                alt=""
              />
            </div>
          </div>
          {/* blog-4 */}
          <div
            tabIndex="0"
            className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5"
          >
            <div className="collapse-title text-xl font-medium">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts{" "}
            </div>
            <div className="collapse-content">
              <p className=" font-semibold text-gray-500 ">
                The useState() is a Hook that allows you to have state variables
                in functional components. React has two types of components, one
                is class components which are ES6 classes that extend from React
                and the other is functional components. Class components a
                Component and can have state and lifecycle methods: class
                Message extends React. The useState hook is a special function
                that takes the initial state as an argument and returns an array
                of two entries.
              </p>
            </div>
          </div>
          {/* blog-5 */}
          <div
            tabIndex="0"
            className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5"
          >
            <div className="collapse-title text-xl font-medium">
              What is a unit test? Why should write unit tests?
            </div>
            <div className="collapse-content">
              <p className=" font-semibold text-gray-500 ">
                <span className="font-bold">Unit Testing Definition: </span>
                Unit testing involves testing individual components of the
                software program or application. The main purpose behind this is
                to check that all the individual parts are working as intended.
                A unit is known as the smallest possible component of software
                that can be tested. Generally, it has a few inputs and a single
                output.
              </p>
              <p className="text-lg font-bold text-gray-500 my-3">
                Unit test give us so many advantage. For these reason we use
                unit test:
              </p>
              <ul>
                <li>1. The process becomes agile</li>
                <li>2. Quality of Code</li>
                <li>3.Find Software Bugs Easily</li>
                <li>4.Facilitates Change</li>
                <li>5.Provides Documentation</li>
                <li>6.Debugging Process</li>
                <li>7.Design</li>
                <li>8.Reduce Costs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
