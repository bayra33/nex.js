// import { Card } from "@/component/"

export const Card = ({title, img}) => {
  return (
    <div className={title}>
      <h1>{title}</h1>
      <img src={img} width="100px" height="100px"/>
    </div>
  );
};
