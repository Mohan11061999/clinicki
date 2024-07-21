"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [ipNumber, setIpNumber] = useState("");
  const [preOpExamVideo, setPreOpExamVideo] = useState("");
  const [preOpInvestigation, setPreOpInvestigation] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [procedure, setProcedure] = useState("");
  const [intraOpVideo, setIntraOpVideo] = useState("");
  const [postOpFollowUp, setPostOpFollowUp] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !age ||
      !gender ||
      !ipNumber ||
      !preOpExamVideo ||
      !preOpInvestigation ||
      !diagnosis ||
      !procedure ||
      !intraOpVideo ||
      !postOpFollowUp
    ) {
      alert("All fields are required for save.");
      return;
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          gender,
          ipNumber,
          preOpExamVideo,
          preOpInvestigation,
          diagnosis,
          procedure,
          intraOpVideo,
          postOpFollowUp,
        }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label>Patient Name</label>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Patient Name"
      />
      <label>Age</label>
      <input
        onChange={(e) => setAge(e.target.value)}
        value={age}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Age"
      />
      <label>Gender</label>
      <select
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border border-slate-500 px-3 py-2"
      >
        <option value="">Select a gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label>Ip Number</label>
      <input
        onChange={(e) => setIpNumber(e.target.value)}
        value={ipNumber}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Ip Number"
      />
      <label>Pre Op Examination Video</label>
      <input
        onChange={(e) => setPreOpExamVideo(e.target.value)}
        // value={preOpExamVideo}
        className="border border-slate-500 px-8 py-2"
        type="file"
        placeholder="Pre Op Exam Video"
      />
      <label>Pre Op Investigation</label>
      <textarea
        onChange={(e) => setPreOpInvestigation(e.target.value)}
        value={preOpInvestigation}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Pre Op Investigation"
      />
      <label>Diagnosis</label>
      <input
        onChange={(e) => setDiagnosis(e.target.value)}
        value={diagnosis}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Diagnosis"
      />
      <label>Procedure</label>
      <input
        onChange={(e) => setProcedure(e.target.value)}
        value={procedure}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Procedure"
      />
      <label>Intra Op Video</label>
      <input
        onChange={(e) => setIntraOpVideo(e.target.value)}
        // value={intraOpVideo}
        className="border border-slate-500 px-8 py-2"
        type="file"
        placeholder="Intra Op Video"
      />
      <label>Post Op Follow Up</label>
      <textarea
        onChange={(e) => setPostOpFollowUp(e.target.value)}
        value={postOpFollowUp}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Post Op Follow Up"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6  flex justify-center rounded-md"
      >
        Add Patient
      </button>
    </form>
  );
}
