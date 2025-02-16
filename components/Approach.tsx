"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Approach = () => {
  return (
    <div  className="w-full py-20" id="approachs">
      <h1 className="heading">
        My <span className="text-purple">Approach</span>
      </h1>

      <div className="flex flex-row sm:flex-wrap gap-4 items-center justify-center">
      <CardContainer className="inter-var">
        <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Brainstorming & SetUp
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            We&apos;ll collaborate to map out your website&apos;s goals, target audience, 
            and key functionalities. We&apos;ll discuss things like site structure, 
            navigation, and content requirements.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/apr1.png"
              height="1000"
              width="1000"
              className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Development & Progress Update
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/apr2.jpg"
            height="1000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
    
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Development & Launch
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          This is where the magic happens! Based on the approved design, 
          I&apos;ll translate everything into functional code, building your website
          from the ground up.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/apr3.jpg"
            height="1000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>

      </div>
    </div>
  );
}

export default Approach;
