import { useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import "./portfolio.css";

import IMG1 from "../../assets/thumb.png";
import IMG1webp from "../../assets/thumb.webp";

import IMG2 from "../../assets/img4.png";
import IMG2webp from "../../assets/img4.webp";

import IMG3 from "../../assets/imgg2.png";
import IMG3webp from "../../assets/imgg2.webp";

import IMG4 from "../../assets/imgg3.png";
import IMG4webp from "../../assets/imgg3.webp";

import IMG5 from "../../assets/img5.png";
import IMG5webp from "../../assets/img5.webp";

import IMG6 from "../../assets/employee-turnover.png";
import IMG6webp from "../../assets/employee-turnover.webp";

const data = [
  {
    id: 6,
    image: IMG6,
    imageWebp: IMG6webp,
    title: "Employee-Turnover-Prediction",
    github: "https://github.com/Anish-Kumar12/Employee-Turnover-Prediction",
    tags: [
      "Jupyter Notebook",
      "Python",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
    ],
    desc: "An Employee Turnover Prediction project using HR analytics to identify turnover factors and predict risks with logistic regression, random forest, and SVM. It includes a retention plan categorizing employees by risk zones.",
  },
  {
    id: 5,
    image: IMG5,
    imageWebp: IMG5webp,
    title: "PixieCloud",
    github: "https://github.com/Anish-Kumar12/PixieCloud",
    demo: "https://pixie-cloud.vercel.app",
    tags: ["Nextjs", "Tailwind CSS", "DaisyUI", "Clerk", "Prisma", "NeonDB","Typescript"],
    desc: "A Next.js app for managing multimedia with user authentication, media uploads to Cloudinary, and a social media image creator for transforming images into various formats.",
  },
  {
    id: 4,
    image: IMG4,
    imageWebp: IMG4webp,
    title: "Portfolio Website",
    github: "https://github.com/Anish-Kumar12/Personal-Portfolio1",
    demo: "https://personal-portfolio1-seven.vercel.app",
    tags: ["React", "React Icons", "React Hooks"],
    desc: "This is my personal portfolio website. It is a single page application with dark mode and light mode support.",
  },
  {
    id: 3,
    image: IMG3,
    imageWebp: IMG3webp,
    title: "BlogVault",
    github: "https://github.com/Anish-Kumar12/BlogVault",
    demo: "https://blog-me-idgd.onrender.com",
    tags: [
      "React",
      "Nodejs",
      "Express",
      "MongoDB",
      "ImageKit",
      "Tailwind CSS",
      "Clerk",
    ],
    desc: "This is a blog application with a React frontend and Express backend. Users can create, read, update, and delete blog posts and comments, with features like user authentication, image uploads, and real-time data fetching.",
  },
  {
    id: 2,
    image: IMG2,
    imageWebp: IMG2webp,
    title: "Uber - Comprehensive Ride-Sharing Application",
    github: "https://github.com/Anish-Kumar12/QuickTrip",
    demo: "https://uber-c-lone.vercel.app",
    tags: [
      "React",
      "Context API",
      "Google Map api",
      "MongoDB",
      "socket.io",
      "Tailwind CSS",
      "Nodejs",
      "Express",
    ],
    desc: "A ride-sharing app connecting users with captains, featuring real-time tracking and Google Maps integration. Built with React, Node.js, and MongoDB for a seamless user experience.",
  },
  {
    id: 1,
    image: IMG1,
    imageWebp: IMG1webp,
    title: "QuickCart - Seamless Online Grocery Shopping Experience",
    github: "https://github.com/Anish-Kumar12/QuickCart",
    demo: "https://quick-cart-mu.vercel.app",
    tags: [
      "React",
      "Redux",
      "Nodejs",
      "Express",
      "MongoDB",
      "Stripe",
      "Cloudinary",
      "Tailwind CSS",
    ],
    desc: "QuickCart is a comprehensive e-commerce platform that allows users to seamlessly shop online, manage their orders, and track deliveries. It also provides businesses with tools to manage products, categories, and customer interactions efficiently.",
  },
];

const Portfolio = () => {
  const [count, setCount] = useState(6);
  return (
    <section id="portfolio">
      <h1 className="small-title">My Recent Work</h1>
      <h2 className="medium-title">Portfolio</h2>

      <div className="container portfolio__container">
        {data
          .slice(0)
          .reverse()
          .slice(0, count)
          .map(({ id, image, imageWebp, title, github, demo, tags, desc }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <picture>
                    <source srcSet={imageWebp} type="image/webp" />
                    <img
                      src={image}
                      type="image/jpg"
                      width="600"
                      height="420"
                      alt={title}
                    />
                  </picture>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__tag">
                  {tags.map((tag, index) => {
                    return (
                      <span key={index} className="portfolio__tag-pill">
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <p className="portfolio__desc">{desc}</p>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn btn-variant"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  {demo && (
                    <a
                      href={demo}
                      className="btn btn-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            );
          })}
      </div>
      <div className="btn-row">
      <a
          href="https://github.com/Anish-Kumar12"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark-variant"
        >
          See More <BsArrowDownCircle className="moreless" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
