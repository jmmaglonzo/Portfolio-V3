import sideBar from "@/utils/sidebar";
const Contact = () => {
  return (
    <div className="mt-6 flex flex-col gap-6">
      {sideBar.map((s) => (
        <a key={s.title} className="flex gap-2" target="_blank" href={s.link}>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-slate-950">
            {s.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{s.title}</span>
            <p className="text-ellipsis">{s.value}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Contact;
