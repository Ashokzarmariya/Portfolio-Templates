import React from "react";
import Card from "./Card";
import "./Projects.css";
import UsedTech from "./UsedTech";
import { v4 as uuidv4 } from 'uuid';

const Projects = ({projectRef}) => {
  const projects = [
    {
      projectName:"purpell",
      imgUrl:
        "https://i.ytimg.com/vi/sSkEj4R0ZFw/maxresdefault.jpg",
      codeUrl: "https://github.com/codingwithgyan/Purplle",
      websiteUrl: "https://purplle-cw.vercel.app/",
      aboute: "purple is An online eCommerce website for beauty and wellness needs in this project we have add some feture like wishlist feture, promocode aaplication on the checkout page, Product display carousel ",
      tech: ["Javascript", "HTML 5", "CSS 3"],
    },
    {
      projectName:"Shopper Stop",
      imgUrl:
        "https://www.retail4growth.com/public/uploads/editor/2019-07-31/1564548758.jpg",
      codeUrl: "https://github.com/Ashokzarmariya/team-shoppersstop",
      websiteUrl: "https://team-shoppersstop.vercel.app/",
      aboute: "shopperstop is An eCommerce website for lifestyle products. we have add feture like product sorting, Product categorization based on colour, gender, price, brand, etc. Add to cart feature",
      tech: ["Javascript", "HTML 5", "CSS 3" , "MongoDb"],
    },
  ];

  return (
    <div className="container" >
      <div className="project">
        <h1 ref={projectRef} className="d-flex justify-content-center">Projects</h1>
      </div>
      <div className="my-3">
        <div className="my-0 d-flex justify-content-center flex-wrap">
          {projects.map((item) => {
            let stack = item.tech;

            return (
              <Card 
                key={uuidv4()}
                projectName={item.projectName}
                imageUrl={item.imgUrl}
                codeUrl={item.codeUrl}
                websiteUrl={item.websiteUrl}
                about={item.aboute}
                usedTech={stack.map((tech) => {
                  return <UsedTech key={uuidv4()} techStack={tech} />;
                })}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
