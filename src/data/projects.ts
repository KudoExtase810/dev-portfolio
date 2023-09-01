import froggerShot from "../../public/images/frogger-sc.png";
import ovenglowShot from "../../public/images/ovenglow-sc.png";
import metamadShot from "../../public/images/metamadness-sc.png";
import sonelgazShot from "../../public/images/sonelgaz-sc.png";
import afrihaShot from "../../public/images/afriha-sc.png";

const projects = [
    {
        name: "Bug Tracker",
        tools: ["React", "TypeScript", "Express.js", "Mongoose", "Netlify"],
        link: "https://frogger-tracker.netlify.app",
        role: "Personal project",
        description:
            "A project management app that's intended for use as an internal tool within an organization. Users can create projects, assign members, and submit tickets to efficiently track and resolve bugs. Admins have additional privileges to manage other users within the app.",
        image: froggerShot,
    },

    {
        name: "Meta Madness",
        tools: ["React", "Next.js", "Tailwind", "Vercel", "FramerMotion"],
        link: "https://metamad.vercel.app",
        role: "Personal project",
        description:
            "A cool looking and well designed landing page that relies on Framer Motion for attractive animations.",
        image: metamadShot,
    },
    {
        name: "Sonelgaz App",
        tools: [
            "React",
            "TypeScript",
            "DaisyUI",
            "Express.js",
            "Mongoose",
            "Netlify",
        ],
        link: "https://sonelgaz.netlify.app",
        role: "Company project",
        description:
            'A secure role-based MERN stack app made for the company "Sonelgaz" to help manage different requests and forms and keep track of them.',
        image: sonelgazShot,
    },
    {
        name: "Afriha Shop",
        tools: [
            "React",
            "TypeScript",
            "Express.js",
            "Mongoose",
            "Bootstrap",
            "SCSS",
        ],
        link: "https://afriha.shop",
        role: "Work project",
        description:
            "E-commerce website for selling different types of subscriptions with all the functionalities that an online store might need. The admins can keep track of everything and change what's needed dynamically.",
        image: afrihaShot,
    },
    {
        name: "Ovenglow",
        tools: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind",
            "Mongoose",
            "Vercel",
            "Cloudinary",
            "Mapbox",
        ],
        link: "https://ovenglow.vercel.app/login",
        role: "Personal project",
        description:
            "An intuitive website designed for a baker to showcase and sell their products while keeping track of orders and managing them. This site features ecommerce, image upload using cloudinary, localization using the Mapbox API, and much more.",
        image: ovenglowShot,
    },
];
export default projects;
