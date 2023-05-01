import React, { useState } from "react";
import dayjs from "dayjs";
import { ReactComponent as DrowdownIcon } from "../../asset/icon/Angle-down.svg";
import { ReactComponent as RightIcon } from "../../asset/icon/Angle-right.svg";
const Calendar = (props) => {
  const arr = Array(35).fill(null);
  let [month, setMonth] = useState(dayjs().month() + 1);
  const [year, setYear] = useState(dayjs().year());
  const weekDay = dayjs(`${year}-${month}-1`).day();
  const date = dayjs(`${year}-${month}`).daysInMonth();
  const week = ["M", "T", "W", "T", "F", "S", "S"];
  const [thisDay, setThisDay] = useState(dayjs().format("D-MM-YYYY"));
  const [valueDay, setValueDay] = useState(dayjs().format("DD MMM YYYY"));
  const [active, setActive] = useState(null);
  const [show, setShow] = useState(false);
  const handleGetDate = (e, index) => {
    setActive(index);
    setThisDay(null);
    const value = e.target.textContent;
    index < weekDay - 1 ? month-- : index >= date + weekDay - 1 && month++;
    let dateGet = dayjs(`${year}-${month}-${value}`).format("DD MMM YYYY");
    setValueDay(dateGet);
  };
  const handleOff = () => {
    props.setOff(false);
  };
  const handleShow = () => {
    setShow(!show);
  };
  const handleSaveValue = () => {
    props.setValue(valueDay);
    props.setOff(false);
  };
  return (
    <div className="w-[250px] shadow-lg flex flex-col jus-center rounded-lg text-grayScale absolute z-10 bg-white">
      <div className="relative flex justify-between gap-x-3 font-semibold text-grayScale border-b px-3 py-2 border-grayScale">
        <div>
          <span>{valueDay}</span>
        </div>
        <div className="flex gap-x-3 items-center">
          <span>{dayjs(`${year}-${month}`).format("MMM YYYY")}</span>
          <div className="cursor-pointer" onClick={handleShow}>
            <DrowdownIcon></DrowdownIcon>
          </div>
        </div>
        <ListMonthYear
          year={year}
          show={show}
          setShow={setShow}
          setMonth={setMonth}
          setYear={setYear}
          setActive={setActive}
        ></ListMonthYear>
      </div>
      <div className="px-4 py-3 font-semibold text-center grid-">
        <div className="flex items-center justify-center">
          {week &&
            week.map((items, index) => (
              <span
                key={index}
                className="w-[calc(100%/7)] h-[31.14px] flex items-center justify-center"
              >
                {items}
              </span>
            ))}
        </div>
        <div>
          <ul className="flex items-center  flex-wrap cursor-pointer ">
            {arr.map((items, index) => {
              if (index <= 35)
                return (
                  <li
                    key={index}
                    onClick={(e) => handleGetDate(e, index)}
                    className={`${
                      active === index ||
                      thisDay ===
                        `${index - (weekDay - 1) + 1}-${
                          month <= 9 ? "0" : ""
                        }${month}-${year}`
                        ? "bg-bluePrimary text-white"
                        : ""
                    } ${
                      (weekDay > 1 && index < weekDay - 1) ||
                      index >= weekDay - 1 + date
                        ? "text-grayScale-60"
                        : "text-grayScale"
                    } w-[calc(100%/7)] h-[31.14px] flex items-center justify-center rounded-full transition-all ease-linear hover:bg-grayScale hover:text-white`}
                  >
                    {weekDay > 1 && index < weekDay - 1
                      ? index +
                        1 +
                        dayjs(`${year}-${month}`)
                          .subtract(1, "month")
                          .daysInMonth() -
                        (weekDay - 1)
                      : index - (weekDay - 1) < date &&
                        index - (weekDay - 1) + 1}
                    {index >= weekDay - 1 + date &&
                      index - (date + weekDay - 2)}
                  </li>
                );
              else return null;
            })}
          </ul>
        </div>
      </div>
      <div className="w-full flex gap-x-3 justify-end px-3 py-2">
        <button
          className="px-4 py-2 font-semibold rounded-lg opacity-70"
          onClick={handleOff}
        >
          Cancel
        </button>
        <button
          onClick={handleSaveValue}
          className="px-4 py-2 font-semibold bg-bluePrimary rounded-lg text-white "
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Calendar;
export const ListMonthYear = ({
  year,
  show,
  setShow,
  setMonth,
  setYear,
  setActive,
}) => {
  const [nextYear, setNextYear] = useState(year);
  const handlePrevYear = () => {
    setNextYear(nextYear - 1);
  };
  const handleNextYear = () => {
    setNextYear(nextYear + 1);
  };
  const handleSetDate = (index) => {
    setMonth(index);
    setYear(nextYear);
    setActive(null);
    setShow(false);
  };
  const arr = Array(12).fill(null);
  return (
    <div
      className={` ${
        show ? "opacity-100 visible" : " opacity-0 invisible"
      } absolute right-0 top-[100%] h-[200px] bg-white shadow-lg rounded-lg text-grayScale z-10 flex flex-col justify-center`}
    >
      <div className=" bg-white  flex items-center justify-between cursor-pointer p-3 ">
        <div className="rotate-180" onClick={handlePrevYear}>
          <RightIcon></RightIcon>
        </div>
        <span>{nextYear}</span>
        <div onClick={handleNextYear}>
          <RightIcon></RightIcon>
        </div>
      </div>
      <div className="overflow-y-auto w-full ">
        <ul className="flex justifiy-center gap-y-2 flex-col ">
          {arr &&
            arr.map((items, index) => (
              <li
                key={index}
                onClick={() => handleSetDate(index + 1)}
                className="cursor-pointer px-3 py-2 hover:bg-bluePrimary/20 hover:text-bluePrimary"
              >
                {`${dayjs(`${nextYear}-${index + 1}`).format("MMMM YYYY")}`}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
