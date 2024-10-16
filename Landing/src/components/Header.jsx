import React from 'react';

const Header = () => {
    return (
        <div>
            <head/>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link href="./output.css" rel="stylesheet"/>
<head></head>

<body/>
  {/* <!-- header main sec --> */}
  <div class="bg-white bg-opacity-70 backdrop-blur-md py-4">
    <header class="container mx-auto flex justify-between items-center px-4">
      {/* <!-- logo --> */}
      <div class="flex items-center space-x-2">
        <img src="./public/Askmeidentity 2.png" alt="logo" class="h-8"/>
        <span class="text-indigo-900 font-bold text-lg">Askmeidentity</span>
      </div>
      {/* <!-- Nav links --> */}

      <ul class="hidden md:flex space-x-8 text-indigo-900 font-semibold">
        <li><a href="#" class="hover:text-red-800">Home</a></li>
        <li><a href="#" class="hover:text-red-800">About</a></li>
        <li><a href="#" class="hover:text-red-800">Courses</a></li>
        <li><a href="#" class="hover:text-red-800">Contact</a></li>
      </ul>

      {/* <!-- Icons and buttons --> */}
      <img src="./public/vector/Group 1.svg" alt="Icons"
        class="flex object-contain shrink-0 self-stretch my-auto max-w-full rounded-none aspect-[3.94] w-[130px]"/>

      <div class="flex gap-10 self-stretch font-medium whitespace-nowrap font-rob">
        <a href="#login page"
          class="my-auto leading-9 text-neutral-600 hover:text-red-800 underline underline-offset-1">Login</a>
        <button
          class="bg-gradient-to-r from-pink-800 via-pink-600 to-purple-400 hover:text-blue-800 px-9 py-5 items-center my-auto max-md leading-none text-white rounded-xl shadow-[0px_5px_0px_rgba(0,0,0,0.161)] max-md:px-5">Signup</button>
      </div>
    </header>

    {/* <!-- hero section --> */}
    <section
      class="flex  flex-col justify-between py-auto px-auto w-full min-h-[836px] font-rob bg-gradient-to-r from-[#739FE8]  to-[#4F18CA] relative max-md:max-w-full">

      <img src="././public/bg-firstpage.png" alt="Background image"
        class="object-cover absolute mix-blend-overlay inset-0  size-full z" />
      <div
        class="flex relative z-10 flex-col justify-center items-center  px-16 py-px w-full max-md:px-5 max-md:max-w-full">
        <div class="z-10 mb-0 w-full max-w-[1626px] max-md:mb-2.5 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col mt-10 w-[46%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col items-start mt-20 mr-0 w-full max-md:mt-10 max-md:max-w-full">
                <p class="text-lg leading-none uppercase text-white text-opacity-80 tracking-[3px] max-md:max-w-full">
                  Successful coaches are visionaries
                </p>
                <h1 class="self-stretch mt-14 w-full max-md:max-w-full">
                  <span
                    class="mt-5 text-7xl  text-white leading-[90px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                    <span class="">Good</span>
                    <span class="text-blue-700">coaching</span>
                    <span class="">is good teaching & nothing else.</span>
                  </span>
                </h1>
              </div>


              <div class="flex gap-9 mt-16 text-lg text-white max-md:mt-10">
                <a href="#view-courses"
                  class="flex overflow-hidden flex-col tracking-wider leading-loose rounded-xl border-2 border-white border-solid">
                  <span class="overflow-hidden px-10 py-6 rounded-md bg-teal-500 bg-opacity-0 max-md:px-5">
                    View Courses
                  </span>
                </a>
                <a href="#get-consultation" class="my-auto leading-3 basis-auto">
                  Get Free Consultation
                </a>
              </div>
              <form class="mt-6 max-w-full  w-[88%]">
                <div
                  class="flex flex-wrap gap-10 py-2.5 pr-2.5 pl-9 mx-auto mt-14  w-full bg-white rounded-lg max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                  <label for="search-input" class="sr-only">What do you want to learn today?</label>
                  <input type="text" id="search-input" placeholder="What do you want to learn today?"
                    class="flex-auto my-auto text-base text-slate-600 w-[228px]" />
                  <button type="submit"
                    class="flex gap-3.5 items-start px-7 py-4 hover:text-red-800 text-base leading-loose text-center text-white whitespace-nowrap rounded-xl max-md:px-5"/>
                    <img
                      src="./public/Rectangle 8674.png"
                      alt="" class="object-contain shrink-0 self-start w-5 aspect-square" />
                    <button
                      class="bg-gradient-to-r from-pink-800 via-pink-600 to-purple-400 hover:text-blue-800 px-6 py-5 items-center my-auto max-md leading-none text-white rounded-xl shadow-[0px_5px_0px_rgba(0,0,0,0.161)] w-[22%] max-md:px-5">Search</button>
                </div>
              </form>
            </div>
            <div class="flex gap-6 text-base  text-white max-md:mt-10">
              <div class="flex absolute flex-col mt-40 ml-40  w-[96%]  max-md:ml-0 max-md:w-full"></div>
              <img src="././public/vector/straight line.svg" alt="User avatar"
                class="object-contain mt-40 shrink-0 my-auto w-6 aspect-[0.16]" />
              <div class="flex flex-col grow mt-40  shrink-0 items-start basis-0 w-fit font-medium">
                <p class="leading-none">Shyam</p>
                <p class="self-stretch mt-3.5 w-60  leading-6">
                  In a coaching role, you ask the questions and rely more on your
                  <br />
                  staff, who become the experts, to provide the information.
                </p>
                <p class="mt-3 text-xl  leading-6 text-sky-500 font-bold ">4.9</p>
              </div>

            </div>
            <div class="flex  flex-col  ml-40 w-[34%]  max-md:ml-0 max-md:w-full ">

              <img src="././public/brunette-woman-hugging-laptop 1 (2).png" alt="women image"
                class="object-contain  relative  w-full  aspect-[0.61] max-md:max-w-full" />

            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- co partners --> */}
    <section
      class="flex relative flex-col justify-center items-center px-10 py-12 w-full min-h-52 bg-gradient-to-t from-[#79a4e9] to-[#4F18CA] :px-5 max-md: max-w-full">
      <img src="./public/small bg.png" alt="small bg" class="object-cover absolute mix-blend-overlay inset-0 size-full"/>
      <div class="flex relative flex-wrap gap-5 justify-between ml-8 w-full max-w-[1475px] z max-md:max-w-full">
        <img src="././public/spotify.png" alt="co partners 1"
          class="object-contain shrink-0 my-auto max-w-full bg-blend-normal aspect-[3.33] w-[140px]" />
        <img src="././public/Amazon.png" alt="co partners 2"
          class="object-contain shrink-0 my-auto max-w-full bg-blend-normal aspect-[3.33] w-[140px]" />
        <img src="././public/spotify.png" alt="co partners 3"
          class="object-contain shrink-0 my-auto max-w-full bg-blend-normal aspect-[3.33] w-[140px]" />
        <img src="././public/cisco.png" alt="co partners 4"
          class="object-contain shrink-0 my-auto max-w-full bg-blend-normal aspect-[3.33] w-[140px]" />
        <img src="././public/logitech.png" alt="co partners 5"
          class="object-contain shrink-0 my-auto max-w-full bg-blend-normal aspect-[3.33] w-[140px]" />
        <img src="././public/Amazon.png" alt="co partners 6"
          class="object-contain shrink-0 my-auto max-w-full bg-blend-normal aspect-[3.33] w-[140px]" />
      </div>
    </section>

    {/* <!-- course details --> */}
     
    <section class="flex flex-col justify-center items-center px-20 py-28 w-full font-rob max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div class="flex flex-col mb-0 w-full max-w-[1624px] max-md:mb-2.5 max-md:max-w-full">
        <div class="flex flex-wrap gap-5 justify-between ml-20 max-w-full w-[1200px]">
          <div class="flex shrink-0 rounded-full border-solid border-[19px] border-cyan-400 border-opacity-20 h-[103px] w-[103px]"></div>
          <div class="flex flex-col self-start max-md:max-w-full">
            <h2 class="self-center text-5xl tracking-tighter leading-loose text-zinc-800 max-md:text-4xl">
              Featured <span class="text-blue-500">Course</span>
            </h2>
            <p class="mt-3 text-2xl leading-none uppercase text-black text-opacity-80 tracking-[3px] max-md:max-w-full">
              The feature courses are we invented our teaching part
            </p>
          </div>
        </div>
        <div class="mt-20  max-md:mt-10 shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col shadow-[0px_4px_4px_rgba(217,236,255,0.5)]">
            {/* <!-- Card 1 --> */}
            <article class="flex flex-col w-[33%]  mt-16 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow px-0.5 w-full bg-indigo-50 rounded  max-md:mt-10 max-md:max-w-full">
                <div class="flex flex-col items-center  pb-3.5 w-full bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:max-w-full">
                  <img  src="././public/card 1.png" alt="card 1" class="object-contain self-stretch w-full rounded-none aspect-[1.63] max-md:max-w-full" />
                  <div class="flex gap-10 mt-7 max-w-full leading-9 w-[441px]">
                    <div class="flex flex-col grow shrink-0 basis-0 w-fit">
                      <p class="self-start text-sm font-medium tracking-tight text-slate-600">
                        1,957 Students
                      </p>
                      <h3 class="mt-5 text-2xl font-semibold tracking-tighter text-slate-700">
                        Motion Graphics: Create a Nice
                        <br />
                        Typography Animation
                      </h3>
                    </div>
                    <p class="self-start text-sm font-medium tracking-tight text-slate-600">
                      01h 59m
                    </p>
                  </div>
                  <div class="flex gap-5 justify-between items-start mt-12 max-w-full text-2xl font-semibold tracking-tighter leading-loose whitespace-nowrap text-slate-600 w-[434px] max-md:mt-10">
                    <p class="mt-4">Rs.499</p>
                    <img  src="././public/cart icon.png" alt="cart icon" class="object-contain shrink-0 aspect-square w-[26px]" />
                  </div>
                </div>
              </div>
            </article>

            {/* <!-- Card 2 --> */}

            <article class="flex flex-col ml-5 w-[33%]  max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow mt-16 w-full bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:mt-10 max-md:max-w-full">
                <img  src="././public/card 2.png" alt="card 2" class="object-contain z-10 mt-0 w-full rounded-none aspect-[1.63] max-md:max-w-full" />
                <div class="flex flex-col px-8 py-7 w-full bg-white rounded-none max-md:px-5 max-md:max-w-full">
                  <div class="flex gap-px leading-9">
                    <div class="flex flex-col grow shrink-0 basis-0 w-fit">
                      <p class="self-start text-sm font-medium tracking-tight text-slate-600">
                        9,575 Students
                      </p>
                      <h3 class="mt-5 text-2xl font-semibold tracking-tighter text-slate-700">
                        Advance PHP knowledge with JS to
                        <br />
                        make smart web
                      </h3>
                    </div>
                    <p class="self-start text-sm font-medium tracking-tight text-slate-600">
                      01h 59m
                    </p>
                  </div>
                  <div class="flex gap-5 justify-between mt-14 text-2xl font-semibold tracking-tighter leading-loose whitespace-nowrap text-slate-600 max-md:mt-10 max-md:max-w-full">
                    <p>Rs.499</p>
                    <img loading="lazy" src="././public/cart icon.png" alt="cart icon" class="object-contain shrink-0 self-start aspect-square w-[26px]" />
                  </div>
                </div>
              </div>
            </article>

            {/* <!-- Card 3 --> */}

            <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow mt-16 w-full font-semibold leading-9 bg-white rounded-3xl text-slate-600 max-md:mt-10 max-md:max-w-full">
                <img src="././public/card 3.png" alt="card 3" class="object-contain z-10 mt-0 w-full rounded-none aspect-[1.63] max-md:max-w-full" />
                <div class="flex flex-col px-8 py-7 w-full bg-white rounded-none max-md:px-5 max-md:max-w-full">
                  <div class="flex gap-5 justify-between text-sm font-medium tracking-tight max-md:max-w-full">
                    <p>2957 Students</p>
                    <p>02h 49m</p>
                  </div>
                  <h3 class="self-start mt-5 text-2xl tracking-tighter text-slate-700">
                    Education Software and PHP and JS
                    <br />
                    System Script
                  </h3>
                  <div class="flex gap-5 justify-between mt-12 ml-3 text-2xl tracking-tighter leading-loose whitespace-nowrap max-md:mt-10 max-md:mr-1 max-md:max-w-full">
                    <p>Rs.499</p>
                    <img  src="././public/cart icon.png" alt=" cart icon" class="object-contain shrink-0 self-start aspect-square w-[26px]" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* <!-- Card 4 --> */}

        <div class="mt-12 max-md:mt-10 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <article class="flex flex-col w-[33%] shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col mx-auto mt-20 w-full bg-white rounded-3xl text-slate-600 max-md:mt-10 max-md:max-w-full">
                <img src="././public/card 4.png" alt="card 4" class="object-contain z-10 mt-0 w-full rounded-none aspect-[1.63] max-md:max-w-full" />
                <div class="flex flex-wrap gap-10 px-8 pt-7 pb-4 mt-1.5 bg-white rounded-none max-md:px-5">
                  <div class="flex flex-col grow shrink-0 font-semibold basis-0 w-fit">
                    <div class="flex z-10 flex-col items-start pl-2.5 leading-9">
                      <p class="text-sm font-medium tracking-tight">5,457 Students</p>
                      <h3 class="self-stretch mt-5 text-2xl tracking-tighter text-slate-700">
                        The Complete Financial Analyst
                        <br />
                        Training & Investing
                      </h3>
                      <p class="mt-12 text-2xl tracking-tighter leading-loose max-md:mt-10">Rs.499</p>
                    </div>
                  </div>
                  <div class="flex flex-col self-start text-sm font-medium tracking-tight leading-9">
                    <p>01h 49m</p>
                    <img src="././public/cart icon.png" alt="cart icon" class="object-contain self-end mt-32 aspect-square w-[26px] max-md:mt-10" />
                  </div>
                </div>
              </div>
            </article>

            {/* <!-- Card 5 --> */}


            <article class="flex flex-col ml-5 w-[33%] shadow-[0px_4px_4px_rgba(217,236,255,0.5)] mt-20 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col px-0.5 w-full font-semibold leading-9 bg-indigo-50 rounded-none text-slate-600 max-md:mt-10 max-md:max-w-full">
                <div class="flex flex-col pb-5 bg-white rounded-3xl max-md:max-w-full">
                  <img  src="././public/card 5.png" alt="card 5" class="object-contain w-full rounded-none aspect-[1.63] max-md:max-w-full" />
                  <div class="flex flex-col px-8 mt-7 w-full max-md:px-5 max-md:max-w-full">
                    <div class="flex gap-5 justify-between text-sm font-medium tracking-tight max-md:max-w-full">
                      <p>595 Students</p>
                      <p>01h 49m</p>
                    </div>
                    <h3 class="self-start mt-5 text-2xl tracking-tighter text-slate-700">
                      Marketing 2023: Complete Guide To
                      <br />
                      Instagram Growth
                    </h3>
                    <div class="flex gap-5 justify-between mt-12 text-2xl tracking-tighter leading-loose whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                      <p>Rs.499</p>
                      <img  src="././public/cart icon.png" alt="cart icon" class="object-contain shrink-0 self-start aspect-square w-[26px]" />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* <!-- Cart 6 --> */}

            <article class="flex flex-col ml-5 w-[33%] shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col mx-auto mt-16 w-full leading-9 bg-white rounded-3xl text-slate-600 max-md:mt-10 max-md:max-w-full">
                <img  src="././public/card 6.png" alt="card 6" class="object-contain z-10 mt-0 w-full rounded-none aspect-[1.63] max-md:max-w-full" />
                <div class="flex flex-wrap gap-10 px-9 py-8 bg-white rounded-none max-md:px-5">
                  <div class="flex flex-col grow shrink-0 items-start font-semibold basis-0 w-fit">
                    <p class="text-sm font-medium tracking-tight">458 Students</p>
                    <h3 class="self-stretch mt-5 text-2xl tracking-tighter text-slate-700">
                      Learn 3D Modelling and Design
                      <br />
                      for Beginners
                    </h3>
                    <p class="mt-11 ml-3 text-2xl tracking-tighter leading-loose max-md:mt-10 max-md:ml-2.5">Rs.499</p>
                  </div>
                  <div class="flex flex-col self-start text-sm font-medium tracking-tight">
                    <p>03h 00m</p>
                    <img  src="././public/cart icon.png" alt="cart icon" class="object-contain self-end mt-32 aspect-square w-[26px] max-md:mt-10 max-md:mr-1" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <button class="hover:text-red-800 self-center bg-gradient-to-r from-blue-800 via-blue-700 to-purple-400 px-14 py-5 mt-20 max-w-full text-xl text-center text-white rounded-xl w-[200px] max-md:px-5 max-md:mt-10">
          Explore courses
        </button>
        
      </div>
    </section>

        {/* <!-- learn with our courses --> */}

        <section class="flex relative flex-col w-full min-h-[779px] font-rob  max-md:max-w-full">
          <img src="././public/bg-firstpage.png" alt="Background image" class="object-cover absolute inset-0 size-full" />
          <div class="flex relative flex-col justify-center  items-start py-32 w-full bg-gradient-to-r from-[#739FE8]  to-[#4F18CA] max-md:py-24 max-md:pr-5 max-md:max-w-full">
            <div class="flex flex-wrap gap-5 justify-center items-start -mb-7 w-full max-w-[1600px] max-md:mb-2.5 max-md:max-w-full">
              
              <div class="flex flex-col justify-center items-center self-end mt-6 text-white ml-40 max-md:max-w-full">
                <h2 class="text-5xl leading-none max-md:max-w-full max-md:text-4xl">
                  Why <span class="text-blue-700">learn</span> with our courses?
                </h2>
                <p class="mt-6 text-2xl leading-9 text-center w-[728px] max-md:max-w-full">
                  We are providing the best courses and top classes. And extraordinary placement training.
                </p>
                <div class="flex flex-wrap gap-5 self-stretch mt-32  text-center max-md:mt-10 max-md:max-w-full">
                  <div class="flex flex-col items-center self-start">
                    <img loading="lazy" src="././public/Icon1.png" alt="Learn icon" class="object-contain w-20 aspect-square" />
                    <h3 class="mt-10 text-2xl leading-none max-md:mt-10">01. Learn</h3>
                    <p class="self-stretch mt-8 text-lg leading-7">
                      Learn continually. There is always
                      <br />
                      "one more thing" to learn.
                    </p>
                  </div>
                  <div class="shrink-0 w-0.5 h-[250px] ml-40"></div>
                  <div class="flex flex-col self-start">
                    <div class="flex flex-col pr-8 pl-2.5 text-2xl leading-none max-md:pr-5">
                      <img src="././public/Icon 2.png" alt="Graduate icon" class="object-contain self-center w-20 aspect-square" />
                      <h3 class="self-start mt-10 max-md:mt-10">02. Graduate</h3>
                    </div>
                    <p class="mt-10 text-lg leading-7">
                      Be bold, be courageous,
                      <br />
                      be your best.
                    </p>
                  </div>
                  <div class="shrink-0 w-0.5 h-[250px] ml-40"></div>
                  <div class="flex flex-col items-center">
                    <img src="././public/Icon 3.png" alt="Work icon" class="object-contain w-20 aspect-square" />
                    <h3 class="mt-10 text-2xl leading-none max-md:mt-10">03. Work</h3>
                    <p class="self-stretch mt-9 text-lg leading-7">
                      Great companies are built in
                      <br />
                      the office, with hard work put
                      <br />
                      in by team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* <!--  Top Categories --> */}

      <section class="flex flex-col justify-center items-center px-20 py-32 w-full text-center font-rob max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div class="flex flex-col items-center mb-0 w-full max-w-[1618px] max-md:mb-2.5 max-md:max-w-full">
          <h2 class="text-5xl leading-none text-zinc-800 max-md:text-4xl">
            Top <span class="text-blue-700">Categories</span>
          </h2>
          <p class="mt-4 ml-3 text-2xl leading-none text-slate-600 max-md:max-w-full">
            100+ unique online course list designs
          </p>
  
          {/* <!-- Small card 1 --> */}

          <div class="flex flex-wrap gap-5 self-stretch mt-32 max-md:mt-10 max-md:max-w-full">
            <article class="flex flex-col flex-1 items-center px-12 py-11 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:px-5">
              <img  src="./public/div.features-box-image.png" alt="Digital Marketing icon" class="object-contain rounded-lg aspect-square w-[90px]" />
              <h3 class="mt-12 text-2xl leading-9 text-slate-700 max-md:mt-10">
                Digital
                <br />
                Marketing
              </h3>
              <p class="mt-11 text-lg leading-none text-slate-600 max-md:mt-10">25 Courses</p>
            </article>
  
            {/* <!-- Small card 2 --> */}
             
            <article class="flex flex-col flex-1 items-center px-12 py-11 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:px-5">
              <img  src="./public/div.features-box-image (1).png" alt="Web Development icon" class="object-contain rounded-lg aspect-square w-[90px]" />
              <h3 class="mt-12 text-2xl leading-9 text-slate-700 max-md:mt-10">
                Web
                <br />
                Development
              </h3>
              <p class="mt-11 text-lg leading-none text-slate-600 max-md:mt-10">16 Courses</p>
            </article>
  
            {/* <!-- Small card 3    --> */}
  
            <article class="flex flex-col flex-1 items-center px-12 py-11 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:px-5">
              <img  src="./public/div.features-box-image (2).png" alt="Art & Humanities icon" class="object-contain rounded-lg aspect-square w-[90px]" />
              <h3 class="mt-12 text-2xl leading-9 text-slate-700 max-md:mt-10">
                Art &
                <br />
                Humanities
              </h3>
              <p class="mt-10 text-lg leading-none text-slate-600">76 Courses</p>
            </article>
  
            {/* <!-- Small card 4 --> */}
  
            <article class="flex flex-col flex-1 items-center px-12 py-11 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:px-5">
              <img  src="./public/div.features-box-image (4).png" alt="Personal Development icon" class="object-contain rounded-lg aspect-square w-[90px]" />
              <h3 class="mt-12 text-2xl leading-9 text-slate-700 max-md:mt-10">
                Personal
                <br />
                Development
              </h3>
              <p class="mt-10 text-lg leading-none text-slate-600">22 Courses</p>
            </article>
  
            {/* <!-- Small card 5 --> */}
  
            <article class="flex flex-col flex-1 items-center px-12 py-11 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:px-5">
              <img  src="./public/div.features-box-image (5).png" alt="IT and Software icon" class="object-contain rounded-lg aspect-square w-[90px]" />
              <h3 class="mt-12 text-2xl leading-9 text-slate-700 max-md:mt-10">
                IT and
                <br />
                Software
              </h3>
              <p class="mt-10 text-lg leading-none text-slate-600">110 Courses</p>
            </article>
  
            {/* <!-- container 6 --> */}
  
            <article class="flex flex-col flex-1 items-center px-12 py-11 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:px-5">
              <img src="./public/div.features-box-image (6).png"alt="Graphic Design icon" class="object-contain rounded-lg aspect-square w-[90px]" />
              <h3 class="mt-12 text-2xl leading-9 text-slate-700 max-md:mt-10">
                Graphic
                <br />
                Design
              </h3>
              <p class="mt-10 text-lg leading-none text-slate-600">85 Courses</p>
            </article>
          </div>
        </div>
      </section>
        
           {/* <!-- Subscribe section --> */}
  
      <section class="flex z-10 flex-col self-center font-rob mt-40 ml-5 w-full max-w-[1398px] max-md:mt-10 max-md:max-w-full">
        <div class="px-12 py-16 max-w-full rounded-3xl w-[1280px] max-md:px-5">
          <div class="flex gap-5 bg-gradient-to-l from-[#e441ff] via-vilot-300 via-blue-500 to-blue-200 px-20 rounded-2xl py-24 max-md:flex-col">
            <div class="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow max-md:mt-10">
                
                <img  src="././public/Ellipse 168.png" alt="Decorative circle" class="object-contain rounded-full aspect-square w-[60px]" />
                <div class="flex flex-col pl-8 mt-11 max-md:pl-5 max-md:mt-10">
                  <img src="././public/Ellipse 167.png" alt="Decorative circle" class="object-contain self-end rounded-full aspect-square w-[60px]" />
                  <img  src="././public/Ellipse 166.png" alt="Decorative circle" class="object-contain mt-16 rounded-full aspect-square w-[60px] max-md:mt-10" />
                </div>
              </div>
            </div>
            
             <div class="flex flex-col  ml-5 w-[69%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col self-stretch my-auto w-full text-base text-white max-md:mt-10 max-md:max-w-full">
                <h2 class="text-5xl text-center leading-[55px] max-md:max-w-full font-bold max-md:text-4xl max-md:leading-[54px]">
                  Subscribe For Get Update
                  <br />
                  Every New Courses
                </h2>
                <p class="self-center mt-5 leading-8 text-center text-white text-opacity-70 font-semibold max-md:max-w-full">
                  20k+ students daily learn with Eduvi. Subscribe for new courses.
                </p>
                <form class="flex flex-wrap mt-10 mr-4 ml-4  max-md:mr-2.5 max-md:max-w-full">
                  <label for="email-input " class="sr-only ">Enter your email</label>
                  <input
                    type="email"
                    id="email-input"
                    placeholder="Enter your email"
                    class="grow px-5 py-4 leading-8 rounded-xl  bg-white bg-opacity-30 text-white w-fit"
                    required
                  />
                  <button type="submit" class="hover:text-red-800 px-9 py-5 text-right whitespace-nowrap bg-blue-700 rounded-2xl max-md:px-5">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow items-end max-md:mt-10">
                <img  src="././public/Ellipse 166 (1).png" alt="Decorative circle" class="object-contain mr-8 rounded-full aspect-square w-[60px] max-md:mr-2.5" />
                <img  src="././public/Ellipse 167 (1).png" alt="Decorative circle" class="object-contain self-start mt-16 rounded-full aspect-square w-[60px] max-md:mt-10" />
                <img  src="././public/Ellipse 168 (1).png" alt="Decorative circle" class="object-contain mt-11 rounded-full aspect-square w-[60px] max-md:mt-10" />
              </div>
            </div>
          </div>
        </div>
  
         {/* <!-- Testimonial section --> */}
  
  
        <img src="././public/Polygon 7.png" alt="Decorative element" class="object-contain self-end mt-32 w-20 rounded-2xl aspect-[0.99] max-md:mt-10" />
        <img src="https://cdn.builder.io/api/v1/image/./public/TEMP/5c14e8de7014d3f1fdd66e748c7e9a6a96f63234fbf479776adbb979a48340d2?placeholderIfAbsent=true&apiKey=07dd8458612f4d3da8c105508df146bd" alt="Featured  girl image" class="object-contain self-center mt-20 ml-2.5 w-full aspect-[1.82] max-w-[1334px] rounded-[68px] max-md:mt-10 max-md:max-w-full" />
      </section>
  
      <section class="flex flex-col px-20 pb-10 mt-0 w-full font-rob pt-[497px] max-md:px-5 max-md:pt-24 max-md:mt-0 max-md:max-w-full">
        <div class="flex flex-wrap gap-5 justify-between max-w-full text-center w-[979px]">
          <img  src="https://cdn.builder.io/api/v1/image/./public/TEMP/c3d501a0eadf00cc083971050b85c7ef0af9b2064413c5196fb26d85e274abac?placeholderIfAbsent=true&apiKey=07dd8458612f4d3da8c105508df146bd" alt="Decorative circle" class="object-contain shrink-0 self-start mt-1.5 max-w-full rounded-full aspect-[1.07] w-[103px]" />
          <div class="flex flex-col">
            <h2 class="self-center text-5xl leading-none text-blue-700 font-bold max-md:text-4xl">Testimonials</h2>
            <p class="mt-14 text-2xl leading-relaxed text-slate-600 font-semibold max-md:mt-10">What our student say about us</p>
          </div>
        </div>
        <img src="././public/th (1) 6.png" alt="testimony image" class="object-contain z-10 self-center mt-36 aspect-[0.84] rounded-[360px] w-[59px] max-md:mt-10" />
        <div class="self-center ml-5 w-full max-w-[1562px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">

            {/* <!-- testimonial 1 --> */}

            <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex z-10 flex-col grow mt-2.5 mr-0 text-base leading-8 text-slate-500 max-md:max-w-full">
                <img  src="././public/th (1) 6.png" alt="Quotation mark" class="object-contain z-10 self-center ml-5 aspect-[0.84] rounded-[360px] w-[59px]" />
                <div class="flex flex-col px-14 pt-10 pb-6 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
                  <p class="max-md:max-w-full">
                    Such an amazing trainer and easily understand the entire
                    <br />
                    syllabus, and the guidance will be super and good to the way of explaining.
                  </p>
                  <img src="././public/Group 1000014988.png" alt="Five star rating" class="object-contain mt-11 max-w-full aspect-[7.25] w-[138px] max-md:mt-10" />
                </div>
              </div>
            </article>

            {/* <!-- testimonial 2 --> */}

            <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col px-16 pt-14 pb-2 mr-0 text-base leading-8 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-slate-500 max-md:px-5 max-md:max-w-full">
                <p class="max-md:max-w-full">
                  Such an amazing trainer and easily understand the entire
                  <br />
                  syllabus, and the guidance will be super and good to the way of explaining.
                </p>
                <img  src="././public/Group 1000014988.png" alt="Five star rating" class="object-contain mt-9 max-w-full aspect-[7.25] w-[138px] max-md:ml-2.5" />
              </div>
            </article>

            {/* <!-- testimonial 3 --> */}

            <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow mt-3.5 text-base leading-8 text-slate-500 max-md:max-w-full">
                <img  src="././public/th (1) 6.png" alt="Quotation mark" class="object-contain z-10 self-center aspect-[0.84] rounded-[360px] w-[59px]" />
                <div class="flex flex-col px-12 pt-16 pb-3 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
                  <p class="max-md:max-w-full">
                    Such an amazing trainer and easily understand the entire syllabus, 
                    <br />and the guidance will be super and good to the way of explaining.
                  </p>
                  <img src="././public/Group 1000014988.png" alt="Five star rating" class="object-contain mt-8 ml-3 max-w-full aspect-[7.25] w-[138px] max-md:ml-2.5" />
                </div>
              </div>
            </article>
          </div>
        </div>
  
        {/* <!-- Arrows --> */}
  
        <div class="flex self-end mt-40 max-md:mt-10">
          <button aria-label="Previous testimonial" class="focus:outline-none">
            <img src="././public/Back Arrow.png" alt="arrow left" class="object-contain shrink-0 aspect-[1.19] w-[50px]" />
          </button>
          <button aria-label="Next testimonial" class="focus:outline-none cglowing-box-button">
            <img  src="././public/Back Arrow (1).png" alt="arrow right" class="object-contain shrink-0 aspect-[1.19] w-[50px]" />
          </button>
        </div>
      </section>
  
  
    {/* <!-- Footer section --> */}
  
  
      <footer class="flex flex-col pt-14 w-full font-rob shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500  max-md:max-w-full">
        <div class="flex flex-wrap gap-5 justify-between ml-10 w-full max-w-[1746px] max-md:max-w-full">
          <div class="flex flex-col items-start self-start mt-3">
            <h3 class="ml-12 text-2xl text-slate-900 max-md:ml-2.5 font-bold">Connect</h3>
            
            {/* <!-- company logo --> */}

            <img  src="././public/Askmeidentity 2.png" alt="Company logo" class="object-contain z-10 mt-12 max-w-full aspect-[2.07] w-[247px] mix-blend-color-burn max-md:mt-10" />
            <address class="self-stretch -mt-1.5 ml-3.5 text-base text-black max-md:ml-2.5">
              Sri Jagannath Nivas,8-1-164/345/A/1,
              <br />
              Pragati Colony, Mailardevpally, Nawab
              <br />
              Saheb Kunta, Hyd, 500005
            </address>
          </div>

          {/* <!-- lists --> */}

          <nav class="flex flex-wrap gap-10 mr-40 items-start  max-md:max-w-full">
            <div class="flex flex-col items-start mr-8 text-xl font-bold text-black">
              <h3 class="text-3xl text-slate-900">Classes</h3>
              <ul class="mt-9">
                <li><a href="#classroom">Classroom courses</a></li>
                <li class="mt-8"><a href="#virtual">Virtual classroom courses</a></li>
                <li class="mt-6"><a href="#elearning">E-learning courses</a></li>
                <li class="mt-5"><a href="#video">Video Courses</a></li>
                <li class="mt-6"><a href="#offline">Offline Courses</a></li>
              </ul>
            </div>
            <div class="flex flex-col whitespace-nowrap mr-8">
              <h3 class="text-3xl text-slate-900 font-bold">Community</h3>
              <ul class="flex flex-col items-start pr-6 pl-1.5 mt-5 text-xl font-bold text-black max-md:pr-5">
                <li><a href="#learners">Learners</a></li>
                <li class="mt-8"><a href="#partners">Partners</a></li>
                <li class="mt-6"><a href="#developers">Developers</a></li>
                <li class="mt-5"><a href="#transactions">Transactions</a></li>
                <li class="mt-7"><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div class="flex flex-col items-start mt-1 text-xl font-bold text-black">
              <h3 class="text-3xl text-slate-900">Quick links</h3>
              <ul>
                <li class="mt-6"><a href="#home">Home</a></li>
                <li class="mt-7"><a href="#professional-education">Professional Education</a></li>
                <li class="mt-6"><a href="#courses">Courses</a></li>
                <li class="mt-6"><a href="#admissions">Admissions</a></li>
                <li class="mt-7"><a href="#testimonial">Testimonial</a></li>
                <li class="mt-6"><a href="#programs">Programs</a></li>
              </ul>
            </div>
            <div class="flex flex-col items-start self-stretch font-bold text-xl text-gray-800 whitespace-nowrap">
              <h3 class="text-3xl text-slate-900">More</h3>
              <ul>
                <li class="mt-9"><a href="#press">Press</a></li>
                <li class="mt-8"><a href="#investors">Investors</a></li>
                <li class="mt-8"><a href="#terms">Terms</a></li>
                <li class="mt-8"><a href="#privacy">Privacy</a></li>
                <li class="mt-7"><a href="#help">Help</a></li>
                <li class="mt-7"><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
        {/* <!-- social medias --> */}

        <div class="flex z-10 flex-col items-center px-20 pt-8 pb-3.5 mt-12 mb-0 w-full bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 max-md:px-5 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
          <div class="flex flex-col max-w-full w-[459px] ">
            <div class="flex gap-8 items-start ">
              <a href="#instagram" class="flex flex-col flex-1 justify-center p-3.5 bg-white rounded-full border border-blue-700 border-solid" aria-label="Instagram">
                <img  src="././public/Instagram.png" alt="Instagram" class="object-contain w-10 aspect-[1.08]" />
              </a>
              <a href="#whatsapp" class="flex flex-col flex-1 justify-center p-3.5 bg-white rounded-full border border-blue-700 border-solid" aria-label="Whatsapp">
                <img  src="././public/WhatsApp.png" alt="Whatsapp" class="object-contain w-10 aspect-[1.08]" />
              </a>
              <a href="#twitter" class="flex flex-col flex-1 justify-center p-3.5 bg-white rounded-full border border-blue-700 border-solid" aria-label="Twitter">
                <img  src="././public/Twitter.png" alt="Twitter" class="object-contain w-10 aspect-[1.08]" />
              </a>
              <a href="#linkedin" class="flex flex-col flex-1 justify-center p-3.5 bg-white rounded-full border border-blue-700 border-solid" aria-label="LinkedIn">
                <img  src="././public/LinkedIn.png" alt="LinkedIn" class="object-contain w-10 aspect-[1.08]" />
              </a>
              <a href="#youtube" class="flex flex-col flex-1 justify-center p-3.5 bg-white rounded-full border border-blue-700 border-solid" aria-label="YouTube">
                <img src="././public/YouTube.png" alt="" class="object-contain aspect-[1.11] w-[41px]" />
              </a>
            </div>
            <p class="self-center mt-3.5 text-base text-white w-full bg-gradient-to-r from-indigo-700 via-blue-600 to-blue-500">
              Copyright @ 2023 askmeidentity. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    <section></section>
  </div>
<body></body>
        </div>
    );
};

export default Header;