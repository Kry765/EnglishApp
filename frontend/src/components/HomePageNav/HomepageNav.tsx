import navElement from "../../assets/navElement.json";
import CompanyLogo from "../../ui/CompanyLogo";

type navElementProps = {
  link: string;
  label: string;
};

export default function HomepageNav() {
  return (
    <div className="flex justify-between p-4 shadow-[0_0px_5px_rgba(0,0,0,_0.5)]">
      <CompanyLogo colorGreen="text-lime-500" className="font-bold text-xl" />
      <ul className="flex mx-8 gap-x-12  text-xl">
        {navElement.map((item: navElementProps, index: number) => {
          const lastElement = index === navElement.length - 1;
          const secondLastElement = index === navElement.length - 1;
          return (
            <li key={index}>
              {!lastElement ? (
                <a className="hover:border-b-1" href={item.link}>
                  {item.label}
                </a>
              ) : (
                <a className="bg-lime-300" href={item.link}>
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
