import React, { createContext, useContext, useEffect, useState } from "react";
import gradedDatathon from "../assets/cardimage/Group 1000002771.png";
import butterflyIdentification from "../assets/cardimage/Group 1000002766.png";
import weatherRecognition from "../assets/cardimage/Group 1000002767.png";
import airlinePassengerSatisfaction from "../assets/cardimage/Group 1000002772.png";
import engineeringGraduatesEmploymentOutcomes from "../assets/cardimage/Group 1000002773.png";
import travelInsuranceClaimPrediction from "../assets/cardimage/Group 1000002466.png";

const Contextdata = createContext<any>(undefined);

export function Context({ children }: { children: React.ReactNode }) {
  type Hackathon = {
    id: number;
    hackathonName: string;
    hackathonStatus: string;
    color: string;
    imageURL: string;
    skill: string;
  };

  let [searchinput, setsearchinput] = useState<string>("");
  let [hackathonlist, sethackathonlist] = useState<Hackathon[]>([]);
  let [filterList, setFilterList] = useState<string[]>([]);
  let [fulllist, setFullList] = useState<Hackathon[]>([]);
  let [image, setImage] = useState<File | null>(null);
  let [challengeName, setChallengeName] = useState<string>("");
  let [startdate, setStartDate] = useState<string>("");
  let [starttime, setStartTime] = useState<string>("");
  let [enddate, setEndDate] = useState<string>("");
  let [endtime, setEndTime] = useState<string>("");
  let [previousdate, setpreviousdate] = useState<string>("");
  let [previoustime, setprevioustime] = useState<string>("");

  let [hackathonEnddate, sethackathonendDate] = useState<string>("");
  let [hackathonEndtime, sethackathonendTime] = useState<string>("");

  let [description, setDescription] = useState<string>("");
  let [level, setLevel] = useState<string>("Easy");
  let [filteropen, setFilterOpen] = useState<boolean>(false);

  let [intervalId, setIntervalId] = useState<null | NodeJS.Timer>(null);
  let [days, setdays] = useState<number>(0);
  let [hours, sethours] = useState<number>(0);
  let [minutes, setminutes] = useState<number>(0);

  const list = [
    {
      id: 1,
      hackathonName: "Data Science Bootcamp - Graded Datathon",
      hackathonStatus: "Upcoming",
      color: "#F2C94C40",
      imageURL: gradedDatathon,
      skill: "Easy",
      description:
        "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word 'Lepidoptera' means 'scaly wings' in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
      hackathonenddate: hackathonEnddate,
      hackathonendtime: hackathonEndtime,
    },
    {
      id: 2,
      hackathonName: "Data Sprint 72 - Butterfly Identification",
      hackathonStatus: "Upcoming",
      color: "#F2C94C40",
      imageURL: butterflyIdentification,
      skill: "Easy",
      description:
        "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word 'Lepidoptera' means 'scaly wings' in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
      hackathonenddate: hackathonEnddate,
      hackathonendtime: hackathonEndtime,
    },
    {
      id: 3,
      hackathonName: "Data Sprint 71 - Weather Recognition",
      hackathonStatus: "Active",
      color: "#44924C3D",
      imageURL: weatherRecognition,
      skill: "Medium",
      description:
        "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word 'Lepidoptera' means 'scaly wings' in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
      hackathonenddate: hackathonEnddate,
      hackathonendtime: hackathonEndtime,
    },
    {
      id: 4,
      hackathonName: "Data Sprint 70-Airline Passenger Satisfaction",
      hackathonStatus: "Active",
      color: "#44924C3D",
      imageURL: airlinePassengerSatisfaction,
      skill: "Hard",
      description:
        "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word 'Lepidoptera' means 'scaly wings' in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
      hackathonenddate: hackathonEnddate,
      hackathonendtime: hackathonEndtime,
    },
    {
      id: 5,
      hackathonName: "Engineering Graduates Employment Outcomes",
      hackathonStatus: "Past",
      color: "#FF3C002B",
      imageURL: engineeringGraduatesEmploymentOutcomes,
      skill: "Easy",
      description:
        "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word 'Lepidoptera' means 'scaly wings' in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
      hackathonenddate: hackathonEnddate,
      hackathonendtime: hackathonEndtime,
    },
    {
      id: 6,
      hackathonName: "Travel Insurance Claim Prediction",
      hackathonStatus: "Past",
      color: "#FF3C002B",
      imageURL: travelInsuranceClaimPrediction,
      skill: "Easy",
      description:
        "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word 'Lepidoptera' means 'scaly wings' in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
      hackathonenddate: hackathonEnddate,
      hackathonendtime: hackathonEndtime,
    },
  ];

  useEffect(() => {
    sethackathonlist(fulllist);
  }, [fulllist]);

  useEffect(() => {
    const currentDate = new Date();

    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    const day = nextDay.toISOString().split("T")[0];
    const time = nextDay.toTimeString().split(" ")[0];

    const prevDate = new Date(currentDate);
    prevDate.setDate(currentDate.getDate() - 1);
    const prevday = prevDate.toISOString().split("T")[0];
    const prevtime = prevDate.toTimeString().split(" ")[0];

    setFullList(list);
    sethackathonendDate(day);
    sethackathonendTime(time);
    setpreviousdate(prevday);
    setprevioustime(prevtime);
  }, []);

  useEffect(() => {
    if (hackathonEnddate && hackathonEndtime) {
      starttimer(hackathonEnddate, hackathonEndtime);
    }
  }, [hackathonEnddate, hackathonEndtime]);

  useEffect(() => {
    filterByStatus();
  }, [filterList]);

  const starttimer = (date, time) => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const dateTimeString = `${date}T${time}`;
    const selecteddate = new Date(dateTimeString).getTime();
    const countdown = setInterval(() => {
      const currentdate = new Date().getTime();
      const timedifference = selecteddate - currentdate;
      if (timedifference < 0) {
        clearInterval(countdown);
        setdays(0);
        sethours(0);
        setminutes(0);
        return;
      }
      const days = Math.floor(timedifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timedifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timedifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      setdays(days);
      sethours(hours);
      setminutes(minutes);
    }, 1000);

    setIntervalId(countdown);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
    }
  };

  const filterByStatus = () => {
    if (filterList.length > 0) {
      const filteredByStatus = hackathonlist.filter((item) =>
        filterList.includes(item.hackathonStatus)
      );
      const filteredBySkill = hackathonlist.filter((item) =>
        filterList.includes(item.skill)
      );

      const combinedFilters = [...filteredByStatus, ...filteredBySkill];
      const uniqueFilteredItems = combinedFilters.reduce(
        (accumulator: Hackathon[], currentItem: Hackathon) => {
          if (!accumulator.some((item) => item.id === currentItem.id)) {
            accumulator.push(currentItem);
          }
          return accumulator;
        },
        []
      );
      sethackathonlist(uniqueFilteredItems);
    } else {
      sethackathonlist([...fulllist]);
    }
  };

  return (
    <Contextdata.Provider
      value={{
        searchinput,
        setsearchinput,
        hackathonlist,
        sethackathonlist,
        image,
        setImage,
        challengeName,
        setChallengeName,
        startdate,
        setStartDate,
        starttime,
        setStartTime,
        enddate,
        setEndDate,
        endtime,
        setEndTime,
        setDescription,
        description,
        level,
        setLevel,
        filteropen,
        setFilterOpen,
        filterList,
        setFilterList,
        fulllist,
        setFullList,
        days,
        hours,
        minutes,
        previousdate,
        previoustime,
        handleImageChange,
        starttimer,
      }}
    >
      {children}
    </Contextdata.Provider>
  );
}

export function useContextdata() {
  return useContext(Contextdata);
}
