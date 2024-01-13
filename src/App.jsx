import { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import {
  LuBackpack,
  LuCalendar,
  LuContainer,
  LuMessageCircle,
} from "react-icons/lu";

import "./App.css";
import ModalCompo from "./components/ModalCompo";

const App = ({ heading }) => {
  const [modal, setModal] = useState(null);
  return (
    <div className="overflow-auto w-[900px] mx-auto ">
      <div className="grid grid-cols-6 w-[1800px] bg-slate-200 mt-10 mb-4 mx-4">
        {heading.map((h, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between items-center ms-2 mr-6 p-1">
                <p className="font-semibold">{h.name}</p>
                <p className="bg-slate-100 px-2 rounded-md">{h.count}</p>
              </div>
              <div className="overflow-auto h-[300px]">
                {h.children.map((c, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white/60 mx-1 p-1 mb-1 rounded-md"
                    >
                      <div className="flex justify-between items-center">
                        <p className="flex flex-row gap-1 text-xs justify-center items-center">
                          <span className="h-6 w-6 flex items-center justify-center ">
                            <img
                              src={c.client_img}
                              height={100}
                              width={100}
                              className="object-cover rounded-full"
                              alt="not"
                            />
                          </span>
                          <span>{c.client_name}</span>
                        </p>
                        <p className="flex flex-row gap-1 text-xs justify-center items-center">
                          <span className="h-6 w-6 flex items-center justify-center ">
                            <img
                              src={c.client_img2}
                              height={100}
                              width={100}
                              className="object-cover rounded-full"
                              alt="not"
                            />
                          </span>
                          <span>{c.client_name2}</span>
                        </p>
                      </div>
                      <div className="flex items-center justify-between p-2">
                        <p className="flex items-center flex-row">
                          <span>
                            <LuContainer size={12} />
                          </span>
                          <span className="line-clamp-1 text-xs">
                            {c.paragrap}
                          </span>
                        </p>
                        <p className="flex items-center flex-row">
                          <span>
                            <LuBackpack size={12} />
                          </span>
                          <span className="text-xs">1/2</span>
                        </p>
                      </div>
                      <div className="grid grid-cols-7 px-2 text-xs items-center justify-center gap-3">
                        <div className="h-6 w-6 flex items-center justify-center text-xs">
                          <img
                            src={c.viewer_img}
                            height={100}
                            width={100}
                            className="object-cover rounded-full"
                            alt="not"
                          />
                        </div>
                        <div className="h-6 w-6 flex items-center justify-center">
                          <img
                            src={c.viewer_img2}
                            height={100}
                            width={100}
                            className="object-cover rounded-full"
                            alt="not"
                          />
                        </div>
                        <p className="bg-slate-300 text-center rounded-full">
                          {c.count_like}+
                        </p>
                        <p className="flex justify-centern items-center">
                          <span>
                            <LuMessageCircle />
                          </span>
                          <span>{c.count_comment}+</span>
                        </p>
                        <p className="flex justify-centern items-center">
                          <button
                            onClick={() => {
                              setModal(index);
                            }}
                          >
                            <GrAttachment size={10} />
                          </button>
                          <span>{c.count_attachment}+</span>
                        </p>
                        <p className="flex justify-centern items-center gap-0.5">
                          <span>
                            <LuCalendar size={10} />
                          </span>
                          <span>{c.date}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {modal !== null && (
        <ModalCompo data={modal} setModal={() => setModal(null)} />
      )}
    </div>
  );
};

export default App;
