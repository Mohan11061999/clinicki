"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({
  id,
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
}) {
  const [newName, setNewName] = useState(name);
  const [newAge, setNewAge] = useState(age);
  const [newGender, setNewGender] = useState(gender);
  const [newIpNumber, setNewIpNumber] = useState(ipNumber);
  const [newPreOpExamVideo, setNewPreOpExamVideo] = useState(preOpExamVideo);
  const [newPreOpInvestigation, setNewPreOpInvestigation] =
    useState(preOpInvestigation);
  const [newDiagnosis, setNewDiagnosis] = useState(diagnosis);
  const [newProcedure, setNewProcedure] = useState(procedure);
  const [newIntraOpVideo, setNewIntraOpVideo] = useState(intraOpVideo);
  const [newPostOpFollowUp, setNewPostOpFollowUp] = useState(postOpFollowUp);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newName,
          newAge,
          newGender,
          newIpNumber,
          newPreOpExamVideo,
          newPreOpInvestigation,
          newDiagnosis,
          newProcedure,
          newIntraOpVideo,
          newPostOpFollowUp,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label>Patient Name</label>
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Patient Name"
      />
      <label>Age</label>
      <input
        onChange={(e) => setNewAge(e.target.value)}
        value={newAge}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Age"
      />
      <label>Gender</label>
      <select
        id="gender"
        value={newGender}
        onChange={(e) => setNewGender(e.target.value)}
        className="border border-slate-500 px-3 py-2"
      >
        <option value="">Select a gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label>Ip Number</label>
      <input
        onChange={(e) => setNewIpNumber(e.target.value)}
        value={newIpNumber}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Ip Number"
      />
      <label>Pre Op Examination Video</label>
      <input
        onChange={(e) => setNewPreOpExamVideo(e.target.value)}
        // value={state?.preOpExamVideo}
        className="border border-slate-500 px-8 py-2"
        type="file"
        placeholder="Pre Op Exam Video"
      />
      <label>Pre Op Investigation</label>
      <textarea
        onChange={(e) => setNewPreOpInvestigation(e.target.value)}
        value={newPreOpInvestigation}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Pre Op Investigation"
      />

      <label>Diagnosis</label>
      <input
        onChange={(e) => setNewDiagnosis(e.target.value)}
        value={newDiagnosis}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Diagnosis"
      />

      <label>Procedure</label>
      <input
        onChange={(e) => setNewProcedure(e.target.value)}
        value={newProcedure}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Procedure"
      />
      <label>Intra Op Video</label>
      <input
        onChange={(e) => setNewIntraOpVideo(e.target.value)}
        // value={newState?.intraOpVideo}
        className="border border-slate-500 px-8 py-2"
        type="file"
        placeholder="Intra Op Video"
      />

      <label>Post Op Follow Up</label>
      <textarea
        onChange={(e) => setNewPostOpFollowUp(e.target.value)}
        value={newPostOpFollowUp}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Post Op Follow Up"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6  flex justify-center rounded-md"
      >
        Update Patient
      </button>
    </form>
  );
}
