import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-10'>My Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3 px-12'>

                <div class="card-body shadow-2xl">
                    <h2 class="card-title font-bold text-2xl text-red-500">1. How will you improve the performance of a React Application?</h2><br />
                    <p>Ans: <br /> 
                        1.Keeping component state local where necessary. <br />
                        2.Memoizing React components to prevent unnecessary re-renders. <br />
                        3.Code-splitting in React using dynamic import() <br />
                        4.Windowing or list virtualization in React. <br />
                        5.Lazy loading images in React.</p>

                </div>
                <div class="card-body shadow-2xl">
                    <h2 class="card-title font-bold text-2xl text-red-500">2. What are the different ways to manage a state in a React application?</h2><br />
                    <p>Ans: <br />
                    There are four main tips of the state you need to properly manage in your reaction apps: <br /><br />
                        1.Local State <br />
                        2.Global State <br />
                        3.Server State <br />
                        4.URL State
                    </p>

                </div>
                <div class="card-body shadow-2xl">
                    <h2 class="card-title font-bold text-2xl text-red-500">3. How does prototypical inheritance work?</h2><br /><br />
                    <p>Ans: <br />
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
                <div class="card-body shadow-2xl">
                    <h2 class="card-title font-bold text-2xl text-red-500">4.  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>Ans: <br />
                    To find the product of elements of an array. <br />
                    1.create an empty variable. ( product) <br />
                    2.Initialize it with 1. <br />
                    3.In a loop traverse through each element (or get each element from user) multiply each element to product. <br />
                    4.Print the product.
                    
                    </p>
                </div>
                <div class="card-body shadow-2xl">
                    <h2 class="card-title font-bold text-2xl text-red-500">5. How does prototypical inheritance work?</h2><br />
                    <p>Ans: <br /> <br />
                    Unit testing ensures that all code meets quality standards before it's deployed. <br /> <br /> This ensures a reliable engineering environment where quality is paramount. <br /> <br /> Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                    </p>
                </div>
                <div class="card-body shadow-2xl">
                    <h2 class="card-title font-bold text-2xl text-red-500">6. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <p>Ans: <br />
                    When I directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;