import { JsIcon, TypeScriptIcon, React, Nextjss, Figma} from "./javascripticon";

const iconsArray = [
  {
    icon: <JsIcon />,

  },
  {
    icon: <TypeScriptIcon />,
  
  },
  {
    icon: <React />,
 
  },
  {
    icon: <Nextjss />,
   
  },
  {
    icon: <Figma/>,
 
  },
  {
    icon: <Figma/>
  },
  {
    icon: <Figma/>
  },
  {
    icon: <Figma/>
  },
  {
    icon: <Figma/>
  },
  {
    icon: <Figma/>
  },
  {
    icon: <Figma/>
  },
  {
    icon: <Figma/>
  },
  {
    icon: <Figma/>
  },
  {
    icon: <Figma/>
  },
  {
    icon: <Figma/>
  },
  {
    icon: <Figma/>
  },
];

const MyComponent = () => {
  return (
    <div className="grid grid-cols-8 justify-center">
      {iconsArray.map(({ icon, title }, index) => (
        <div className="flex justify-center" key={index}>
          {icon}
          {title}
        </div>
      ))}
    </div>
  );
};

export const Body3 = () => {
  return (
    <div className="flex flex-col gap-7 justify-center bg-zinc-400">
      <div className="m-auto mt-20 h-7 w-36 bg-white rounded flex justify-between">
        <button className="m-auto">Skill</button>
      </div>
      <div className="m-auto">
        <h2>The skills, tools and technologies I am really good at:</h2>
      </div>
      <MyComponent />
    </div>
  );
};
