"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const date = "15";
const startTime = 9;
const endTime = 12;

const CourseDetails = [
  {
    id: 1,
    courseName: "Sustainable Home Management",
    Istructor: "Dr.Arya Sharma",
    Duration: 4,
    skilLevel: "beginer",
  },
];
const credicard = "Credit card";
const fee = 150;

export default function Enrollment() {
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const label = e.target.getAttribute("data-label");
    setSelectedLabel(label || "");
  };
  const router = useRouter();
  const Nextpage = () => {
    router.push("/enrollmentCompletion");
  };

  return (
    <>
      <main className="w-full h-full flex flex-col items-center py-[20px]">
        <div className="coursepage md:max-w-[75%] md:w-[960px] w-full">
          <div className="heading flex flex-col">
            <h1 className="text-2xl md:text-[32px] p-[16px] font-bold text-[#088738]">
              Enroll in Course
            </h1>
            <h2 className="text-black text-[18px] font-[600] w-full  px-[16px] pt-[16px] pb-[8px] ">
              Course Details
            </h2>
          </div>
          <div className="details w-full flex flex-col p-[16px] gap-[24px]">
            <div className="w-[97%] flex gap-[24px]  h-[71px] py-[20px] border-t-solid border-t border-t-[1px] border-t-[#E5E8EB] ">
              <div className="flex gap-[100px] md:gap-[159px]">
                <p className="text-[#4F7396] text-[14px] font-[400] leading-[21px]">
                  Course Name
                </p>
                <div>
                  {CourseDetails.map(
                    ({ courseName, id, Istructor, Duration, skilLevel }) => (
                      <div
                        className="font-[400] text-[14px] text-[#0D141C] leading-[21px]"
                        key={id}
                      >
                        {courseName}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="w-[97%] flex gap-[24px]  h-[71px] py-[20px] border-t-solid border-t border-t-[1px] border-t-[#E5E8EB] ">
              <div className="flex gap-[100px] md:gap-[183px]">
                <p className="text-[#4F7396] text-[14px] font-[400] leading-[21px]">
                  Instructor
                </p>
                <div>
                  {CourseDetails.map(
                    ({ courseName, id, Istructor, Duration, skilLevel }) => (
                      <div
                        className="font-[400] text-[14px] text-[#0D141C] leading-[21px]"
                        key={id}
                      >
                        {Istructor}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="w-[97%] flex gap-[24px]  h-[71px] py-[20px] border-t-solid border-t border-t-[1px] border-t-[#E5E8EB] ">
              <div className="flex gap-[100px] md:gap-[191px]">
                <p className="text-[#4F7396] text-[14px] font-[400] leading-[21px]">
                  Duration
                </p>
                <div>
                  {CourseDetails.map(
                    ({ courseName, id, Istructor, Duration, skilLevel }) => (
                      <div
                        className="font-[400] text-[14px] text-[#0D141C] leading-[21px]"
                        key={id}
                      >
                        {Duration} weeks
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="w-[97%] flex gap-[24px]  h-[71px] py-[20px] border-t-solid border-t border-t-[1px] border-t-[#E5E8EB] ">
              <div className="flex gap-[100px] md:gap-[179px]">
                <p className="text-[#4F7396] text-[14px] font-[400] leading-[21px]">
                  Skill Level
                </p>
                <div>
                  {CourseDetails.map(
                    ({ courseName, id, Istructor, Duration, skilLevel }) => (
                      <div
                        className="font-[400] text-[14px] text-[#0D141C] leading-[21px]"
                        key={id}
                      >
                        {skilLevel}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="schedule  selection">
            <h2 className="text-[#07743D] text-[18px]  font-[600] w-full  px-[16px] pt-[16px] pb-[8px] ">
              Schedule Selection
            </h2>

            <div>
              <form className="radios flex flex-col gap-[12px] p-[16px]">
                <label className="scheduleradios flex gap-[16px] items-center border-[1px] border-[#D1DBE8] rounded-[12px] p-[15px]">
                  <input
                    className="w-[20px] h-[20px] accent-[#07743D]"
                    type="radio"
                    name="options"
                    value="option1"
                    onChange={handleChange}
                    data-label={` Morning Session (${startTime} AM - ${endTime} PM)`}
                  />
                  <div>
                    <p className=" session text-[14px] font-[500] leading-[21px] ">
                      Morning Session ({startTime} AM - {endTime} PM)
                    </p>
                    <p className="font-[400] text-[14px] leading-[21px] text-[#07743D]">
                      starts July {date}th
                    </p>
                  </div>
                </label>
                <br />
                <label className="scheduleradios flex gap-[16px] items-center border-[1px] border-[#D1DBE8] rounded-[12px] p-[15px]">
                  <input
                    className="w-[20px] h-[20px] accent-[#07743D]"
                    type="radio"
                    name="options"
                    value="option2"
                    onChange={handleChange}
                    data-label={` Noon Session (${startTime} pm - ${endTime} PM)`}
                  />
                  <div>
                    <p className="text-[14px] font-[500] leading-[21px] ">
                      Noon Session ({startTime} AM - {endTime} PM)
                    </p>
                    <p className="font-[400] text-[14px] leading-[21px] text-[#07743D]">
                      starts July {date}th
                    </p>
                  </div>
                </label>
                <br />
                <label className="scheduleradios flex gap-[16px] items-center border-[1px] border-[#D1DBE8] rounded-[12px] p-[15px]">
                  <input
                    className="w-[20px] h-[20px] accent-[#07743D]"
                    type="radio"
                    name="options"
                    value="option2"
                    onChange={handleChange}
                    data-label={` Evening Session (${startTime} pm - ${endTime} PM)`}
                  />
                  <div>
                    <p className="text-[14px] font-[500] leading-[21px] ">
                      Morning Session ({startTime} AM - {endTime} PM)
                    </p>
                    <p className="font-[400] text-[14px] leading-[21px] text-[#07743D]">
                      starts July {date}th
                    </p>
                  </div>
                </label>
              </form>
            </div>
          </div>

          <div className="text-[#07743D] text-[18px]  font-[600] w-full  px-[16px] pt-[16px] pb-[8px] ">
            Review and Confirmation
          </div>
          <div className="details w-full flex flex-col p-[16px] gap-[24px]">
            <div className="w-[97%] flex gap-[24px]  h-[71px] py-[20px] border-t-solid border-t border-t-[1px] border-t-[#E5E8EB] ">
              <div className="flex gap-[123px]">
                <p className="text-[#4F7396] text-[14px] font-[400] leading-[21px]">
                  Selected Schedule
                </p>
                <div>
                  <div
                    id="schedule"
                    className="shedule font-[400] text-[14px] text-[#0D141C] leading-[21px]"
                  >
                    <p className=" session text-[14px] font-[500] leading-[21px] ">
                      {selectedLabel || "None"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[97%] flex gap-[24px]  h-[71px] py-[20px] border-t-solid border-t border-t-[1px] border-t-[#E5E8EB] ">
              <div className="flex gap-[172px]">
                <p className="text-[#4F7396] text-[14px] font-[400] leading-[21px]">
                  Course Fee
                </p>
                <div>
                  <div className="font-[400] text-[14px] text-[#0D141C] leading-[21px]">
                    {fee}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[97%] flex gap-[24px]  h-[71px] py-[20px] border-t-solid border-t border-t-[1px] border-t-[#E5E8EB] ">
              <div className="flex gap-[135px]">
                <p className="text-[#4F7396] text-[14px] font-[400] leading-[21px]">
                  Payment Method
                </p>
                <div>
                  <div className="font-[400] text-[14px] text-[#0D141C] leading-[21px]">
                    {credicard}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="confimation flex gap-[12px] px-[16px] py-[12px]">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              accept="true"
              className="accent-[#07743D] p-[1px] w-[20px] h-[20px] text-green"
            />
            <label htmlFor="agree font-[400] leading-[24px] text-[16px]">
              <div>
                I agree to the terms and conditions of the course enrollment.
              </div>
            </label>
          </div>
          <div className="confirmEnrollment px-[16px] py-[12px] w-full">
            <button
              onClick={Nextpage}
              className=" cursor-pointer bg-[#07743D] w-full rounded-[24px] px-[20px] min-w-[84px] max-w-[480px] md:w-[480px] h-[48px] text-[16px] font-[600] leading-[24px] text-[#F7FAFC] "
            >
              Confirm Enrollment
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
