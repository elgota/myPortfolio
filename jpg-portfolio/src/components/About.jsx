import React from "react";
import backgroundImage from "../assets/nnnoise.svg";
import { JavaIcon } from "../assets/icons/JavaIcon";
import { SpringIcon } from "../assets/icons/SpringIcon";
import { ReactIcon } from "../assets/icons/ReactIcon";
import { NodeIcon } from "../assets/icons/NodeIcon";
import { JavaScriptIcon } from "../assets/icons/JavaScriptIcon";
import { ExpressIcon } from "../assets/icons/ExpressIcon";
import { HtmlIcon } from "../assets/icons/HtmlIcon";
import { CssIcon } from "../assets/icons/CssIcon";
import { TailwindIcon } from "../assets/icons/TailwindIcon";
import { BootstrapIcon } from "../assets/icons/BootstrapIcon";
import { MySQLIcon } from "../assets/icons/MySQLIcon";

function About() {
  return (
    <div
      className="bg-repeat h-screen opacity-80"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-center justify-center sm:w-256 mx-auto shadow-xl ">
        <div className="mb-4">
          <h1 className="font-ubuntu text-7xl font-light w-256 text-center">
            Sobre mi
          </h1>
        </div>

        <div className="w-full text-center mb-4">
          <p className="text-lg">
            Si llegaste hasta aquí quiero darte las gracias por tu tiempo!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-start w-full sm:w-256 w-full mx-auto">
          <div className="w-128 mx-6">
            <h1 className="text-4xl font-medium mb-2">Conoceme</h1>
            <p className="text-md text-justify">
              Me llamo Juan Pablo y soy de Mendoza-Argentina
            </p>
            <p className="text-md text-justify mb-5">
              Como Desarrollador Full Stack creo aplicaciones que brinden
              soluciones efectivas y creativas. Puedes mirar mis trabajos en la
              sección "Proyectos"
            </p>
            <p className="text-md text-justify mb-5">
              LLevo 2 años que estoy formándome como desarrollador y hoy busco
              mi primera experiencia en IT
            </p>
            <p className="text-md text-justify mb-5">
              Hice proyectos full-stack utilizando Java Springboot, Thymeleaf y
              MySQL durante mi cursado en Egg Education. También tuve mi
              experiencia trainee como back-end en Hunteando, junto a un equipo
              bajo metodologías Ágiles
            </p>
            <p className="text-md text-justify mb-5">
              Me encanta ayudar. Siento que es muy gratificante y me hace sentir
              muy bien! Si necesitas una mano no dudes en escribirme!
            </p>
            <p className="text-md text-justify mb-5">
              Hoy busco una oportunidad de trabajo para seguir creciendo como
              desarrolador, mejorando mis skills y aprendiendo nuevas
              tecnologías y frameworks. Te invito a que me contactes a través de
              mis RR SS o por el formulario de contacto!
            </p>
          </div>
          <div className="w-128 mx-6">
            <h1 className="text-4xl font-medium mb-2">Skills</h1>
            {/* <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex est maiores nulla id, consequatur esse vel animi reiciendis exercitationem! Repellendus inventore, quo odio impedit harum deserunt possimus natus quasi quis doloremque nisi id cumque enim cupiditate velit temporibus maxime fuga modi. Vitae ab, debitis neque commodi earum perferendis. Natus.</p> */}
            <div className="flex flex-wrap">
              <JavaIcon className="mx-5" />
              <SpringIcon />
              <ReactIcon />
              <NodeIcon />
              <ExpressIcon />
              <JavaScriptIcon />
              <HtmlIcon />
              <CssIcon />
              <TailwindIcon />
              <BootstrapIcon />
              <MySQLIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
