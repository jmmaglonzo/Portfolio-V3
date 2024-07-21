import sideBar from "@/utils/sidebar";
const SideBarInfo = () => {
  return (
    <ul className="mt-6 flex items-center justify-center gap-6 xl:flex-col xl:items-start">
      {sideBar.map((s) => (
        <li
          key={s.title}
          className={`${s.title === "Location" && "hidden xl:block"}`}
        >
          <a
            className="flex flex-col items-center gap-2 xl:flex-row xl:items-start"
            target="_blank"
            href={s.link}
          >
            <div className="inline-flex size-10 items-center justify-center rounded-md bg-card lg:size-12">
              {s.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium">{s.title}</span>
              <p className="hidden text-ellipsis xl:block">{s.value}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SideBarInfo;
