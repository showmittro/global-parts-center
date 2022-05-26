import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div class="hero flex-col  bg-base-200 px-12" >
                <div class="hero-content   grid  md:grid-cols-2 lg:grid-cols-2">
                   <div>
                   <h1 class="text-3xl font-bold">About Me</h1>
                    <h1 class="text-1xl font-bold">Name: Showmittro Biswas</h1>
                    <h1 class="text-1xl font-bold">Email:showmittrobiswas2000@gmail.com</h1>
                    <h1 class="text-1xl font-bold">Phone: (+880)[1761271879]</h1>
                    <h1 class="text-1xl font-bold">Address:Kaligonj Jessore</h1>
                    <h1 class="text-1xl font-bold">Educational Background</h1>
                    <h1 class="text-1xl font-bold">Institute Name: Feni Computer Institute(FCI)</h1>
                    <h1 class="text-1xl font-bold">Dept. Name:Data TeleCommunication And Networking Technology</h1>
                    <h1 class="text-1xl font-bold">Semester: 7th </h1>
                    

                   </div>


                    <div>
                    <h1 class="text-2xl font-bold">My Skills</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind Css</li>
                        <li>JavaScript</li>
                        <li>React Js</li>
                        <li>Firebase Authentication </li>
                        <li>Node Js</li>
                        <li>Express Js</li>
                        <li>MongoDB</li>
                    </ul>
                        <h1 class="text-2xl font-bold">My Best Three Project Link</h1>
                        <div>
                            <h1 className='text-1xl font-bold'>Project 1</h1>
                            <h1>LiveSiteLink:https://global-parts-center.web.app </h1>


                        </div>
                        <div>
                            <h1 className='text-1xl font-bold'>Project 2</h1>
                            <h1>LiveSiteLink: https://biycle-inventory.web.app/ </h1>


                        </div>
                        <div>
                            <h1 className='text-1xl font-bold'>Project 3</h1>
                            <h1>LiveSiteLink: https://my-shoes-shop.netlify.app/ </h1>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;